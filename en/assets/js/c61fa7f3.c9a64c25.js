"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[36],{4457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(4848),s=n(8453);const r={id:"glossary",title:"Glossary"},a="Glossary",o={id:"en/glossary",title:"Glossary",description:"Tokens",source:"@site/docs/en/glossary.md",sourceDirName:"en",slug:"/en/glossary",permalink:"/en/en/glossary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"sidebarEn",previous:{title:"Embeddings+Sabia-3+RAG",permalink:"/en/en/embeddings+Sabia-3+RAG"},next:{title:"System Status",permalink:"/en/en/status"}},l={},d=[{value:"<strong>Tokens</strong>",id:"tokens",level:2},{value:"Why are tokens important?",id:"why-are-tokens-important",level:3},{value:"<strong>Context (Context Window)</strong>",id:"context-context-window",level:2},{value:"Importance of Context Window Size",id:"importance-of-context-window-size",level:3},{value:"Limitations",id:"limitations",level:3},{value:"<strong>Temperature</strong>",id:"temperature",level:2},{value:"<strong>TTFT (Time to First Token)</strong>",id:"ttft-time-to-first-token",level:2},{value:"What influences TTFT?",id:"what-influences-ttft",level:3},{value:"<strong>Rate Limit</strong>",id:"rate-limit",level:2},{value:"Why is rate limit important?",id:"why-is-rate-limit-important",level:3},{value:"How does rate limit affect API usage?",id:"how-does-rate-limit-affect-api-usage",level:3},{value:"Where can I find the rate limits?",id:"where-can-i-find-the-rate-limits",level:3},{value:"What should I do if I reach the rate limit?",id:"what-should-i-do-if-i-reach-the-rate-limit",level:3}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"glossary",children:"Glossary"})}),"\n",(0,i.jsx)(t.h2,{id:"tokens",children:(0,i.jsx)(t.strong,{children:"Tokens"})}),"\n",(0,i.jsxs)(t.p,{children:["Tokens are the fundamental units that language models use to process text. They represent sequences of characters that make up written language.\nA ",(0,i.jsx)(t.strong,{children:"token"})," can be an entire word, part of a word, a single character, or a sequence of special characters.\nFor example, the word ",(0,i.jsx)(t.strong,{children:'"tokenization"'})," can be divided into ",(0,i.jsx)(t.strong,{children:'"token"'})," and ",(0,i.jsx)(t.strong,{children:'"ization"'}),". On average, a token corresponds to approximately 4 characters."]}),"\n",(0,i.jsx)(t.h3,{id:"why-are-tokens-important",children:"Why are tokens important?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Processing Limitation"}),": The amount of text a model can process is limited by the number of tokens it can handle at once, known as the ",(0,i.jsx)(t.strong,{children:"'context window'"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cost Calculation"}),": Costs are calculated based on the number of tokens processed and are charged per million tokens."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"context-context-window",children:(0,i.jsx)(t.strong,{children:"Context (Context Window)"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"context window"})," refers to the amount of text that a language model can take into account at once when generating a new response. It works like the capacity to remember details when telling a story. When someone explains an event that happened during the day, if they can remember many details from the beginning, they can tell the story in a complete and well-connected way. But if they only recall the last moments, the story may be incomplete or nonsensical."]}),"\n",(0,i.jsx)(t.p,{children:'Similarly, in a language model, the context window determines how many previous details it can "remember" when creating a new response. The larger this window, the more context the model has to generate a rich and accurate response. If the window is smaller, it can only consider a limited part of the information, which can affect the quality of the response.'}),"\n",(0,i.jsx)(t.h3,{id:"importance-of-context-window-size",children:"Importance of Context Window Size"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Larger Context Window"}),": Allows the model to understand and respond to more complex and extensive prompts."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Smaller Context Window"}),": Can limit the model's ability to handle long prompts or maintain coherence in prolonged conversations."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For ",(0,i.jsx)(t.strong,{children:"text generation models"}),", the sum of the prompt size and the generated output must not exceed the maximum length of the context window."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"temperature",children:(0,i.jsx)(t.strong,{children:"Temperature"})}),"\n",(0,i.jsx)(t.p,{children:"Temperature is a parameter that controls the level of randomness in the responses of a language model during text generation."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Higher temperatures"})," result in more creative and varied responses. For instance, when asking the model to continue a story, it may generate different and unexpected endings. This is useful when originality is sought, such as in fiction writing, where multiple possibilities and surprises are desired."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Lower temperatures"}),", on the other hand, produce more predictable and conservative responses. In this case, the model tends to follow the most likely and safe path, repeating common language patterns. This is ideal for tasks that require consistent and reliable responses, such as when evaluating the performance of a model in a specific scenario."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Adjusting the temperature is crucial to finding the right balance between creativity and accuracy, depending on the purpose of the task. In activities such as story creation, dialogues, or any other type of content where originality is important, properly setting the temperature can be the key to achieving the desired outcome. On the other hand, when precision and consistency are more important, a lower temperature helps ensure that responses are clear and predictable."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"ttft-time-to-first-token",children:(0,i.jsx)(t.strong,{children:"TTFT (Time to First Token)"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Time to First Token (TTFT)"})," measures how quickly a language model begins to respond after receiving a prompt. A low TTFT indicates that the model responds quickly, which is essential for a fluid user experience, especially in chatbots and real-time systems."]}),"\n",(0,i.jsx)(t.h3,{id:"what-influences-ttft",children:"What influences TTFT?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Model Size"}),": Larger models may be slower."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Hardware"}),": More powerful computers reduce TTFT."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Network Conditions"}),": Slow internet increases TTFT."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Prompt Length"}),": Longer prompts increase TTFT."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"rate-limit",children:(0,i.jsx)(t.strong,{children:"Rate Limit"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Rate limit"})," is a common practice in API services to prevent overuse and ensure the stability and equitable distribution of server resources among users. It sets a limit on the number of requests a user or system can make within a given period."]}),"\n",(0,i.jsx)(t.h3,{id:"why-is-rate-limit-important",children:"Why is rate limit important?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Service Stability"}),": Prevents overloads that can be caused by many simultaneous requests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Fair Usage"}),": Ensures that all users have fair access to the service, preventing one user from monopolizing resources."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Security"}),": Helps identify and mitigate potential denial of service (DoS) attacks."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"how-does-rate-limit-affect-api-usage",children:"How does rate limit affect API usage?"}),"\n",(0,i.jsx)(t.p,{children:"Once the request limit is reached, subsequent calls may be rejected or result in error messages. Thus, developers need to monitor and manage their API calls to avoid exceeding the limit."}),"\n",(0,i.jsx)(t.p,{children:"In Maritaca's API, there are three types of rate limit:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Maximum number of input tokens (prompt), sent per minute"}),"\n",(0,i.jsx)(t.li,{children:"Maximum number of generated tokens per minute"}),"\n",(0,i.jsx)(t.li,{children:"Maximum number of requests per minute, regardless of prompt size or generated tokens."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"where-can-i-find-the-rate-limits",children:"Where can I find the rate limits?"}),"\n",(0,i.jsxs)(t.p,{children:["The rate limits for each model are available at ",(0,i.jsx)(t.a,{href:"https://plataforma.maritaca.ai/modelos",children:"https://plataforma.maritaca.ai/modelos"})]}),"\n",(0,i.jsx)(t.h3,{id:"what-should-i-do-if-i-reach-the-rate-limit",children:"What should I do if I reach the rate limit?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Adjust Request Frequency"}),": Space out API calls to stay within the allowed limit."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Increase the Limit"}),": If you need higher rate limits, please send us a message to ",(0,i.jsx)(t.a,{href:"mailto:suporte@maritaca.ai",children:"suporte@maritaca.ai"})]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);