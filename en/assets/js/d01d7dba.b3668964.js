"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[254],{7810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=t(4848),s=t(8453);const r={id:"library",title:"Library"},a="Library",o={id:"en/library",title:"Library",description:"We offer the Maritalk Python library to facilitate integration with our API. We recommend using the version compatible with OpenAI (detailed in OpenAI Compatibility), which is ideal for those already using OpenAI libraries or seeking compatibility with this platform.",source:"@site/docs/en/library.md",sourceDirName:"en",slug:"/en/library",permalink:"/en/en/library",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"library",title:"Library"},sidebar:"sidebarEn",previous:{title:"Compatibility with OpenAI",permalink:"/en/en/maritalk-api/openai-compatibility"},next:{title:"Use Cases",permalink:"/en/en/use-cases"}},l={},h=[{value:"Installing the Maritalk Python Library",id:"installing-the-maritalk-python-library",level:2},{value:"Sending a Request to the API",id:"sending-a-request-to-the-api",level:2},{value:"Streaming",id:"streaming",level:3},{value:"Generator",id:"generator",level:4},{value:"AsyncGenerator",id:"asyncgenerator",level:4},{value:"Chat Mode",id:"chat-mode",level:2},{value:"Few-Shot Examples",id:"few-shot-examples",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"library",children:"Library"})}),"\n",(0,i.jsx)(n.p,{children:"We offer the Maritalk Python library to facilitate integration with our API. We recommend using the version compatible with OpenAI (detailed in OpenAI Compatibility), which is ideal for those already using OpenAI libraries or seeking compatibility with this platform.\nFor users who previously utilized our standalone library version, we maintain this option to ensure continuity for existing projects. Both versions share the same core functionalities, allowing you to choose the one that best fits your workflow."}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-maritalk-python-library",children:"Installing the Maritalk Python Library"}),"\n",(0,i.jsx)(n.p,{children:"With Python installed, and optionally with a virtual environment activated and pip updated, you can install the Maritalk library. In the terminal/command line, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install maritalk\n"})}),"\n",(0,i.jsx)(n.p,{children:"With the virtual environment activated, you can list all installed Python libraries within this environment using the command pip list. Open the terminal or command prompt and type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip list\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the installation was successful, you\u2019ll see something similar to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"maritalk X.X.X\n"})}),"\n",(0,i.jsx)(n.p,{children:"where X.X.X is the version number of the Maritalk library you installed."}),"\n",(0,i.jsx)(n.h2,{id:"sending-a-request-to-the-api",children:"Sending a Request to the API"}),"\n",(0,i.jsx)(n.p,{children:"After setting up Python and configuring an API key, you can send a request to the Maritalk API using the Python library. To do this, create a file called maritalk.py using the terminal or an IDE. Inside the file, copy and paste one of the examples below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import maritalk\n\nmodel = maritalk.MariTalk(\n    key="insert your key here. Ex: \'100088...\'",\n    model="sabia-3"  # Currently, we support the sabia-3 and sabia-2-small models\n)\n\nresponse = model.generate("What is 25 + 27?", max_tokens=8000)\nanswer = response["answer"]\n\nprint(f"Answer: {answer}")   # Should print something like "25 + 27 equals 52."\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note that the response dictionary contains the usage key, which shows the number of input and output tokens that will be billed. To run the code, type python maritalk.py in the terminal/command line."}),"\n",(0,i.jsx)(n.h3,{id:"streaming",children:"Streaming"}),"\n",(0,i.jsx)(n.p,{children:"For long text generation tasks, such as creating an extensive article or translating a large document, it may be advantageous to receive the response in parts as the text is generated rather than waiting for the entire text. This approach makes the application more responsive and efficient, especially when the generated text is extensive. We offer two approaches to meet this need: using a generator and an async_generator."}),"\n",(0,i.jsx)(n.h4,{id:"generator",children:"Generator"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["By using ",(0,i.jsx)(n.code,{children:"stream=True"}),", the code will return a ",(0,i.jsx)(n.code,{children:"generator"}),". This ",(0,i.jsx)(n.code,{children:"generator"})," will provide parts of the response as they are generated by the model, allowing you to print or process the tokens as they are produced."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"for response in model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95,\n    stream=True,\n    num_tokens_per_message=4\n):\n    print(response)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"asyncgenerator",children:"AsyncGenerator"}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"stream=True"})," in conjunction with ",(0,i.jsx)(n.code,{children:"return_async_generator=True"}),", the code will return an ",(0,i.jsx)(n.code,{children:"AsyncGenerator"}),". This type of generator is designed to be consumed asynchronously, allowing you to run the code that consumes the ",(0,i.jsx)(n.code,{children:"AsyncGenerator"})," concurrently with other tasks, improving processing efficiency."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import asyncio\n\nasync_generator = model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95,\n    stream=True,\n    return_async_generator=True,\n    num_tokens_per_message=4\n)\n\nasync def consume_generator():\n    async for response in async_generator:\n        print(response)\n                # Your code here...\n\nasyncio.run(consume_generator)\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"chat-mode",children:"Chat Mode"}),"\n",(0,i.jsxs)(n.p,{children:["You can set up a conversation by specifying a list of dictionaries, with each dictionary containing two keys: ",(0,i.jsx)(n.code,{children:"content"})," and ",(0,i.jsx)(n.code,{children:"role"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, the Maritaca API supports three values for ",(0,i.jsx)(n.code,{children:"role"}),': "system" for chatbot instruction messages, "user" for user messages, and "assistant" for assistant messages.']}),"\n",(0,i.jsx)(n.p,{children:"An example conversation is shown below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'messages = [\n    {"role": "user", "content": "suggest three names for my dog"},\n    {"role": "assistant", "content": "Nina, Bella, and Luna."},\n    {"role": "user", "content": "and for my fish?"},\n]\n\nanswer = model.generate(\n    messages,\n    do_sample=True,\n    max_tokens=200,\n    temperature=0.7,\n    top_p=0.95)["answer"]\n\nprint(f"Answer: {answer}")   # Should print something like "Nemo, Dory, and Neptune."\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"few-shot-examples",children:"Few-Shot Examples"}),"\n",(0,i.jsx)(n.p,{children:"While Sabia can respond to instructions without any demonstration examples, providing a few task examples can significantly improve the quality of its responses."}),"\n",(0,i.jsx)(n.p,{children:"Below, we show how this is done for a simple sentiment analysis task, i.e., classifying whether a movie review is positive or negative. In this case, we will pass two few-shot examples, one positive and one negative, and a third example, for which Sabia will actually make the prediction."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'prompt = """Classify the movie review as "positive" or "negative".\n\nReview: I really liked the movie, it\'s the best of the year!\nClass: positive\n\nReview: The movie leaves much to be desired.\nClass: negative\n\nReview: Although long, it was worth the ticket..\nClass:"""\n\nanswer = model.generate(\n    prompt,\n    chat_mode=False,\n    do_sample=False,\n    max_tokens=20,\n    stopping_tokens=["\\n"]\n)["answer"]\n\nprint(f"Answer: {answer.strip()}")  # Should print "positive"\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that we use ",(0,i.jsx)(n.code,{children:"chat_mode=False"})," as it improves the quality of responses when using few-shot examples."]}),"\n",(0,i.jsxs)(n.p,{children:["The argument ",(0,i.jsx)(n.code,{children:'stopping_tokens=["\\n"]'}),' is used to stop generation when the "\\n" token is generated. This is necessary because, when not in chat mode, the model might not know when to stop generating.']}),"\n",(0,i.jsxs)(n.p,{children:["For tasks with only one correct answer, like the example above, it is recommended to use ",(0,i.jsx)(n.code,{children:"do_sample=False"}),". This ensures the same response is generated given a specific prompt."]}),"\n",(0,i.jsxs)(n.p,{children:["For diverse or long text generation tasks, it is recommended to use ",(0,i.jsx)(n.code,{children:"do_sample=True"})," and ",(0,i.jsx)(n.code,{children:"temperature=0.7"}),'. The higher the temperature, the more diverse the generated texts will be, but there is a greater chance the model may "hallucinate" and generate nonsensical text. The lower the temperature, the more conservative the response, but it risks generating repetitive text.']})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);