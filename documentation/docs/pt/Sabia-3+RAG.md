---
id: Sabia-3+RAG
title: Sabia-3+RAG
---

# RAG com o Sabiá-3
RAG (Retrieval-Augmented Generation) é uma abordagem que combina busca de informações em uma base de dados com a capacidade de geração de texto de um modelo de linguagem (LLM). Abaixo está o passo a passo detalhado para criar um sistema RAG usando o modelo Sabiá-3, neste exemplo utilizaremos:
* Uma fonte de dados (um PDF de um edital da Unicamp).
* Uma ferramenta para extrair e dividir o texto do PDF em pedaços (chunks).
* Um sistema de recuperação (retriever) baseado em BM25, que busca os trechos mais relevantes para uma determinada pergunta.
* O modelo Sabiá-3 para gerar a resposta final.
* O prompt baseado no formato de conversa, fornecendo contexto e a pergunta do usuário.


## Passo 1: Instalar as Dependências
Primeiro, instale as bibliotecas necessárias para o projeto.
```bash
!pip install unstructured rank_bm25 pdf2image pdfminer-six pikepdf pypdf unstructured_inference "pillow<10.1.0" pillow_heif -q
!pip install langchain langchain-community langchain_openai -q
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
Com o texto em chunks, criamos um retriever usando BM25Retriever para encontrar os trechos mais relevantes:
```python
from langchain_community.retrievers import BM25Retriever

retriever = BM25Retriever.from_documents(texts)
```
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
    template="Baseado nos seguintes documentos, responda a pergunta abaixo.\n\n{context}\n\nPergunta: {query}"
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
docs = retriever.invoke(query)

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
      "metadata": {
        "source": "edital_unicamp_2024.pdf",
        "page": 8
      },
      "page_content": "Médio, incluindo questões interdisciplinares. \n\n§1º O(a) candidato(a) terá no máximo 5 (cinco) horas e no mínimo 2 duas horas para a \nrealização da prova da 1ª fase. Poderá ser concedido tempo adicional aos(às) candidatos(as) nos \ncasos previstos no art. 14."
    },
    {
      "metadata": {
        "source": "edital_unicamp_2024.pdf",
        "page": 78
      },
      "page_content": "c. Com maior tempo para a realização da prova, tempo este estabelecido de acordo com \ncritérios neuropsicológicos, até o limite de 20% do tempo regular."
    }
    // ... outros documentos
  ],
  "query": "Qual o tempo máximo para realização da prova?",
  "output_text": "O tempo máximo para a realização da prova é de 5 (cinco) horas."
}

```