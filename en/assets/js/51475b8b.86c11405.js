"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[825],{6046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(4848),i=t(8453);const a={id:"function-call",title:"Function Calls"},o="Function Calls",r={id:"en/function-call",title:"Function Calls",description:"Function calls enable the connection of models like sabi\xe1-3 to external tools and systems on the client side. With this functionality, it's possible to create agents that perform autonomous tasks, interacting with APIs and external systems to carry out specific actions such as querying data, automating processes, or making decisions.",source:"@site/docs/en/function-call.md",sourceDirName:"en",slug:"/en/function-call",permalink:"/en/en/function-call",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"function-call",title:"Function Calls"},sidebar:"sidebarEn",previous:{title:"Compatibility with OpenAI",permalink:"/en/en/maritalk-api/openai-compatibility"},next:{title:"Structured Outputs",permalink:"/en/en/structured-outputs"}},l={},c=[{value:"How to Use Function Calls",id:"how-to-use-function-calls",level:2},{value:"Example 1: Weather Forecast",id:"example-1-weather-forecast",level:3},{value:"Step 1: Defining the Function to Query the Weather Forecast",id:"step-1-defining-the-function-to-query-the-weather-forecast",level:4},{value:"Step 2: Configuring Function Calls in the Model",id:"step-2-configuring-function-calls-in-the-model",level:4},{value:"Step 3: Interacting with the Assistant and Calling the Function",id:"step-3-interacting-with-the-assistant-and-calling-the-function",level:4},{value:"Step 4: Extracting and Using the Function Arguments",id:"step-4-extracting-and-using-the-function-arguments",level:4},{value:"Example 2: Users and Custom Responses",id:"example-2-users-and-custom-responses",level:3},{value:"Step 1: Defining the get_user_id Function",id:"step-1-defining-the-get_user_id-function",level:4},{value:"Step 2: Configuring Function Calls in the Model",id:"step-2-configuring-function-calls-in-the-model-1",level:4},{value:"Step 3: Interacting with the Assistant and Calling the Function",id:"step-3-interacting-with-the-assistant-and-calling-the-function-1",level:4},{value:"Step 4: Executing Function Calls",id:"step-4-executing-function-calls",level:4},{value:"Step 5: Preparing and Sending the Final Response",id:"step-5-preparing-and-sending-the-final-response",level:4}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"function-calls",children:"Function Calls"})}),"\n",(0,s.jsx)(n.p,{children:"Function calls enable the connection of models like sabi\xe1-3 to external tools and systems on the client side. With this functionality, it's possible to create agents that perform autonomous tasks, interacting with APIs and external systems to carry out specific actions such as querying data, automating processes, or making decisions."}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of how to provide tools for sabi\xe1-3 using the message API:"}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use-function-calls",children:"How to Use Function Calls"}),"\n",(0,s.jsx)(n.h3,{id:"example-1-weather-forecast",children:"Example 1: Weather Forecast"}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial, we will create a conversational assistant that can provide real-time weather forecasts to the user. The assistant will use the OpenAI library to interact with the user, identify the necessary geographic coordinates, and then make calls to the Open-Meteo API to obtain weather data. We will cover each step and detail the code."}),"\n",(0,s.jsx)(n.h4,{id:"step-1-defining-the-function-to-query-the-weather-forecast",children:"Step 1: Defining the Function to Query the Weather Forecast"}),"\n",(0,s.jsx)(n.p,{children:"First, we create a function that will query the weather forecast using the Open-Meteo API. This function will be called by the assistant as soon as it identifies the coordinates of the desired location."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import requests\n\ndef consultar_previsao_tempo(latitude, longitude):\n    BASE_URL = \"https://api.open-meteo.com/v1/forecast\"\n    \n    # Parameters for the API call, including latitude, longitude, and timezone\n    params = {\n        'latitude': latitude,\n        'longitude': longitude,\n        'current_weather': True,\n        'timezone': 'America/Sao_Paulo'\n    }\n    \n    response = requests.get(BASE_URL, params=params)\n    \n    # If the response is successful (code 200), we extract the necessary data\n    if response.status_code == 200:\n        data = response.json()\n        temperature = data['current_weather']['temperature']\n        condition = data['current_weather']['weathercode']\n        \n        return {\n            \"temperature\": temperature,\n            \"condition\": condition\n        }\n    else:\n        # If there is an error, we return an error message\n        return {\"error\": \"Error obtaining the weather forecast.\"}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"step-2-configuring-function-calls-in-the-model",children:"Step 2: Configuring Function Calls in the Model"}),"\n",(0,s.jsx)(n.p,{children:"Now, we create the structure to register the consultar_previsao_tempo function as a function that can be called automatically by the assistant based on the needs of the conversation. This function will be exposed to the conversation API."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'functions = [\n    {\n        "name": "consultar_previsao_tempo",\n        "description": "Gets the weather forecast for a location based on coordinates.",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "latitude": {\n                    "type": "number",\n                    "description": "Latitude of the city."\n                },\n                "longitude": {\n                    "type": "number",\n                    "description": "Longitude of the city."\n                }\n            },\n            "required": ["latitude", "longitude"]\n        }\n    }\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here, we register the consultar_previsao_tempo function, specifying the parameters it expects (latitude and longitude), so that the assistant can use it. The model will know to call this function when it perceives that the user's question is related to the weather."}),"\n",(0,s.jsx)(n.h4,{id:"step-3-interacting-with-the-assistant-and-calling-the-function",children:"Step 3: Interacting with the Assistant and Calling the Function"}),"\n",(0,s.jsx)(n.p,{children:"Now, we configure the client to interact with the user and determine when the weather forecast function should be called. The assistant will be set up to understand the conversation and identify when it should retrieve weather forecast data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import openai\nimport os\n\nclient = openai.OpenAI(\n    api_key=os.environ.get("MARITACA_API_KEY"),  # Insert your API key here\n    base_url="https://chat.maritaca.ai/api", \n)\n\nresponse = client.chat.completions.create(\n  model="sabia-3", \n  messages=[\n    {"role": "system", "content": "You are an assistant that provides weather forecasts."},\n    {"role": "user", "content": "What is the weather forecast for Rio de Janeiro?"}\n  ],\n  tools=functions,  # Here we register the functions that the assistant can call\n)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"step-4-extracting-and-using-the-function-arguments",children:"Step 4: Extracting and Using the Function Arguments"}),"\n",(0,s.jsx)(n.p,{children:"After interaction with the assistant, it may determine that the consultar_previsao_tempo function should be called. The assistant's response will include the necessary arguments (such as latitude and longitude) to make the query."}),"\n",(0,s.jsx)(n.p,{children:"In the code below, we show how to extract the arguments, transform the format (if necessary), and make the weather forecast query:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import json\n\nfunction_call = response.choices[0].message.tool_calls[0].function.arguments\nfunction_call_json = json.loads(function_call)\n\n# We extract latitude and longitude from the returned arguments\nlatitude = function_call_json['latitude']\nlongitude = function_call_json['longitude']\n\n# We make the call to the weather forecast API with the returned data\nforecast = consultar_previsao_tempo(latitude, longitude)\n    \nprint(forecast)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, the result of the weather forecast (temperature and weather conditions) is displayed."}),"\n",(0,s.jsx)(n.h3,{id:"example-2-users-and-custom-responses",children:"Example 2: Users and Custom Responses"}),"\n",(0,s.jsx)(n.p,{children:"In this example, we will create a conversational assistant that interacts with the user to provide client IDs based on their names. We will use the get_user_id function to generate fictitious IDs for the provided names. Then, we will calculate the sum of the two IDs and respond to the user with the result."}),"\n",(0,s.jsx)(n.h4,{id:"step-1-defining-the-get_user_id-function",children:"Step 1: Defining the get_user_id Function"}),"\n",(0,s.jsx)(n.p,{children:"The get_user_id function is responsible for returning a random ID for each username passed. In this case, we simulate the generation of IDs using the random.randint() function."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import random\n\n# Function that returns a random ID for the provided name\ndef get_user_id(name):\n    return random.randint(1, 100)\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"step-2-configuring-function-calls-in-the-model-1",children:"Step 2: Configuring Function Calls in the Model"}),"\n",(0,s.jsx)(n.p,{children:"Next, we configure the assistant to register the get_user_id function, allowing it to be called whenever the assistant detects the need to obtain an ID based on the customer's name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'tools = [\n    {\n        "type": "function",\n        "function": {\n            "name": "get_user_id",\n            "description": "Get the id of a user given the user name",\n            "parameters": {\n                "type": "object",\n                "properties": {\n                    "name": {\n                        "type": "string",\n                        "description": "The name of the user"\n                    }\n                },\n                "required": ["name"],\n                "additionalProperties": False\n            }\n        }\n    }\n]\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"step-3-interacting-with-the-assistant-and-calling-the-function-1",children:"Step 3: Interacting with the Assistant and Calling the Function"}),"\n",(0,s.jsx)(n.p,{children:"Now, we configure the client so that the assistant interacts with the user. The assistant will receive a message from the user asking for the IDs of two clients and wanting to know the sum of these two IDs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import openai\nimport json\n\nclient = openai.OpenAI(\n    api_key=os.environ.get("MARITACA_API_KEY"),  # Insert your API key here\n    base_url="https://chat.maritaca.ai/api", \n)\n\nresponse = client.chat.completions.create(\n  model="sabia-3",\n  messages=[\n    {"role": "user", "content": "What is the id for the clients alexandre and helena? what is the sum of both of them"},\n  ],\n  temperature=0.0,\n  tools=tools,  # We pass the registered tools\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here, the assistant receives a message from the user asking about the IDs of two clients and the sum of these IDs. The assistant will know that it must call the get_user_id function to obtain this data."}),"\n",(0,s.jsx)(n.h4,{id:"step-4-executing-function-calls",children:"Step 4: Executing Function Calls"}),"\n",(0,s.jsx)(n.p,{children:"After the assistant identifies that it needs to call the get_user_id function, we process all function calls and generate responses. The following code handles the execution of these calls:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'all_tool_calls = []\n\nif response.choices[0].message.tool_calls:\n    for tool_call in response.choices[0].message.tool_calls:\n        arguments = json.loads(tool_call.function.arguments)\n        function_name = tool_call.function.name\n        \n        # We call the get_user_id function for each provided name\n        if function_name == "get_user_id":\n            get_user_id_response = get_user_id(arguments[\'name\'])\n        \n            # We create a message with the result of the called function\n            function_call_result_message = {\n                "role": "tool",\n                "content": json.dumps({\n                    "name": arguments[\'name\'],\n                    "id": get_user_id_response\n                }),\n                "tool_call_id": tool_call.id\n            }\n        \n            # We add the function response to the results list\n            all_tool_calls.append(function_call_result_message)\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this part, we process all function calls:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We load the necessary arguments (the client's name)."}),"\n",(0,s.jsx)(n.li,{children:"We execute the get_user_id function to generate a fictitious ID for each name."}),"\n",(0,s.jsx)(n.li,{children:"We create a response in the appropriate format, associating each name with its corresponding ID."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"step-5-preparing-and-sending-the-final-response",children:"Step 5: Preparing and Sending the Final Response"}),"\n",(0,s.jsx)(n.p,{children:"After generating the IDs for the clients, we prepare the final response, which includes the sum of the IDs. We send this back to the assistant so that it can inform the user."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'completion_payload = {\n    "model": "sabia-3",\n    "messages": [\n        {"role": "user", "content": "What is the id for the clients alexandre and helena? what is the sum of both of them"},\n        response.choices[0].message,  # We include the assistant\'s original message\n        *all_tool_calls  # We include the function call responses\n    ]\n}\n\n# We make a new call to generate the final response\nfinal_response = client.chat.completions.create(**completion_payload)\n\n# We print the assistant\'s final response\nprint(final_response.choices[0].message)\n\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)("div",{className:"custom-box",style:{display:"flex",alignItems:"center",backgroundColor:"#B0E0E6",padding:"10px",border:"1px solid #B0E0E6",borderRadius:"5px",margin:"10px 0",color:"black"},children:[(0,s.jsx)("span",{style:{fontSize:"1.5em",marginRight:"10px",color:"#B0E0E6"},children:"\ud83d\udca1"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{style:{display:"block",fontSize:"1em",marginBottom:"5px"},children:(0,s.jsx)(n.p,{children:"Does the model have the capability to execute functions independently?"})}),(0,s.jsx)("p",{style:{fontSize:"0.9em"},children:(0,s.jsx)(n.p,{children:"No, the model only proposes function calls and creates arguments. Your application is responsible for managing the execution of these functions based on these proposals (and informing the model of the results of this execution)."})})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)("div",{className:"custom-box",style:{display:"flex",alignItems:"center",backgroundColor:"#FFFFE0",padding:"10px",border:"1px solid #dfe9e9",borderRadius:"5px",margin:"10px 0",color:"black"},children:[(0,s.jsx)("span",{style:{fontSize:"1.5em",marginRight:"10px",color:"#FFFFE0"},children:"\ud83c\udfaf"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{style:{display:"block",fontSize:"1em",marginBottom:"5px"},children:(0,s.jsx)(n.p,{children:"Does the model have access to internal tools?"})}),(0,s.jsx)("p",{style:{fontSize:"0.9em"},children:(0,s.jsx)(n.p,{children:"No, the model does not have access to any internal tools on the server side. All tools must be explicitly provided by you, the user, in each API request. This gives you full control and flexibility over the tools that the model can use."})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);