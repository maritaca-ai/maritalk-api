---
id: completion
title: Chat
hide_table_of_contents: true
---
import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chat

## Create Chat Completion

**POST** `https://chat.maritaca.ai/api/chat/completions`

This endpoint calls the model to generate responses based on specified inputs. Below are the detailed parameters and usage examples.


<div class="container">

<div class="container-esquerda">

## Request Body

---
### model `string` <sup class="sup-obrigatorio">Required</sup>
Default is `sabia-3`. The model that will generate the response.

---
### messages `array` <sup class="sup-obrigatorio">Required</sup>
Messages sent to the model.

- **When chat_mode=True**: a list of messages is expected, each with "role" (role: system, user, assistant, or tool) and "content" (content of the message). Example:
   - user: "Hello, what is the result of 25 + 27?"
   - assistant: "The result is 52."

- **When chat_mode=False**: messages should be a single string with the desired prompt.

<details>
<summary>System message (object)</summary>

- **content** (string) **Required**: The content of the system message.
- **role** (string) **Required**: The role of the message author, in this case, `system`.

</details>

<details>
<summary>User message (object)</summary>

- **content** (string) **Required**: The content of the user message.
- **role** (string) **Required**: The role of the message author, in this case, `user`.

</details>

<details>
<summary>Assistant message (object)</summary>

- **content** (string) **Required**: The content of the assistant's response.
- **role** (string) **Required**: The role of the message author, in this case, `assistant`.

</details>

<details>
<summary>Tool message (object)</summary>

- **content** (string) **Required**: The content of the tool message.
- **role** (string) **Required**: The role of the message author, in this case, `tool`.

</details>

---

### frequency_penalty `float or null` <sup class="sup-opcional">Optional</sup>
Default is `0`. Range is from -2.0 to 2.0. Positive values penalize tokens based on frequency in the conversation, reducing repetition probability.

---
### logit_bias `object{str: float}` <sup class="sup-opcional">Optional</sup>
Dictionary of tokens and their respective logit_bias values. This field is used to influence the model generation by increasing or decreasing the likelihood of specific tokens.

---
### max_tokens `int or null` <sup class="sup-opcional">Optional</sup>
Sets an upper limit on the number of tokens generated in the response, controlling the cost for the text generated via the API.

---
### n `int or null` <sup class="sup-opcional">Optional</sup>
Default is `1`. Specifies how many response options should be generated for each input message.

---
### presence_penalty `float or null` <sup class="sup-opcional">Optional</sup>
Default is `0`. Range from -2.0 to 2.0. Increases the probability of new topics in the conversation by penalizing repetitions.

---
### stop `array` <sup class="sup-opcional">Optional</sup>
List of tokens that, when generated, indicate that the model should stop generating tokens.

---
### stream `bool or null` <sup class="sup-opcional">Optional</sup>
Default is `false`. If True, the model will run in streaming mode, where tokens are generated and returned to the client as they are created. If False, the model will operate in batch mode, generating all tokens before returning them to the client.

---
### stream_options `object{str: bool} or null` <sup class="sup-opcional">Optional</sup>
Options to control streaming behavior, used only if stream=True. Available options are:
  - **include_usage**: if True, a final chunk will be emitted before the end of the stream containing the request's token count.

---
### temperature `float or null` <sup class="sup-opcional">Optional</sup>
Default is `0.7`. Sampling temperature for generation, with higher values producing more random responses.

---
### top_p `float or null` <sup class="sup-opcional">Optional</sup>
Default is `0.95`. If less than 1, only the top tokens with cumulative probability >= top_p are kept (nucleus sampling). For example, 0.95 means that only the tokens that make up the top 95% of the probability mass are considered when predicting the next token. Nucleus sampling is described in [Holtzman et al.](http://arxiv.org/abs/1904.09751).

---
### tools `array` <sup class="sup-opcional">Optional</sup>
A list of tools the model can call. Use this parameter to provide a list of functions for which the model can generate JSON inputs.

---
### tool_choice `string or object` <sup class="sup-opcional">Optional</sup>
Controls which (if any) tool the model calls.
  - `"none"`: the model will not call any tool and will instead generate a message.
  - `"auto"`: the model can choose between generating a message or calling one or more tools.
  - `"required"`: the model must call one or more tools.
  
---
</div>

<div class="container-direita" style={{ overflowY: 'auto', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

### Request Example

<Tabs>
<TabItem value="python" label="Default" default>
```python
import openai

client = openai.OpenAI(
        api_key=maritaca_key,
        base_url="https://chat.maritaca.ai/api",
    )


completion = client.chat.completions.create(
  model="sabia-3",
  messages= [
    {
      "role": "system",
      "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities."
    },
    {
      "role": "user",
      "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?"
    }
  ]

)

print(completion.choices[0].message)

```
</TabItem>
<TabItem value="python2" label="Streaming">
```python
python import openai
client = openai.OpenAI( api_key=maritaca_key, base_url="https://chat.maritaca.ai/api", )

completion = client.chat.completions.create(
  model="sabia-3", 
  messages= 
  [ 
    { "role": "system", "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities." }, 
    { "role": "user", "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?" } 
  ], 
  stream=True 
)

for chunk in completion: 
  print(chunk.choices[0].delta)
```
</TabItem>
<TabItem value="python3" label="Functions">
```python
import openai

client = openai.OpenAI(
    api_key=maritaca_key,
    base_url="https://chat.maritaca.ai/api",
)

# Define the function the model can call
functions = [
    {
        "name": "recommend_tourist_spot",
        "description": "Recommends a tourist spot in Bahia",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "Location for the recommendation, e.g., a city or state",
                },
            },
            "required": ["location"],
        },
    }
]

# Define the conversation and use of function_call
completion = client.chat.completions.create(
    model="sabia-3",
    messages=[
        {
          "role": "system",
          "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities."
        },
        {
          "role": "user",
          "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?"
        }
    ],
    tools=functions,
    tool_choice="required",
)

# Check if choices and tool_calls are present before accessing them
if completion.choices and completion.choices[0].message.tool_calls:
    function_call = completion.choices[0].message.tool_calls[0].function
    print(f"Function to be used: {function_call.name}, arguments: {function_call.arguments}")
else:
    print("No function call found.")
```
</TabItem>
<TabItem value="python4" label="Direct API call">
```python
import requests
import json

base_url = "https://chat.maritaca.ai/api/chat/completions"
headers = {
    "Authorization": f"Key {api_key}",
    "Content-Type": "application/json"
}

# Request body
data = {
    "model": "sabia-3",
    "messages": [
        {
            "role": "system",
            "content": "You are a travel assistant specialized in providing information on tourist destinations, hotels, restaurants, and local activities."
        },
        {
            "role": "user",
            "content": "I am planning a trip to Bahia. Could you recommend a tourist spot?"
        }
    ]
}

# Makes the POST request directly to the API
response = requests.post(base_url, headers=headers, data=json.dumps(data))

# Check the response status and display the content
if response.status_code == 200:
    completion = response.json()
    print(completion["choices"][0]["message"]["content"])  # Display the model's response
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```
</TabItem>
</Tabs>

</div></div> 
