---
id: embeddings+Sabia-4+RAG
title: Embeddings + S5 + RAG
---

# Embeddings + S5 + RAG

## Embeddings

### What Are They?

Embeddings are numerical representations of texts used to capture the semantic meaning and relationships between words, phrases, or documents in a vector format. These vectors allow measuring semantic similarity between texts and performing tasks such as information retrieval and semantic similarity analysis.

### How to Obtain Embeddings with Maritaca AI
Maritaca AI does not currently offer its own embedding model. Therefore, it recommends using [DeepInfra](https://deepinfra.com/docs) as an embedding provider. DeepInfra offers the [Multilingual-E5-large](https://arxiv.org/pdf/2402.05672) model, specialized in embeddings for multiple languages. The rest of this guide is dedicated to DeepInfra, but we encourage you to evaluate different embedding providers to find the best solution for your specific use case.
### Quick Start with DeepInfra
DeepInfra offers a multilingual embedding model called **`intfloat/multilingual-e5-large`**. The following sections demonstrate how to use this model to obtain embeddings via Python.

#### 1. **Register and Obtain Your API Key**
You need to obtain an API key from DeepInfra to authenticate your requests.

#### 2. **Use Python to Send Embedding Requests**
You can use the `requests` library in Python to interact with the DeepInfra API.

```bash
pip install requests
```

##### Example Code to Send an API Request to DeepInfra
```python
import requests
import json

API_KEY = "" #Replace with your DeepInfra API key
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
        print(f"Input {idx + 1}: {embedding}")
    print("Input Tokens:", data["input_tokens"])
else:
    print("Error:", response.status_code, response.text)
```

---

##### Sample Output

Running the code generates output similar to this:
```plaintext
Embeddings:
Input 1: [float, ... , float]
Input 2: [float, ... , float]
Input Tokens: 10
```

---

#### Input Fields

| Parameter       | Type       | Description                                                                  | Default Value |
|------------------|------------|----------------------------------------------------------------------------|---------------|
| **model**       | `string`    | Name of the model used.                                 | `-`          |
| **input**    | `array ou string`  |Sequences to generate embeddings for.                                | `-`       |
| **encoding_format**        | `string`   | Format used for encoding.                              | `float`       |

Example:
```json
{
  "model": "intfloat/multilingual-e5-large",
  "inputs": ["Hello world"]
}
```

---

#### Output Fields

| Parameter               | Type            | Description                                                                                   |
|-------------------------|---------------|-----------------------------------------------------------------------------------------------|
| **embeddings**          | `array`       | The embeddings calculated for each input sequence.                                     |
| **input_tokens**        | `integer`     | The number of input tokens in the request.                                                 |
| **request_id**          | `string`      | The request ID.                                                                           |
| **inference_status**    | `object`      | Object containing the status of the inference request.                                         |


#### Model Description


|Model | Context Size | Embedding Dimension | Description |
|-------|----------|-----------------------|-----------|
|intfloat/multilingual-e5-large	| 512 |1024	|Multilingual embeddings model for text retrieval, semantic similarity, and clustering.|

#### Pricing

Visit the DeepInfra pricing page for details: [(https://deepinfra.com/intfloat/multilingual-e5-large)](https://deepinfra.com/intfloat/multilingual-e5-large).

## RAG with S5
RAG (Retrieval-Augmented Generation) is an approach that combines information retrieval from a database with text generation capabilities of a language model (LLM). Below is a detailed step-by-step guide to creating a RAG system using the S5 model. In this example, we will use:
* A data source (a PDF of an admissions notice from Unicamp).
* A tool to extract and split the PDF text into chunks.
* A retriever system based on the "intfloat/multilingual-e5-large" model from DeepInfra, which retrieves the most relevant sections for a given question.
* The S5 model to generate the final response.
* A prompt in conversational format, providing context and the user's question.


### Step 1: Install Dependencies
First, install the necessary libraries for the project.
```bash
pip install -U langchain-community langchain-openai langchain-text-splitters pypdf faiss-cpu
```

### Step 2: Download the PDF
In this example, we use an admissions notice from Unicamp. To download it locally:
```bash
wget https://www.comvest.unicamp.br/wp-content/uploads/2023/10/31-2023-Dispoe-sobre-o-Vestibular-Unicamp-2024_com-retificacao.pdf -O edital_unicamp_2024.pdf
```
### Step 3: Load and Process the Document
We will use the PyPDFLoader from LangChain to extract text, and then split the text into smaller chunks using RecursiveCharacterTextSplitter.
```python
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Load the PDF
loader = PyPDFLoader("edital_unicamp_2024.pdf")
data = loader.load()

# Split the text into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100,
    separators=["\n", " ", ""]
)
texts = text_splitter.split_documents(data)
```
With the texts divided into chunks, we create a retriever to find the most relevant passages. To achieve this, we use embeddings generated by the DeepInfra model in combination with FAISS (Facebook AI Similarity Search). FAISS is responsible for storing the vectors and enabling efficient retrieval of the most suitable passages:

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
**Note:** Before running the code, set the `DEEPINFRA_API_TOKEN` environment variable to your DeepInfra key, following the official DeepInfra documentation.

### Step 4: Configure S5
Here, we use OpenAI compatibility via ChatOpenAI to access the S5 model. You need to provide the base_url and api_key.
```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="S5",
    api_key=api_key, # Insert your API key here
    base_url="https://chat.maritaca.ai/api",
)
```
### Step 5: Define the Prompt
We will create a simple prompt that provides the context (retrieved documents) and the user’s question.
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

### Step 6: Create the Question-Answering Chain
Now we connect the prompt to the model and join the text of the retrieved documents into a single context.

```python
from langchain_core.output_parsers import StrOutputParser

chain = prompt | llm | StrOutputParser()

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)
```
### Step 7: Execute the Query
Finally, let's ask the system a question. First, we retrieve the relevant documents with the retriever, then pass everything to the chain.
```python
query = "Qual o tempo máximo para realização da prova?"
docs = retriever.invoke(query)

answer = chain.invoke({"context": format_docs(docs), "query": query})
print(answer)
```

The answer is the text generated by the model from the retrieved passages, for example:
```text
O tempo máximo para a realização da prova da 1ª fase é de 5 (cinco) horas. Pode ser concedido tempo adicional de até 20% do tempo regular aos candidatos que necessitem, conforme os critérios previstos no edital.
```
