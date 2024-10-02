"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[407],{7022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=t(4848),a=t(8453),r=t(1470),o=t(9365);const i={id:"use-cases",title:"Use Cases"},l="Use Cases",c={id:"en/use-cases",title:"Use Cases",description:"Streaming",source:"@site/docs/en/use-cases.md",sourceDirName:"en",slug:"/en/use-cases",permalink:"/en/use-cases",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"use-cases",title:"Use Cases"},sidebar:"sidebarEn",previous:{title:"Compatibility with OpenAI",permalink:"/en/maritalk-api/openai-compatibility"},next:{title:"Function Calls",permalink:"/en/function-call"}},u={},h=[{value:"Streaming",id:"streaming",level:3},{value:"Generator",id:"generator",level:4},{value:"AsyncGenerator",id:"asyncgenerator",level:4},{value:"Chat Mode",id:"chat-mode",level:2},{value:"Few-shot Examples",id:"few-shot-examples",level:2},{value:"Usage Examples in Other Languages",id:"usage-examples-in-other-languages",level:2},{value:"Integrations",id:"integrations",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"use-cases",children:"Use Cases"})}),"\n",(0,s.jsx)(n.h3,{id:"streaming",children:"Streaming"}),"\n",(0,s.jsx)(n.p,{children:"For long text generation tasks, such as creating an extensive article or translating a large document, it can be advantageous to receive the response in parts as the text is generated, rather than waiting for the full text. This makes the application more responsive and efficient, especially when the generated text is lengthy. We offer two approaches to meet this need: using a generator and an async_generator."}),"\n",(0,s.jsx)(n.h4,{id:"generator",children:"Generator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When using ",(0,s.jsx)(n.code,{children:"stream=True"}),", the code will return a ",(0,s.jsx)(n.code,{children:"generator"}),". This ",(0,s.jsx)(n.code,{children:"generator"})," will provide parts of the response as they are generated by the model, allowing you to print or process the tokens as they are produced."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"for response in model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95,\n    stream=True,\n    num_tokens_per_message=4\n):\n    print(response)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"asyncgenerator",children:"AsyncGenerator"}),"\n",(0,s.jsxs)(n.p,{children:["When using ",(0,s.jsx)(n.code,{children:"stream=True"})," together with ",(0,s.jsx)(n.code,{children:"return_async_generator=True"}),", the code will return an ",(0,s.jsx)(n.code,{children:"AsyncGenerator"}),". This type of generator is designed to be consumed asynchronously, which means you can run the code that consumes the ",(0,s.jsx)(n.code,{children:"AsyncGenerator"})," concurrently with other tasks, improving your processing efficiency."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import asyncio\n\nasync_generator = model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95,\n    stream=True,\n    return_async_generator=True,\n    num_tokens_per_message=4\n)\n\nasync def consume_generator():\n    async for response in async_generator:\n        print(response)\n        # Your code here...\n\nasyncio.run(consume_generator)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"chat-mode",children:"Chat Mode"}),"\n",(0,s.jsxs)(n.p,{children:["You can define a conversation by specifying a list of dictionaries, where each dictionary must have two keys: ",(0,s.jsx)(n.code,{children:"content"})," and ",(0,s.jsx)(n.code,{children:"role"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, the Maritaca API supports three values for ",(0,s.jsx)(n.code,{children:"role"}),': "system" for chatbot instruction messages, "user" for user messages, and "assistant" for assistant messages.']}),"\n",(0,s.jsx)(n.p,{children:"Below is an example of a conversation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'messages = [\n    {"role": "user", "content": "sugira tr\xeas nomes para a minha cachorra"},\n    {"role": "assistant", "content": "nina, bela e luna."},\n    {"role": "user", "content": "e para o meu peixe?"},\n]\n\nanswer = model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95)["answer"]\n\nprint(f"Resposta: {answer}")   # Should print something like "nemo, dory e neptuno."\n'})}),"\n",(0,s.jsx)(n.h2,{id:"few-shot-examples",children:"Few-shot Examples"}),"\n",(0,s.jsx)(n.p,{children:"Although Sabi\xe1 is capable of responding to instructions without any demonstration examples, providing a few examples of the task can significantly improve the quality of its responses."}),"\n",(0,s.jsx)(n.p,{children:"Below we show how this is done for a simple sentiment analysis task, i.e., classifying whether a movie review is positive or negative.\nIn this case, we will pass two few-shot examples, one positive and one negative, and a third example, for which Sabi\xe1 will effectively make the prediction."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'prompt = """Classifique a resenha de filme como "positiva" ou "negativa".\n\nResenha: Gostei muito do filme, \xe9 o melhor do ano!\nClasse: positiva\n\nResenha: O filme deixa muito a desejar.\nClasse: negativa\n\nResenha: Apesar de longo, valeu o ingresso..\nClasse:"""\n\nanswer = model.generate(\n    prompt,\n    chat_mode=False,\n    do_sample=False,\n    max_tokens=20,\n    stopping_tokens=["\\n"]\n)["answer"]\n\nprint(f"Resposta: {answer.strip()}")  # Should print "positiva"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note that we used ",(0,s.jsx)(n.code,{children:"chat_mode=False"}),", as it improves the quality of responses when using few-shot examples."]}),"\n",(0,s.jsxs)(n.p,{children:["The argument ",(0,s.jsx)(n.code,{children:'stopping_tokens=["\\n"]'}),' is used to stop the generation when the token "\\n" is generated. This is necessary because, when not in chat mode, the model may not know when to stop generating.']}),"\n",(0,s.jsxs)(n.p,{children:["For tasks with only one correct answer, such as in the example above, it is recommended to use ",(0,s.jsx)(n.code,{children:"do_sample=False"}),". This ensures that the same response is generated given a specific prompt."]}),"\n",(0,s.jsxs)(n.p,{children:["For tasks involving the generation of diverse or long texts, it is recommended to use ",(0,s.jsx)(n.code,{children:"do_sample=True"})," and ",(0,s.jsx)(n.code,{children:"temperature=0.7"}),'. The higher the temperature, the more diverse the generated texts will be, but there is a higher chance of the model "hallucinating" and generating nonsensical texts. The lower the temperature, the more conservative the response, but there is a risk of generating repeated texts.']}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples-in-other-languages",children:"Usage Examples in Other Languages"}),"\n",(0,s.jsx)(n.p,{children:"Here are examples of how you can integrate Maritaca's API in other languages:"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{value:"JavaScript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const process = require(\'node:process\');\n\nconst CHAT_API_URL = "https://chat.maritaca.ai/api/chat/inference";\n\nif (!process.env.MARITALK_API_KEY) {\n    console.error("Environment variable MARITALT_API_KEY not found!");\n    process.exit(1);\n}\n\nasync function sendChatRequest(message) {\n    try {\n        const params = {\n            messages: [{ "role": "user", "content": message }],\n            do_sample: true,\n            max_tokens: 50,\n            temperature: 0.4,\n            top_p: 0.95,\n            model: "sabia-3",\n        };\n\n        const response = await fetch(CHAT_API_URL, {\n            headers: {\n                "Authorization": `Key ${process.env.MARITALK_API_KEY}`,\n                "Content-Type": "application/json",\n            },\n            method: "POST",\n            body: JSON.stringify(params),\n        });\n\n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n\n        return await response.json();\n    } catch (error) {\n        console.error("Error sending chat request:", error);\n        throw error;\n    }\n}\n\nasync function main() {\n    try {\n        const result = await sendChatRequest(\'Ol\xe1, qual \xe9 seu nome?\');\n        console.log("Response:", result);\n    } catch (error) {\n        console.error("Error in main function:", error);\n    }\n}\n\nmain();\n'})})}),(0,s.jsx)(o.A,{value:"C#",label:"C#",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using OpenAI;\nusing OpenAI.Chat;\nusing System.ClientModel;\n\nnamespace ChatMariTalk\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            //variables\n            string key = "";\n            string model = "sabia-3";\n            string url = "https://chat.maritaca.ai/api";\n            string nameProject = "ExemploUsandoMaritaca";\n\n            //Create the credential using the API access key\n            ApiKeyCredential apiKeyCredential = new ApiKeyCredential(key);\n\n            //Configure the Client for the Maritaca endpoint\n            OpenAIClientOptions openAIClientOptions = new OpenAIClientOptions\n            {\n                Endpoint = new Uri(url),\n                OrganizationId = nameProject,\n                ApplicationId = nameProject,\n                ProjectId = nameProject\n            };\n\n            //Create the ChatClient\n            ChatClient chatClient = new ChatClient(model, apiKeyCredential, openAIClientOptions);\n\n            //Create the chat options\n            ChatCompletionOptions chatOptions = new ChatCompletionOptions\n            {\n                MaxTokens = 255,\n                Temperature = 0.7f,\n            };\n\n            //Create a list to store the chat messages\n            List<ChatMessage> chatMessages = new List<ChatMessage>();\n\n            //Show the menu\n            ShowMenu();\n            do\n            {\n                try\n                {\n                    //User question\n                    string prompt = ShowPrompt();\n\n                    //If the user types \'sair\', the chat ends\n                    if (prompt.ToLower() == "sair")\n                        break;\n\n                    //Create the user message\n                    UserChatMessage userChat = ChatMessage.CreateUserMessage(prompt);\n                    chatMessages.Add(userChat);\n\n                    //Send the question to the API\n                    ChatCompletion chatCompletion = await chatClient.CompleteChatAsync(chatMessages, chatOptions);\n\n                    //Capture the response from the model\n                    AssistantChatMessage assistant = ChatMessage.CreateAssistantMessage(chatCompletion.Content[0].Text);\n                    chatMessages.Add(assistant);\n\n                    //Display the model\'s response\n                    ShowAssistant(assistant);\n                }\n                catch (Exception e)\n                {\n                    ShowError(e);\n                }\n            } while (true);\n\n            ShowSair();\n        }\n\n        static void ShowMenu()\n        {\n            Console.WriteLine(new string(\'-\', 100));\n            Console.WriteLine();\n            Console.WriteLine("Bem-vindo ao Maritaca Chat!");\n            Console.WriteLine();\n            Console.WriteLine(new string(\'-\', 100));\n            Console.WriteLine("Digite \'sair\' para encerrar o chat.");\n            Console.WriteLine();\n            Console.WriteLine();\n            Console.WriteLine();\n        }\n\n        static string ShowPrompt()\n        {\n            Console.ForegroundColor = ConsoleColor.Green;\n            Console.Write($"[{DateTime.Now}] Envie uma mensagem: ");\n            Console.ResetColor();\n            string prompt = Console.ReadLine();\n            if (string.IsNullOrEmpty(prompt))\n            {\n                throw new Exception("Por favor, insira uma mensagem.");\n            }\n            return prompt;\n        }\n\n        static void ShowAssistant(AssistantChatMessage assistant)\n        {\n            Console.ForegroundColor = ConsoleColor.Yellow;\n            Console.WriteLine();\n            Console.Write($"[{DateTime.Now}] Assistente: ");\n            Console.ResetColor();\n            Console.WriteLine(assistant.Content[0].Text);\n            Console.WriteLine();\n        }\n\n        static void ShowError(Exception e)\n        {\n            Console.WriteLine();\n            Console.ForegroundColor = ConsoleColor.Red;\n            Console.Write($"[{DateTime.Now}] Erro: ");\n            Console.ResetColor();\n            Console.WriteLine(e.Message);\n            Console.WriteLine();\n        }\n\n        static void ShowSair()\n        {\n            Console.WriteLine(new string(\'-\', 100));\n            Console.WriteLine();\n            Console.WriteLine("Obrigado por usar o Maritaca Chat!");\n            Console.WriteLine();\n            Console.WriteLine();\n        }\n    }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"integrations",children:"Integrations"}),"\n",(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"20px 0",flexWrap:"wrap"},children:[(0,s.jsxs)("a",{href:"https://docs.llamaindex.ai/en/latest/examples/llm/maritalk/",className:"icon-box",style:{flex:"1 1 200px",margin:"10px",textAlign:"center"},children:[(0,s.jsx)("i",{className:"fas fa-file-alt",style:{fontSize:"2em",marginBottom:"10px"}}),(0,s.jsx)("h3",{children:"LlamaIndex"}),(0,s.jsx)("p",{children:"Maritalk in LlamaIndex."})]}),(0,s.jsxs)("a",{href:"https://python.langchain.com/v0.2/docs/integrations/chat/maritalk/",className:"icon-box",style:{flex:"1 1 200px",margin:"10px",textAlign:"center"},children:[(0,s.jsx)("i",{className:"fas fa-link",style:{fontSize:"2em",marginBottom:"10px"}}),(0,s.jsx)("h3",{children:"LangChain"}),(0,s.jsx)("p",{children:"MariTalk + RAG with LangChain."})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(4164);const a={tabItem:"tabItem_Ymn6"};var r=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>b});var s=t(6540),a=t(4164),r=t(3104),o=t(6347),i=t(205),l=t(7485),c=t(1682),u=t(679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var C=t(4848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==s&&(c(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,C.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,C.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,C.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,C.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,C.jsx)(v,{...n,...e}),(0,C.jsx)(w,{...n,...e})]})}function b(e){const n=(0,f.A)();return(0,C.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);