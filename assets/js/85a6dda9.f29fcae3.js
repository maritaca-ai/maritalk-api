"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[97],{8554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=t(4848),r=t(8453);t(6540);const a={grid:"grid_cqC9",card:"card_iOVD",icon:"icon_E3bk","custom-link":"custom-link_dz8z"},s={id:"quick-start",title:"Quick Start"},o="Quick Start",l={id:"en/maritalk-api/quick-start",title:"Quick Start",description:"Want to go straight to the code?",source:"@site/docs/en/maritalk-api/quick-start.md",sourceDirName:"en/maritalk-api",slug:"/en/maritalk-api/quick-start",permalink:"/en/maritalk-api/quick-start",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"quick-start",title:"Quick Start"},sidebar:"sidebarEn",previous:{title:"Models",permalink:"/en/models"},next:{title:"Compatibility with OpenAI",permalink:"/en/maritalk-api/openai-compatibility"}},c={},h=[{value:"Step 1: Account Setup",id:"step-1-account-setup",level:2},{value:"For Linux/macOS:",id:"for-linuxmacos",level:4},{value:"Windows",id:"windows",level:4},{value:"Step 2: Configuring Python",id:"step-2-configuring-python",level:2},{value:"Step 3: Install the Library",id:"step-3-install-the-library",level:2},{value:"Step 4: Sending your first API request",id:"step-4-sending-your-first-api-request",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,i.jsxs)("a",{href:"/api/en/completion",className:a["callout-box"],style:{display:"flex",alignItems:"center",backgroundColor:"#f5f5f5",color:"black",border:"1px solid #ddd",padding:"10px",borderRadius:"8px",textDecoration:"none"},children:[(0,i.jsx)("img",{src:"/img/code-icon.png",alt:"Code Icon",style:{width:"50px",marginRight:"15px"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Want to go straight to the code?"}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:"Skip the quick start and navigate to the API reference."})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Our API enables developers to integrate Maritaca's state-of-the-art models into their applications. This document demonstrates how to use our API via HTTP requests. This guide was created to help you set up your local development environment and send your first API request. If you encounter any difficulties or have any additional questions, please visit the ",(0,i.jsx)("a",{href:"https://plataforma.maritaca.ai/",className:a.customLink,children:"\nPlatform\n"})," and fill out a support request available through the Help button.\nIf you are an experienced developer, you can go directly to the ",(0,i.jsx)(n.a,{href:"/api/en/completion",children:"API reference"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-account-setup",children:"Step 1: Account Setup"}),"\n",(0,i.jsxs)(n.p,{children:["First, create an account or log in to the ",(0,i.jsx)(n.a,{href:"https://plataforma.maritaca.ai/",children:"Maritaca platform"}),". Then, navigate to the ",(0,i.jsx)(n.a,{href:"https://plataforma.maritaca.ai/chaves-de-api",children:"API key page"}),' and click "Create new key," optionally naming the key. Be sure to save the key in a secure place and do not share it with anyone.']}),"\n",(0,i.jsx)("img",{src:"/img/key.png",alt:"Setup",style:{width:"1000px",height:"auto",marginRight:"15px"}}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Paste the created key into my_key."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'model = maritalk.MariTalk(\n    key=f"{my_key}", #Paste the key here Ex: \'100088...\'\n    model="sabia-3"  # Currently, we support the models sabia-3 and sabia-2-small\n)\n'})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:[" ",(0,i.jsx)(n.strong,{children:"Set up your API key for all projects (recommended)"})," "]}),(0,i.jsx)(n.p,{children:"To set up your API key from the Maritaca AI platform for use in your projects, you will need to define an environment variable that will store this key. The process is similar on both Linux and Windows systems, but there are differences in how environment variables are handled on each system. Here is a step-by-step guide for both operating systems. The main advantage of this approach is that the Python library will automatically detect and use the key without requiring you to write any code."}),(0,i.jsx)(n.h4,{id:"for-linuxmacos",children:"For Linux/macOS:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Open the Terminal:"})," Open the terminal on your Linux or macOS operating system."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Export the Environment Variable:"})," Write the line below, replacing my_key with your key created in step 1:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export MARITACA_API_KEY='my_key'\n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add to Profile File:"})," For this configuration to persist in all sessions, add the export command to your shell's profile file. For Bash, it is usually .bashrc, .bash_profile, or .profile in your user folder. Open the appropriate file with a text editor:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nano ~/.bashrc\n"})}),(0,i.jsx)(n.p,{children:"and add the line"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export MARITACA_API_KEY='my_key'\n"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Load the Profile File:"})," To make the changes take effect, you need to load the updated profile file:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Verification:"})," Verify the configuration by typing the following command in the terminal:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo $MARITACA_API_KEY\n"})}),(0,i.jsx)(n.p,{children:"If everything went correctly, your key should be displayed."}),(0,i.jsx)(n.h4,{id:"windows",children:"Windows"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Open Command Prompt or PowerShell:"})," Open the command prompt (CMD) or PowerShell on your Windows system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Define the Environment Variable:"})," In the command prompt, you can define the environment variable temporarily with the following command:"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"set MARITACA_API_KEY='my_key'\n"})}),(0,i.jsx)(n.p,{children:"In PowerShell, the command would be:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$env:MARITACA_API_KEY='my_key'\n"})}),(0,i.jsx)(n.p,{children:"This command will define the environment variable for the current session."}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Permanent Configuration:"}),' To make the environment variable persistent, you need to add the key to your user profile.\nGo to Control Panel > System > Advanced system settings > Environment variables.\nIn the "User variables" section, click "New...".\nSet the variable name as MARITACA_API_KEY and the value as your API key.\nClick OK to close the dialog boxes.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Verification:"})," Verify the configuration by typing the following command in the terminal:"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo $MARITACA_API_KEY\n"})}),(0,i.jsx)(n.p,{children:"If everything went correctly, your key should be displayed."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:[" ",(0,i.jsx)(n.strong,{children:"Set up your API key for a single project"})," "]}),(0,i.jsx)(n.p,{children:"To ensure that your API key is kept confidential and restricted to a specific project, you can implement a secure key management system. First, configure an environment variables file called .env in the directory of your project."}),(0,i.jsx)(n.p,{children:"To protect your credentials and prevent them from being accidentally sent to a version control repository, it is essential to create a .gitignore file in the root directory of the project. In this file, enter the line .env to ensure that the .env file is not tracked by the version control system."}),(0,i.jsx)(n.p,{children:"After establishing the .gitignore file, you can proceed to create the .env file. Use the terminal or your preferred IDE (Integrated Development Environment) to edit these files. Enter your secret API key in the .env file, defining it as MARITACA_API_KEY. If you do not yet have an API key, you need to generate one by accessing the API keys section on the relevant platform."}),(0,i.jsx)(n.p,{children:"Your .env file should be configured as follows:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"MARITACA_API_KEY= 'my_key'\n"})}),(0,i.jsx)(n.p,{children:"Make sure to replace my_key with your actual API key. This file will now contain the key necessary for your Python code to access the services associated with your API key, keeping the credentials secure and private."}),(0,i.jsx)(n.p,{children:"The API key can be imported by running the following code:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import openai\n\nmodel = openai.OpenAI(\n  api_key="my_key",,\n  base_url="https://chat.maritaca.ai/api",\n)\n\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-configuring-python",children:"Step 2: Configuring Python"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.strong,{children:"Install Python"})}),(0,i.jsx)(n.p,{children:"To use the Maritaca Python library, you will need to ensure that you have Python installed. Some computers come with Python pre-installed, while others require you to set it up yourself."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the official Python website: ",(0,i.jsx)(n.a,{href:"https://www.python.org/",children:"https://www.python.org/"})]}),"\n",(0,i.jsx)(n.li,{children:'In the top menu, click on "Downloads".'}),"\n",(0,i.jsx)(n.li,{children:"Choose the latest version of Python that is compatible with your operating system (Windows, macOS, or Linux)."}),"\n",(0,i.jsx)(n.li,{children:"Click to download the installer."}),"\n",(0,i.jsx)(n.li,{children:"After the download, open the installation file."}),"\n",(0,i.jsx)(n.li,{children:'If you are on a Windows system, click "Run" or "Executar".'}),"\n",(0,i.jsx)(n.li,{children:"Follow the installation wizard steps."}),"\n"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"For Windows and macOS:"})," The default installation is usually sufficient. Make sure to check the option to add Python to the system PATH."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"For Linux:"})," On many distributions, Python is already pre-installed. If you need to install or update it, you can use your distribution's package manager (such as ",(0,i.jsx)(n.code,{children:"apt"})," for Ubuntu, ",(0,i.jsx)(n.code,{children:"yum"})," for Fedora, etc.)."]}),"\n"]}),(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"To verify that Python was installed correctly, open the terminal (or command prompt on Windows) and type:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python --version\n"})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.strong,{children:"Set up a virtual environment (optional)"})}),(0,i.jsxs)(n.p,{children:["A virtual environment is a directory that contains an independent Python environment, with its own installation of packages. This allows you to manage dependencies for different projects easily. To create a virtual environment, Python provides an embedded module called ",(0,i.jsx)(n.code,{children:"venv"})," that offers the basic functionality needed for the virtual environment. Open the terminal or command prompt and execute the following commands:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python -m venv my_environment\n"})}),(0,i.jsx)(n.p,{children:"To work with the virtual environment, you need to activate it:"}),(0,i.jsx)(n.p,{children:"On Unix-based systems (Linux/macOS) execute:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source my_environment/bin/activate\n"})}),(0,i.jsx)(n.p,{children:"On Windows, execute:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"my_environment\\Scripts\\activate\n"})}),(0,i.jsx)(n.p,{children:"After activation, the name of your environment will appear in the prompt, indicating that you are working within it."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.strong,{children:"Install the Package Manager PIP"})}),(0,i.jsx)(n.p,{children:"Python already comes with PIP, which is a package manager, but you should check if you are using the latest version:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade pip\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-install-the-library",children:"Step 3: Install the Library"}),"\n",(0,i.jsx)(n.p,{children:"Our API can be used in two ways: through our maritalk library or through OpenAI compatibility. In this tutorial, we will teach you how to send your first request using OpenAI compatibility. After installing Python and optionally activating the virtual environment and upgrading pip, you can install the openai library. In the terminal/command line, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install openai\n"})}),"\n",(0,i.jsx)(n.p,{children:"With the virtual environment activated, you can list all Python libraries installed in that environment with the pip list command. Open the terminal or command prompt and type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip list\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the installation was successful, you will see something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openai X.XX.X\n"})}),"\n",(0,i.jsx)(n.p,{children:"where X.XX.X is the version number of the openai library you installed."}),"\n",(0,i.jsx)(n.h2,{id:"step-4-sending-your-first-api-request",children:"Step 4: Sending your first API request"}),"\n",(0,i.jsx)(n.p,{children:"After setting up Python and configuring an API key, the final step is to send a request to the OpenAI API using the Python library. To do this, create a file named maritalk.py using the terminal or an IDE.\nInside the file, copy and paste one of the examples below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import openai\n\nclient = openai.OpenAI(\n    api_key="insert your key here, e.g., \'100088...\'",\n    base_url="https://chat.maritaca.ai/api",\n)\n\nresponse = client.chat.completions.create(\n  model="sabia-3",\n  messages=[\n    {"role": "user", "content": "What is 25 + 27?"},\n  ],\n  max_tokens=8000\n)\nanswer = response.choices[0].message.content\n\nprint(f"Answer: {answer}")   # Should print something like "25 + 27 equals 52."\n'})}),"\n",(0,i.jsx)(n.p,{children:"To run the code, type python maritalk.py in the terminal/command line."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);