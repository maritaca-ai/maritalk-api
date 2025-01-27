"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[702],{4982:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var s=a(4848),n=a(8453);const t={id:"structured-outputs",title:"Sa\xeddas Estruturadas"},r="Sa\xeddas estruturadas",i={id:"pt/structured-outputs",title:"Sa\xeddas Estruturadas",description:"Sa\xeddas Estruturadas garantem que os dados gerados pelos modelos sigam esquemas predefinidos fornecidos pelo usu\xe1rio, como JSON, simplificando integra\xe7\xf5es em aplica\xe7\xf5es. Quando o formato da resposta \xe9 cr\xedtico, estrat\xe9gias como express\xf5es regulares (regex) podem ser usadas, mas essas abordagens s\xe3o frequentemente fr\xe1geis, complexas e incapazes de garantir que todos os campos sejam extra\xeddos de forma precisa e consistente. Por outro lado, Sa\xeddas Estruturadas oferecem uma solu\xe7\xe3o mais confi\xe1vel, reduzindo erros e facilitando a integra\xe7\xe3o direta. Contudo, para casos em que respostas narrativas ou flexibilidade s\xe3o priorit\xe1rias, seu uso n\xe3o \xe9 necess\xe1rio.",source:"@site/docs/pt/structured_outputs.md",sourceDirName:"pt",slug:"/pt/structured-outputs",permalink:"/en/pt/structured-outputs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"structured-outputs",title:"Sa\xeddas Estruturadas"},sidebar:"sidebarPt",previous:{title:"Chamada de fun\xe7\xf5es",permalink:"/en/pt/chamada-funcao"},next:{title:"Embeddings+Sabia-3+RAG",permalink:"/en/pt/embeddings+Sabia-3+RAG"}},d={},l=[{value:"Exemplos de Uso",id:"exemplos-de-uso",level:2},{value:"1. Extra\xe7\xe3o de Dados",id:"1-extra\xe7\xe3o-de-dados",level:3},{value:"2. An\xe1lise de Sentimentos",id:"2-an\xe1lise-de-sentimentos",level:3},{value:"3. Plano de Leitura",id:"3-plano-de-leitura",level:3},{value:"4. Uso com stream",id:"4-uso-com-stream",level:2},{value:"Como usar o par\xe2metro response_format",id:"como-usar-o-par\xe2metro-response_format",level:2},{value:"Boas Pr\xe1ticas",id:"boas-pr\xe1ticas",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"sa\xeddas-estruturadas",children:"Sa\xeddas estruturadas"})}),"\n",(0,s.jsx)(o.p,{children:"Sa\xeddas Estruturadas garantem que os dados gerados pelos modelos sigam esquemas predefinidos fornecidos pelo usu\xe1rio, como JSON, simplificando integra\xe7\xf5es em aplica\xe7\xf5es. Quando o formato da resposta \xe9 cr\xedtico, estrat\xe9gias como express\xf5es regulares (regex) podem ser usadas, mas essas abordagens s\xe3o frequentemente fr\xe1geis, complexas e incapazes de garantir que todos os campos sejam extra\xeddos de forma precisa e consistente. Por outro lado, Sa\xeddas Estruturadas oferecem uma solu\xe7\xe3o mais confi\xe1vel, reduzindo erros e facilitando a integra\xe7\xe3o direta. Contudo, para casos em que respostas narrativas ou flexibilidade s\xe3o priorit\xe1rias, seu uso n\xe3o \xe9 necess\xe1rio."}),"\n",(0,s.jsx)(o.h2,{id:"exemplos-de-uso",children:"Exemplos de Uso"}),"\n",(0,s.jsx)(o.h3,{id:"1-extra\xe7\xe3o-de-dados",children:"1. Extra\xe7\xe3o de Dados"}),"\n",(0,s.jsx)(o.p,{children:"Extraia informa\xe7\xf5es estruturadas de textos n\xe3o estruturados:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'from pydantic import BaseModel\nimport openai\n\nclient = openai.OpenAI(\n    api_key="", #Sua API_KEY\n    base_url="https://chat.maritaca.ai/api",\n)\n\nclass DetalhesEvento(BaseModel):\n    nome_evento: str\n    data: str\n    participantes: list[str]\n    traje: list[str]\n\ncompletion = client.beta.chat.completions.parse(\n    model="sabia-3",\n    messages=[\n        {"role": "system", "content": "Extraia detalhes do evento."},\n        {"role": "user", "content": "Jo\xe3o e Maria v\xe3o a uma festa junina no s\xe1bado, \xe0s 18h, em Campina Grande. Eles v\xe3o vestidos a car\xe1ter: Maria com um vestido florido e Jo\xe3o com camisa xadrez e chap\xe9u de palha."},\n    ],\n    response_format=DetalhesEvento,\n)\n\nevento = completion.choices[0].message.parsed\n\nprint(evento)\n'})}),"\n",(0,s.jsx)(o.h3,{id:"2-an\xe1lise-de-sentimentos",children:"2. An\xe1lise de Sentimentos"}),"\n",(0,s.jsx)(o.p,{children:"Identifique sentimentos em textos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'import openai\n\nclient = openai.OpenAI(\n    api_key="", #Sua API_KEY\n    base_url="https://chat.maritaca.ai/api",\n)\n\nsentimento_schema = {\n    "type": "object",\n    "properties": {\n        "texto": {"type": "string"},\n        "sentimento": {"type": "string", "enum": ["positivo", "negativo", "neutro"]},\n    },\n    "required": ["texto", "sentimento"],\n}\n\ncompletion = client.beta.chat.completions.create(\n    model="sabia-3",\n    messages=[\n        {"role": "system", "content": "Classifique o sentimento do texto em positivo, negativo ou neutro."},\n        {"role": "user", "content": "Estou muito feliz com o servi\xe7o oferecido!"},\n    ],\n    response_format={"type": "json_schema", "json_schema": sentimento_schema}\n)\n\nresultado = completion.choices[0].message["content"]\nprint(resultado)\n'})}),"\n",(0,s.jsx)(o.h3,{id:"3-plano-de-leitura",children:"3. Plano de Leitura"}),"\n",(0,s.jsx)(o.p,{children:"Gere um plano de leitura estruturado com base na solicita\xe7\xe3o do usu\xe1rio, validando os dados com um esquema JSON e exibindo os livros com seus detalhes."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'from enum import Enum\nfrom typing import List, Optional\nfrom pydantic import BaseModel\nimport openai\nimport json\n\nclient = openai.OpenAI(\n    api_key="", #Sua API_KEY\n    base_url="https://chat.maritaca.ai/api",\n)\n\nclass TipoLeitura(str, Enum):\n    classico = "cl\xe1ssico"\n    contemporaneo = "contempor\xe2neo"\n\nclass Livro(BaseModel):\n    tipo: TipoLeitura\n    titulo: str\n    autor: str\n    descricao: str\n\nLivro.model_rebuild() \n\nclass PlanoLeitura(BaseModel):\n    nome_plano: str\n    livros: List[Livro]\n\n\nschema = {\n    "type": "object",\n    "properties": {\n        "nome_plano": {"type": "string"},\n        "livros": {\n            "type": "array",\n            "items": {\n                "type": "object",\n                "properties": {\n                    "tipo": {"type": "string", "enum": ["cl\xe1ssico", "contempor\xe2neo"]},\n                    "titulo": {"type": "string"},\n                    "autor": {"type": "string"},\n                    "descricao": {"type": "string"},\n                    "subitens": {"type": ["array", "null"]}\n                },\n                "required": ["tipo", "titulo", "autor", "descricao"]\n            }\n        }\n    },\n    "required": ["nome_plano", "livros"]\n}\n\ncompletion = client.beta.chat.completions.parse(\n    model="sabia-3",\n    messages=[\n        {"role": "system", "content": "Voc\xea \xe9 um gerador de planos de leitura. Converta a solicita\xe7\xe3o do usu\xe1rio em um plano de leitura estruturado."},\n        {"role": "user", "content": "Crie um plano de leitura para explorar a literatura brasileira, incluindo cl\xe1ssicos e literatura contempor\xe2nea."}\n    ],\n    response_format={"type": "json_schema", "json_schema": schema}\n)\n\nplano_leitura = PlanoLeitura.model_validate(json.loads(completion.choices[0].message.content))\n\nprint("Nome do Plano:", plano_leitura.nome_plano)\nprint("Livros:")\nfor livro in plano_leitura.livros:\n    print(f" - {livro.titulo} por {livro.autor}: {livro.descricao}")\n\n'})}),"\n",(0,s.jsx)(o.h2,{id:"4-uso-com-stream",children:"4. Uso com stream"}),"\n",(0,s.jsx)(o.p,{children:"No caso de uso com stream, as sa\xeddas estruturadas podem ser processadas em tempo real, conforme s\xe3o geradas, proporcionando uma experi\xeancia mais interativa. Esse m\xe9todo \xe9 particularmente vantajoso para lidar com tarefas que envolvem a gera\xe7\xe3o de grandes volumes de dados ou respostas extensas. A seguir, apresentamos um exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'from typing import List, Dict\nfrom pydantic import BaseModel\nimport openai\n\nclass PratosTipicosModel(BaseModel):\n    pratos: List[str]\n\nclient = openai.OpenAI(\n    api_key="", #Sua API_KEY\n    base_url="https://chat.maritaca.ai/api",\n)\n\nwith client.beta.chat.completions.stream(\n    model="sabia-3",\n    messages=[\n        {"role": "system", "content": "Identifique os pratos t\xedpicos brasileiros no texto fornecido."},\n        {\n            "role": "user",\n            "content": "Na festa junina, temos canjica, pamonha, curau e quent\xe3o, al\xe9m de muita m\xfasica e dan\xe7a.",\n        },\n    ],\n    response_format=PratosTipicosModel,\n) as stream:\n    for event in stream:\n        if event.type == "content.delta":\n            if event.parsed is not None:\n                print("content.delta parsed:", event.parsed)\n        elif event.type == "content.done":\n            print("content.done")\n        elif event.type == "error":\n            print("Error in stream:", event.error)\n\nfinal_completion = stream.get_final_completion()\nprint("Final completion:", final_completion)\n\n\n'})}),"\n",(0,s.jsx)(o.h2,{id:"como-usar-o-par\xe2metro-response_format",children:"Como usar o par\xe2metro response_format"}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.code,{children:"response_format"})," \xe9 usado para instruir que as respostas geradas pelo modelo sigam um formato estruturado predefinido. Os valores para o response_format s\xe3o:"]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Schema JSON (json_schema): Defina um esquema JSON para validar a estrutura e os tipos de dados da resposta."}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'response_format={ type: "json_schema", json_schema: {"strict": true, "schema": ...} }\nou\nresponse_format={ type: "json_schema", schema: {...} }\n'})}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsx)(o.li,{children:"Modelos Pydantic: Utilize classes Pydantic para mapear e validar os dados retornados."}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"response_format=ModelPydantic\n"})}),"\n",(0,s.jsxs)(o.ol,{start:"3",children:["\n",(0,s.jsx)(o.li,{children:"Objeto JSON simples tamb\xe9m conhecido por modo json onde \xe9 solicitado um objeto json sem valida\xe7\xf5es adicionais:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'response_format={"type": "json_object"}\n'})}),"\n",(0,s.jsx)(o.h2,{id:"boas-pr\xe1ticas",children:"Boas Pr\xe1ticas"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Defina Esquemas Claros: Use ferramentas como JSON Schema ou Pydantic para projetar esquemas adequados."}),"\n",(0,s.jsx)(o.li,{children:"Valide a Entrada: Certifique-se de que as entradas dos usu\xe1rios sejam compat\xedveis com o esquema."}),"\n",(0,s.jsx)(o.li,{children:"Manuseio de Erros: Inclua l\xf3gica para tratar recusas ou respostas malformadas programaticamente."}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)("div",{className:"custom-box",style:{display:"flex",alignItems:"center",backgroundColor:"#B0E0E6",padding:"10px",border:"1px solid #B0E0E6",borderRadius:"5px",margin:"10px 0",color:"black"},children:[(0,s.jsx)("span",{style:{fontSize:"1.5em",marginRight:"10px",color:"#B0E0E6"},children:"\ud83d\udca1"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{style:{display:"block",fontSize:"1em",marginBottom:"5px"},children:" MODO JSON "}),(0,s.jsx)("p",{style:{fontSize:"0.9em"},children:" O modo JSON apenas garante que a sa\xedda do modelo seja JSON v\xe1lido. J\xe1 o Structured Outputs corresponde de forma confi\xe1vel \xe0 sa\xedda do modelo ao esquema que voc\xea especificar. Recomendamos que voc\xea use o Structured Outputs se ele for suportado para o seu caso de uso. Ao usar o modo JSON, caso a instru\xe7\xe3o de produzir um JSON n\xe3o seja explicitamente passada para o modelo, este pode gerar um fluxo intermin\xe1vel de espa\xe7os em branco, e a solicita\xe7\xe3o pode ser executada continuamente at\xe9 atingir o limite de tokens. "})]})]}),"\n",(0,s.jsx)("br",{})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>r,x:()=>i});var s=a(6540);const n={},t=s.createContext(n);function r(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);