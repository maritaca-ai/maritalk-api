---
id: openai-compatibility
title: Compatibility with OpenAI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Compatibility with OpenAI 

Maritaca API is compatible with OpenAI's client libraries, making it easy to experiment with our open-source models in existing applications.

This means that Sabiá models can be used in any program that uses OpenAI's libraries.

### **Setting Up OpenAI to Use Maritaca API**

#### Installing the Library

First, install the openai library by typing this command in the terminal:

```bash
pip install openai
```

### 🛠️ Setting Up the Client
Configuring the OpenAI client is the first step to using the API. Make sure to provide your API key and the custom base URL. That is, to use Maritaca API, simply point the endpoint to `https://chat.maritaca.ai/api`, fill in the API key with a key obtained from the platform (as described in quick start), and use one of the Sabiá models.
```python
import os
import openai

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),
    base_url="https://chat.maritaca.ai/api",
)
```


### 🗨️ Performing a Chat Request

You can perform a chat request to the sabia-3 model by passing a list of messages.

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "system", "content": "You are a travel agent. Be descriptive and friendly."},
    {"role": "user", "content": "Tell me about Rio de Janeiro"},
  ],
  max_tokens=50
)

print(response.choices[0].message.content)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "messages": [{"role": "system", "content": "You are a travel agent. Be descriptive and friendly."},
                 {"role": "user", "content": "Tell me about Rio de Janeiro"}],
    "max_tokens": 50
  }'
```
</TabItem>
</Tabs>

### 💻 Performing a Request to Complete Input
In addition to chats, you can also use the model to complete input, as in the example below:

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.completions.create(
  model="sabia-3",
  prompt="""def main_menu():
  print("Welcome to Brazilian Recipes!")
  print("Choose one of the options below to see the recipe:")
  print("1. Feijoada") """,
  max_tokens=175
)
print(response.choices[0].text)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/completions \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "prompt": "def main_menu():\\n  print(\"Welcome to Brazilian Recipes!\")\\n  print(\"Choose one of the options below to see the recipe:\")\\n  print(\"1. Feijoada\")",
    "max_tokens": 175
  }'
```
</TabItem>
</Tabs>

### 🔄 Chat Request with Streaming

To receive responses in real-time (streaming), you can use the parameter stream=True.

<Tabs>
<TabItem value="python" label="Python" default>
```python
import os
import openai

stream = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "system", "content": "You are a travel agent. Be descriptive and friendly."},
    {"role": "user", "content": "Tell me about Rio de Janeiro"},
  ],
  stream=True,
  max_tokens=50
)
for chunk in stream:
  print(chunk.choices[0].delta.content or "", end="", flush=True)
```
</TabItem>
<TabItem value="curl" label="cURL">
The cURL example for streaming does not change since it's a request for a streaming response, which is handled on the server side.
```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "messages": [{"role": "system", "content": "You are a travel agent. Be descriptive and friendly."},
                 {"role": "user", "content": "Tell me about Rio de Janeiro"}],
    "max_tokens": 50
  }'
```
</TabItem>
</Tabs>
