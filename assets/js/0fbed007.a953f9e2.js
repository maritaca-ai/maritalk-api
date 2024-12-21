"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[333],{6755:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var s=a(4848),r=a(8453);const i={id:"glossario",title:"Gloss\xe1rio"},n="Gloss\xe1rio",t={id:"pt/glossario",title:"Gloss\xe1rio",description:"Tokens",source:"@site/docs/pt/glossario.md",sourceDirName:"pt",slug:"/pt/glossario",permalink:"/pt/glossario",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"glossario",title:"Gloss\xe1rio"},sidebar:"sidebarPt",previous:{title:"Embeddings",permalink:"/pt/embeddings"},next:{title:"Status do Sistema",permalink:"/pt/status"}},d={},l=[{value:"<strong>Tokens</strong>",id:"tokens",level:2},{value:"Por que os tokens s\xe3o importantes?",id:"por-que-os-tokens-s\xe3o-importantes",level:3},{value:"Como saber quantos tokens serei cobrado?",id:"como-saber-quantos-tokens-serei-cobrado",level:3},{value:"<strong>Contexto (Janela de contexto)</strong>",id:"contexto-janela-de-contexto",level:2},{value:"Import\xe2ncia do Tamanho da Janela de Contexto",id:"import\xe2ncia-do-tamanho-da-janela-de-contexto",level:3},{value:"Limita\xe7\xf5es",id:"limita\xe7\xf5es",level:3},{value:"<strong>Temperatura</strong>",id:"temperatura",level:2},{value:"<strong>TTFT (Tempo para o Primeiro Token)</strong>",id:"ttft-tempo-para-o-primeiro-token",level:2},{value:"O que influencia o TTFT?",id:"o-que-influencia-o-ttft",level:3},{value:"<strong>Rate Limit</strong>",id:"rate-limit",level:2},{value:"Por que o rate limit \xe9 importante?",id:"por-que-o-rate-limit-\xe9-importante",level:3},{value:"Como o rate limit afeta o uso da API?",id:"como-o-rate-limit-afeta-o-uso-da-api",level:3},{value:"Onde consulto os rate limits?",id:"onde-consulto-os-rate-limits",level:3},{value:"O que fazer se atingir o rate limit?",id:"o-que-fazer-se-atingir-o-rate-limit",level:3}];function m(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"gloss\xe1rio",children:"Gloss\xe1rio"})}),"\n",(0,s.jsx)(o.h2,{id:"tokens",children:(0,s.jsx)(o.strong,{children:"Tokens"})}),"\n",(0,s.jsxs)(o.p,{children:["Tokens s\xe3o as unidades fundamentais que os modelos de linguagem utilizam para processar texto. Eles representam sequ\xeancias de caracteres que comp\xf5em a linguagem escrita.\nUm ",(0,s.jsx)(o.strong,{children:"token"}),' pode ser: Uma palavra inteira, parte de uma palavra, um caractere \xfanico ou uma sequ\xeancia de caracteres especiais.\nPor exemplo, a palavra "',(0,s.jsx)(o.strong,{children:"tokeniza\xe7\xe3o"}),'" pode ser dividida em "',(0,s.jsx)(o.strong,{children:"token"}),'" e "',(0,s.jsx)(o.strong,{children:"iza\xe7\xe3o"}),'". Em m\xe9dia, um token corresponde a aproximadamente 4 caracteres.']}),"\n",(0,s.jsx)(o.h3,{id:"por-que-os-tokens-s\xe3o-importantes",children:"Por que os tokens s\xe3o importantes?"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Limita\xe7\xe3o de Processamento"}),": O tamanho do texto que um modelo pode processar \xe9 limitado pelo n\xfamero de tokens que ele pode manipular de uma vez, conhecido como ",(0,s.jsx)(o.strong,{children:"'janela de contexto'"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"C\xe1lculo de Custos"}),": Os custos s\xe3o calculados com base no n\xfamero de tokens processados, sendo cobrados por milh\xe3o de tokens."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"como-saber-quantos-tokens-serei-cobrado",children:"Como saber quantos tokens serei cobrado?"}),"\n",(0,s.jsx)(o.p,{children:"Para saber de antem\xe3o o quanto suas requisi\xe7\xf5es ir\xe3o custar, use a fun\xe7\xe3o count_tokens para saber o n\xfamero de tokens em um dado prompt."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'from maritalk import count_tokens\n\nprompt = "Com quantos paus se faz uma canoa?"\n\ntotal_tokens = count_tokens(prompt, model="sabia-3")\n\nprint(f\'O prompt "{prompt}" cont\xe9m {total_tokens} tokens.\')\n'})}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h2,{id:"contexto-janela-de-contexto",children:(0,s.jsx)(o.strong,{children:"Contexto (Janela de contexto)"})}),"\n",(0,s.jsxs)(o.p,{children:["A ",(0,s.jsx)(o.strong,{children:"janela de contexto"})," refere-se \xe0 quantidade de texto que um modelo de linguagem pode levar em conta ao gerar uma nova resposta. Ela funciona como a capacidade de lembrar detalhes ao contar uma hist\xf3ria. Quando algu\xe9m explica um evento que aconteceu durante o dia, se consegue lembrar de muitos detalhes desde o come\xe7o, pode contar a hist\xf3ria de forma completa e bem conectada. Mas, se s\xf3 recordar os \xfaltimos momentos, a hist\xf3ria pode ficar incompleta ou sem nexo."]}),"\n",(0,s.jsx)(o.p,{children:'Da mesma forma, em um modelo de linguagem, a janela de contexto determina quantos detalhes anteriores ele pode "lembrar" ao criar uma nova resposta. Quanto maior for essa janela, mais contexto o modelo tem para gerar uma resposta rica e precisa. Se a janela for menor, ele s\xf3 consegue considerar uma parte limitada da informa\xe7\xe3o, o que pode afetar a qualidade da resposta.'}),"\n",(0,s.jsx)(o.h3,{id:"import\xe2ncia-do-tamanho-da-janela-de-contexto",children:"Import\xe2ncia do Tamanho da Janela de Contexto"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Maior Janela de Contexto"}),": Permite que o modelo compreenda e responda a prompts mais complexos e extensos."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Menor Janela de Contexto"}),": Pode limitar a capacidade do modelo de lidar com prompts longos ou de manter a coer\xeancia em conversas prolongadas."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"limita\xe7\xf5es",children:"Limita\xe7\xf5es"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Para ",(0,s.jsx)(o.strong,{children:"modelos de gera\xe7\xe3o de texto"}),", a soma do tamanho do prompt e da sa\xedda gerada n\xe3o deve ultrapassar o comprimento m\xe1ximo da janela de contexto."]}),"\n"]}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h2,{id:"temperatura",children:(0,s.jsx)(o.strong,{children:"Temperatura"})}),"\n",(0,s.jsx)(o.p,{children:"A temperatura \xe9 um par\xe2metro que controla o n\xedvel de aleatoriedade nas respostas de um modelo de linguagem durante a gera\xe7\xe3o de texto."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Temperaturas mais altas"})," resultam em respostas mais criativas e variadas. Por exemplo, ao pedir para o modelo continuar uma hist\xf3ria, ele pode inventar finais diferentes e inesperados. Isso \xe9 \xfatil quando se busca originalidade, como na escrita de fic\xe7\xe3o, onde m\xfaltiplas possibilidades e surpresas s\xe3o desejadas."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Temperaturas mais baixas"}),", por outro lado, produzem respostas mais previs\xedveis e conservadoras. Nesse caso, o modelo tende a seguir o caminho mais prov\xe1vel e seguro, repetindo padr\xf5es comuns de linguagem. Isso \xe9 ideal para tarefas que exigem respostas consistentes e confi\xe1veis, como ao avaliar o desempenho de um modelo em um cen\xe1rio."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Ajustar a temperatura \xe9 essencial para encontrar o equil\xedbrio certo entre criatividade e precis\xe3o, dependendo do objetivo da tarefa. Em atividades como a cria\xe7\xe3o de hist\xf3rias, di\xe1logos, ou qualquer outro tipo de conte\xfado onde a originalidade \xe9 importante, configurar a temperatura adequadamente pode ser a chave para alcan\xe7ar o resultado desejado. Por outro lado, quando a precis\xe3o e a consist\xeancia s\xe3o mais importantes, uma temperatura mais baixa ajuda a garantir que as respostas sejam claras e previs\xedveis."}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h2,{id:"ttft-tempo-para-o-primeiro-token",children:(0,s.jsx)(o.strong,{children:"TTFT (Tempo para o Primeiro Token)"})}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.strong,{children:"Tempo para o Primeiro Token (TTFT)"})," mede a rapidez com que um modelo de linguagem come\xe7a a responder ap\xf3s receber uma solicita\xe7\xe3o (prompt). Um TTFT baixo indica que o modelo responde rapidamente, o que \xe9 essencial para uma experi\xeancia de usu\xe1rio fluida, especialmente em chatbots e sistemas em tempo real."]}),"\n",(0,s.jsx)(o.h3,{id:"o-que-influencia-o-ttft",children:"O que influencia o TTFT?"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Tamanho do modelo"}),": Modelos maiores podem ser mais lentos."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Hardware"}),": Computadores mais potentes reduzem o TTFT."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Condi\xe7\xf5es de rede"}),": Internet lenta aumenta o TTFT."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Comprimento do prompt"}),": Prompts mais longos aumentam o TTFT."]}),"\n"]}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h2,{id:"rate-limit",children:(0,s.jsx)(o.strong,{children:"Rate Limit"})}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.strong,{children:"rate limit"})," \xe9 uma pr\xe1tica comum em servi\xe7os de API para evitar o uso excessivo e garantir a estabilidade e a distribui\xe7\xe3o equitativa dos recursos do servidor entre os usu\xe1rios. Ele estabelece um limite para o n\xfamero de solicita\xe7\xf5es que um usu\xe1rio ou sistema pode fazer dentro de um determinado per\xedodo de tempo."]}),"\n",(0,s.jsx)(o.h3,{id:"por-que-o-rate-limit-\xe9-importante",children:"Por que o rate limit \xe9 importante?"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Estabilidade do Servi\xe7o"}),": Previne contra sobrecargas que podem ser causadas por muitas solicita\xe7\xf5es simult\xe2neas."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Justi\xe7a de Uso"}),": Assegura que todos os usu\xe1rios tenham acesso justo ao servi\xe7o, evitando que um usu\xe1rio monopolize os recursos."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Seguran\xe7a"}),": Ajuda a identificar e mitigar poss\xedveis ataques de nega\xe7\xe3o de servi\xe7o (DoS)."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"como-o-rate-limit-afeta-o-uso-da-api",children:"Como o rate limit afeta o uso da API?"}),"\n",(0,s.jsx)(o.p,{children:"Uma vez atingido o limite de solicita\xe7\xf5es, as chamadas subsequentes podem ser rejeitadas ou resultar em mensagens de erro. Assim, os desenvolvedores precisam monitorar e gerenciar suas chamadas de API para evitar exceder o limite."}),"\n",(0,s.jsx)(o.p,{children:"Na API da Maritaca, existem tr\xeas tipos de rate limit:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"N\xfamero m\xe1ximo de tokens de entrada (prompt), enviados por minuto"}),"\n",(0,s.jsx)(o.li,{children:"N\xfamero m\xe1ximo de tokens de gerados por minuto"}),"\n",(0,s.jsx)(o.li,{children:"N\xfamero m\xe1ximo de requisi\xe7\xf5es por minuto, independente do tamanho do prompt ou tokens gerados."}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"onde-consulto-os-rate-limits",children:"Onde consulto os rate limits?"}),"\n",(0,s.jsxs)(o.p,{children:["Os rate limits de cada modelo est\xe3o dispon\xedveis em ",(0,s.jsx)(o.a,{href:"https://plataforma.maritaca.ai/modelos",children:"https://plataforma.maritaca.ai/modelos"})]}),"\n",(0,s.jsx)(o.h3,{id:"o-que-fazer-se-atingir-o-rate-limit",children:"O que fazer se atingir o rate limit?"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Ajustar a Frequ\xeancia de Solicita\xe7\xf5es"}),": Espa\xe7ar as chamadas de API para ficar dentro do limite permitido."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Aumentar o Limite"}),": Se precisa de rate limits maiores, por favor, nos envie uma mensagem para ",(0,s.jsx)(o.a,{href:"mailto:suporte@maritaca.ai",children:"suporte@maritaca.ai"})]}),"\n"]})]})}function c(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>n,x:()=>t});var s=a(6540);const r={},i=s.createContext(r);function n(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);