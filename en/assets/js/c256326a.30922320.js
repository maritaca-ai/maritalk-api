"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[481],{8947:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(4848),s=n(8453),r=n(1470),t=n(9365);const l={id:"completion",title:"Chat",hide_table_of_contents:!0},i="Chat",c={id:"pt/completion",title:"Chat",description:"Criar chat completion",source:"@site/api/pt/completion.md",sourceDirName:"pt",slug:"/pt/completion",permalink:"/en/api/pt/completion",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"completion",title:"Chat",hide_table_of_contents:!0},sidebar:"sidebarPt",next:{title:"Chat Response",permalink:"/en/api/pt/completion-response"}},d={},u=[{value:"Criar chat completion",id:"criar-chat-completion",level:2},{value:"Corpo da Requisi\xe7\xe3o",id:"corpo-da-requisi\xe7\xe3o",level:2},{value:'model <code>string</code> <sup class="sup-obrigatorio">Obrigat\xf3rio</sup>',id:"model-string-obrigat\xf3rio",level:3},{value:'messages <code>array</code> <sup class="sup-obrigatorio">Obrigat\xf3rio</sup>',id:"messages-array-obrigat\xf3rio",level:3},{value:'frequency_penalty <code>float ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"frequency_penalty-float-ou-null-opcional",level:3},{value:'max_tokens <code>int ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"max_tokens-int-ou-null-opcional",level:3},{value:'n <code>int ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"n-int-ou-null-opcional",level:3},{value:'presence_penalty <code>float ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"presence_penalty-float-ou-null-opcional",level:3},{value:'stop <code>array</code> <sup class="sup-opcional">Opcional</sup>',id:"stop-array-opcional",level:3},{value:'stream <code>bool ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"stream-bool-ou-null-opcional",level:3},{value:'stream_options <code>object{str: bool} ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"stream_options-objectstr-bool-ou-null-opcional",level:3},{value:'temperature <code>float ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"temperature-float-ou-null-opcional",level:3},{value:'top_p <code>float ou null</code> <sup class="sup-opcional">Opcional</sup>',id:"top_p-float-ou-null-opcional",level:3},{value:'tools <code>array</code> <sup class="sup-opcional">Opcional</sup>',id:"tools-array-opcional",level:3},{value:'tool_choice <code>string ou object</code> <sup class="sup-opcional">Opcional</sup>',id:"tool_choice-string-ou-object-opcional",level:3},{value:"Exemplo de Request",id:"exemplo-de-request",level:3}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"chat",children:"Chat"})}),"\n",(0,a.jsx)(o.h2,{id:"criar-chat-completion",children:"Criar chat completion"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"POST"})," ",(0,a.jsx)(o.code,{children:"https://chat.maritaca.ai/api/chat/completions"})]}),"\n",(0,a.jsx)(o.p,{children:"Este endpoint faz chamada para o modelo para gerar respostas baseadas em entradas especificadas. Aqui est\xe3o os par\xe2metros detalhados e exemplos de uso."}),"\n",(0,a.jsxs)("div",{class:"container",children:[(0,a.jsxs)("div",{class:"container-esquerda",children:[(0,a.jsx)(o.h2,{id:"corpo-da-requisi\xe7\xe3o",children:"Corpo da Requisi\xe7\xe3o"}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"model-string-obrigat\xf3rio",children:["model ",(0,a.jsx)(o.code,{children:"string"})," ",(0,a.jsx)("sup",{class:"sup-obrigatorio",children:"Obrigat\xf3rio"})]}),(0,a.jsxs)(o.p,{children:["Padr\xe3o \xe9 ",(0,a.jsx)(o.code,{children:"sabia-3"}),". Modelo que ir\xe1 gerar a resposta."]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"messages-array-obrigat\xf3rio",children:["messages ",(0,a.jsx)(o.code,{children:"array"})," ",(0,a.jsx)("sup",{class:"sup-obrigatorio",children:"Obrigat\xf3rio"})]}),(0,a.jsx)(o.p,{children:'Mensagens enviadas ao modelo. Espera-se uma lista de mensagens, cada uma com "role" (papel: system, user, assistant ou tool) e "content" (conte\xfado da mensagem). Exemplo:'}),(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'user: "Ol\xe1, qual \xe9 o resultado de 25 + 27?"'}),"\n",(0,a.jsx)(o.li,{children:'assistant: "O resultado \xe9 52."'}),"\n"]}),(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"System message (object)"}),(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"content"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O conte\xfado da mensagem do sistema."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"role"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O papel do autor da mensagem, neste caso ",(0,a.jsx)(o.code,{children:"system"}),"."]}),"\n"]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"User message (object)"}),(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"content"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O conte\xfado da mensagem do usu\xe1rio."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"role"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O papel do autor da mensagem, neste caso ",(0,a.jsx)(o.code,{children:"user"}),"."]}),"\n"]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Assistant message (object)"}),(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"content"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O conte\xfado da resposta do assistente."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"role"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O papel do autor da mensagem, neste caso ",(0,a.jsx)(o.code,{children:"assistant"}),"."]}),"\n"]})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Tool message (object)"}),(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"content"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O conte\xfado da mensagem da ferramenta."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"role"})," (string) ",(0,a.jsx)(o.strong,{children:"Obrigat\xf3rio"}),": O papel do autor da mensagem, neste caso ",(0,a.jsx)(o.code,{children:"tool"}),"."]}),"\n"]})]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"frequency_penalty-float-ou-null-opcional",children:["frequency_penalty ",(0,a.jsx)(o.code,{children:"float ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsxs)(o.p,{children:["Padr\xe3o \xe9 ",(0,a.jsx)(o.code,{children:"0"}),". Intervalo entre -2.0 e 2.0. Valores positivos penalizam tokens com base na frequ\xeancia na conversa, reduzindo a probabilidade de repeti\xe7\xe3o."]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"max_tokens-int-ou-null-opcional",children:["max_tokens ",(0,a.jsx)(o.code,{children:"int ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsx)(o.p,{children:"Define um limite superior para o n\xfamero de tokens gerados na resposta. Controla o custo para o texto gerado via API."}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"n-int-ou-null-opcional",children:["n ",(0,a.jsx)(o.code,{children:"int ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsxs)(o.p,{children:["Padr\xe3o \xe9 ",(0,a.jsx)(o.code,{children:"1"}),". Especifica quantas op\xe7\xf5es de resposta devem ser geradas para cada mensagem de entrada."]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"presence_penalty-float-ou-null-opcional",children:["presence_penalty ",(0,a.jsx)(o.code,{children:"float ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsxs)(o.p,{children:["Padr\xe3o \xe9 ",(0,a.jsx)(o.code,{children:"0"}),". Intervalo de -2.0 a 2.0. Aumenta a probabilidade de novos t\xf3picos na conversa, penalizando repeti\xe7\xf5es."]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"stop-array-opcional",children:["stop ",(0,a.jsx)(o.code,{children:"array"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsx)(o.p,{children:"Lista de tokens que, quando gerados, indicam que o modelo deve parar de gerar tokens."}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"stream-bool-ou-null-opcional",children:["stream ",(0,a.jsx)(o.code,{children:"bool ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsxs)(o.p,{children:["Padr\xe3o \xe9 ",(0,a.jsx)(o.code,{children:"false"}),". Se True, o modelo ser\xe1 executado em modo de streaming, onde tokens ser\xe3o gerados e retornados ao cliente \xe0 medida que s\xe3o gerados. Se False, o modelo ser\xe1 executado em modo de batch, onde todos os tokens ser\xe3o gerados antes de serem retornados ao cliente."]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"stream_options-objectstr-bool-ou-null-opcional",children:["stream_options ",(0,a.jsx)(o.code,{children:"object{str: bool} ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsx)(o.p,{children:"Op\xe7\xf5es para controlar o comportamento do streaming. Usada apenas se stream=True. As op\xe7\xf5es dispon\xedveis atualmente s\xe3o:"}),(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"include_usage"}),": se True, um \xfaltimo chunk ser\xe1 emitido antes do fim da stream contendo a quantidade de tokens da requisi\xe7\xe3o."]}),"\n"]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"temperature-float-ou-null-opcional",children:["temperature ",(0,a.jsx)(o.code,{children:"float ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsxs)(o.p,{children:["Padr\xe3o \xe9 ",(0,a.jsx)(o.code,{children:"0.7"}),". Temperatura de amostragem para gera\xe7\xe3o, com valores mais altos produzindo respostas mais aleat\xf3rias."]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"top_p-float-ou-null-opcional",children:["top_p ",(0,a.jsx)(o.code,{children:"float ou null"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsxs)(o.p,{children:["Padr\xe3o \xe9 ",(0,a.jsx)(o.code,{children:"0.95"}),". Se menor que 1, mant\xe9m apenas os tokens superiores com probabilidade cumulativa >= top_p (filtragem do n\xfacleo). Por exemplo, 0.95 significa que apenas os tokens que comp\xf5em os 95% superiores da massa de probabilidade s\xe3o considerados quando prevendo o pr\xf3ximo token. A filtragem do n\xfacleo \xe9 descrita em ",(0,a.jsx)(o.a,{href:"http://arxiv.org/abs/1904.09751",children:"Holtzman et al."}),"."]}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"tools-array-opcional",children:["tools ",(0,a.jsx)(o.code,{children:"array"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsx)(o.p,{children:"Uma lista de ferramentas que o modelo pode chamar. Use esse par\xe2metro para fornecer uma lista de fun\xe7\xf5es para as quais o modelo pode gerar entradas JSON."}),(0,a.jsx)(o.hr,{}),(0,a.jsxs)(o.h3,{id:"tool_choice-string-ou-object-opcional",children:["tool_choice ",(0,a.jsx)(o.code,{children:"string ou object"})," ",(0,a.jsx)("sup",{class:"sup-opcional",children:"Opcional"})]}),(0,a.jsx)(o.p,{children:"Controla qual (se houver) ferramenta \xe9 chamada pelo modelo."}),(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:'"none"'}),": o modelo n\xe3o chamar\xe1 nenhuma ferramenta e, em vez disso, gerar\xe1 uma mensagem."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:'"auto"'}),": o modelo pode escolher entre gerar uma mensagem ou chamar uma ou mais ferramentas."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:'"required"'}),": o modelo deve chamar uma ou mais ferramentas."]}),"\n"]}),(0,a.jsx)(o.hr,{})]}),(0,a.jsxs)("div",{class:"container-direita",style:{overflowY:"auto",whiteSpace:"nowrap",position:"sticky",top:"0"},children:[(0,a.jsx)(o.h3,{id:"exemplo-de-request",children:"Exemplo de Request"}),(0,a.jsxs)(r.A,{children:[(0,a.jsx)(t.A,{value:"python",label:"Default",default:!0,children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'import openai\n\nclient = openai.OpenAI(\n        api_key=maritaca_key,\n        base_url="https://chat.maritaca.ai/api",\n    )\n\n\ncompletion = client.chat.completions.create(\n  model="sabia-3",\n  messages= [\n    {\n      "role": "system",\n      "content": "Voc\xea \xe9 um assistente de viagens especializado em fornecer informa\xe7\xf5es sobre destinos tur\xedsticos, hot\xe9is, restaurantes e atividades locais."\n    },\n    {\n      "role": "user",\n      "content": "Estou planejando uma viagem para Bahia. Voc\xea poderia me recomendar um ponto tur\xedstico?"\n    }\n  ]\n\n)\n\nprint(completion.choices[0].message)\n\n'})})}),(0,a.jsx)(t.A,{value:"python2",label:"Streaming",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'import openai\n\nclient = openai.OpenAI(\n        api_key=maritaca_key,\n        base_url="https://chat.maritaca.ai/api",\n    )\n\n\ncompletion = client.chat.completions.create(\n  model="sabia-3",\n  messages= [\n    {\n      "role": "system",\n      "content": "Voc\xea \xe9 um assistente de viagens especializado em fornecer informa\xe7\xf5es sobre destinos tur\xedsticos, hot\xe9is, restaurantes e atividades locais."\n    },\n    {\n      "role": "user",\n      "content": "Estou planejando uma viagem para Bahia. Voc\xea poderia me recomendar um ponto tur\xedstico?"\n    }\n  ],\n  stream=True\n)\n\nfor chunk in completion:\n  print(chunk.choices[0].delta)\n'})})}),(0,a.jsx)(t.A,{value:"python3",label:"Functions",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'import openai\n\nclient = openai.OpenAI(\n    api_key=maritaca_key,\n    base_url="https://chat.maritaca.ai/api",\n)\n\n# Definindo a fun\xe7\xe3o que o modelo pode chamar\nfunctions = [\n    {\n        "name": "recommend_tourist_spot",\n        "description": "Recomenda um ponto tur\xedstico na Bahia",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "location": {\n                    "type": "string",\n                    "description": "Local para o qual a recomenda\xe7\xe3o ser\xe1 fornecida, por exemplo, uma cidade ou estado",\n                },\n            },\n            "required": ["location"],\n        },\n    }\n]\n\n# Definindo a conversa e o uso de function_call\ncompletion = client.chat.completions.create(\n    model="sabia-3",\n    messages=[\n        {\n          "role": "system",\n          "content": "Voc\xea \xe9 um assistente de viagens especializado em fornecer informa\xe7\xf5es sobre destinos tur\xedsticos, hot\xe9is, restaurantes e atividades locais."\n        },\n        {\n          "role": "user",\n          "content": "Estou planejando uma viagem para Bahia. Voc\xea poderia me recomendar um ponto tur\xedstico?"\n        }\n    ],\n    tools=functions,\n    tool_choice="required",\n)\n\n# Verifica se choices e tool_calls est\xe3o presentes antes de acess\xe1-los\nif completion.choices and completion.choices[0].message.tool_calls:\n    function_call = completion.choices[0].message.tool_calls[0].function\n    print(f"Fun\xe7\xe3o a ser usada: {function_call.name}, argumentos: {function_call.arguments}")\nelse:\n    print("Nenhuma chamada de fun\xe7\xe3o encontrada.")\n'})})}),(0,a.jsx)(t.A,{value:"python4",label:"Chamada direta para a API",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'import requests\nimport json\n\nbase_url = "https://chat.maritaca.ai/api/chat/completions"\nheaders = {\n    "Authorization": f"Key {api_key}",\n    "Content-Type": "application/json"\n}\n\n# Corpo da requisi\xe7\xe3o\ndata = {\n    "model": "sabia-3",\n    "messages": [\n        {\n            "role": "system",\n            "content": "Voc\xea \xe9 um assistente de viagens especializado em fornecer informa\xe7\xf5es sobre destinos tur\xedsticos, hot\xe9is, restaurantes e atividades locais."\n        },\n        {\n            "role": "user",\n            "content": "Estou planejando uma viagem para Bahia. Voc\xea poderia me recomendar um ponto tur\xedstico?"\n        }\n    ]\n}\n\n# Faz a requisi\xe7\xe3o POST diretamente para a API\nresponse = requests.post(base_url, headers=headers, data=json.dumps(data))\n\n# Verifica o status da resposta e exibe o conte\xfado\nif response.status_code == 200:\n    completion = response.json()\n    print(completion["choices"][0]["message"]["content"])  # Exibe a resposta do modelo\nelse:\n    print(f"Erro: {response.status_code}")\n    print(response.text)\n'})})})]})]})]})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,o,n)=>{n.d(o,{A:()=>t});n(6540);var a=n(4164);const s={tabItem:"tabItem_Ymn6"};var r=n(4848);function t(e){let{children:o,hidden:n,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,t),hidden:n,children:o})}},1470:(e,o,n)=>{n.d(o,{A:()=>_});var a=n(6540),s=n(4164),r=n(3104),t=n(6347),l=n(205),i=n(7485),c=n(1682),d=n(679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:o,children:n}=e;return(0,a.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:n,attributes:a,default:s}}=e;return{value:o,label:n,attributes:a,default:s}}))}(n);return function(e){const o=(0,c.XI)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function m(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function h(e){let{queryString:o=!1,groupId:n}=e;const s=(0,t.W6)(),r=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const o=new URLSearchParams(s.location.search);o.set(r,e),s.replace({...s.location,search:o.toString()})}),[r,s])]}function x(e){const{defaultValue:o,queryString:n=!1,groupId:s}=e,r=p(e),[t,i]=(0,a.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!m({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:r}))),[c,u]=h({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),g=(()=>{const e=c??x;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function b(e){let{className:o,block:n,selectedValue:a,selectValue:t,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const o=e.currentTarget,n=i.indexOf(o),s=l[n].value;s!==a&&(c(o),t(s))},u=e=>{let o=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;o=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;o=i[n]??i[i.length-1];break}}o?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},o),children:l.map((e=>{let{value:o,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===o?0:-1,"aria-selected":a===o,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===o}),children:n??o},o)}))})}function v(e){let{lazy:o,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,o)=>(0,a.cloneElement)(e,{key:o,hidden:e.props.value!==r})))})}function y(e){const o=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...o,...e}),(0,f.jsx)(v,{...o,...e})]})}function _(e){const o=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(o))}},8453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>l});var a=n(6540);const s={},r=a.createContext(s);function t(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);