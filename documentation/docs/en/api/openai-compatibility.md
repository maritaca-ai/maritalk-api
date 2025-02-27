---
id: openai-compatibility
title: Compatibility with OpenAI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Compatibility with OpenAI 

Maritaca API is compatible with OpenAI client libraries, making it easy to experiment with our open-source models in existing applications.

This means that Sabiá models can be used in any program that uses OpenAI libraries.

### **Setting Up OpenAI to Use Maritaca API**

#### Library Installation

First, install the openai library by typing this command in the terminal:

```bash
pip install openai
```

### 🛠️ Setting Up the Client
Setting up the OpenAI client is the first step to using the API. Make sure to provide your API key and the custom base URL. That is, to use Maritaca API, simply point the endpoint to `https://chat.maritaca.ai/api`, fill in the API key with a key obtained from the platform (as described in quick start), and use one of the Sabiá models.
```python
import os
import openai

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),
    base_url="https://chat.maritaca.ai/api",
)
```

### 🗨️ Making a Chat Request

You can make a chat request to the sabia-3 model by passing a list of messages.

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "system", "content": "You are a travel agent. Be descriptive and kind."},
    {"role": "user", "content": "Tell me about the Christ the Redeemer."},
  ],
  max_tokens=8000
)

print(response.choices[0].message.content)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer my_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "messages": [{"role": "system", "content": "You are a travel agent. Be descriptive and kind."},
                 {"role": "user", "content": "Tell me about the Christ the Redeemer."}],
    "max_tokens": 8000
  }'
```
</TabItem>
</Tabs>

### 💻 Making a Request to Complete Input
In addition to chats, you can also use the model to complete input, as in the example below:

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.completions.create(
  model="sabia-3",
  prompt="Once upon a time, in a distant kingdom, a young adventurer dreamed of exploring unknown lands. One day, he found a mysterious map that showed the way to a lost treasure",
  max_tokens=175
)

print(response.choices[0].text)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/completions \
  -H "Authorization: Bearer my_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "prompt": "Once upon a time, in a distant kingdom, a young adventurer dreamed of exploring unknown lands. One day, he found a mysterious map that showed the way to a lost treasure",
    "max_tokens": 175
  }'
```
</TabItem>
</Tabs>

### 🔄 Streaming Chat Request

To receive responses in real time (streaming), you can use the parameter stream=True.

<Tabs>
<TabItem value="python" label="Python" default>
```python
import os
import openai

stream = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "system", "content": "You are a travel agent. Be descriptive and kind."},
    {"role": "user", "content": "Tell me about the Christ the Redeemer."},
  ],
  stream=True,
  max_tokens=8000
)
for chunk in stream:
  print(chunk.choices[0].delta.content or "", end="", flush=True)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer my_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "messages": [{"role": "system", "content": "You are a travel agent. Be descriptive and kind."},
                 {"role": "user", "content": "Tell me about the Christ the Redeemer."}],
    "max_tokens": 8000
  }'
```
</TabItem>
</Tabs>
