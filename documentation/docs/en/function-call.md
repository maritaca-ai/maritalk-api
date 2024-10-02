---
id: function-call
title: Function Calls
---


# Function Calls
Function calls enable the connection of models like sabiá-3 to external tools and systems on the client side. With this functionality, it's possible to create agents that perform autonomous tasks, interacting with APIs and external systems to carry out specific actions such as querying data, automating processes, or making decisions.

Here is an example of how to provide tools for sabiá-3 using the message API:

## How to Use Function Calls

### Example 1: Weather Forecast

In this tutorial, we will create a conversational assistant that can provide real-time weather forecasts to the user. The assistant will use the OpenAI library to interact with the user, identify the necessary geographic coordinates, and then make calls to the Open-Meteo API to obtain weather data. We will cover each step and detail the code.

#### Step 1: Defining the Function to Query the Weather Forecast
First, we create a function that will query the weather forecast using the Open-Meteo API. This function will be called by the assistant as soon as it identifies the coordinates of the desired location.
```python
import requests

def consultar_previsao_tempo(latitude, longitude):
    BASE_URL = "https://api.open-meteo.com/v1/forecast"
    
    # Parameters for the API call, including latitude, longitude, and timezone
    params = {
        'latitude': latitude,
        'longitude': longitude,
        'current_weather': True,
        'timezone': 'America/Sao_Paulo'
    }
    
    response = requests.get(BASE_URL, params=params)
    
    # If the response is successful (code 200), we extract the necessary data
    if response.status_code == 200:
        data = response.json()
        temperature = data['current_weather']['temperature']
        condition = data['current_weather']['weathercode']
        
        return {
            "temperature": temperature,
            "condition": condition
        }
    else:
        # If there is an error, we return an error message
        return {"error": "Error obtaining the weather forecast."}
```

#### Step 2: Configuring Function Calls in the Model
Now, we create the structure to register the consultar_previsao_tempo function as a function that can be called automatically by the assistant based on the needs of the conversation. This function will be exposed to the conversation API.
```python
functions = [
    {
        "name": "consultar_previsao_tempo",
        "description": "Gets the weather forecast for a location based on coordinates.",
        "parameters": {
            "type": "object",
            "properties": {
                "latitude": {
                    "type": "number",
                    "description": "Latitude of the city."
                },
                "longitude": {
                    "type": "number",
                    "description": "Longitude of the city."
                }
            },
            "required": ["latitude", "longitude"]
        }
    }
]
```
Here, we register the consultar_previsao_tempo function, specifying the parameters it expects (latitude and longitude), so that the assistant can use it. The model will know to call this function when it perceives that the user's question is related to the weather.

#### Step 3: Interacting with the Assistant and Calling the Function
Now, we configure the client to interact with the user and determine when the weather forecast function should be called. The assistant will be set up to understand the conversation and identify when it should retrieve weather forecast data.
```python
import openai
import os

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),  # Insert your API key here
    base_url="https://chat.maritaca.ai/api", 
)

response = client.chat.completions.create(
  model="sabia-3", 
  messages=[
    {"role": "system", "content": "You are an assistant that provides weather forecasts."},
    {"role": "user", "content": "What is the weather forecast for Rio de Janeiro?"}
  ],
  tools=functions,  # Here we register the functions that the assistant can call
)
```

#### Step 4: Extracting and Using the Function Arguments
After interaction with the assistant, it may determine that the consultar_previsao_tempo function should be called. The assistant's response will include the necessary arguments (such as latitude and longitude) to make the query.

In the code below, we show how to extract the arguments, transform the format (if necessary), and make the weather forecast query:
```python
import json

function_call = response.choices[0].message.tool_calls[0].function.arguments
function_call_json = json.loads(function_call)

# We extract latitude and longitude from the returned arguments
latitude = function_call_json['latitude']
longitude = function_call_json['longitude']

# We make the call to the weather forecast API with the returned data
forecast = consultar_previsao_tempo(latitude, longitude)
    
print(forecast)
```
Finally, the result of the weather forecast (temperature and weather conditions) is displayed.


### Example 2: Users and Custom Responses

In this example, we will create a conversational assistant that interacts with the user to provide client IDs based on their names. We will use the get_user_id function to generate fictitious IDs for the provided names. Then, we will calculate the sum of the two IDs and respond to the user with the result.

