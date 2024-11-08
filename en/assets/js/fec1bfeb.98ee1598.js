"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[929],{111:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var n=o(74848),r=o(28453);const t={id:"completion-response",title:"Chat Response",sidebar_label:"Chat Response",hide_table_of_contents:!0},i=void 0,a={id:"pt/completion-response",title:"Chat Response",description:"---",source:"@site/api/pt/completion-response.md",sourceDirName:"pt",slug:"/pt/completion-response",permalink:"/en/api/pt/completion-response",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"completion-response",title:"Chat Response",sidebar_label:"Chat Response",hide_table_of_contents:!0},sidebar:"sidebarPt",previous:{title:"Chat",permalink:"/en/api/pt/completion"},next:{title:"Listar Modelos",permalink:"/en/api/pt/list-models"}},d={},c=[{value:"id  <code>string</code>",id:"id--string",level:3},{value:"choices  <code>array</code>",id:"choices--array",level:3},{value:"created  <code>integer</code>",id:"created--integer",level:3},{value:"model  <code>string</code>",id:"model--string",level:3},{value:"system_fingerprint  <code>string</code>",id:"system_fingerprint--string",level:3},{value:"object  <code>string</code>",id:"object--string",level:3},{value:"usage  <code>object</code>",id:"usage--object",level:3},{value:"Exemplo de Response",id:"exemplo-de-response",level:3}];function l(e){const s={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h1,{id:"o-objeto-de-resposta",children:"O objeto de resposta"}),"\n",(0,n.jsx)(s.p,{children:"Representa uma resposta de chat retornada pelo modelo, baseada na entrada fornecida."}),"\n",(0,n.jsxs)("div",{class:"container",children:[(0,n.jsxs)("div",{class:"container-esquerda",children:[(0,n.jsxs)(s.h3,{id:"id--string",children:["id  ",(0,n.jsx)(s.code,{children:"string"})]}),(0,n.jsx)(s.p,{children:"Um identificador \xfanico para a resposta do chat."}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.h3,{id:"choices--array",children:["choices  ",(0,n.jsx)(s.code,{children:"array"})]}),(0,n.jsx)(s.p,{children:"Uma lista de escolhas de respostas de chat. Pode ser mais de uma se n for maior que 1."}),(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Mostrar propriedades"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"index:"})," A posi\xe7\xe3o desta escolha na lista de conclus\xf5es geradas."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"message:"})," Cont\xe9m a mensagem de resposta gerada, com propriedades:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"role:"})," Especifica o papel do autor da mensagem (por exemplo, assistant)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"content:"})," O conte\xfado da mensagem de resposta do assistente."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"finish_reason:"}),' Indica por que o modelo parou de gerar, por exemplo, "stop".']}),"\n"]}),"\n"]}),"\n"]})]}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.h3,{id:"created--integer",children:["created  ",(0,n.jsx)(s.code,{children:"integer"})]}),(0,n.jsx)(s.p,{children:"O timestamp Unix (em segundos) de quando a resposta do chat foi criada."}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.h3,{id:"model--string",children:["model  ",(0,n.jsx)(s.code,{children:"string"})]}),(0,n.jsx)(s.p,{children:"O modelo utilizado."}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.h3,{id:"system_fingerprint--string",children:["system_fingerprint  ",(0,n.jsx)(s.code,{children:"string"})]}),(0,n.jsx)(s.p,{children:"Este impress\xe3o digital representa a configura\xe7\xe3o do backend com a qual o modelo \xe9 executado. Pode ser usado em conjunto com o par\xe2metro de solicita\xe7\xe3o seed para entender quando altera\xe7\xf5es foram feitas no backend que podem afetar a determin\xedstica."}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.h3,{id:"object--string",children:["object  ",(0,n.jsx)(s.code,{children:"string"})]}),(0,n.jsx)(s.p,{children:"O tipo de objeto, que \xe9 sempre chat.completion."}),(0,n.jsx)(s.hr,{}),(0,n.jsxs)(s.h3,{id:"usage--object",children:["usage  ",(0,n.jsx)(s.code,{children:"object"})]}),(0,n.jsx)(s.p,{children:"Estat\xedsticas de uso para a resposta."}),(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Mostrar propriedades"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"prompt_tokens:"})," O n\xfamero de tokens no prompt de entrada."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"completion_tokens:"})," O n\xfamero de tokens gerados na conclus\xe3o."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"total_tokens:"})," O n\xfamero total de tokens na solicita\xe7\xe3o e na conclus\xe3o."]}),"\n"]})]})]}),(0,n.jsxs)("div",{class:"container-direita",style:{maxWidth:"40rem",overflowY:"auto",padding:"10px",borderRadius:"5px",whiteSpace:"nowrap",position:"sticky",top:"0"},children:[(0,n.jsx)(s.h3,{id:"exemplo-de-response",children:"Exemplo de Response"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'\n{\n  "id": "123abc45-67de-f89g-1011-12h131415i16",\n  "object": "chat_completion",\n  "created": 1730807994,\n  "model": "sabia-3",\n  "choices": [\n    {\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "content": "Certamente! A Bahia \xe9 um estado cheio de belezas naturais e culturais. Um dos pontos tur\xedsticos mais famosos \xe9 o Pelourinho, localizado na cidade de Salvador. Este bairro hist\xf3rico \xe9 conhecido por suas ruas de paralelep\xedpedos, pr\xe9dios coloridos e pela rica cultura afro-brasileira. Al\xe9m de explorar as vielas e visitar museus e igrejas, voc\xea pode desfrutar da culin\xe1ria local e assistir a apresenta\xe7\xf5es de capoeira e m\xfasica ao vivo. Outra op\xe7\xe3o \xe9 visitar as praias de Morro de S\xe3o Paulo ou a regi\xe3o de Trancoso, ambas conhecidas por sua beleza natural e tranquilidade."\n      },\n      "logprobs": None,\n      "finish_reason": "stop"\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 54,\n    "completion_tokens": 538,\n    "total_tokens": 592,\n  },\n  "system_fingerprint": "c68cf2ecaa94f232"\n}\n\n'})})]})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>a});var n=o(96540);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);