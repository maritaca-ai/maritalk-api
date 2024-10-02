"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[1],{3848:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=o(4848),n=o(8453),r=o(8478);const i={id:"chamada-funcao",title:"Chamada de fun\xe7\xf5es"},t="Chamada de fun\xe7\xf5es",d={id:"pt/chamada-funcao",title:"Chamada de fun\xe7\xf5es",description:"A chamada de fun\xe7\xe3o permite a conex\xe3o de modelos como o sabi\xe1-3 a ferramentas e sistemas externos do lado do cliente. Com essa funcionalidade, \xe9 poss\xedvel criar agentes que executam tarefas aut\xf4nomas, interagindo com APIs e sistemas externos para realizar a\xe7\xf5es espec\xedficas, como consultar dados, automatizar processos ou tomar decis\xf5es.",source:"@site/docs/pt/chamada-funcao.md",sourceDirName:"pt",slug:"/pt/chamada-funcao",permalink:"/en/pt/chamada-funcao",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"chamada-funcao",title:"Chamada de fun\xe7\xf5es"},sidebar:"sidebarPt",previous:{title:"Casos de Uso",permalink:"/en/pt/casos-de-uso"},next:{title:"Gloss\xe1rio",permalink:"/en/pt/glossario"}},c={},l=[{value:"Como usar a chamada de fun\xe7\xf5es",id:"como-usar-a-chamada-de-fun\xe7\xf5es",level:2},{value:"Exemplo 1: Previs\xe3o do tempo",id:"exemplo-1-previs\xe3o-do-tempo",level:3},{value:"Passo 1: Definindo a Fun\xe7\xe3o para Consulta da Previs\xe3o do Tempo",id:"passo-1-definindo-a-fun\xe7\xe3o-para-consulta-da-previs\xe3o-do-tempo",level:4},{value:"Passo 2: Configurando a Chamada de Fun\xe7\xf5es no Modelo",id:"passo-2-configurando-a-chamada-de-fun\xe7\xf5es-no-modelo",level:4},{value:"Passo 3:  Interagindo com o Assistente e Chamando a Fun\xe7\xe3o",id:"passo-3--interagindo-com-o-assistente-e-chamando-a-fun\xe7\xe3o",level:4},{value:"Passo 4: Extraindo e Utilizando os Argumentos da Fun\xe7\xe3o",id:"passo-4-extraindo-e-utilizando-os-argumentos-da-fun\xe7\xe3o",level:4},{value:"Exemplo 2: Usu\xe1rios e Respostas Personalizadas",id:"exemplo-2-usu\xe1rios-e-respostas-personalizadas",level:3},{value:"Passo 1: Definindo a Fun\xe7\xe3o get_user_id",id:"passo-1-definindo-a-fun\xe7\xe3o-get_user_id",level:4},{value:"Passo 2: Configurando a Chamada de Fun\xe7\xf5es no Modelo",id:"passo-2-configurando-a-chamada-de-fun\xe7\xf5es-no-modelo-1",level:4},{value:"Passo 3:  Interagindo com o Assistente e Chamando a Fun\xe7\xe3o",id:"passo-3--interagindo-com-o-assistente-e-chamando-a-fun\xe7\xe3o-1",level:4},{value:"Passo 4: Executando as Chamadas de Fun\xe7\xe3o",id:"passo-4-executando-as-chamadas-de-fun\xe7\xe3o",level:4},{value:"Passo 5: Preparando e Enviando a Resposta Final",id:"passo-5-preparando-e-enviando-a-resposta-final",level:4}];function m(e){const a={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"chamada-de-fun\xe7\xf5es",children:"Chamada de fun\xe7\xf5es"})}),"\n",(0,s.jsx)(a.p,{children:"A chamada de fun\xe7\xe3o permite a conex\xe3o de modelos como o sabi\xe1-3 a ferramentas e sistemas externos do lado do cliente. Com essa funcionalidade, \xe9 poss\xedvel criar agentes que executam tarefas aut\xf4nomas, interagindo com APIs e sistemas externos para realizar a\xe7\xf5es espec\xedficas, como consultar dados, automatizar processos ou tomar decis\xf5es."}),"\n",(0,s.jsx)(a.p,{children:"Aqui est\xe1 um exemplo de como fornecer ferramentas para o sabi\xe1-3 usando a API de mensagens:"}),"\n",(0,s.jsx)(a.h2,{id:"como-usar-a-chamada-de-fun\xe7\xf5es",children:"Como usar a chamada de fun\xe7\xf5es"}),"\n",(0,s.jsx)(a.h3,{id:"exemplo-1-previs\xe3o-do-tempo",children:"Exemplo 1: Previs\xe3o do tempo"}),"\n",(0,s.jsx)(a.p,{children:"Neste tutorial, vamos criar um assistente de conversa\xe7\xe3o que pode fornecer previs\xf5es do tempo em tempo real para o usu\xe1rio. O assistente usar\xe1 a biblioteca OpenAI para interagir com o usu\xe1rio, identificar as coordenadas geogr\xe1ficas necess\xe1rias e, em seguida, far\xe1 chamadas \xe0 API da Open-Meteo para obter os dados meteorol\xf3gicos. Vamos abordar cada etapa e detalhar o c\xf3digo."}),"\n",(0,s.jsx)(a.h4,{id:"passo-1-definindo-a-fun\xe7\xe3o-para-consulta-da-previs\xe3o-do-tempo",children:"Passo 1: Definindo a Fun\xe7\xe3o para Consulta da Previs\xe3o do Tempo"}),"\n",(0,s.jsxs)(a.p,{children:["Primeiro, criamos uma fun\xe7\xe3o que far\xe1 a consulta da previs\xe3o do tempo utilizando a API da ",(0,s.jsx)(a.a,{href:"https://open-meteo.com/",children:"Open-Meteo"}),". Essa fun\xe7\xe3o ser\xe1 chamada pelo assistente assim que ele identificar as coordenadas do local desejado."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"import requests\n\ndef consultar_previsao_tempo(latitude, longitude):\n    BASE_URL = \"https://api.open-meteo.com/v1/forecast\"\n    \n    # Par\xe2metros para a chamada da API, incluindo a latitude, longitude e o fuso hor\xe1rio\n    params = {\n        'latitude': latitude,\n        'longitude': longitude,\n        'current_weather': True,\n        'timezone': 'America/Sao_Paulo'\n    }\n    \n    response = requests.get(BASE_URL, params=params)\n    \n    # Se a resposta for bem-sucedida (c\xf3digo 200), extra\xedmos os dados necess\xe1rios\n    if response.status_code == 200:\n        dados = response.json()\n        temperatura = dados['current_weather']['temperature']\n        condicao = dados['current_weather']['weathercode']\n        \n        return {\n            \"temperatura\": temperatura,\n            \"condicao\": condicao\n        }\n    else:\n        # Caso haja algum erro, retornamos uma mensagem de erro\n        return {\"erro\": \"Erro ao obter a previs\xe3o do tempo.\"}\n"})}),"\n",(0,s.jsx)(a.h4,{id:"passo-2-configurando-a-chamada-de-fun\xe7\xf5es-no-modelo",children:"Passo 2: Configurando a Chamada de Fun\xe7\xf5es no Modelo"}),"\n",(0,s.jsx)(a.p,{children:"Agora, criamos a estrutura para registrar a fun\xe7\xe3o consultar_previsao_tempo como uma fun\xe7\xe3o que pode ser chamada automaticamente pelo assistente com base nas necessidades da conversa. Essa fun\xe7\xe3o ser\xe1 exposta \xe0 API de conversa\xe7\xe3o."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'functions = [\n    {\n        "name": "consultar_previsao_tempo",\n        "description": "Obt\xe9m a previs\xe3o do tempo para uma localiza\xe7\xe3o com base em coordenadas.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "latitude": {\n                    "type": "number",\n                    "description": "Latitude da cidade."\n                },\n                "longitude": {\n                    "type": "number",\n                    "description": "Longitude da cidade."\n                }\n            },\n            "required": ["latitude", "longitude"]\n        }\n    }\n]\n'})}),"\n",(0,s.jsx)(a.p,{children:"Aqui, registramos a fun\xe7\xe3o consultar_previsao_tempo, especificando os par\xe2metros que ela espera (latitude e longitude), para que o assistente possa utiliz\xe1-la. O modelo saber\xe1 chamar essa fun\xe7\xe3o quando perceber que a pergunta do usu\xe1rio est\xe1 relacionada ao clima."}),"\n",(0,s.jsx)(a.h4,{id:"passo-3--interagindo-com-o-assistente-e-chamando-a-fun\xe7\xe3o",children:"Passo 3:  Interagindo com o Assistente e Chamando a Fun\xe7\xe3o"}),"\n",(0,s.jsx)(a.p,{children:"Agora, configuramos o cliente para interagir com o usu\xe1rio e determinar quando a fun\xe7\xe3o de previs\xe3o do tempo deve ser chamada. O assistente ser\xe1 configurado para entender a conversa e identificar quando deve buscar dados da previs\xe3o do tempo."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'import openai\nimport os\n\nclient = openai.OpenAI(\n    api_key=os.environ.get("MARITACA_API_KEY"),  # Insira sua chave de API aqui\n    base_url="https://chat.maritaca.ai/api", \n)\n\nresponse = client.chat.completions.create(\n  model="sabia-3", \n  messages=[\n    {"role": "system", "content": "Voc\xea \xe9 um assistente que fornece previs\xe3o do tempo."},\n    {"role": "user", "content": "Qual \xe9 a previs\xe3o do tempo para o Rio de Janeiro?"}\n  ],\n  tools=functions,  # Aqui registramos as fun\xe7\xf5es que o assistente pode chamar\n)\n'})}),"\n",(0,s.jsx)(a.h4,{id:"passo-4-extraindo-e-utilizando-os-argumentos-da-fun\xe7\xe3o",children:"Passo 4: Extraindo e Utilizando os Argumentos da Fun\xe7\xe3o"}),"\n",(0,s.jsx)(a.p,{children:"Ap\xf3s a intera\xe7\xe3o com o assistente, ele pode determinar que a fun\xe7\xe3o consultar_previsao_tempo deve ser chamada. A resposta do assistente incluir\xe1 os argumentos necess\xe1rios (como a latitude e longitude) para fazer a consulta."}),"\n",(0,s.jsx)(a.p,{children:"No c\xf3digo abaixo, mostramos como extrair os argumentos, transformar o formato (se necess\xe1rio) e fazer a consulta da previs\xe3o do tempo:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"import json\n\nfunction_call = response.choices[0].message.tool_calls[0].function.arguments\nfunction_call_json = json.loads(function_call)\n\n# Extra\xedmos latitude e longitude dos argumentos retornados\nlatitude = function_call_json['latitude']\nlongitude = function_call_json['longitude']\n\n# Fazemos a chamada \xe0 API de previs\xe3o do tempo com os dados retornados\nprevisao = consultar_previsao_tempo(latitude, longitude)\n    \nprint(previsao)\n"})}),"\n",(0,s.jsx)(a.p,{children:"Finalmente, o resultado da previs\xe3o do tempo (temperatura e condi\xe7\xf5es clim\xe1ticas) \xe9 exibido."}),"\n",(0,s.jsx)(a.h3,{id:"exemplo-2-usu\xe1rios-e-respostas-personalizadas",children:"Exemplo 2: Usu\xe1rios e Respostas Personalizadas"}),"\n",(0,s.jsx)(a.p,{children:"Neste exemplo, vamos criar um assistente de conversa\xe7\xe3o que interage com o usu\xe1rio para fornecer os IDs de clientes com base em seus nomes. Usaremos a fun\xe7\xe3o get_user_id para gerar IDs fict\xedcios para os nomes fornecidos. Em seguida, calcularemos a soma dos dois IDs e responderemos ao usu\xe1rio com o resultado."}),"\n",(0,s.jsx)(a.h4,{id:"passo-1-definindo-a-fun\xe7\xe3o-get_user_id",children:"Passo 1: Definindo a Fun\xe7\xe3o get_user_id"}),"\n",(0,s.jsx)(a.p,{children:"A fun\xe7\xe3o get_user_id \xe9 respons\xe1vel por retornar um ID aleat\xf3rio para cada nome de usu\xe1rio passado. Neste caso, simulamos a gera\xe7\xe3o de IDs usando a fun\xe7\xe3o random.randint()."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:"import random\n\n# Fun\xe7\xe3o que retorna um ID aleat\xf3rio para o nome fornecido\ndef get_user_id(name):\n    return random.randint(1, 100)\n\n"})}),"\n",(0,s.jsx)(a.h4,{id:"passo-2-configurando-a-chamada-de-fun\xe7\xf5es-no-modelo-1",children:"Passo 2: Configurando a Chamada de Fun\xe7\xf5es no Modelo"}),"\n",(0,s.jsx)(a.p,{children:"A seguir, configuramos o assistente para registrar a fun\xe7\xe3o get_user_id, permitindo que ela seja chamada sempre que o assistente detectar a necessidade de obter um ID com base no nome do cliente."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'tools = [\n    {\n        "type": "function",\n        "function": {\n            "name": "get_user_id",\n            "description": "Get the id of an user given the user name",\n            "parameters": {\n                "type": "object",\n                "properties": {\n                    "name": {\n                        "type": "string",\n                        "description": "The name of the user"\n                    }\n                },\n                "required": ["name"],\n                "additionalProperties": False\n            }\n        }\n    }\n]\n\n'})}),"\n",(0,s.jsx)(a.h4,{id:"passo-3--interagindo-com-o-assistente-e-chamando-a-fun\xe7\xe3o-1",children:"Passo 3:  Interagindo com o Assistente e Chamando a Fun\xe7\xe3o"}),"\n",(0,s.jsx)(a.p,{children:"Agora, configuramos o cliente para que o assistente interaja com o usu\xe1rio. O assistente receber\xe1 uma mensagem do usu\xe1rio, que pede os IDs de dois clientes e deseja saber a soma desses dois IDs."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'import openai\nimport json\n\nclient = openai.OpenAI(\n    api_key=os.environ.get("MARITACA_API_KEY"),  # Insira sua chave de API aqui\n    base_url="https://chat.maritaca.ai/api", \n)\n\nresponse = client.chat.completions.create(\n  model="sabia-3",\n  messages=[\n    {"role": "user", "content": "What is the id for the clients alexandre and helena? what is the sum of both of them"},\n  ],\n  temperature=0.0,\n  tools=tools,  # Passamos as ferramentas registradas\n)\n'})}),"\n",(0,s.jsx)(a.p,{children:"Aqui, o assistente recebe a mensagem do usu\xe1rio perguntando sobre os IDs de dois clientes e a soma desses IDs. O assistente saber\xe1 que deve chamar a fun\xe7\xe3o get_user_id para obter esses dados."}),"\n",(0,s.jsx)(a.h4,{id:"passo-4-executando-as-chamadas-de-fun\xe7\xe3o",children:"Passo 4: Executando as Chamadas de Fun\xe7\xe3o"}),"\n",(0,s.jsx)(a.p,{children:"Depois que o assistente identifica que precisa chamar a fun\xe7\xe3o get_user_id, processamos todas as chamadas de fun\xe7\xe3o e geramos respostas. O c\xf3digo a seguir lida com a execu\xe7\xe3o dessas chamadas:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'all_tool_calls = []\n\nif response.choices[0].message.tool_calls:\n    for tool_call in response.choices[0].message.tool_calls:\n        arguments = json.loads(tool_call.function.arguments)\n        function_name = tool_call.function.name\n        \n        # Chamamos a fun\xe7\xe3o \'get_user_id\' para cada nome fornecido\n        if function_name == "get_user_id":\n            get_user_id_response = get_user_id(arguments[\'name\'])\n        \n            # Criamos uma mensagem com o resultado da fun\xe7\xe3o chamada\n            function_call_result_message = {\n                "role": "tool",\n                "content": json.dumps({\n                    "name": arguments[\'name\'],\n                    "id": get_user_id_response\n                }),\n                "tool_call_id": tool_call.id\n            }\n        \n            # Adicionamos a resposta da fun\xe7\xe3o \xe0 lista de resultados\n            all_tool_calls.append(function_call_result_message)\n\n'})}),"\n",(0,s.jsx)(a.p,{children:"Nesta parte, processamos todas as chamadas de fun\xe7\xe3o:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Carregamos os argumentos necess\xe1rios (o nome do cliente)."}),"\n",(0,s.jsx)(a.li,{children:"Executamos a fun\xe7\xe3o get_user_id para gerar um ID fict\xedcio para cada nome."}),"\n",(0,s.jsx)(a.li,{children:"Criamos uma resposta no formato adequado, associando cada nome ao seu ID correspondente."}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"passo-5-preparando-e-enviando-a-resposta-final",children:"Passo 5: Preparando e Enviando a Resposta Final"}),"\n",(0,s.jsx)(a.p,{children:"Depois de gerar os IDs para os clientes, preparamos a resposta final, que inclui a soma dos IDs. Enviamos isso de volta ao assistente para que ele possa informar o usu\xe1rio."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",children:'completion_payload = {\n    "model": "sabia-3",\n    "messages": [\n        {"role": "user", "content": "What is the id for the clients alexandre and helena? what is the sum of both of them"},\n        response.choices[0].message,  # Inclu\xedmos a mensagem original do assistente\n        *all_tool_calls  # Inclu\xedmos as respostas das chamadas de fun\xe7\xe3o\n    ]\n}\n\n# Fazemos uma nova chamada para gerar a resposta final\nfinal_response = client.chat.completions.create(**completion_payload)\n\n# Imprimimos a resposta final do assistente\nprint(final_response.choices[0].message)\n\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.A,{children:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.div,{className:"custom-box",style:{display:"flex",alignItems:"center",backgroundColor:"#B0E0E6",padding:"10px",border:"1px solid #B0E0E6",borderRadius:"5px",margin:"10px 0",color:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"white":"black"},children:[(0,s.jsx)(a.span,{style:{fontSize:"1.5em",marginRight:"10px",color:"#B0E0E6"},children:"\ud83d\udca1"}),(0,s.jsxs)(a.div,{children:[(0,s.jsx)(a.strong,{style:{display:"block",fontSize:"1em",marginBottom:"5px"},children:"O modelo possui capacidade de executar fun\xe7\xf5es de forma independente?"}),(0,s.jsx)(a.p,{style:{fontSize:"0.9em"},children:"N\xe3o, o modelo apenas prop\xf5e chamadas de fun\xe7\xe3o e cria argumentos. O seu aplicativo \xe9 quem deve gerenciar a execu\xe7\xe3o dessas fun\xe7\xf5es com base nessas propostas (e informar ao modelo os resultados dessa execu\xe7\xe3o)."})]})]}),(0,s.jsx)(a.br,{}),(0,s.jsxs)(a.div,{className:"custom-box",style:{display:"flex",alignItems:"center",backgroundColor:"#FFFFE0",padding:"10px",border:"1px solid #dfe9e9",borderRadius:"5px",margin:"10px 0",color:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"white":"black"},children:[(0,s.jsx)(a.span,{style:{fontSize:"1.5em",marginRight:"10px",color:"#FFFFE0"},children:"\ud83c\udfaf"}),(0,s.jsxs)(a.div,{children:[(0,s.jsx)(a.strong,{style:{display:"block",fontSize:"1em",marginBottom:"5px"},children:"O modelo tem acesso a ferramentas internas?"}),(0,s.jsx)(a.p,{style:{fontSize:"0.9em"},children:"N\xe3o, o modelo n\xe3o tem acesso a nenhuma ferramenta interna do lado do servidor. Todas as ferramentas devem ser explicitamente fornecidas por voc\xea, o usu\xe1rio, em cada solicita\xe7\xe3o de API. Isso lhe d\xe1 controle total e flexibilidade sobre as ferramentas que o modelo pode usar."})]})]})]})})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8478:(e,a,o)=>{o.d(a,{A:()=>r});o(6540);var s=o(2303),n=o(4848);function r(e){let{children:a,fallback:o}=e;return(0,s.A)()?(0,n.jsx)(n.Fragment,{children:a?.()}):o??null}},8453:(e,a,o)=>{o.d(a,{R:()=>i,x:()=>t});var s=o(6540);const n={},r=s.createContext(n);function i(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);