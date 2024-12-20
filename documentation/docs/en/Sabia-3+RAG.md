---
id: Sabia-3+RAG
title: Sabia-3+RAG
---

# RAG with the Sabiá-3
RAG (Retrieval-Augmented Generation) is an approach that combines information retrieval from a database with the text generation capabilities of a language model (LLM). Below is a detailed step-by-step guide to creating a RAG system using the Sabia-3 model. In this example, we will use:
* A data source (a PDF of a Unicamp public notice).
* A tool to extract and split the text from the PDF into chunks.
* A retrieval system (retriever) based on BM25, which searches for the most relevant excerpts for a given question.
* The Sabia-3 model to generate the final answer.
* A prompt in a conversational format, providing context and the user's question.


## Step 1: Install Dependencies
First, install the libraries needed for the project.
```bash
!pip install unstructured rank_bm25 pdf2image pdfminer-six pikepdf pypdf unstructured_inference "pillow<10.1.0" pillow_heif -q
!pip install langchain langchain-community langchain_openai -q
```

## Step 2: Download the PDF
In this example, we use a public notice from Unicamp. To download it locally:
```bash
!wget https://www.comvest.unicamp.br/wp-content/uploads/2023/10/31-2023-Dispoe-sobre-o-Vestibular-Unicamp-2024_com-retificacao.pdf -O edital_unicamp_2024.pdf
```
## Step 3: Load and Process the Document
We will use LangChain's PyPDFLoader to extract the text and then split the text into smaller chunks using RecursiveCharacterTextSplitter.
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
With the text in chunks, we create a BM25 retriever to find the most relevant excerpts:
```python
from langchain_community.retrievers import BM25Retriever

retriever = BM25Retriever.from_documents(texts)
```
## Step 4: Configure Sabia-3
Here, we use compatibility with OpenAI through ChatOpenAI to access the Sabiá-3 model. It is necessary to provide the base_url and the api_key.
```python
from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(
    model="sabia-3",
    temperature=0,
    api_key=api_key, # Enter your key here
    base_url="https://chat.maritaca.ai/api",
)

```
## Step 5: Define the Prompt
We will create a simple prompt that provides the context (retrieved documents) and the user's question.
```python
from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["context", "query"],
    template="Baseado nos seguintes documentos, responda a pergunta abaixo.\n\n{context}\n\nPergunta: {query}"
)
```

## Step 6: Create the Question-Answer Chain
Now we create the QA chain using LangChain's load_qa_chain.

```python
from langchain.chains.question_answering import load_qa_chain

chain = load_qa_chain(llm, chain_type="stuff", prompt=prompt, verbose=True)
```
## Step 7: Execute the Query
Finally, we will ask the system a question. First, we retrieve the relevant documents with the retriever, then pass everything to the chain.
```python
query = "Qual o tempo máximo para realização da prova?"
docs = retriever.invoke(query)

try:
    answer = chain({"input_documents": docs, "query": query})
    print(answer)
except Exception as e:
    print(f"Erro durante execução: {e}")

```
The query sent to the system will return a result in JSON format, structured as follows:
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