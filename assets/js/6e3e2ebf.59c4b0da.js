"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[839],{5625:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=a(4848),i=a(8453);const s={id:"embeddings+Sabia-3+RAG",title:"Embeddings+Sabia-3+RAG"},r="Embeddings + Sabi\xe1-3 + RAG",d={id:"en/embeddings+Sabia-3+RAG",title:"Embeddings+Sabia-3+RAG",description:"Embeddings",source:"@site/docs/en/embeddings+Sabia-3+RAG.md",sourceDirName:"en",slug:"/en/embeddings+Sabia-3+RAG",permalink:"/en/embeddings+Sabia-3+RAG",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"embeddings+Sabia-3+RAG",title:"Embeddings+Sabia-3+RAG"},sidebar:"sidebarEn",previous:{title:"Structured Outputs",permalink:"/en/structured-outputs"},next:{title:"Rate Limits",permalink:"/en/rate-limits"}},o={},l=[{value:"Embeddings",id:"embeddings",level:2},{value:"What Are They?",id:"what-are-they",level:3},{value:"How to Obtain Embeddings with Maritaca AI",id:"how-to-obtain-embeddings-with-maritaca-ai",level:3},{value:"Quick Start with DeepInfra",id:"quick-start-with-deepinfra",level:3},{value:"1. <strong>Register and Obtain Your API Key</strong>",id:"1-register-and-obtain-your-api-key",level:4},{value:"2. <strong>Use Python to Send Embedding Requests</strong>",id:"2-use-python-to-send-embedding-requests",level:4},{value:"Example Code to Send an API Request to DeepInfra",id:"example-code-to-send-an-api-request-to-deepinfra",level:5},{value:"Sample Output",id:"sample-output",level:5},{value:"Input Fields",id:"input-fields",level:4},{value:"Output Fields",id:"output-fields",level:4},{value:"Model Description",id:"model-description",level:4},{value:"Pricing",id:"pricing",level:4},{value:"RAG with Sabi\xe1-3",id:"rag-with-sabi\xe1-3",level:2},{value:"Step 1: Install Dependencies",id:"step-1-install-dependencies",level:3},{value:"Step 2: Download the PDF",id:"step-2-download-the-pdf",level:3},{value:"Step 3:  Load and Process the Document",id:"step-3--load-and-process-the-document",level:3},{value:"Step 4: Configure Sabi\xe1-3",id:"step-4-configure-sabi\xe1-3",level:3},{value:"Step 5: Define the Prompt",id:"step-5-define-the-prompt",level:3},{value:"Step 6: Create the Question-Answering Chain",id:"step-6-create-the-question-answering-chain",level:3},{value:"Step 7: Execute the Query",id:"step-7-execute-the-query",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"embeddings--sabi\xe1-3--rag",children:"Embeddings + Sabi\xe1-3 + RAG"})}),"\n",(0,t.jsx)(n.h2,{id:"embeddings",children:"Embeddings"}),"\n",(0,t.jsx)(n.h3,{id:"what-are-they",children:"What Are They?"}),"\n",(0,t.jsx)(n.p,{children:"Embeddings are numerical representations of texts used to capture the semantic meaning and relationships between words, phrases, or documents in a vector format. These vectors allow measuring semantic similarity between texts and performing tasks such as information retrieval and semantic similarity analysis."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-obtain-embeddings-with-maritaca-ai",children:"How to Obtain Embeddings with Maritaca AI"}),"\n",(0,t.jsxs)(n.p,{children:["Maritaca AI does not currently offer its own embedding model. Therefore, it recommends using ",(0,t.jsx)(n.a,{href:"https://deepinfra.com/docs",children:"DeepInfra"})," as an embedding provider. DeepInfra offers the ",(0,t.jsx)(n.a,{href:"https://arxiv.org/pdf/2402.05672",children:"Multilingual-E5-large"})," model, specialized in embeddings for multiple languages. The rest of this guide is dedicated to DeepInfra, but we encourage you to evaluate different embedding providers to find the best solution for your specific use case."]}),"\n",(0,t.jsx)(n.h3,{id:"quick-start-with-deepinfra",children:"Quick Start with DeepInfra"}),"\n",(0,t.jsxs)(n.p,{children:["DeepInfra offers a multilingual embedding model called ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"intfloat/multilingual-e5-large"})}),". The following sections demonstrate how to use this model to obtain embeddings via Python."]}),"\n",(0,t.jsxs)(n.h4,{id:"1-register-and-obtain-your-api-key",children:["1. ",(0,t.jsx)(n.strong,{children:"Register and Obtain Your API Key"})]}),"\n",(0,t.jsx)(n.p,{children:"You need to obtain an API key from DeepInfra to authenticate your requests."}),"\n",(0,t.jsxs)(n.h4,{id:"2-use-python-to-send-embedding-requests",children:["2. ",(0,t.jsx)(n.strong,{children:"Use Python to Send Embedding Requests"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"requests"})," library in Python to interact with the DeepInfra API."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install requests\n"})}),"\n",(0,t.jsx)(n.h5,{id:"example-code-to-send-an-api-request-to-deepinfra",children:"Example Code to Send an API Request to DeepInfra"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\n\nAPI_KEY = "" #Replace with your DeepInfra API key\nURL = "https://api.deepinfra.com/v1/inference/intfloat/multilingual-e5-large"\n\npayload = {\n    "inputs": ["ol\xe1 mundo", "hello world"]\n}\nheaders = {\n    "Authorization": f"bearer {API_KEY}",\n}\nresponse = requests.post(URL, headers=headers, json=payload)\n\nif response.status_code == 200:\n    data = response.json()\n    print("Embeddings:")\n    for idx, embedding in enumerate(data["embeddings"]):\n        print(f"Input {idx + 1}: {embedding}")\n    print("Input Tokens:", data["input_tokens"])\nelse:\n    print("Error:", response.status_code, response.text)\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h5,{id:"sample-output",children:"Sample Output"}),"\n",(0,t.jsx)(n.p,{children:"Running the code generates output similar to this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Embeddings:\nInput 1: [float, ... , float]\nInput 2: [float, ... , float]\nInput Tokens: 10\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"input-fields",children:"Input Fields"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"model"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Name of the model used."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"-"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"input"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array ou string"})}),(0,t.jsx)(n.td,{children:"Sequences to generate embeddings for."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"-"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"encoding_format"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Format used for encoding."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"float"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "model": "intfloat/multilingual-e5-large",\n  "inputs": ["Hello world"]\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"output-fields",children:"Output Fields"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"embeddings"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array"})}),(0,t.jsx)(n.td,{children:"The embeddings calculated for each input sequence."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"input_tokens"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"integer"})}),(0,t.jsx)(n.td,{children:"The number of input tokens in the request."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"request_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The request ID."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"inference_status"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"Object containing the status of the inference request."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"model-description",children:"Model Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Model"}),(0,t.jsx)(n.th,{children:"Context Size"}),(0,t.jsx)(n.th,{children:"Embedding Dimension"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"intfloat/multilingual-e5-large"}),(0,t.jsx)(n.td,{children:"512"}),(0,t.jsx)(n.td,{children:"1024"}),(0,t.jsx)(n.td,{children:"Multilingual embeddings model for text retrieval, semantic similarity, and clustering."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"pricing",children:"Pricing"}),"\n",(0,t.jsxs)(n.p,{children:["Visit the DeepInfra pricing page for details: ",(0,t.jsx)(n.a,{href:"https://deepinfra.com/intfloat/multilingual-e5-large",children:"(https://deepinfra.com/intfloat/multilingual-e5-large)"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"rag-with-sabi\xe1-3",children:"RAG with Sabi\xe1-3"}),"\n",(0,t.jsx)(n.p,{children:"RAG (Retrieval-Augmented Generation) is an approach that combines information retrieval from a database with text generation capabilities of a language model (LLM). Below is a detailed step-by-step guide to creating a RAG system using the Sabi\xe1-3 model. In this example, we will use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A data source (a PDF of an admissions notice from Unicamp)."}),"\n",(0,t.jsx)(n.li,{children:"A tool to extract and split the PDF text into chunks."}),"\n",(0,t.jsx)(n.li,{children:'A retriever system based on the "intfloat/multilingual-e5-large" model from DeepInfra, which retrieves the most relevant sections for a given question.'}),"\n",(0,t.jsx)(n.li,{children:"The Sabi\xe1-3 model to generate the final response."}),"\n",(0,t.jsx)(n.li,{children:"A prompt in conversational format, providing context and the user's question."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-install-dependencies",children:"Step 1: Install Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"First, install the necessary libraries for the project."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'!pip install unstructured rank_bm25 pdf2image pdfminer-six pikepdf pypdf unstructured_inference "pillow<10.1.0" pillow_heif -q\n!pip install langchain langchain-community langchain_openai -q\n!pip install deepinfra faiss-cpu\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-download-the-pdf",children:"Step 2: Download the PDF"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we use an admissions notice from Unicamp. To download it locally:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"!wget https://www.comvest.unicamp.br/wp-content/uploads/2023/10/31-2023-Dispoe-sobre-o-Vestibular-Unicamp-2024_com-retificacao.pdf -O edital_unicamp_2024.pdf\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3--load-and-process-the-document",children:"Step 3:  Load and Process the Document"}),"\n",(0,t.jsx)(n.p,{children:"We will use the PyPDFLoader from LangChain to extract text, and then split the text into smaller chunks using RecursiveCharacterTextSplitter."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain.document_loaders import PyPDFLoader\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\n# Load the PDF\nloader = PyPDFLoader("edital_unicamp_2024.pdf")\ndata = loader.load()\n\n# Split the text into chunks\ntext_splitter = RecursiveCharacterTextSplitter(\n    chunk_size=500,\n    chunk_overlap=100,\n    separators=["\\n", " ", ""]\n)\ntexts = text_splitter.split_documents(data)\n'})}),"\n",(0,t.jsx)(n.p,{children:"With the texts divided into chunks, we create a retriever to find the most relevant passages. To achieve this, we use embeddings generated by the DeepInfra model in combination with FAISS (Facebook AI Similarity Search). FAISS is responsible for storing the vectors and enabling efficient retrieval of the most suitable passages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'embeddings = DeepInfraEmbeddings(\n    model_id="intfloat/multilingual-e5-large",\n    query_instruction="",\n    embed_instruction="",\n)\n\nvectorstore = FAISS.from_documents(texts, embeddings)\n\nretriever = vectorstore.as_retriever(search_kwargs={"k": 5})\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Before running the code, you need to export the DeepInfra access key for authentication. Make sure you have properly configured the corresponding environment variable, following the official DeepInfra documentation."]}),"\n",(0,t.jsx)(n.h3,{id:"step-4-configure-sabi\xe1-3",children:"Step 4: Configure Sabi\xe1-3"}),"\n",(0,t.jsx)(n.p,{children:"Here, we use OpenAI compatibility via ChatOpenAI to access the Sabi\xe1-3 model. You need to provide the base_url and api_key."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain.chat_models import ChatOpenAI\n\nllm = ChatOpenAI(\n    model="sabia-3",\n    temperature=0,\n    api_key=api_key, # Insert your API key here\n    base_url="https://chat.maritaca.ai/api",\n)\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-5-define-the-prompt",children:"Step 5: Define the Prompt"}),"\n",(0,t.jsx)(n.p,{children:"We will create a simple prompt that provides the context (retrieved documents) and the user\u2019s question."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain.prompts import PromptTemplate\n\nprompt = PromptTemplate(\n    input_variables=["context", "query"],\n    template=(\n        "Baseado nos seguintes documentos, responda a pergunta abaixo.\\n\\n"\n        "{context}\\n\\n"\n        "Pergunta: {query}"\n    )\n)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-6-create-the-question-answering-chain",children:"Step 6: Create the Question-Answering Chain"}),"\n",(0,t.jsx)(n.p,{children:"Now we create the QA chain using the load_qa_chain from LangChain."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain.chains.question_answering import load_qa_chain\n\nchain = load_qa_chain(llm, chain_type="stuff", prompt=prompt, verbose=True)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-7-execute-the-query",children:"Step 7: Execute the Query"}),"\n",(0,t.jsx)(n.p,{children:"Finally, we will ask the system a question. First, retrieve the relevant documents using the retriever, then pass everything to the chain."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'query = "Qual o tempo m\xe1ximo para realiza\xe7\xe3o da prova?"\ndocs = retriever.get_relevant_documents(query)\n\ntry:\n    answer = chain({"input_documents": docs, "query": query})\n    print(answer)\nexcept Exception as e:\n    print(f"Erro durante execu\xe7\xe3o: {e}")\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"The system query will return a result in JSON format, structured as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "input_documents": [\n    {\n      "id": "c03b98b0-edb3-4992-aca0-ec9fcd79311f",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 8\n      },\n      "page_content": "M\xe9dio, incluindo quest\xf5es interdisciplinares.\\n\\n\xa71\xba O(a) candidato(a) ter\xe1 no m\xe1ximo 5 (cinco) horas e no m\xednimo 2 duas horas para a realiza\xe7\xe3o da prova da 1\xaa fase. Poder\xe1 ser concedido tempo adicional aos(\xe0s) candidatos(as) nos casos previstos no art. 14.\\n\\n\xa72\xba Cada quest\xe3o da prova de Conhecimentos Gerais valer\xe1 1 (um) ponto. A nota da prova da 1\xaa fase (N) ser\xe1 a nota da prova de Conhecimentos Gerais."\n    },\n    {\n      "id": "a6db2289-fa69-46b6-98bc-e9106a259e69",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 78\n      },\n      "page_content": "c. Com maior tempo para a realiza\xe7\xe3o da prova, tempo este estabelecido de acordo com crit\xe9rios neuropsicol\xf3gicos, at\xe9 o limite de 20% do tempo regular.\\nd. Com direito a ledor para realizar a leitura da prova, transcrever a reda\xe7\xe3o mediante ditado do(a) vestibulando(a) e conferir a transcri\xe7\xe3o para a folha de resposta.\\ne. Atrav\xe9s de outros recursos, a depender da necessidade comprovada.\\n\xa713 O(a) candidato(a) que necessitar de tempo adicional de at\xe9 20% do tempo regulamentar em"\n    },\n    {\n      "id": "11efcb5c-38f8-4f4d-b7d1-fd8815032034",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 56\n      },\n      "page_content": "(as) candidatos (as).\\n\\nOs(as) candidatos(as), divididos em turmas, dever\xe3o comparecer para as provas de t\xe9cnica e de improvisa\xe7\xe3o. Cada turma far\xe1 essas duas provas seguidas, com dura\xe7\xe3o aproximada de duas horas.\\n\\nAs propostas pr\xe1ticas e o acompanhamento musical durante as provas de t\xe9cnica e de improvisa\xe7\xe3o ser\xe3o fornecidos para cada turma pela Banca das Provas de Habil idades Espec\xedficas no momento de sua realiza\xe7\xe3o. O(a) candidato(a) deve estar descal\xe7o(a), com uma"\n    },\n    {\n      "id": "e9afcfe9-7452-4887-96ed-139954e65e04",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 49\n      },\n      "page_content": "Obs: Ser\xe1 permitido consultar material no dia da prova.\\n\\nProva de Aula\\nOs candidatos far\xe3o tr\xeas aulas pr\xe1ticas, ministradas por tr\xeas duplas de professores.\\n\\nProva de Palco\\nApresenta\xe7\xe3o de uma cena previamente preparada, \xe0 escolha do candidato, conforme a rela\xe7\xe3o de textos publicada ao final desta se\xe7\xe3o. Dura\xe7\xe3o da cena: de tr\xeas a cinco minutos.\\n\\nLista de Textos\\nO candidato dever\xe1 escolher uma cena de uma das pe\xe7as listadas ao final desta se\xe7\xe3o para"\n    },\n    {\n      "id": "a314ec37-7bf5-4354-9be3-238c6ade0016",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 13\n      },\n      "page_content": "per\xedodo de 06 (seis) meses a contar da data da \xfaltima chamada para matr\xedcula. Para efeito de guarda da prova da 1\xaa fase, consideram-se exclusivamente as folhas de respostas nas quais os(as) candidatos(as) preenchem a alternativa escolhida (ficha de corre\xe7\xe3o com leitura \xf3tica). Os cadernos de quest\xf5es ser\xe3o eliminados imediatamente ap\xf3s a aplica\xe7\xe3o da prova."\n    }\n  ],\n  "query": "Qual o tempo m\xe1ximo para realiza\xe7\xe3o da prova?",\n  "output_text": "O tempo m\xe1ximo para a realiza\xe7\xe3o da prova da 1\xaa fase \xe9 de 5 (cinco) horas. Al\xe9m disso, pode ser concedido um tempo adicional de at\xe9 20% do tempo regular para candidatos que necessitem, com base em crit\xe9rios neuropsicol\xf3gicos, conforme mencionado no \xa71\xba e na al\xednea c."\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>d});var t=a(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);