"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[576],{9893:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=a(4848),o=a(8453),r=a(1470),t=a(9365);const i={id:"casos-de-uso",title:"Casos de Uso"},l="Casos de Uso",c={id:"pt/casos-de-uso",title:"Casos de Uso",description:"Streaming",source:"@site/docs/pt/casos-de-uso.md",sourceDirName:"pt",slug:"/pt/casos-de-uso",permalink:"/pt/casos-de-uso",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"casos-de-uso",title:"Casos de Uso"},sidebar:"sidebarPt",previous:{title:"OpenAI compatibilidade",permalink:"/pt/maritalk-api/openai-compatibilidade"},next:{title:"Introdu\xe7\xe3o",permalink:"/pt/maritalk-local/maritalk-local-introducao"}},d={},u=[{value:"Streaming",id:"streaming",level:3},{value:"Generator",id:"generator",level:4},{value:"AsyncGenerator",id:"asyncgenerator",level:4},{value:"Modo chat",id:"modo-chat",level:2},{value:"Exemplos few-shot",id:"exemplos-few-shot",level:2},{value:"Exemplos de Uso em Outras Linguagens",id:"exemplos-de-uso-em-outras-linguagens",level:2},{value:"Integra\xe7\xf5es",id:"integra\xe7\xf5es",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"casos-de-uso",children:"Casos de Uso"})}),"\n",(0,s.jsx)(n.h3,{id:"streaming",children:"Streaming"}),"\n",(0,s.jsx)(n.p,{children:"Para tarefas de gera\xe7\xe3o de texto longo, como a cria\xe7\xe3o de um artigo extenso ou a tradu\xe7\xe3o de um documento grande, pode ser vantajoso receber a resposta em partes, \xe0 medida que o texto \xe9 gerado, em vez de esperar pelo texto completo. Isso torna a aplica\xe7\xe3o mais responsiva e eficiente, especialmente quando o texto gerado \xe9 extenso. Oferecemos duas abordagens para atender a essa necessidade: o uso de um generator e de um async_generator."}),"\n",(0,s.jsx)(n.h4,{id:"generator",children:"Generator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ao use ",(0,s.jsx)(n.code,{children:"stream=True"}),", o c\xf3digo ir\xe1 retornar um ",(0,s.jsx)(n.code,{children:"generator"}),". Este ",(0,s.jsx)(n.code,{children:"generator"})," fornecer\xe1 as partes da resposta conforme elas s\xe3o geradas pelo modelo, permitindo que voc\xea imprima ou processe os tokens \xe0 medida que s\xe3o produzidos."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"for response in model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95,\n    stream=True,\n    num_tokens_per_message=4\n):\n    print(response)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"asyncgenerator",children:"AsyncGenerator"}),"\n",(0,s.jsxs)(n.p,{children:["Ao utilizar ",(0,s.jsx)(n.code,{children:"stream=True"})," em conjunto com ",(0,s.jsx)(n.code,{children:"return_async_generator=True"}),", o c\xf3digo ir\xe1 retornar um ",(0,s.jsx)(n.code,{children:"AsyncGenerator"}),". Este tipo de gerador \xe9 projetado para ser consumido de forma ass\xedncrona, o que significa que voc\xea pode executar o c\xf3digo que consome o ",(0,s.jsx)(n.code,{children:"AsyncGenerator"})," de maneira concorrente com outras tarefas, melhorando a efici\xeancia do seu processamento."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import asyncio\n\nasync_generator = model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95,\n    stream=True,\n    return_async_generator=True,\n    num_tokens_per_message=4\n)\n\nasync def consume_generator():\n    async for response in async_generator:\n        print(response)\n                # Seu c\xf3digo aqui...\n\nasyncio.run(consume_generator)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"modo-chat",children:"Modo chat"}),"\n",(0,s.jsxs)(n.p,{children:["Voc\xea pode definir uma conversa especificando uma lista de dicion\xe1rios, sendo que cada dicion\xe1rio precisar ter duas chaves: ",(0,s.jsx)(n.code,{children:"content"})," e ",(0,s.jsx)(n.code,{children:"role"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Atualmente, a API da Maritaca suporta tr\xeas valores para ",(0,s.jsx)(n.code,{children:"role"}),': "system" para mensagem de instru\xe7\xe3o do chatbot, "user" para mensagens do usu\xe1rio, e "assistant" para mensagens do assistente.']}),"\n",(0,s.jsx)(n.p,{children:"Mostramos um exemplo de conversa abaixo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'messages = [\n    {"role": "user", "content": "sugira tr\xeas nomes para a minha cachorra"},\n    {"role": "assistant", "content": "nina, bela e luna."},\n    {"role": "user", "content": "e para o meu peixe?"},\n]\n\nanswer = model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95)["answer"]\n\nprint(f"Resposta: {answer}")   # Deve imprimir algo como "nemo, dory e neptuno."\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplos-few-shot",children:"Exemplos few-shot"}),"\n",(0,s.jsx)(n.p,{children:"Embora o Sabi\xe1 seja capaz de responder a instru\xe7\xf5es sem nenhum exemplo de demonstra\xe7\xe3o, fornecer alguns exemplos da tarefa pode melhorar significativamente a qualidade de suas respostas."}),"\n",(0,s.jsx)(n.p,{children:"Abaixo mostramos como isso \xe9 feito para uma tarefa simples de an\xe1lise de sentimento, i.e., classificar se uma resenha de filme \xe9 positiva ou negativa.\nNeste caso, passaremos dois exemplos few-shot, um positivo e outro negativo, e um terceiro exemplo, para o qual o Sabi\xe1 efetivamente far\xe1 a predi\xe7\xe3o."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'prompt = """Classifique a resenha de filme como "positiva" ou "negativa".\n\nResenha: Gostei muito do filme, \xe9 o melhor do ano!\nClasse: positiva\n\nResenha: O filme deixa muito a desejar.\nClasse: negativa\n\nResenha: Apesar de longo, valeu o ingresso..\nClasse:"""\n\nanswer = model.generate(\n    prompt,\n    chat_mode=False,\n    do_sample=False,\n    max_tokens=20,\n    stopping_tokens=["\\n"]\n)["answer"]\n\nprint(f"Resposta: {answer.strip()}")  # Deve imprimir "positiva"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note que usamos ",(0,s.jsx)(n.code,{children:"chat_mode=False"}),", pois melhora a qualidade das respostas quando usando exemplos few-shot."]}),"\n",(0,s.jsxs)(n.p,{children:["O argumento ",(0,s.jsx)(n.code,{children:'stopping_tokens=["\\n"]'}),' \xe9 usado para interromper a gera\xe7\xe3o quando o token "\\n" \xe9 gerado. Isso \xe9 necess\xe1rio porque, quando n\xe3o estamos no modo chat, o modelo pode n\xe3o saber quando interromper a gera\xe7\xe3o.']}),"\n",(0,s.jsxs)(n.p,{children:["Para tarefas com apenas uma resposta correta, como no exemplo acima, \xe9 recomendado usar ",(0,s.jsx)(n.code,{children:"do_sample=False"}),". Isso garante que a mesma resposta seja gerada dado um prompt espec\xedfico."]}),"\n",(0,s.jsxs)(n.p,{children:["Para tarefas de gera\xe7\xe3o de textos diversos ou longos, \xe9 recomendado usar ",(0,s.jsx)(n.code,{children:"do_sample=True"})," e ",(0,s.jsx)(n.code,{children:"temperature=0.7"}),'. Quanto maior a temperatura, mais diversos ser\xe3o os textos gerados, mas h\xe1 maior chance de o modelo "alucinar" e gerar textos sem sentido. Quanto menor a temperatura, a resposta \xe9 mais conservadora, mas corre o risco de gerar textos repetidos.']}),"\n",(0,s.jsx)(n.h2,{id:"exemplos-de-uso-em-outras-linguagens",children:"Exemplos de Uso em Outras Linguagens"}),"\n",(0,s.jsx)(n.p,{children:"Aqui est\xe3o exemplos de como voc\xea pode integrar a API da Maritaca em outras linguagens:"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"JavaScript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const process = require(\'node:process\');\n\nconst CHAT_API_URL = "https://chat.maritaca.ai/api/chat/inference";\n\nif (!process.env.MARITALK_API_KEY) {\n    console.error("Environment variable MARITALK_API_KEY not found!");\n    process.exit(1);\n}\n\nasync function sendChatRequest(message) {\n    try {\n        const params = {\n            messages: [{ "role": "user", "content": message }],\n            do_sample: true,\n            max_tokens: 50,\n            temperature: 0.4,\n            top_p: 0.95,\n            model: "sabia-2-medium",\n        };\n\n        const response = await fetch(CHAT_API_URL, {\n            headers: {\n                "Authorization": `Key ${process.env.MARITALK_API_KEY}`,\n                "Content-Type": "application/json",\n            },\n            method: "POST",\n            body: JSON.stringify(params),\n        });\n\n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n\n        return await response.json();\n    } catch (error) {\n        console.error("Error sending chat request:", error);\n        throw error;\n    }\n}\n\nasync function main() {\n    try {\n        const result = await sendChatRequest(\'Ol\xe1, qual \xe9 seu nome?\');\n        console.log("Response:", result);\n    } catch (error) {\n        console.error("Error in main function:", error);\n    }\n}\n\nmain();\n'})})}),(0,s.jsx)(t.A,{value:"C#",label:"C#",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using OpenAI;\nusing OpenAI.Chat;\nusing System.ClientModel;\n\nnamespace ChatMariTalk\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            //variables\n            string key = "";\n            string model = "sabia-3";\n            string url = "https://chat.maritaca.ai/api";\n            string nameProject = "ExemploUsandoMaritaca";\n\n            //Create the credential using the API access key\n            ApiKeyCredential apiKeyCredential = new ApiKeyCredential(key);\n\n            //Configure the Client for the Maritaca endpoint\n            OpenAIClientOptions openAIClientOptions = new OpenAIClientOptions\n            {\n                Endpoint = new Uri(url),\n                OrganizationId = nameProject,\n                ApplicationId = nameProject,\n                ProjectId = nameProject\n            };\n\n            //Create the ChatClient\n            ChatClient chatClient = new ChatClient(model, apiKeyCredential, openAIClientOptions);\n\n            //Create the chat options\n            ChatCompletionOptions chatOptions = new ChatCompletionOptions\n            {\n                MaxTokens = 255,\n                Temperature = 0.7f,\n            };\n\n            //Create a list to store the chat messages\n            List<ChatMessage> chatMessages = new List<ChatMessage>();\n\n            //Show the menu\n            ShowMenu();\n            do\n            {\n                try\n                {\n                    //User question\n                    string prompt = ShowPrompt();\n\n                    //If the user types \'sair\', the chat ends\n                    if (prompt.ToLower() == "sair")\n                        break;\n\n                    //Create the user message\n                    UserChatMessage userChat = ChatMessage.CreateUserMessage(prompt);\n                    chatMessages.Add(userChat);\n\n                    //Send the question to the API\n                    ChatCompletion chatCompletion = await chatClient.CompleteChatAsync(chatMessages, chatOptions);\n\n                    //Capture the response from the model\n                    AssistantChatMessage assistant = ChatMessage.CreateAssistantMessage(chatCompletion.Content[0].Text);\n                    chatMessages.Add(assistant);\n\n                    //Display the model\'s response\n                    ShowAssistant(assistant);\n                }\n                catch (Exception e)\n                {\n                    ShowError(e);\n                }\n            } while (true);\n\n            ShowSair();\n        }\n\n        static void ShowMenu()\n        {\n            Console.WriteLine(new string(\'-\', 100));\n            Console.WriteLine();\n            Console.WriteLine("Bem-vindo ao Maritaca Chat!");\n            Console.WriteLine();\n            Console.WriteLine(new string(\'-\', 100));\n            Console.WriteLine("Digite \'sair\' para encerrar o chat.");\n            Console.WriteLine();\n            Console.WriteLine();\n            Console.WriteLine();\n        }\n\n        static string ShowPrompt()\n        {\n            Console.ForegroundColor = ConsoleColor.Green;\n            Console.Write($"[{DateTime.Now}] Envie uma mensagem: ");\n            Console.ResetColor();\n            string prompt = Console.ReadLine();\n            if (string.IsNullOrEmpty(prompt))\n            {\n                throw new Exception("Por favor, insira uma mensagem.");\n            }\n            return prompt;\n        }\n\n        static void ShowAssistant(AssistantChatMessage assistant)\n        {\n            Console.ForegroundColor = ConsoleColor.Yellow;\n            Console.WriteLine();\n            Console.Write($"[{DateTime.Now}] Assistente: ");\n            Console.ResetColor();\n            Console.WriteLine(assistant.Content[0].Text);\n            Console.WriteLine();\n        }\n\n        static void ShowError(Exception e)\n        {\n            Console.WriteLine();\n            Console.ForegroundColor = ConsoleColor.Red;\n            Console.Write($"[{DateTime.Now}] Erro: ");\n            Console.ResetColor();\n            Console.WriteLine(e.Message);\n            Console.WriteLine();\n        }\n\n        static void ShowSair()\n        {\n            Console.WriteLine(new string(\'-\', 100));\n            Console.WriteLine();\n            Console.WriteLine("Obrigado por usar o Maritaca Chat!");\n            Console.WriteLine();\n            Console.WriteLine();\n        }\n    }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"integra\xe7\xf5es",children:"Integra\xe7\xf5es"}),"\n",(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"20px 0",flexWrap:"wrap"},children:[(0,s.jsxs)("a",{href:"https://docs.llamaindex.ai/en/latest/examples/llm/maritalk/",className:"icon-box",style:{flex:"1 1 200px",margin:"10px",textAlign:"center"},children:[(0,s.jsx)("i",{className:"fas fa-file-alt",style:{fontSize:"2em",marginBottom:"10px"}}),(0,s.jsx)("h3",{children:"LlamaIndex"}),(0,s.jsx)("p",{children:"Maritalk no LlamaIndex."})]}),(0,s.jsxs)("a",{href:"https://python.langchain.com/v0.2/docs/integrations/chat/maritalk/",className:"icon-box",style:{flex:"1 1 200px",margin:"10px",textAlign:"center"},children:[(0,s.jsx)("i",{className:"fas fa-link",style:{fontSize:"2em",marginBottom:"10px"}}),(0,s.jsx)("h3",{children:"LangChain"}),(0,s.jsx)("p",{children:"MariTalk + RAG com LangChain."})]})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>t});a(6540);var s=a(4164);const o={tabItem:"tabItem_Ymn6"};var r=a(4848);function t(e){let{children:n,hidden:a,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,t),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>y});var s=a(6540),o=a(4164),r=a(3104),t=a(6347),i=a(205),l=a(7485),c=a(1682),d=a(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:o}}=e;return{value:n,label:a,attributes:s,default:o}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const o=(0,t.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:o}=e,r=p(e),[t,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,u]=h({queryString:a,groupId:o}),[g,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(a);return[o,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),f=(()=>{const e=c??g;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=a(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var C=a(4848);function v(e){let{className:n,block:a,selectedValue:s,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),o=i[a].value;o!==s&&(c(n),t(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,C.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,C.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,C.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=g(e);return(0,C.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,C.jsx)(v,{...n,...e}),(0,C.jsx)(j,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,C.jsx)(b,{...e,children:u(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>i});var s=a(6540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);