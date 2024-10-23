"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[872],{6270:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=o(4848),n=o(8453);o(6540);const r={grid:"grid_tWFx",card:"card_b9Fc",icon:"icon_jKZY","custom-link":"custom-link_DwkD"},s={id:"comeco-rapido",title:"Come\xe7o R\xe1pido"},c="Come\xe7o R\xe1pido",d={id:"pt/maritalk-api/comeco-rapido",title:"Come\xe7o R\xe1pido",description:"\x3c!-- TODO: Adicionar link para a API Reference quando estiver pronta",source:"@site/docs/pt/maritalk-api/comeco-rapido.md",sourceDirName:"pt/maritalk-api",slug:"/pt/maritalk-api/comeco-rapido",permalink:"/en/pt/maritalk-api/comeco-rapido",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"comeco-rapido",title:"Come\xe7o R\xe1pido"},sidebar:"sidebarPt",previous:{title:"Modelos Descontinuados",permalink:"/en/pt/descontinuado"},next:{title:"Compatibilidade com a OpenAI",permalink:"/en/pt/maritalk-api/openai-compatibilidade"}},t={},l=[{value:"Passo 1: Configura\xe7\xe3o da Conta",id:"passo-1-configura\xe7\xe3o-da-conta",level:2},{value:"Para Linux/macOS:",id:"para-linuxmacos",level:4},{value:"Windows",id:"windows",level:4},{value:"Passo 2: Configurando o Python",id:"passo-2-configurando-o-python",level:2},{value:"Passo 3: Instalar a biblioteca Python da Maritalk",id:"passo-3-instalar-a-biblioteca-python-da-maritalk",level:2},{value:"Passo 4: Enviando sua primeira solicita\xe7\xe3o de API",id:"passo-4-enviando-sua-primeira-solicita\xe7\xe3o-de-api",level:2}];function m(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...a.components},{Details:o}=e;return o||function(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"come\xe7o-r\xe1pido",children:"Come\xe7o R\xe1pido"})}),"\n",(0,i.jsxs)(e.p,{children:["Nossa API possibilita que desenvolvedores integrem os modelos de \xfaltima gera\xe7\xe3o da Maritaca \xe0s suas aplica\xe7\xf5es. Esse documento demonstra como usar a nossa API atrav\xe9s de requisi\xe7\xf5es HTTP. Este guia foi criado para ajudar a configurar seu ambiente de desenvolvimento local e enviar sua primeira solicita\xe7\xe3o de API. Se voc\xea encontrar qualquer dificuldade ou tiver qualquer pergunta adicional, por favor, acesse a ",(0,i.jsx)("a",{href:"https://plataforma.maritaca.ai/",className:r.customLink,children:"\nPlataforma\n"})," e preencha uma solicita\xe7\xe3o de suporte dispon\xedvel atrav\xe9s do bot\xe3o de Ajuda."]}),"\n",(0,i.jsx)(e.h2,{id:"passo-1-configura\xe7\xe3o-da-conta",children:"Passo 1: Configura\xe7\xe3o da Conta"}),"\n",(0,i.jsxs)(e.p,{children:["Primeiro, crie uma conta ou fa\xe7a login na ",(0,i.jsx)(e.a,{href:"https://plataforma.maritaca.ai/",children:"plataforma da Maritaca"}),". Em seguida, navegue at\xe9 a ",(0,i.jsx)(e.a,{href:"https://plataforma.maritaca.ai/chaves-de-api",children:"p\xe1gina de chave da API"}),' e clique em "Criar nova chave", nomeando a chave opcionalmente. Certifique-se de salvar a chave em um local seguro e n\xe3o compartilhar com ningu\xe9m.']}),"\n",(0,i.jsx)("img",{src:"/img/chave.png",alt:"Configuracao",style:{width:"1000px",height:"auto",marginRight:"15px"}}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.p,{children:"Cole a chave criada em minha_chave."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'model = maritalk.MariTalk(\n    key=f"{minha_chave}", #Cole a chave aqui Ex: \'100088...\'\n    model="sabia-3"  # No momento, suportamos os modelos sabia-3 e sabia-2-small\n)\n'})}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsxs)("summary",{children:[" ",(0,i.jsx)(e.strong,{children:"Configurar sua chave API para todos os projetos (recomendado)"})," "]}),(0,i.jsx)(e.p,{children:"Para configurar sua chave de API da plataforma Maritaca AI para uso em seus projetos, voc\xea precisar\xe1 definir uma vari\xe1vel de ambiente que armazenar\xe1 essa chave. O processo \xe9 semelhante tanto em sistemas Linux quanto em Windows, mas h\xe1 diferen\xe7as na forma como voc\xea manipula vari\xe1veis de ambiente em cada sistema. Aqui est\xe1 um guia passo a passo para ambos os sistemas operacionais. A principal vantagem dessa abordagem \xe9 que a biblioteca Python detectar\xe1 automaticamente e usar\xe1 a chave sem precisar escrever qualquer c\xf3digo."}),(0,i.jsx)(e.h4,{id:"para-linuxmacos",children:"Para Linux/macOS:"}),(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Abra o Terminal:"})," Abra o terminal no seu sistema operacional Linux ou macOS."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Exportar a Vari\xe1vel de Ambiente:"})," Escreva a linha abaixo, substituindo minha_chave pela sua chave API criada no passo 1:"]}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"export MARITACA_API_KEY='minha_chave'\n"})}),(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Adicionar ao Arquivo de Perfil:"})," Para que essa configura\xe7\xe3o persista em todas as sess\xf5es, adicione o comando export ao arquivo de perfil do seu shell. Para o Bash, geralmente \xe9 o .bashrc, .bash_profile ou .profile na sua pasta de usu\xe1rio. Abra o arquivo apropriado com um editor de texto:"]}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"nano ~/.bashrc\n"})}),(0,i.jsx)(e.p,{children:"e adicione a linha"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"export MARITACA_API_KEY='minha_chave'\n"})}),(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Carregar o Arquivo de Perfil:"})," Para que as altera\xe7\xf5es tenham efeito, voc\xea precisa carregar o arquivo de perfil atualizado:"]}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Verifica\xe7\xe3o:"})," Verifique a configura\xe7\xe3o digitando no terminal o seguinte comando:"]}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"echo $MARITACA_API_KEY\n"})}),(0,i.jsx)(e.p,{children:"Se tudo ocorreu de forma correta, sua chave dever\xe1 ser exibida."}),(0,i.jsx)(e.h4,{id:"windows",children:"Windows"}),(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Abrir o Prompt de Comando ou PowerShell:"})," Abra o prompt de comando (CMD) ou o PowerShell no seu sistema Windows."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Definir a Vari\xe1vel de Ambiente:"})," No prompt de comando, voc\xea pode definir a vari\xe1vel de ambiente temporariamente com o seguinte comando:"]}),"\n"]}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"set MARITACA_API_KEY='minha_chave'\n"})}),(0,i.jsx)(e.p,{children:"No PowerShell, o comando seria:"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$env:MARITACA_API_KEY='minha_chave'\n"})}),(0,i.jsx)(e.p,{children:"Este comando definir\xe1 a vari\xe1vel de ambiente para a sess\xe3o atual."}),(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Configura\xe7\xe3o permanente:"}),' Para tornar a vari\xe1vel de ambiente persistente, voc\xea precisa adicionar a chave ao seu perfil de usu\xe1rio.\nV\xe1 para o Painel de Controle > Sistema > Configura\xe7\xf5es avan\xe7adas do sistema > Vari\xe1veis de ambiente.\nNa se\xe7\xe3o "Vari\xe1veis do usu\xe1rio", clique em "Novo...".\nDefina o nome da vari\xe1vel como MARITACA_API_KEY e o valor como sua chave de API.\nClique em OK para fechar as caixas de di\xe1logo.']}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Verifica\xe7\xe3o:"})," Verifique a configura\xe7\xe3o digitando no terminal o seguinte comando:"]}),"\n"]}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"echo $MARITACA_API_KEY\n"})}),(0,i.jsx)(e.p,{children:"Se tudo ocorreu de forma correta, sua chave dever\xe1 ser exibida."})]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsxs)("summary",{children:[" ",(0,i.jsx)(e.strong,{children:"Configurar sua chave API para um \xfanico projeto"})," "]}),(0,i.jsx)(e.p,{children:"Para garantir que sua chave API seja mantida em sigilo e restrita a um projeto espec\xedfico, voc\xea pode implementar um sistema de gerenciamento de chaves seguro. Primeiramente, configure um arquivo de vari\xe1veis de ambiente chamado .env no diret\xf3rio do seu projeto."}),(0,i.jsx)(e.p,{children:"Para proteger suas credenciais e evitar que sejam enviadas acidentalmente para um reposit\xf3rio de controle de vers\xe3o, \xe9 essencial criar um arquivo .gitignore na raiz do diret\xf3rio do projeto. Neste arquivo, insira a linha .env para assegurar que o arquivo .env n\xe3o seja rastreado pelo sistema de controle de vers\xe3o."}),(0,i.jsx)(e.p,{children:"Ap\xf3s ter estabelecido o arquivo .gitignore, voc\xea pode prosseguir para a cria\xe7\xe3o do arquivo .env. Utilize o terminal ou o seu IDE (Ambiente de Desenvolvimento Integrado) preferido para editar estes arquivos. Insira sua chave API secreta no arquivo .env, definindo-a como MARITACA_API_KEY. Caso ainda n\xe3o possua uma chave API, \xe9 necess\xe1rio ger\xe1-la acessando a se\xe7\xe3o de chaves da API na plataforma relevante."}),(0,i.jsx)(e.p,{children:"Seu arquivo .env deve ser configurado da seguinte maneira:"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"MARITACA_API_KEY= 'minha_chave'\n"})}),(0,i.jsx)(e.p,{children:"Certifique-se de substituir minha_chave pela sua chave API real. Este arquivo agora conter\xe1 a chave necess\xe1ria para que seu c\xf3digo Python possa acessar os servi\xe7os associados \xe0 sua chave API, mantendo as credenciais seguras e privadas."}),(0,i.jsx)(e.p,{children:"A chave API pode ser importada executando o c\xf3digo abaixo:"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import maritalk\n\nmodel = maritalk.MariTalk(\n    key="minha_chave",\n    model="sabia-3"  # No momento, suportamos os modelos sabia-3 e sabia-2-small\n)\n\n'})})]}),"\n",(0,i.jsx)(e.h2,{id:"passo-2-configurando-o-python",children:"Passo 2: Configurando o Python"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(e.strong,{children:"Instalar Python"})}),(0,i.jsx)(e.p,{children:"Para usar a biblioteca Python da Maritaca, voc\xea precisar\xe1 garantir que tem o Python instalado. Alguns computadores v\xeam com Python pr\xe9-instalado, enquanto outros requerem que voc\xea configure por conta pr\xf3pria."}),(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["V\xe1 at\xe9 o site oficial do Python: ",(0,i.jsx)(e.a,{href:"https://www.python.org/",children:"https://www.python.org/"})]}),"\n",(0,i.jsx)(e.li,{children:'No menu superior, clique em "Downloads".'}),"\n",(0,i.jsx)(e.li,{children:"Escolha a vers\xe3o mais recente do Python que \xe9 compat\xedvel com o seu sistema operacional (Windows, macOS ou Linux)."}),"\n",(0,i.jsx)(e.li,{children:"Clique para baixar o instalador."}),"\n",(0,i.jsx)(e.li,{children:"Ap\xf3s o download, abra o arquivo de instala\xe7\xe3o."}),"\n",(0,i.jsx)(e.li,{children:'Se voc\xea estiver em um sistema Windows, clique em "Run" ou "Executar".'}),"\n",(0,i.jsx)(e.li,{children:"Siga os passos do assistente de instala\xe7\xe3o."}),"\n"]}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Para Windows e macOS:"})," A instala\xe7\xe3o padr\xe3o geralmente \xe9 suficiente. Certifique-se de marcar a op\xe7\xe3o para adicionar o Python ao PATH do sistema."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Para Linux:"})," Em muitas distribui\xe7\xf5es, o Python j\xe1 vem pr\xe9-instalado. Se precisar instalar ou atualizar, voc\xea pode usar o gerenciador de pacotes da sua distribui\xe7\xe3o (como ",(0,i.jsx)(e.code,{children:"apt"})," para Ubuntu, ",(0,i.jsx)(e.code,{children:"yum"})," para Fedora, etc.)."]}),"\n"]}),(0,i.jsxs)(e.ol,{start:"8",children:["\n",(0,i.jsx)(e.li,{children:"Para verificar se o Python foi instalado corretamente, abra o terminal (ou prompt de comando no Windows) e digite:"}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"python --version\n"})})]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(e.strong,{children:"Configurar um ambiente virtual (opcional)"})}),(0,i.jsxs)(e.p,{children:["Um ambiente virtual \xe9 um diret\xf3rio que cont\xe9m um ambiente Python independente, com sua pr\xf3pria instala\xe7\xe3o de pacotes. Isso permite que voc\xea gerencie facilmente as depend\xeancias de diferentes projetos. Para criar um ambiente virtual, o Python fornece um m\xf3dulo embutido chamado ",(0,i.jsx)(e.code,{children:"venv"})," que oferece a funcionalidade b\xe1sica necess\xe1ria para o ambiente virtual. Abra o terminal ou prompt de comando e execute os seguintes comandos:"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"python -m venv meu_ambiente\n"})}),(0,i.jsx)(e.p,{children:"Para trabalhar com o ambiente virtual, voc\xea precisa ativ\xe1-lo:"}),(0,i.jsx)(e.p,{children:"Em sistemas baseados em Unix (Linux/macOS) execute:"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"source meu_ambiente/bin/activate\n"})}),(0,i.jsx)(e.p,{children:"No Windows, execute:"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"meu_ambiente\\Scripts\\activate\n"})}),(0,i.jsx)(e.p,{children:"Depois de ativado, o nome do seu ambiente aparecer\xe1 no prompt, indicando que voc\xea est\xe1 trabalhando dentro dele."})]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(e.strong,{children:"Instalar o Gerenciador de Pacotes PIP"})}),(0,i.jsx)(e.p,{children:"O Python j\xe1 vem com o PIP, que \xe9 um gerenciador de pacotes, mas voc\xea deve verificar se est\xe1 usando a vers\xe3o mais recente:"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pip install --upgrade pip\n"})})]}),"\n",(0,i.jsx)(e.h2,{id:"passo-3-instalar-a-biblioteca-python-da-maritalk",children:"Passo 3: Instalar a biblioteca Python da Maritalk"}),"\n",(0,i.jsx)(e.p,{children:"Depois de instalar o Python e opcionalmente com o ambiente virtual ativado e o pip atualizado, voc\xea pode instalar a biblioteca maritalk. No terminal/linha de comando, execute:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pip install maritalk\n"})}),"\n",(0,i.jsx)(e.p,{children:"Com o ambiente virtual ativado, voc\xea pode listar todas as bibliotecas Python instaladas nesse ambiente com o comando pip list. Abra o terminal ou prompt de comando e digite:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pip list\n"})}),"\n",(0,i.jsx)(e.p,{children:"Se a instala\xe7\xe3o foi bem-sucedida, voc\xea ver\xe1 algo parecido com isto:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"maritalk X.X.X\n"})}),"\n",(0,i.jsx)(e.p,{children:"onde X.X.X \xe9 o n\xfamero da vers\xe3o da biblioteca maritalk que voc\xea instalou."}),"\n",(0,i.jsx)(e.h2,{id:"passo-4-enviando-sua-primeira-solicita\xe7\xe3o-de-api",children:"Passo 4: Enviando sua primeira solicita\xe7\xe3o de API"}),"\n",(0,i.jsx)(e.p,{children:"Depois de configurar o Python e configurar uma chave API, o passo final \xe9 enviar uma solicita\xe7\xe3o \xe0 API da Maritalk usando a biblioteca Python. Para fazer isso, crie um arquivo chamado maritalk.py usando o terminal ou um IDE.\nDentro do arquivo, copie e cole um dos exemplos abaixo:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import maritalk\n\nmodel = maritalk.MariTalk(\n    key="insira sua chave aqui. Ex: \'100088...\'",\n    model="sabia-3"  # No momento, suportamos os modelos sabia-3 e sabia-2-small\n)\n\nresponse = model.generate("Quanto \xe9 25 + 27?", max_tokens=8000)\nanswer = response["answer"]\n\nprint(f"Resposta: {answer}")   # Deve imprimir algo como "25 + 27 \xe9 igual a 52."\n'})}),"\n",(0,i.jsx)(e.p,{children:"Note que o dicion\xe1rio response cont\xe9m a chave usage, que informa a quantidade de tokens de entrada e sa\xedda que ser\xe3o cobrados.\nPara executar o c\xf3digo, digite python maritalk.py no terminal/linha de comando."})]})}function u(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(m,{...a})}):m(a)}},8453:(a,e,o)=>{o.d(e,{R:()=>s,x:()=>c});var i=o(6540);const n={},r=i.createContext(n);function s(a){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function c(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:s(a.components),i.createElement(r.Provider,{value:e},a.children)}}}]);