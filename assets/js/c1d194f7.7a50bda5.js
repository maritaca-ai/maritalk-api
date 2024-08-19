"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[788],{2283:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(4848),r=n(8453),i=n(1470),o=n(9365);const s={id:"openai-compatibilidade",title:"Compatibilidade com a OpenAI"},l="Compatibilidade com a OpenAI",c={id:"pt/maritalk-api/openai-compatibilidade",title:"Compatibilidade com a OpenAI",description:"A Maritaca API \xe9 compat\xedvel com as bibliotecas de clientes da OpenAI, tornando f\xe1cil experimentar nossos modelos de c\xf3digo aberto em aplica\xe7\xf5es existentes.",source:"@site/docs/pt/maritalk-api/openai-compatibilidade.md",sourceDirName:"pt/maritalk-api",slug:"/pt/maritalk-api/openai-compatibilidade",permalink:"/pt/maritalk-api/openai-compatibilidade",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"openai-compatibilidade",title:"Compatibilidade com a OpenAI"},sidebar:"sidebarPt",previous:{title:"Come\xe7o R\xe1pido",permalink:"/pt/maritalk-api/comeco-rapido"},next:{title:"Casos de Uso",permalink:"/pt/casos-de-uso"}},u={},d=[{value:"<strong>Configurando a OpenAI para usar a Maritaca API</strong>",id:"configurando-a-openai-para-usar-a-maritaca-api",level:3},{value:"Intala\xe7\xe3o da biblioteca",id:"intala\xe7\xe3o-da-biblioteca",level:4},{value:"\ud83d\udee0\ufe0f Configurando o Cliente",id:"\ufe0f-configurando-o-cliente",level:3},{value:"\ud83d\udde8\ufe0f Realizando uma Requisi\xe7\xe3o de Chat",id:"\ufe0f-realizando-uma-requisi\xe7\xe3o-de-chat",level:3},{value:"\ud83d\udcbb Realizando uma requisi\xe7\xe3o para completar entrada",id:"-realizando-uma-requisi\xe7\xe3o-para-completar-entrada",level:3},{value:"\ud83d\udd04 Requisi\xe7\xe3o de Chat com Streaming",id:"-requisi\xe7\xe3o-de-chat-com-streaming",level:3}];function p(e){const a={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"compatibilidade-com-a-openai",children:"Compatibilidade com a OpenAI"})}),"\n",(0,t.jsx)(a.p,{children:"A Maritaca API \xe9 compat\xedvel com as bibliotecas de clientes da OpenAI, tornando f\xe1cil experimentar nossos modelos de c\xf3digo aberto em aplica\xe7\xf5es existentes."}),"\n",(0,t.jsx)(a.p,{children:"Isso significa que os modelos Sabi\xe1 podem ser utilizados em qualquer programa que use as bibliotecas da OpenAI."}),"\n",(0,t.jsx)(a.h3,{id:"configurando-a-openai-para-usar-a-maritaca-api",children:(0,t.jsx)(a.strong,{children:"Configurando a OpenAI para usar a Maritaca API"})}),"\n",(0,t.jsx)(a.h4,{id:"intala\xe7\xe3o-da-biblioteca",children:"Intala\xe7\xe3o da biblioteca"}),"\n",(0,t.jsx)(a.p,{children:"Primeiro instale a biblioteca da openai digitando este comando no terminal:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pip install openai\n"})}),"\n",(0,t.jsx)(a.h3,{id:"\ufe0f-configurando-o-cliente",children:"\ud83d\udee0\ufe0f Configurando o Cliente"}),"\n",(0,t.jsxs)(a.p,{children:["A configura\xe7\xe3o do cliente OpenAI \xe9 o primeiro passo para utilizar a API. Certifique-se de fornecer sua chave de API e a URL base personalizada. Ou seja, para utilizar a Maritaca API, basta apontar o endpoint para ",(0,t.jsx)(a.code,{children:"https://chat.maritaca.ai/api"}),", preencher a chave de API com uma chave obtida na plataforma (como descrito em in\xedcio r\xe1pido) e usar um dos modelos Sabi\xe1."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'import os\nimport openai\n\nclient = openai.OpenAI(\n    api_key=os.environ.get("MARITACA_API_KEY"),\n    base_url="https://chat.maritaca.ai/api",\n)\n'})}),"\n",(0,t.jsx)(a.h3,{id:"\ufe0f-realizando-uma-requisi\xe7\xe3o-de-chat",children:"\ud83d\udde8\ufe0f Realizando uma Requisi\xe7\xe3o de Chat"}),"\n",(0,t.jsx)(a.p,{children:"Voc\xea pode fazer uma requisi\xe7\xe3o de chat para o modelo sabia-3 passando uma lista de mensagens."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'response = client.chat.completions.create(\n  model="sabia-3",\n  messages=[\n    {"role": "system", "content": "Voc\xea \xe9 um agente de viagem. Seja descritivo e gentil."},\n    {"role": "user", "content": "Me fale sobre o Cristo Redentor"},\n  ],\n  max_tokens=50\n)\n\nprint(response.choices[0].message.content)\n'})})}),(0,t.jsx)(o.A,{value:"curl",label:"cURL",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'curl https://chat.maritaca.ai/api/chat/completions \\\n  -H "Authorization: Bearer minha_chave" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "sabia-3",\n    "messages": [{"role": "system", "content": "Voc\xea \xe9 um agente de viagem. Seja descritivo e gentil."},\n                 {"role": "user", "content": "Me fale sobre o Cristo Redentor"}],\n    "max_tokens": 50\n  }\'\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"-realizando-uma-requisi\xe7\xe3o-para-completar-entrada",children:"\ud83d\udcbb Realizando uma requisi\xe7\xe3o para completar entrada"}),"\n",(0,t.jsx)(a.p,{children:"Al\xe9m de chats, voc\xea tamb\xe9m pode utilizar o modelo para completar a entrada, como no exemplo abaixo:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'response = client.completions.create(\n  model="sabia-3",\n  prompt="""def menu_principal():\n  print("Bem-vindo ao Receitas Brasileiras!")\n  print("Escolha uma das op\xe7\xf5es abaixo para ver a receita:")\n  print("1. Feijoada") """,\n  max_tokens=175\n)\nprint(response.choices[0].text)\n'})})}),(0,t.jsx)(o.A,{value:"curl",label:"cURL",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'curl https://chat.maritaca.ai/api/completions \\\n  -H "Authorization: Bearer minha_chave" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "sabia-3",\n    "prompt": "def menu_principal():\\n  print(\\"Bem-vindo ao Receitas Brasileiras!\\")\\n  print(\\"Escolha uma das op\xe7\xf5es abaixo para ver a receita:\\")\\n  print(\\"1. Feijoada\\")",\n    "max_tokens": 175\n  }\'\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"-requisi\xe7\xe3o-de-chat-com-streaming",children:"\ud83d\udd04 Requisi\xe7\xe3o de Chat com Streaming"}),"\n",(0,t.jsx)(a.p,{children:"Para receber as respostas em tempo real (streaming), voc\xea pode utilizar o par\xe2metro stream=True."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'import os\nimport openai\n\nstream = client.chat.completions.create(\n  model="sabia-3",\n  messages=[\n    {"role": "system", "content": "Voc\xea \xe9 um agente de viagem. Seja descritivo e gentil."},\n    {"role": "user", "content": "Me fale sobre o Cristo Redentor"},\n  ],\n  stream=True,\n  max_tokens=50\n)\nfor chunk in stream:\n  print(chunk.choices[0].delta.content or "", end="", flush=True)\n'})})}),(0,t.jsx)(o.A,{value:"curl",label:"cURL",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'curl https://chat.maritaca.ai/api/chat/completions \\\n  -H "Authorization: Bearer minha_chave" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "sabia-3",\n    "messages": [{"role": "system", "content": "Voc\xea \xe9 um agente de viagem. Seja descritivo e gentil."},\n                 {"role": "user", "content": "Me fale sobre o Cristo Redentor"}],\n    "max_tokens": 50\n  }\'\n'})})})]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,a,n)=>{n.d(a,{A:()=>o});n(6540);var t=n(4164);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function o(e){let{children:a,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:n,children:a})}},1470:(e,a,n)=>{n.d(a,{A:()=>I});var t=n(6540),r=n(4164),i=n(3104),o=n(6347),s=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})}),[i,r])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,i=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:i}))),[c,d]=h({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,i]=(0,u.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=c??b;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:a,block:n,selectedValue:t,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const a=e.currentTarget,n=l.indexOf(a),r=s[n].value;r!==t&&(c(a),o(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=l[n]??l[l.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function A(e){const a=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...a,...e}),(0,v.jsx)(j,{...a,...e})]})}function I(e){const a=(0,f.A)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(a))}},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>s});var t=n(6540);const r={},i=t.createContext(r);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);