"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[483],{7387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(4848),i=n(8453),r=n(1470),s=n(9365);const l={id:"openai-compatibility",title:"Compatibility with OpenAI"},o="Compatibility with OpenAI",c={id:"en/maritalk-api/openai-compatibility",title:"Compatibility with OpenAI",description:"Maritaca API is compatible with OpenAI client libraries, making it easy to experiment with our open-source models in existing applications.",source:"@site/docs/en/maritalk-api/openai-compatibility.md",sourceDirName:"en/maritalk-api",slug:"/en/maritalk-api/openai-compatibility",permalink:"/en/maritalk-api/openai-compatibility",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"openai-compatibility",title:"Compatibility with OpenAI"},sidebar:"sidebarEn",previous:{title:"Quick Start",permalink:"/en/maritalk-api/quick-start"},next:{title:"Use Cases",permalink:"/en/use-cases"}},u={},p=[{value:"<strong>Setting Up OpenAI to Use Maritaca API</strong>",id:"setting-up-openai-to-use-maritaca-api",level:3},{value:"Library Installation",id:"library-installation",level:4},{value:"\ud83d\udee0\ufe0f Setting Up the Client",id:"\ufe0f-setting-up-the-client",level:3},{value:"\ud83d\udde8\ufe0f Making a Chat Request",id:"\ufe0f-making-a-chat-request",level:3},{value:"\ud83d\udcbb Making a Request to Complete Input",id:"-making-a-request-to-complete-input",level:3},{value:"\ud83d\udd04 Streaming Chat Request",id:"-streaming-chat-request",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"compatibility-with-openai",children:"Compatibility with OpenAI"})}),"\n",(0,a.jsx)(t.p,{children:"Maritaca API is compatible with OpenAI client libraries, making it easy to experiment with our open-source models in existing applications."}),"\n",(0,a.jsx)(t.p,{children:"This means that Sabi\xe1 models can be used in any program that uses OpenAI libraries."}),"\n",(0,a.jsx)(t.h3,{id:"setting-up-openai-to-use-maritaca-api",children:(0,a.jsx)(t.strong,{children:"Setting Up OpenAI to Use Maritaca API"})}),"\n",(0,a.jsx)(t.h4,{id:"library-installation",children:"Library Installation"}),"\n",(0,a.jsx)(t.p,{children:"First, install the openai library by typing this command in the terminal:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pip install openai\n"})}),"\n",(0,a.jsx)(t.h3,{id:"\ufe0f-setting-up-the-client",children:"\ud83d\udee0\ufe0f Setting Up the Client"}),"\n",(0,a.jsxs)(t.p,{children:["Setting up the OpenAI client is the first step to using the API. Make sure to provide your API key and the custom base URL. That is, to use Maritaca API, simply point the endpoint to ",(0,a.jsx)(t.code,{children:"https://chat.maritaca.ai/api"}),", fill in the API key with a key obtained from the platform (as described in quick start), and use one of the Sabi\xe1 models."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import os\nimport openai\n\nclient = openai.OpenAI(\n    api_key=os.environ.get("MARITACA_API_KEY"),\n    base_url="https://chat.maritaca.ai/api",\n)\n'})}),"\n",(0,a.jsx)(t.h3,{id:"\ufe0f-making-a-chat-request",children:"\ud83d\udde8\ufe0f Making a Chat Request"}),"\n",(0,a.jsx)(t.p,{children:"You can make a chat request to the sabia-3 model by passing a list of messages."}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'response = client.chat.completions.create(\n  model="sabia-3",\n  messages=[\n    {"role": "system", "content": "You are a travel agent. Be descriptive and kind."},\n    {"role": "user", "content": "Tell me about the Christ the Redeemer."},\n  ],\n  max_tokens=8000\n)\n\nprint(response.choices[0].message.content)\n'})})}),(0,a.jsx)(s.A,{value:"curl",label:"cURL",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl https://chat.maritaca.ai/api/chat/completions \\\n  -H "Authorization: Bearer my_key" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "sabia-3",\n    "messages": [{"role": "system", "content": "You are a travel agent. Be descriptive and kind."},\n                 {"role": "user", "content": "Tell me about the Christ the Redeemer."}],\n    "max_tokens": 8000\n  }\'\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"-making-a-request-to-complete-input",children:"\ud83d\udcbb Making a Request to Complete Input"}),"\n",(0,a.jsx)(t.p,{children:"In addition to chats, you can also use the model to complete input, as in the example below:"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'response = client.completions.create(\n  model="sabia-3",\n  prompt="Once upon a time, in a distant kingdom, a young adventurer dreamed of exploring unknown lands. One day, he found a mysterious map that showed the way to a lost treasure",\n  max_tokens=175\n)\n\nprint(response.choices[0].text)\n'})})}),(0,a.jsx)(s.A,{value:"curl",label:"cURL",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl https://chat.maritaca.ai/api/completions \\\n  -H "Authorization: Bearer my_key" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "sabia-3",\n    "prompt": "Once upon a time, in a distant kingdom, a young adventurer dreamed of exploring unknown lands. One day, he found a mysterious map that showed the way to a lost treasure",\n    "max_tokens": 175\n  }\'\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"-streaming-chat-request",children:"\ud83d\udd04 Streaming Chat Request"}),"\n",(0,a.jsx)(t.p,{children:"To receive responses in real time (streaming), you can use the parameter stream=True."}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(s.A,{value:"python",label:"Python",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import os\nimport openai\n\nstream = client.chat.completions.create(\n  model="sabia-3",\n  messages=[\n    {"role": "system", "content": "You are a travel agent. Be descriptive and kind."},\n    {"role": "user", "content": "Tell me about the Christ the Redeemer."},\n  ],\n  stream=True,\n  max_tokens=8000\n)\nfor chunk in stream:\n  print(chunk.choices[0].delta.content or "", end="", flush=True)\n'})})}),(0,a.jsx)(s.A,{value:"curl",label:"cURL",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl https://chat.maritaca.ai/api/chat/completions \\\n  -H "Authorization: Bearer my_key" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "sabia-3",\n    "messages": [{"role": "system", "content": "You are a travel agent. Be descriptive and kind."},\n                 {"role": "user", "content": "Tell me about the Christ the Redeemer."}],\n    "max_tokens": 8000\n  }\'\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const i={tabItem:"tabItem_Ymn6"};var r=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),i=n(4164),r=n(3104),s=n(6347),l=n(205),o=n(7485),c=n(1682),u=n(679);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=d(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,p]=m({queryString:n,groupId:i}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),y=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var g=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==a&&(c(t),s(i))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:p,onClick:u,...r,className:(0,i.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(x,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,f.jsx)(k,{...e,children:p(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);