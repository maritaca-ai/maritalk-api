"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[528],{3744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(74848),i=s(28453);const o={id:"completion-response",title:"Chat Response",sidebar_label:"Chat Response",hide_table_of_contents:!0},r=void 0,c={id:"en/completion-response",title:"Chat Response",description:"---",source:"@site/api/en/completion-response.md",sourceDirName:"en",slug:"/en/completion-response",permalink:"/api/en/completion-response",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"completion-response",title:"Chat Response",sidebar_label:"Chat Response",hide_table_of_contents:!0},sidebar:"sidebarEn",previous:{title:"Chat",permalink:"/api/en/completion"},next:{title:"List Models",permalink:"/api/en/list-models"}},l={},a=[{value:"id  <code>string</code>",id:"id--string",level:3},{value:"choices  <code>array</code>",id:"choices--array",level:3},{value:"created  <code>integer</code>",id:"created--integer",level:3},{value:"model  <code>string</code>",id:"model--string",level:3},{value:"system_fingerprint  <code>string</code>",id:"system_fingerprint--string",level:3},{value:"object  <code>string</code>",id:"object--string",level:3},{value:"usage  <code>object</code>",id:"usage--object",level:3},{value:"Response Example",id:"response-example",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"the-response-object",children:"The Response Object"}),"\n",(0,t.jsx)(n.p,{children:"Represents a chat response returned by the model, based on the provided input."}),"\n",(0,t.jsxs)("div",{class:"container",children:[(0,t.jsxs)("div",{class:"container-left",children:[(0,t.jsxs)(n.h3,{id:"id--string",children:["id  ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsx)(n.p,{children:"A unique identifier for the chat response."}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.h3,{id:"choices--array",children:["choices  ",(0,t.jsx)(n.code,{children:"array"})]}),(0,t.jsxs)(n.p,{children:["A list of chat response choices. There may be more than one if ",(0,t.jsx)(n.code,{children:"n"})," is greater than 1."]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Show properties"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"index:"})," The position of this choice in the list of generated completions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"message:"})," Contains the generated response message with properties:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"role:"})," Specifies the role of the message author (e.g., assistant)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"content:"})," The content of the assistant's response message."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"finish_reason:"}),' Indicates why the model stopped generating, e.g., "stop".']}),"\n"]}),"\n"]}),"\n"]})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.h3,{id:"created--integer",children:["created  ",(0,t.jsx)(n.code,{children:"integer"})]}),(0,t.jsx)(n.p,{children:"The Unix timestamp (in seconds) of when the chat response was created."}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.h3,{id:"model--string",children:["model  ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsx)(n.p,{children:"The model used."}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.h3,{id:"system_fingerprint--string",children:["system_fingerprint  ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsx)(n.p,{children:"This fingerprint represents the backend configuration with which the model is executed. It can be used together with the request seed parameter to understand when backend changes were made that may affect determinism."}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.h3,{id:"object--string",children:["object  ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsxs)(n.p,{children:["The type of object, which is always ",(0,t.jsx)(n.code,{children:"chat.completion"}),"."]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.h3,{id:"usage--object",children:["usage  ",(0,t.jsx)(n.code,{children:"object"})]}),(0,t.jsx)(n.p,{children:"Usage statistics for the response."}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Show properties"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"prompt_tokens:"})," The number of tokens in the input prompt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"completion_tokens:"})," The number of tokens generated in the completion."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"total_tokens:"})," The total number of tokens in the request and completion."]}),"\n"]})]})]}),(0,t.jsxs)("div",{class:"container-right",style:{maxWidth:"40rem",overflowY:"auto",padding:"10px",borderRadius:"5px",whiteSpace:"nowrap",position:"sticky",top:"0"},children:[(0,t.jsx)(n.h3,{id:"response-example",children:"Response Example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'\n{\n  "id": "123abc45-67de-f89g-1011-12h131415i16",\n  "object": "chat_completion",\n  "created": 1730807994,\n  "model": "sabia-3",\n  "choices": [\n    {\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "content": "Certainly! Bahia is a state full of natural and cultural beauties. One of the most famous tourist spots is Pelourinho, located in the city of Salvador. This historic neighborhood is known for its cobblestone streets, colorful buildings, and rich Afro-Brazilian culture. Besides exploring the alleys and visiting museums and churches, you can enjoy local cuisine and watch capoeira performances and live music. Another option is to visit the beaches of Morro de S\xe3o Paulo or the Trancoso area, both known for their natural beauty and tranquility."\n      },\n      "logprobs": null,\n      "finish_reason": "stop"\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 54,\n    "completion_tokens": 538,\n    "total_tokens": 592\n  },\n  "system_fingerprint": "c68cf2ecaa94f232"\n}\n'})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);