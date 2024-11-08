"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[776],{85010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(74848),o=t(28453),l=t(89089),a=t(19365);const r={id:"completion",title:"Chat",hide_table_of_contents:!0},i="Chat",c={id:"en/completion",title:"Chat",description:"Create Chat Completion",source:"@site/api/en/completion.md",sourceDirName:"en",slug:"/en/completion",permalink:"/en/api/en/completion",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"completion",title:"Chat",hide_table_of_contents:!0},sidebar:"sidebarEn",next:{title:"Chat Response",permalink:"/en/api/en/completion-response"}},u={},d=[{value:"Create Chat Completion",id:"create-chat-completion",level:2},{value:"Request Body",id:"request-body",level:2},{value:'model <code>string</code> <sup class="sup-obrigatorio">Required</sup>',id:"model-string-required",level:3},{value:'messages <code>array</code> <sup class="sup-obrigatorio">Required</sup>',id:"messages-array-required",level:3},{value:'frequency_penalty <code>float or null</code> <sup class="sup-opcional">Optional</sup>',id:"frequency_penalty-float-or-null-optional",level:3},{value:'max_tokens <code>int or null</code> <sup class="sup-opcional">Optional</sup>',id:"max_tokens-int-or-null-optional",level:3},{value:'n <code>int or null</code> <sup class="sup-opcional">Optional</sup>',id:"n-int-or-null-optional",level:3},{value:'presence_penalty <code>float or null</code> <sup class="sup-opcional">Optional</sup>',id:"presence_penalty-float-or-null-optional",level:3},{value:'stop <code>array</code> <sup class="sup-opcional">Optional</sup>',id:"stop-array-optional",level:3},{value:'stream <code>bool or null</code> <sup class="sup-opcional">Optional</sup>',id:"stream-bool-or-null-optional",level:3},{value:'stream_options <code>object{str: bool} or null</code> <sup class="sup-opcional">Optional</sup>',id:"stream_options-objectstr-bool-or-null-optional",level:3},{value:'temperature <code>float or null</code> <sup class="sup-opcional">Optional</sup>',id:"temperature-float-or-null-optional",level:3},{value:'top_p <code>float or null</code> <sup class="sup-opcional">Optional</sup>',id:"top_p-float-or-null-optional",level:3},{value:'tools <code>array</code> <sup class="sup-opcional">Optional</sup>',id:"tools-array-optional",level:3},{value:'tool_choice <code>string or object</code> <sup class="sup-opcional">Optional</sup>',id:"tool_choice-string-or-object-optional",level:3},{value:"Request Example",id:"request-example",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"chat",children:"Chat"})}),"\n",(0,s.jsx)(n.h2,{id:"create-chat-completion",children:"Create Chat Completion"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"https://chat.maritaca.ai/api/chat/completions"})]}),"\n",(0,s.jsx)(n.p,{children:"This endpoint calls the model to generate responses based on specified inputs. Below are the detailed parameters and usage examples."}),"\n",(0,s.jsxs)("div",{class:"container",children:[(0,s.jsxs)("div",{class:"container-esquerda",children:[(0,s.jsx)(n.h2,{id:"request-body",children:"Request Body"}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"model-string-required",children:["model ",(0,s.jsx)(n.code,{children:"string"})," ",(0,s.jsx)("sup",{class:"sup-obrigatorio",children:"Required"})]}),(0,s.jsxs)(n.p,{children:["Default is ",(0,s.jsx)(n.code,{children:"sabia-3"}),". The model that will generate the response."]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"messages-array-required",children:["messages ",(0,s.jsx)(n.code,{children:"array"})," ",(0,s.jsx)("sup",{class:"sup-obrigatorio",children:"Required"})]}),(0,s.jsx)(n.p,{children:'Messages sent to the model. A list of messages is expected, each with "role" (role: system, user, assistant, or tool) and "content" (content of the message). Example:'}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'user: "Hello, what is the result of 25 + 27?"'}),"\n",(0,s.jsx)(n.li,{children:'assistant: "The result is 52."'}),"\n"]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"System message (object)"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"content"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The content of the system message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"role"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The role of the message author, in this case, ",(0,s.jsx)(n.code,{children:"system"}),"."]}),"\n"]})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"User message (object)"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"content"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The content of the user message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"role"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The role of the message author, in this case, ",(0,s.jsx)(n.code,{children:"user"}),"."]}),"\n"]})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Assistant message (object)"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"content"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The content of the assistant's response."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"role"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The role of the message author, in this case, ",(0,s.jsx)(n.code,{children:"assistant"}),"."]}),"\n"]})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Tool message (object)"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"content"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The content of the tool message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"role"})," (string) ",(0,s.jsx)(n.strong,{children:"Required"}),": The role of the message author, in this case, ",(0,s.jsx)(n.code,{children:"tool"}),"."]}),"\n"]})]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"frequency_penalty-float-or-null-optional",children:["frequency_penalty ",(0,s.jsx)(n.code,{children:"float or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsxs)(n.p,{children:["Default is ",(0,s.jsx)(n.code,{children:"0"}),". Range is from -2.0 to 2.0. Positive values penalize tokens based on frequency in the conversation, reducing repetition probability."]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"max_tokens-int-or-null-optional",children:["max_tokens ",(0,s.jsx)(n.code,{children:"int or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsx)(n.p,{children:"Sets an upper limit on the number of tokens generated in the response, controlling the cost for the text generated via the API."}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"n-int-or-null-optional",children:["n ",(0,s.jsx)(n.code,{children:"int or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsxs)(n.p,{children:["Default is ",(0,s.jsx)(n.code,{children:"1"}),". Specifies how many response options should be generated for each input message."]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"presence_penalty-float-or-null-optional",children:["presence_penalty ",(0,s.jsx)(n.code,{children:"float or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsxs)(n.p,{children:["Default is ",(0,s.jsx)(n.code,{children:"0"}),". Range from -2.0 to 2.0. Increases the probability of new topics in the conversation by penalizing repetitions."]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"stop-array-optional",children:["stop ",(0,s.jsx)(n.code,{children:"array"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsx)(n.p,{children:"List of tokens that, when generated, indicate that the model should stop generating tokens."}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"stream-bool-or-null-optional",children:["stream ",(0,s.jsx)(n.code,{children:"bool or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsxs)(n.p,{children:["Default is ",(0,s.jsx)(n.code,{children:"false"}),". If True, the model will run in streaming mode, where tokens are generated and returned to the client as they are created. If False, the model will operate in batch mode, generating all tokens before returning them to the client."]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"stream_options-objectstr-bool-or-null-optional",children:["stream_options ",(0,s.jsx)(n.code,{children:"object{str: bool} or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsx)(n.p,{children:"Options to control streaming behavior, used only if stream=True. Available options are:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"include_usage"}),": if True, a final chunk will be emitted before the end of the stream containing the request's token count."]}),"\n"]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"temperature-float-or-null-optional",children:["temperature ",(0,s.jsx)(n.code,{children:"float or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsxs)(n.p,{children:["Default is ",(0,s.jsx)(n.code,{children:"0.7"}),". Sampling temperature for generation, with higher values producing more random responses."]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"top_p-float-or-null-optional",children:["top_p ",(0,s.jsx)(n.code,{children:"float or null"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsxs)(n.p,{children:["Default is ",(0,s.jsx)(n.code,{children:"0.95"}),". If less than 1, only the top tokens with cumulative probability >= top_p are kept (nucleus sampling). For example, 0.95 means that only the tokens that make up the top 95% of the probability mass are considered when predicting the next token. Nucleus sampling is described in ",(0,s.jsx)(n.a,{href:"http://arxiv.org/abs/1904.09751",children:"Holtzman et al."}),"."]}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"tools-array-optional",children:["tools ",(0,s.jsx)(n.code,{children:"array"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsx)(n.p,{children:"A list of tools the model can call. Use this parameter to provide a list of functions for which the model can generate JSON inputs."}),(0,s.jsx)(n.hr,{}),(0,s.jsxs)(n.h3,{id:"tool_choice-string-or-object-optional",children:["tool_choice ",(0,s.jsx)(n.code,{children:"string or object"})," ",(0,s.jsx)("sup",{class:"sup-opcional",children:"Optional"})]}),(0,s.jsx)(n.p,{children:"Controls which (if any) tool the model calls."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"none"'}),": the model will not call any tool and will instead generate a message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"auto"'}),": the model can choose between generating a message or calling one or more tools."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"required"'}),": the model must call one or more tools."]}),"\n"]}),(0,s.jsx)(n.hr,{})]}),(0,s.jsxs)("div",{class:"container-direita",style:{overflowY:"auto",whiteSpace:"nowrap",position:"sticky",top:"0"},children:[(0,s.jsx)(n.h3,{id:"request-example",children:"Request Example"}),(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"python",label:"Default",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import openai\n\nclient = openai.OpenAI(\n        api_key=maritaca_key,\n        base_url="https://chat.maritaca.ai/api",\n    )\n\n\ncompletion = client.chat.completions.create(\n  model="sabia-3",\n  messages= [\n    {\n      "role": "system",\n      "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities."\n    },\n    {\n      "role": "user",\n      "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?"\n    }\n  ]\n\n)\n\nprint(completion.choices[0].message)\n\n'})})}),(0,s.jsx)(a.A,{value:"python2",label:"Streaming",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'python import openai\nclient = openai.OpenAI( api_key=maritaca_key, base_url="https://chat.maritaca.ai/api", )\n\ncompletion = client.chat.completions.create(\n  model="sabia-3", \n  messages= \n  [ \n    { "role": "system", "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities." }, \n    { "role": "user", "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?" } \n  ], \n  stream=True \n)\n\nfor chunk in completion: \n  print(chunk.choices[0].delta)\n'})})}),(0,s.jsx)(a.A,{value:"python3",label:"Functions",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import openai\n\nclient = openai.OpenAI(\n    api_key=maritaca_key,\n    base_url="https://chat.maritaca.ai/api",\n)\n\n# Define the function the model can call\nfunctions = [\n    {\n        "name": "recommend_tourist_spot",\n        "description": "Recommends a tourist spot in Bahia",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "location": {\n                    "type": "string",\n                    "description": "Location for the recommendation, e.g., a city or state",\n                },\n            },\n            "required": ["location"],\n        },\n    }\n]\n\n# Define the conversation and use of function_call\ncompletion = client.chat.completions.create(\n    model="sabia-3",\n    messages=[\n        {\n          "role": "system",\n          "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities."\n        },\n        {\n          "role": "user",\n          "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?"\n        }\n    ],\n    tools=functions,\n    tool_choice="required",\n)\n\n# Check if choices and tool_calls are present before accessing them\nif completion.choices and completion.choices[0].message.tool_calls:\n    function_call = completion.choices[0].message.tool_calls[0].function\n    print(f"Function to be used: {function_call.name}, arguments: {function_call.arguments}")\nelse:\n    print("No function call found.")\n'})})}),(0,s.jsx)(a.A,{value:"python4",label:"Direct API call",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\n\nbase_url = "https://chat.maritaca.ai/api/chat/completions"\nheaders = {\n    "Authorization": f"Key {api_key}",\n    "Content-Type": "application/json"\n}\n\n# Request body\ndata = {\n    "model": "sabia-3",\n    "messages": [\n        {\n            "role": "system",\n            "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities."\n        },\n        {\n            "role": "user",\n            "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?"\n        }\n    ]\n}\n\n# Makes the POST request directly to the API\nresponse = requests.post(base_url, headers=headers, data=json.dumps(data))\n\n# Check the response status and display the content\nif response.status_code == 200:\n    completion = response.json()\n    print(completion["choices"][0]["message"]["content"])  # Display the model\'s response\nelse:\n    print(f"Error: {response.status_code}")\n    print(response.text)\n'})})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const o={tabItem:"tabItem_Ymn6"};var l=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,a),hidden:t,children:n})}},89089:(e,n,t)=>{t.d(n,{A:()=>_});var s=t(96540),o=t(34164),l=t(23104),a=t(56347),r=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,l=p(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,u.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),f=(()=>{const e=c??x;return h({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,l]),tabValues:l}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:r}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=r[t].value;o!==s&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function _(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const o={},l=s.createContext(o);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);