#### Step 1: Defining the get_user_id Function
The get_user_id function is responsible for returning a random ID for each username passed. In this case, we simulate the generation of IDs using the random.randint() function.
```python
import random

# Function that returns a random ID for the provided name
def get_user_id(name):
    return random.randint(1, 100)

```

#### Step 2: Configuring Function Calls in the Model

Next, we configure the assistant to register the get_user_id function, allowing it to be called whenever the assistant detects the need to obtain an ID based on the customer's name.
```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_user_id",
            "description": "Get the id of a user given the user name",
            "parameters": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "The name of the user"
                    }
                },
                "required": ["name"],
                "additionalProperties": False
            }
        }
    }
]

```

#### Step 3: Interacting with the Assistant and Calling the Function
Now, we configure the client so that the assistant interacts with the user. The assistant will receive a message from the user asking for the IDs of two clients and wanting to know the sum of these two IDs.
```python
import openai
import json

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),  # Insert your API key here
    base_url="https://chat.maritaca.ai/api", 
)

response = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "user", "content": "What is the id for the clients alexandre and helena? what is the sum of both of them"},
  ],
  temperature=0.0,
  tools=tools,  # We pass the registered tools
)
```

Here, the assistant receives a message from the user asking about the IDs of two clients and the sum of these IDs. The assistant will know that it must call the get_user_id function to obtain this data.

#### Step 4: Executing Function Calls

After the assistant identifies that it needs to call the get_user_id function, we process all function calls and generate responses. The following code handles the execution of these calls:
```python 
all_tool_calls = []

if response.choices[0].message.tool_calls:
    for tool_call in response.choices[0].message.tool_calls:
        arguments = json.loads(tool_call.function.arguments)
        function_name = tool_call.function.name
        
        # We call the get_user_id function for each provided name
        if function_name == "get_user_id":
            get_user_id_response = get_user_id(arguments['name'])
        
            # We create a message with the result of the called function
            function_call_result_message = {
                "role": "tool",
                "content": json.dumps({
                    "name": arguments['name'],
                    "id": get_user_id_response
                }),
                "tool_call_id": tool_call.id
            }
        
            # We add the function response to the results list
            all_tool_calls.append(function_call_result_message)

```

In this part, we process all function calls:

* We load the necessary arguments (the client's name).
* We execute the get_user_id function to generate a fictitious ID for each name.
* We create a response in the appropriate format, associating each name with its corresponding ID.

#### Step 5: Preparing and Sending the Final Response

After generating the IDs for the clients, we prepare the final response, which includes the sum of the IDs. We send this back to the assistant so that it can inform the user.
```python
completion_payload = {
    "model": "sabia-3",
    "messages": [
        {"role": "user", "content": "What is the id for the clients alexandre and helena? what is the sum of both of them"},
        response.choices[0].message,  # We include the assistant's original message
        *all_tool_calls  # We include the function call responses
    ]
}

# We make a new call to generate the final response
final_response = client.chat.completions.create(**completion_payload)

# We print the assistant's final response
print(final_response.choices[0].message)

```
<br/>
<div className="custom-box" style={{
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: '#B0E0E6', 
    padding: '10px', 
    border: '1px solid #B0E0E6', 
    borderRadius: '5px', 
    margin: '10px 0',
    color: 'black'
    }}>
    <span style={{ fontSize: '1.5em', marginRight: '10px', color: '#B0E0E6' }}>💡</span>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>
        Does the model have the capability to execute functions independently?
        </strong>
        <p style={{ fontSize: '0.9em' }}>
        No, the model only proposes function calls and creates arguments. Your application is responsible for managing the execution of these functions based on these proposals (and informing the model of the results of this execution).
        </p>
    </div>
</div>
<br/>
    <div className="custom-box" style={{
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#FFFFE0', 
        padding: '10px', 
        border: '1px solid #dfe9e9', 
        borderRadius: '5px', 
        margin: '10px 0',
        color: 'black'
        }}>
        <span style={{ fontSize: '1.5em', marginRight: '10px', color: '#FFFFE0' }}>🎯</span>
        <div>
            <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>
            Does the model have access to internal tools?
            </strong>
            <p style={{ fontSize: '0.9em' }}>
            No, the model does not have access to any internal tools on the server side. All tools must be explicitly provided by you, the user, in each API request. This gives you full control and flexibility over the tools that the model can use.
            </p>
    </div>
</div>