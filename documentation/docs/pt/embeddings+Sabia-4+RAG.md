---
id: embeddings+Sabia-4+RAG
title: Embeddings + S5 + RAG
---

# Embeddings + S5 + RAG

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

## RAG com o S5
RAG (Retrieval-Augmented Generation) é uma abordagem que combina busca de informações em uma base de dados com a capacidade de geração de texto de um modelo de linguagem (LLM). Abaixo está o passo a passo detalhado para criar um sistema RAG usando o modelo S5, neste exemplo utilizaremos:
* Uma fonte de dados (um PDF de um edital da Unicamp).
* Uma ferramenta para extrair e dividir o texto do PDF em pedaços (chunks).
* Um sistema de recuperação (retriever) baseado no modelo "intfloat/multilingual-e5-large" da DeepInfra, que busca os trechos mais relevantes para uma determinada pergunta.
* O modelo S5 para gerar a resposta final.
* O prompt baseado no formato de conversa, fornecendo contexto e a pergunta do usuário.


### Passo 1: Instalação das Dependências
Primeiro, instale as bibliotecas necessárias para o projeto.
```bash
pip install -U langchain-community langchain-openai langchain-text-splitters pypdf faiss-cpu
```

### Passo 2: Download do PDF
No exemplo, utilizamos um edital da Unicamp. Para baixá-lo localmente:
```bash
wget https://www.comvest.unicamp.br/wp-content/uploads/2023/10/31-2023-Dispoe-sobre-o-Vestibular-Unicamp-2024_com-retificacao.pdf -O edital_unicamp_2024.pdf
```
### Passo 3: Carregamento e processamento do documento
Utilizaremos o PyPDFLoader do LangChain para extrair o texto, e depois faremos o split do texto em chunks menores usando RecursiveCharacterTextSplitter.
```python
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

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
from langchain_community.embeddings import DeepInfraEmbeddings
from langchain_community.vectorstores import FAISS

embeddings = DeepInfraEmbeddings(
    model_id="intfloat/multilingual-e5-large",
    query_instruction="",
    embed_instruction="",
)

vectorstore = FAISS.from_documents(texts, embeddings)

retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
```
**Observação:** Antes de executar o código, defina a variável de ambiente `DEEPINFRA_API_TOKEN` com a sua chave da DeepInfra, conforme a documentação oficial da DeepInfra.

### Passo 4: Configuração do S5
Aqui, utilizamos a compatibilidade com a OpenAI através do ChatOpenAI para acessar o modelo S5. É necessário fornecer a base_url e a api_key.
```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="S5",
    api_key=api_key, # Insira sua chave aqui
    base_url="https://chat.maritaca.ai/api",
)
```
### Passo 5: Definição do prompt
Vamos criar um prompt simples que fornecerá o contexto (documentos recuperados) e a pergunta do usuário.
```python
from langchain_core.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["context", "query"],
    template=(
        "Baseado nos seguintes documentos, responda a pergunta abaixo.\n\n"
        "{context}\n\n"
        "Pergunta: {query}"
    )
)
```

### Passo 6: Criação da chain de perguntas e respostas
Agora ligamos o prompt ao modelo e juntamos o texto dos documentos recuperados em um único contexto.

```python
from langchain_core.output_parsers import StrOutputParser

chain = prompt | llm | StrOutputParser()

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)
```
### Passo 7: Execução da consulta
Finalmente, vamos fazer uma pergunta ao sistema. Primeiro, recuperamos os documentos relevantes com o retriever, depois passamos tudo para a chain.
```python
query = "Qual o tempo máximo para realização da prova?"
docs = retriever.invoke(query)

answer = chain.invoke({"context": format_docs(docs), "query": query})
print(answer)
```

A resposta é o texto gerado pelo modelo a partir dos trechos recuperados, por exemplo:
```text
O tempo máximo para a realização da prova da 1ª fase é de 5 (cinco) horas. Pode ser concedido tempo adicional de até 20% do tempo regular aos candidatos que necessitem, conforme os critérios previstos no edital.
```
