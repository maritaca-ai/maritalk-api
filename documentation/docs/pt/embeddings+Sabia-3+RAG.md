---
id: embeddings+Sabia-3+RAG
title: Embeddings+Sabia-3+RAG
---

# Embeddings + Sabia-3 + RAG

## Embeddings

### O Que São?

Embeddings são representações numéricas de textos, utilizadas para capturar o significado semântico e as relações entre palavras, frases ou documentos em um formato vetorial. Esses vetores permitem medir a similaridade semântica entre textos e realizar tarefas de recuperação de informações e análise de similaridade semântica.

### Como obter embeddings com a Maritaca AI
A Maritaca AI não disponibiliza atualmente um modelo próprio de embeddings. Por isso, recomenda a utilização da [DeepInfra](https://deepinfra.com/docs) como provedor de embeddings. A DeepInfra oferece o modelo [Multilingual-E5-large](https://arxiv.org/pdf/2402.05672), especializado em embeddings para múltiplos idiomas. Este guia será dedicado ao uso da DeepInfra, mas incentivamos você a avaliar diferentes fornecedores de embeddings para encontrar a solução mais adequada ao seu caso de uso específico.

### Começo rápido com DeepInfra
O DeepInfra oferece um modelo de embeddings multilíngue chamado **`intfloat/multilingual-e5-large`**. As seções a seguir demonstram como usar esse modelo para obter embeddings via Python.

#### 1. **Registre-se e obtenha sua chave de API**
Você precisa obter uma chave de API do DeepInfra para autenticar suas requisições.

#### 2. **Use Python para enviar requisições de embeddings**
Você pode usar a biblioteca `requests` no Python para interagir com a API do DeepInfra.

```bash
pip install requests
```

##### Exemplo de Código para Enviar uma Requisição de API do DeepInfra
```python
import requests
import json

API_KEY = "" #Substitua com sua chave de api do DeepInfra
URL = "https://api.deepinfra.com/v1/inference/intfloat/multilingual-e5-large"

payload = {
    "inputs": ["olá mundo", "hello world"]
}
headers = {
    "Authorization": f"bearer {API_KEY}",
}
response = requests.post(URL, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print("Embeddings:")
    for idx, embedding in enumerate(data["embeddings"]):
        print(f"Entrada {idx + 1}: {embedding}")
    print("Tokens de Entrada:", data["input_tokens"])
else:
    print("Erro:", response.status_code, response.text)
```

---

##### Saída de Exemplo
Ao executar o código, a saída gerada será semelhante a esta:
```plaintext
Embeddings:
Entrada 1: [float, ... , float]
Entrada 2: [float, ... , float]
Tokens de Entrada: 10
```

---

#### Campos de Entrada

| Parâmetro       | Tipo       | Descrição                                                                  | Valor Padrão |
|------------------|------------|----------------------------------------------------------------------------|---------------|
| **model**       | `string`    | Nome do modelo utilizado.                                  | `-`          |
| **input**    | `array ou string`  | Sequências para gerar embeddings.                                   | `-`       |
| **encoding_format**        | `string`   | Formato usado para a codificação.                               | `float`       |

Exemplo:
```json
{
  "model": "intfloat/multilingual-e5-large",
  "inputs": ["Olá mundo"],
}
```

---

#### Campos de Saída

| Parâmetro               | Tipo            | Descrição                                                                                   |
|-------------------------|---------------|-----------------------------------------------------------------------------------------------|
| **embeddings**          | `array`       | Os embeddings calculados para cada sequência de entrada.                                      |
| **input_tokens**        | `integer`     | O número de tokens de entrada na requisição.                                                  |
| **request_id**          | `string`      | O ID da requisição.                                                                           |
| **inference_status**    | `object`      | Objeto contendo o status da requisição de inferência.                                         |


#### Descrição do modelo

|Modelo | Contexto | Dimensão do Embedding | Descrição |
|-------|----------|-----------------------|-----------|
|intfloat/multilingual-e5-large	| 512 |1024	|Modelo de embeddings multilingue, ajustado para recuperação de texto, similaridade semântica e clustering.|

#### Preço
Visite a página de precificação do modelo da DeepInfra para obter mais detalhes [(https://deepinfra.com/intfloat/multilingual-e5-large)](https://deepinfra.com/intfloat/multilingual-e5-large).

## RAG com o Sabiá-3
RAG (Retrieval-Augmented Generation) é uma abordagem que combina busca de informações em uma base de dados com a capacidade de geração de texto de um modelo de linguagem (LLM). Abaixo está o passo a passo detalhado para criar um sistema RAG usando o modelo Sabiá-3, neste exemplo utilizaremos:
* Uma fonte de dados (um PDF de um edital da Unicamp).
* Uma ferramenta para extrair e dividir o texto do PDF em pedaços (chunks).
* Um sistema de recuperação (retriever) baseado no modelo "intfloat/multilingual-e5-large" da DeepInfra, que busca os trechos mais relevantes para uma determinada pergunta.
* O modelo Sabiá-3 para gerar a resposta final.
* O prompt baseado no formato de conversa, fornecendo contexto e a pergunta do usuário.


## Passo 1: Instalar as Dependências
Primeiro, instale as bibliotecas necessárias para o projeto.
```bash
!pip install unstructured rank_bm25 pdf2image pdfminer-six pikepdf pypdf unstructured_inference "pillow<10.1.0" pillow_heif -q
!pip install langchain langchain-community langchain_openai -q
!pip install deepinfra faiss-cpu
```

## Passo 2: Baixe o PDF
No exemplo, utilizamos um edital da Unicamp. Para baixá-lo localmente:
```bash
!wget https://www.comvest.unicamp.br/wp-content/uploads/2023/10/31-2023-Dispoe-sobre-o-Vestibular-Unicamp-2024_com-retificacao.pdf -O edital_unicamp_2024.pdf
```
## Passo 3: Carregar e processar o documento
Utilizaremos o PyPDFLoader do LangChain para extrair o texto, e depois faremos o split do texto em chunks menores usando RecursiveCharacterTextSplitter.
```python
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Carregar o PDF
loader = PyPDFLoader("edital_unicamp_2024.pdf")
data = loader.load()

# Dividir o texto em chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100,
    separators=["\n", " ", ""]
)
texts = text_splitter.split_documents(data)

```
Com os textos divididos em chunks, criamos um retriever para encontrar os trechos mais relevantes. Para isso, utilizamos os embeddings gerados pelo modelo da DeepInfra em conjunto com o FAISS (Facebook AI Similarity Search). O FAISS é responsável por armazenar os vetores e facilitar a busca eficiente dos trechos mais adequados:
```python
embeddings = DeepInfraEmbeddings(
    model_id="intfloat/multilingual-e5-large",
    query_instruction="",
    embed_instruction="",
)

vectorstore = FAISS.from_documents(texts, embeddings)

retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
```
**Observação:** Antes de executar o código, é necessário realizar o export da chave de acesso da DeepInfra para autenticação. Certifique-se de ter configurado corretamente a variável de ambiente correspondente, seguindo a documentação oficial do DeepInfra.
## Passo 4: Configurar o Sabiá-3
Aqui, utilizamos a compatibilidade com a OpenAI através do ChatOpenAI para acessar o modelo Sabiá-3. É necessário fornecer a base_url e a api_key.
```python
from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(
    model="sabia-3",
    temperature=0,
    api_key=api_key, # Insira sua chave aqui  
    base_url="https://chat.maritaca.ai/api",
)

```
## Passo 5: Definir o prompt
Vamos criar um prompt simples que fornecerá o contexto (documentos recuperados) e a pergunta do usuário.
```python
from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["context", "query"],
    template=(
        "Baseado nos seguintes documentos, responda a pergunta abaixo.\n\n"
        "{context}\n\n"
        "Pergunta: {query}"
    )
)
```

## Passo 6: Criar cadeia de Pergunta Resposta
Agora criamos a cadeia de QA utilizando o load_qa_chain do LangChain.

```python
from langchain.chains.question_answering import load_qa_chain

chain = load_qa_chain(llm, chain_type="stuff", prompt=prompt, verbose=True)
```
## Passo 7: Executar a consulta
Finalmente, vamos fazer uma pergunta ao sistema. Primeiro, recuperamos os documentos relevantes com o retriever, depois passamos tudo para a cadeia.
```python
query = "Qual o tempo máximo para realização da prova?"
docs = retriever.get_relevant_documents(query)

try:
    answer = chain({"input_documents": docs, "query": query})
    print(answer)
except Exception as e:
    print(f"Erro durante execução: {e}")

```

A consulta feita ao sistema retornará um resultado no formato JSON, estruturado da seguinte forma:
```json
{
  "input_documents": [
    {
      "id": "c03b98b0-edb3-4992-aca0-ec9fcd79311f",
      "metadata": {
        "source": "edital_unicamp_2024.pdf",
        "page": 8
      },
      "page_content": "Médio, incluindo questões interdisciplinares.\n\n§1º O(a) candidato(a) terá no máximo 5 (cinco) horas e no mínimo 2 duas horas para a realização da prova da 1ª fase. Poderá ser concedido tempo adicional aos(às) candidatos(as) nos casos previstos no art. 14.\n\n§2º Cada questão da prova de Conhecimentos Gerais valerá 1 (um) ponto. A nota da prova da 1ª fase (N) será a nota da prova de Conhecimentos Gerais."
    },
    {
      "id": "a6db2289-fa69-46b6-98bc-e9106a259e69",
      "metadata": {
        "source": "edital_unicamp_2024.pdf",
        "page": 78
      },
      "page_content": "c. Com maior tempo para a realização da prova, tempo este estabelecido de acordo com critérios neuropsicológicos, até o limite de 20% do tempo regular.\nd. Com direito a ledor para realizar a leitura da prova, transcrever a redação mediante ditado do(a) vestibulando(a) e conferir a transcrição para a folha de resposta.\ne. Através de outros recursos, a depender da necessidade comprovada.\n§13 O(a) candidato(a) que necessitar de tempo adicional de até 20% do tempo regulamentar em"
    },
    {
      "id": "11efcb5c-38f8-4f4d-b7d1-fd8815032034",
      "metadata": {
        "source": "edital_unicamp_2024.pdf",
        "page": 56
      },
      "page_content": "(as) candidatos (as).\n\nOs(as) candidatos(as), divididos em turmas, deverão comparecer para as provas de técnica e de improvisação. Cada turma fará essas duas provas seguidas, com duração aproximada de duas horas.\n\nAs propostas práticas e o acompanhamento musical durante as provas de técnica e de improvisação serão fornecidos para cada turma pela Banca das Provas de Habil idades Específicas no momento de sua realização. O(a) candidato(a) deve estar descalço(a), com uma"
    },
    {
      "id": "e9afcfe9-7452-4887-96ed-139954e65e04",
      "metadata": {
        "source": "edital_unicamp_2024.pdf",
        "page": 49
      },
      "page_content": "Obs: Será permitido consultar material no dia da prova.\n\nProva de Aula\nOs candidatos farão três aulas práticas, ministradas por três duplas de professores.\n\nProva de Palco\nApresentação de uma cena previamente preparada, à escolha do candidato, conforme a relação de textos publicada ao final desta seção. Duração da cena: de três a cinco minutos.\n\nLista de Textos\nO candidato deverá escolher uma cena de uma das peças listadas ao final desta seção para"
    },
    {
      "id": "a314ec37-7bf5-4354-9be3-238c6ade0016",
      "metadata": {
        "source": "edital_unicamp_2024.pdf",
        "page": 13
      },
      "page_content": "período de 06 (seis) meses a contar da data da última chamada para matrícula. Para efeito de guarda da prova da 1ª fase, consideram-se exclusivamente as folhas de respostas nas quais os(as) candidatos(as) preenchem a alternativa escolhida (ficha de correção com leitura ótica). Os cadernos de questões serão eliminados imediatamente após a aplicação da prova."
    }
  ],
  "query": "Qual o tempo máximo para realização da prova?",
  "output_text": "O tempo máximo para a realização da prova da 1ª fase é de 5 (cinco) horas. Além disso, pode ser concedido um tempo adicional de até 20% do tempo regular para candidatos que necessitem, com base em critérios neuropsicológicos, conforme mencionado no §1º e na alínea c."
}

```