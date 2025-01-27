"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[499],{1272:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(4848),r=n(8453);const o={id:"embeddings+Sabia-3+RAG",title:"Embeddings+Sabia-3+RAG"},d="Embeddings + Sabia-3 + RAG",i={id:"pt/embeddings+Sabia-3+RAG",title:"Embeddings+Sabia-3+RAG",description:"Embeddings",source:"@site/docs/pt/embeddings+Sabia-3+RAG.md",sourceDirName:"pt",slug:"/pt/embeddings+Sabia-3+RAG",permalink:"/pt/embeddings+Sabia-3+RAG",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"embeddings+Sabia-3+RAG",title:"Embeddings+Sabia-3+RAG"},sidebar:"sidebarPt",previous:{title:"Sa\xeddas Estruturadas",permalink:"/pt/structured-outputs"},next:{title:"Biblioteca",permalink:"/pt/biblioteca"}},t={},c=[{value:"Embeddings",id:"embeddings",level:2},{value:"O Que S\xe3o?",id:"o-que-s\xe3o",level:3},{value:"Como obter embeddings com a Maritaca AI",id:"como-obter-embeddings-com-a-maritaca-ai",level:3},{value:"Come\xe7o r\xe1pido com DeepInfra",id:"come\xe7o-r\xe1pido-com-deepinfra",level:3},{value:"1. <strong>Registre-se e obtenha sua chave de API</strong>",id:"1-registre-se-e-obtenha-sua-chave-de-api",level:4},{value:"2. <strong>Use Python para enviar requisi\xe7\xf5es de embeddings</strong>",id:"2-use-python-para-enviar-requisi\xe7\xf5es-de-embeddings",level:4},{value:"Exemplo de C\xf3digo para Enviar uma Requisi\xe7\xe3o de API do DeepInfra",id:"exemplo-de-c\xf3digo-para-enviar-uma-requisi\xe7\xe3o-de-api-do-deepinfra",level:5},{value:"Sa\xedda de Exemplo",id:"sa\xedda-de-exemplo",level:5},{value:"Campos de Entrada",id:"campos-de-entrada",level:4},{value:"Campos de Sa\xedda",id:"campos-de-sa\xedda",level:4},{value:"Descri\xe7\xe3o do modelo",id:"descri\xe7\xe3o-do-modelo",level:4},{value:"Pre\xe7o",id:"pre\xe7o",level:4},{value:"RAG com o Sabi\xe1-3",id:"rag-com-o-sabi\xe1-3",level:2},{value:"Passo 1: Instalar as Depend\xeancias",id:"passo-1-instalar-as-depend\xeancias",level:3},{value:"Passo 2: Baixe o PDF",id:"passo-2-baixe-o-pdf",level:3},{value:"Passo 3: Carregar e processar o documento",id:"passo-3-carregar-e-processar-o-documento",level:3},{value:"Passo 4: Configurar o Sabi\xe1-3",id:"passo-4-configurar-o-sabi\xe1-3",level:3},{value:"Passo 5: Definir o prompt",id:"passo-5-definir-o-prompt",level:3},{value:"Passo 6: Criar cadeia de Pergunta Resposta",id:"passo-6-criar-cadeia-de-pergunta-resposta",level:3},{value:"Passo 7: Executar a consulta",id:"passo-7-executar-a-consulta",level:3}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"embeddings--sabia-3--rag",children:"Embeddings + Sabia-3 + RAG"})}),"\n",(0,s.jsx)(a.h2,{id:"embeddings",children:"Embeddings"}),"\n",(0,s.jsx)(a.h3,{id:"o-que-s\xe3o",children:"O Que S\xe3o?"}),"\n",(0,s.jsx)(a.p,{children:"Embeddings s\xe3o representa\xe7\xf5es num\xe9ricas de textos, utilizadas para capturar o significado sem\xe2ntico e as rela\xe7\xf5es entre palavras, frases ou documentos em um formato vetorial. Esses vetores permitem medir a similaridade sem\xe2ntica entre textos e realizar tarefas de recupera\xe7\xe3o de informa\xe7\xf5es e an\xe1lise de similaridade sem\xe2ntica."}),"\n",(0,s.jsx)(a.h3,{id:"como-obter-embeddings-com-a-maritaca-ai",children:"Como obter embeddings com a Maritaca AI"}),"\n",(0,s.jsxs)(a.p,{children:["A Maritaca AI n\xe3o disponibiliza atualmente um modelo pr\xf3prio de embeddings. Por isso, recomenda a utiliza\xe7\xe3o da ",(0,s.jsx)(a.a,{href:"https://deepinfra.com/docs",children:"DeepInfra"})," como provedor de embeddings. A DeepInfra oferece o modelo ",(0,s.jsx)(a.a,{href:"https://arxiv.org/pdf/2402.05672",children:"Multilingual-E5-large"}),", especializado em embeddings para m\xfaltiplos idiomas. Este guia ser\xe1 dedicado ao uso da DeepInfra, mas incentivamos voc\xea a avaliar diferentes fornecedores de embeddings para encontrar a solu\xe7\xe3o mais adequada ao seu caso de uso espec\xedfico."]}),"\n",(0,s.jsx)(a.h3,{id:"come\xe7o-r\xe1pido-com-deepinfra",children:"Come\xe7o r\xe1pido com DeepInfra"}),"\n",(0,s.jsxs)(a.p,{children:["O DeepInfra oferece um modelo de embeddings multil\xedngue chamado ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.code,{children:"intfloat/multilingual-e5-large"})}),". As se\xe7\xf5es a seguir demonstram como usar esse modelo para obter embeddings via Python."]}),"\n",(0,s.jsxs)(a.h4,{id:"1-registre-se-e-obtenha-sua-chave-de-api",children:["1. ",(0,s.jsx)(a.strong,{children:"Registre-se e obtenha sua chave de API"})]}),"\n",(0,s.jsx)(a.p,{children:"Voc\xea precisa obter uma chave de API do DeepInfra para autenticar suas requisi\xe7\xf5es."}),"\n",(0,s.jsxs)(a.h4,{id:"2-use-python-para-enviar-requisi\xe7\xf5es-de-embeddings",children:["2. ",(0,s.jsx)(a.strong,{children:"Use Python para enviar requisi\xe7\xf5es de embeddings"})]}),"\n",(0,s.jsxs)(a.p,{children:["Voc\xea pode usar a biblioteca ",(0,s.jsx)(a.code,{children:"requests"})," no Python para interagir com a API do DeepInfra."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pip install requests\n"})}),"\n",(0,s.jsx)(a.h5,{id:"exemplo-de-c\xf3digo-para-enviar-uma-requisi\xe7\xe3o-de-api-do-deepinfra",children:"Exemplo de C\xf3digo para Enviar uma Requisi\xe7\xe3o de API do DeepInfra"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'import requests\nimport json\n\nAPI_KEY = "" #Substitua com sua chave de api do DeepInfra\nURL = "https://api.deepinfra.com/v1/inference/intfloat/multilingual-e5-large"\n\npayload = {\n    "inputs": ["ol\xe1 mundo", "hello world"]\n}\nheaders = {\n    "Authorization": f"bearer {API_KEY}",\n}\nresponse = requests.post(URL, headers=headers, json=payload)\n\nif response.status_code == 200:\n    data = response.json()\n    print("Embeddings:")\n    for idx, embedding in enumerate(data["embeddings"]):\n        print(f"Entrada {idx + 1}: {embedding}")\n    print("Tokens de Entrada:", data["input_tokens"])\nelse:\n    print("Erro:", response.status_code, response.text)\n'})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h5,{id:"sa\xedda-de-exemplo",children:"Sa\xedda de Exemplo"}),"\n",(0,s.jsx)(a.p,{children:"Ao executar o c\xf3digo, a sa\xedda gerada ser\xe1 semelhante a esta:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-plaintext",children:"Embeddings:\nEntrada 1: [float, ... , float]\nEntrada 2: [float, ... , float]\nTokens de Entrada: 10\n"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"campos-de-entrada",children:"Campos de Entrada"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(a.th,{children:"Valor Padr\xe3o"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.strong,{children:"model"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:"Nome do modelo utilizado."}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"-"})})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.strong,{children:"input"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"array ou string"})}),(0,s.jsx)(a.td,{children:"Sequ\xeancias para gerar embeddings."}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"-"})})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.strong,{children:"encoding_format"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:"Formato usado para a codifica\xe7\xe3o."}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"float"})})]})]})]}),"\n",(0,s.jsx)(a.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n  "model": "intfloat/multilingual-e5-large",\n  "inputs": ["Ol\xe1 mundo"],\n}\n'})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"campos-de-sa\xedda",children:"Campos de Sa\xedda"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.strong,{children:"embeddings"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"array"})}),(0,s.jsx)(a.td,{children:"Os embeddings calculados para cada sequ\xeancia de entrada."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.strong,{children:"input_tokens"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"integer"})}),(0,s.jsx)(a.td,{children:"O n\xfamero de tokens de entrada na requisi\xe7\xe3o."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.strong,{children:"request_id"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:"O ID da requisi\xe7\xe3o."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.strong,{children:"inference_status"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"object"})}),(0,s.jsx)(a.td,{children:"Objeto contendo o status da requisi\xe7\xe3o de infer\xeancia."})]})]})]}),"\n",(0,s.jsx)(a.h4,{id:"descri\xe7\xe3o-do-modelo",children:"Descri\xe7\xe3o do modelo"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Modelo"}),(0,s.jsx)(a.th,{children:"Contexto"}),(0,s.jsx)(a.th,{children:"Dimens\xe3o do Embedding"}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"intfloat/multilingual-e5-large"}),(0,s.jsx)(a.td,{children:"512"}),(0,s.jsx)(a.td,{children:"1024"}),(0,s.jsx)(a.td,{children:"Modelo de embeddings multilingue, ajustado para recupera\xe7\xe3o de texto, similaridade sem\xe2ntica e clustering."})]})})]}),"\n",(0,s.jsx)(a.h4,{id:"pre\xe7o",children:"Pre\xe7o"}),"\n",(0,s.jsxs)(a.p,{children:["Visite a p\xe1gina de precifica\xe7\xe3o do modelo da DeepInfra para obter mais detalhes ",(0,s.jsx)(a.a,{href:"https://deepinfra.com/intfloat/multilingual-e5-large",children:"(https://deepinfra.com/intfloat/multilingual-e5-large)"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"rag-com-o-sabi\xe1-3",children:"RAG com o Sabi\xe1-3"}),"\n",(0,s.jsx)(a.p,{children:"RAG (Retrieval-Augmented Generation) \xe9 uma abordagem que combina busca de informa\xe7\xf5es em uma base de dados com a capacidade de gera\xe7\xe3o de texto de um modelo de linguagem (LLM). Abaixo est\xe1 o passo a passo detalhado para criar um sistema RAG usando o modelo Sabi\xe1-3, neste exemplo utilizaremos:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Uma fonte de dados (um PDF de um edital da Unicamp)."}),"\n",(0,s.jsx)(a.li,{children:"Uma ferramenta para extrair e dividir o texto do PDF em peda\xe7os (chunks)."}),"\n",(0,s.jsx)(a.li,{children:'Um sistema de recupera\xe7\xe3o (retriever) baseado no modelo "intfloat/multilingual-e5-large" da DeepInfra, que busca os trechos mais relevantes para uma determinada pergunta.'}),"\n",(0,s.jsx)(a.li,{children:"O modelo Sabi\xe1-3 para gerar a resposta final."}),"\n",(0,s.jsx)(a.li,{children:"O prompt baseado no formato de conversa, fornecendo contexto e a pergunta do usu\xe1rio."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"passo-1-instalar-as-depend\xeancias",children:"Passo 1: Instalar as Depend\xeancias"}),"\n",(0,s.jsx)(a.p,{children:"Primeiro, instale as bibliotecas necess\xe1rias para o projeto."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'!pip install unstructured rank_bm25 pdf2image pdfminer-six pikepdf pypdf unstructured_inference "pillow<10.1.0" pillow_heif -q\n!pip install langchain langchain-community langchain_openai -q\n!pip install deepinfra faiss-cpu\n'})}),"\n",(0,s.jsx)(a.h3,{id:"passo-2-baixe-o-pdf",children:"Passo 2: Baixe o PDF"}),"\n",(0,s.jsx)(a.p,{children:"No exemplo, utilizamos um edital da Unicamp. Para baix\xe1-lo localmente:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"!wget https://www.comvest.unicamp.br/wp-content/uploads/2023/10/31-2023-Dispoe-sobre-o-Vestibular-Unicamp-2024_com-retificacao.pdf -O edital_unicamp_2024.pdf\n"})}),"\n",(0,s.jsx)(a.h3,{id:"passo-3-carregar-e-processar-o-documento",children:"Passo 3: Carregar e processar o documento"}),"\n",(0,s.jsx)(a.p,{children:"Utilizaremos o PyPDFLoader do LangChain para extrair o texto, e depois faremos o split do texto em chunks menores usando RecursiveCharacterTextSplitter."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from langchain.document_loaders import PyPDFLoader\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\n# Carregar o PDF\nloader = PyPDFLoader("edital_unicamp_2024.pdf")\ndata = loader.load()\n\n# Dividir o texto em chunks\ntext_splitter = RecursiveCharacterTextSplitter(\n    chunk_size=500,\n    chunk_overlap=100,\n    separators=["\\n", " ", ""]\n)\ntexts = text_splitter.split_documents(data)\n\n'})}),"\n",(0,s.jsx)(a.p,{children:"Com os textos divididos em chunks, criamos um retriever para encontrar os trechos mais relevantes. Para isso, utilizamos os embeddings gerados pelo modelo da DeepInfra em conjunto com o FAISS (Facebook AI Similarity Search). O FAISS \xe9 respons\xe1vel por armazenar os vetores e facilitar a busca eficiente dos trechos mais adequados:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'embeddings = DeepInfraEmbeddings(\n    model_id="intfloat/multilingual-e5-large",\n    query_instruction="",\n    embed_instruction="",\n)\n\nvectorstore = FAISS.from_documents(texts, embeddings)\n\nretriever = vectorstore.as_retriever(search_kwargs={"k": 5})\n'})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Observa\xe7\xe3o:"})," Antes de executar o c\xf3digo, \xe9 necess\xe1rio realizar o export da chave de acesso da DeepInfra para autentica\xe7\xe3o. Certifique-se de ter configurado corretamente a vari\xe1vel de ambiente correspondente, seguindo a documenta\xe7\xe3o oficial do DeepInfra."]}),"\n",(0,s.jsx)(a.h3,{id:"passo-4-configurar-o-sabi\xe1-3",children:"Passo 4: Configurar o Sabi\xe1-3"}),"\n",(0,s.jsx)(a.p,{children:"Aqui, utilizamos a compatibilidade com a OpenAI atrav\xe9s do ChatOpenAI para acessar o modelo Sabi\xe1-3. \xc9 necess\xe1rio fornecer a base_url e a api_key."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from langchain.chat_models import ChatOpenAI\n\nllm = ChatOpenAI(\n    model="sabia-3",\n    temperature=0,\n    api_key=api_key, # Insira sua chave aqui  \n    base_url="https://chat.maritaca.ai/api",\n)\n\n'})}),"\n",(0,s.jsx)(a.h3,{id:"passo-5-definir-o-prompt",children:"Passo 5: Definir o prompt"}),"\n",(0,s.jsx)(a.p,{children:"Vamos criar um prompt simples que fornecer\xe1 o contexto (documentos recuperados) e a pergunta do usu\xe1rio."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from langchain.prompts import PromptTemplate\n\nprompt = PromptTemplate(\n    input_variables=["context", "query"],\n    template=(\n        "Baseado nos seguintes documentos, responda a pergunta abaixo.\\n\\n"\n        "{context}\\n\\n"\n        "Pergunta: {query}"\n    )\n)\n'})}),"\n",(0,s.jsx)(a.h3,{id:"passo-6-criar-cadeia-de-pergunta-resposta",children:"Passo 6: Criar cadeia de Pergunta Resposta"}),"\n",(0,s.jsx)(a.p,{children:"Agora criamos a cadeia de QA utilizando o load_qa_chain do LangChain."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'from langchain.chains.question_answering import load_qa_chain\n\nchain = load_qa_chain(llm, chain_type="stuff", prompt=prompt, verbose=True)\n'})}),"\n",(0,s.jsx)(a.h3,{id:"passo-7-executar-a-consulta",children:"Passo 7: Executar a consulta"}),"\n",(0,s.jsx)(a.p,{children:"Finalmente, vamos fazer uma pergunta ao sistema. Primeiro, recuperamos os documentos relevantes com o retriever, depois passamos tudo para a cadeia."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'query = "Qual o tempo m\xe1ximo para realiza\xe7\xe3o da prova?"\ndocs = retriever.get_relevant_documents(query)\n\ntry:\n    answer = chain({"input_documents": docs, "query": query})\n    print(answer)\nexcept Exception as e:\n    print(f"Erro durante execu\xe7\xe3o: {e}")\n\n'})}),"\n",(0,s.jsx)(a.p,{children:"A consulta feita ao sistema retornar\xe1 um resultado no formato JSON, estruturado da seguinte forma:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n  "input_documents": [\n    {\n      "id": "c03b98b0-edb3-4992-aca0-ec9fcd79311f",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 8\n      },\n      "page_content": "M\xe9dio, incluindo quest\xf5es interdisciplinares.\\n\\n\xa71\xba O(a) candidato(a) ter\xe1 no m\xe1ximo 5 (cinco) horas e no m\xednimo 2 duas horas para a realiza\xe7\xe3o da prova da 1\xaa fase. Poder\xe1 ser concedido tempo adicional aos(\xe0s) candidatos(as) nos casos previstos no art. 14.\\n\\n\xa72\xba Cada quest\xe3o da prova de Conhecimentos Gerais valer\xe1 1 (um) ponto. A nota da prova da 1\xaa fase (N) ser\xe1 a nota da prova de Conhecimentos Gerais."\n    },\n    {\n      "id": "a6db2289-fa69-46b6-98bc-e9106a259e69",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 78\n      },\n      "page_content": "c. Com maior tempo para a realiza\xe7\xe3o da prova, tempo este estabelecido de acordo com crit\xe9rios neuropsicol\xf3gicos, at\xe9 o limite de 20% do tempo regular.\\nd. Com direito a ledor para realizar a leitura da prova, transcrever a reda\xe7\xe3o mediante ditado do(a) vestibulando(a) e conferir a transcri\xe7\xe3o para a folha de resposta.\\ne. Atrav\xe9s de outros recursos, a depender da necessidade comprovada.\\n\xa713 O(a) candidato(a) que necessitar de tempo adicional de at\xe9 20% do tempo regulamentar em"\n    },\n    {\n      "id": "11efcb5c-38f8-4f4d-b7d1-fd8815032034",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 56\n      },\n      "page_content": "(as) candidatos (as).\\n\\nOs(as) candidatos(as), divididos em turmas, dever\xe3o comparecer para as provas de t\xe9cnica e de improvisa\xe7\xe3o. Cada turma far\xe1 essas duas provas seguidas, com dura\xe7\xe3o aproximada de duas horas.\\n\\nAs propostas pr\xe1ticas e o acompanhamento musical durante as provas de t\xe9cnica e de improvisa\xe7\xe3o ser\xe3o fornecidos para cada turma pela Banca das Provas de Habil idades Espec\xedficas no momento de sua realiza\xe7\xe3o. O(a) candidato(a) deve estar descal\xe7o(a), com uma"\n    },\n    {\n      "id": "e9afcfe9-7452-4887-96ed-139954e65e04",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 49\n      },\n      "page_content": "Obs: Ser\xe1 permitido consultar material no dia da prova.\\n\\nProva de Aula\\nOs candidatos far\xe3o tr\xeas aulas pr\xe1ticas, ministradas por tr\xeas duplas de professores.\\n\\nProva de Palco\\nApresenta\xe7\xe3o de uma cena previamente preparada, \xe0 escolha do candidato, conforme a rela\xe7\xe3o de textos publicada ao final desta se\xe7\xe3o. Dura\xe7\xe3o da cena: de tr\xeas a cinco minutos.\\n\\nLista de Textos\\nO candidato dever\xe1 escolher uma cena de uma das pe\xe7as listadas ao final desta se\xe7\xe3o para"\n    },\n    {\n      "id": "a314ec37-7bf5-4354-9be3-238c6ade0016",\n      "metadata": {\n        "source": "edital_unicamp_2024.pdf",\n        "page": 13\n      },\n      "page_content": "per\xedodo de 06 (seis) meses a contar da data da \xfaltima chamada para matr\xedcula. Para efeito de guarda da prova da 1\xaa fase, consideram-se exclusivamente as folhas de respostas nas quais os(as) candidatos(as) preenchem a alternativa escolhida (ficha de corre\xe7\xe3o com leitura \xf3tica). Os cadernos de quest\xf5es ser\xe3o eliminados imediatamente ap\xf3s a aplica\xe7\xe3o da prova."\n    }\n  ],\n  "query": "Qual o tempo m\xe1ximo para realiza\xe7\xe3o da prova?",\n  "output_text": "O tempo m\xe1ximo para a realiza\xe7\xe3o da prova da 1\xaa fase \xe9 de 5 (cinco) horas. Al\xe9m disso, pode ser concedido um tempo adicional de at\xe9 20% do tempo regular para candidatos que necessitem, com base em crit\xe9rios neuropsicol\xf3gicos, conforme mencionado no \xa71\xba e na al\xednea c."\n}\n\n'})})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function d(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);