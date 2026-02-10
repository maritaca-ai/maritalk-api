---
id: embeddings+Sabia-4+RAG
title: Embeddings+Sabia-4+RAG
---

# Embeddings + Sabiá-4 + RAG

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

## RAG with Sabiá-4
RAG (Retrieval-Augmented Generation) is an approach that combines information retrieval from a database with text generation capabilities of a language model (LLM). Below is a detailed step-by-step guide to creating a RAG system using the Sabiá-4 model. In this example, we will use:
* A data source (a PDF of an admissions notice from Unicamp).
* A tool to extract and split the PDF text into chunks.
* A retriever system based on the "intfloat/multilingual-e5-large" model from DeepInfra, which retrieves the most relevant sections for a given question.
* The Sabiá-4 model to generate the final response.
* A prompt in conversational format, providing context and the user's question.


### Step 1: Install Dependencies
First, install the necessary libraries for the project.
```bash
!pip install unstructured rank_bm25 pdf2image pdfminer-six pikepdf pypdf unstructured_inference "pillow<10.1.0" pillow_heif -q
!pip install langchain langchain-community langchain_openai -q
!pip install deepinfra faiss-cpu
```

### Step 2: Download the PDF
In this example, we use an admissions notice from Unicamp. To download it locally:
```bash
!wget https://www.comvest.unicamp.br/wp-content/uploads/2023/10/31-2023-Dispoe-sobre-o-Vestibular-Unicamp-2024_com-retificacao.pdf -O edital_unicamp_2024.pdf
```
### Step 3:  Load and Process the Document
We will use the PyPDFLoader from LangChain to extract text, and then split the text into smaller chunks using RecursiveCharacterTextSplitter.
```python
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

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
embeddings = DeepInfraEmbeddings(
    model_id="intfloat/multilingual-e5-large",
    query_instruction="",
    embed_instruction="",
)

vectorstore = FAISS.from_documents(texts, embeddings)

retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
```
**Note:** Before running the code, you need to export the DeepInfra access key for authentication. Make sure you have properly configured the corresponding environment variable, following the official DeepInfra documentation.
### Step 4: Configure sabia-4
Here, we use OpenAI compatibility via ChatOpenAI to access the sabia-4 model. You need to provide the base_url and api_key.
```python
from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(
    model="sabia-4",
    temperature=0,
    api_key=api_key, # Insert your API key here
    base_url="https://chat.maritaca.ai/api",
)

```
### Step 5: Define the Prompt
We will create a simple prompt that provides the context (retrieved documents) and the user’s question.
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

### Step 6: Create the Question-Answering Chain
Now we create the QA chain using the load_qa_chain from LangChain.

```python
from langchain.chains.question_answering import load_qa_chain

chain = load_qa_chain(llm, chain_type="stuff", prompt=prompt, verbose=True)
```
### Step 7: Execute the Query
Finally, we will ask the system a question. First, retrieve the relevant documents using the retriever, then pass everything to the chain.
```python
query = "Qual o tempo máximo para realização da prova?"
docs = retriever.get_relevant_documents(query)

try:
    answer = chain({"input_documents": docs, "query": query})
    print(answer)
except Exception as e:
    print(f"Erro durante execução: {e}")

```

The system query will return a result in JSON format, structured as follows:
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
