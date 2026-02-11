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

### <span className="inline-heading"><span className="geo-icon geo-icon-chain geo-icon-small" aria-hidden="true"></span><span>Setting Up the Client</span></span>
Setting up the OpenAI client is the first step to using the API. Make sure to provide your API key and the custom base URL. That is, to use Maritaca API, simply point the endpoint to `https://chat.maritaca.ai/api`, fill in the API key with a key obtained from the platform (as described in quick start), and use one of the Sabiá models.
```python
import os
import openai

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),
    base_url="https://chat.maritaca.ai/api",
)
```

### <span className="inline-heading"><span className="geo-icon geo-icon-chat geo-icon-small" aria-hidden="true"></span><span>Making a Request</span></span>

You can make a request to the sabia-4 model using the Responses API.

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.responses.create(
  model="sabia-4",
  instructions="You are a travel agent. Be descriptive and kind.",
  input="Tell me about the Christ the Redeemer.",
  max_output_tokens=8000
)

print(response.output[0].content[0].text)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer my_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "instructions": "You are a travel agent. Be descriptive and kind.",
    "input": "Tell me about the Christ the Redeemer.",
    "max_output_tokens": 8000
  }'
```
</TabItem>
</Tabs>

### <span className="inline-heading"><span className="geo-icon geo-icon-chat geo-icon-small" aria-hidden="true"></span><span>Making a Request with Message List</span></span>

You can also pass a list of messages as input for multi-turn conversations.

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.responses.create(
  model="sabia-4",
  input=[
    {"role": "user", "content": "My name is Alice."},
    {"role": "assistant", "content": "Hello Alice! Nice to meet you."},
    {"role": "user", "content": "What is my name?"},
  ],
  max_output_tokens=8000
)

print(response.output[0].content[0].text)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer my_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "input": [
      {"role": "user", "content": "My name is Alice."},
      {"role": "assistant", "content": "Hello Alice! Nice to meet you."},
      {"role": "user", "content": "What is my name?"}
    ],
    "max_output_tokens": 8000
  }'
```
</TabItem>
</Tabs>

### <span className="inline-heading"><span className="geo-icon geo-icon-stream geo-icon-small" aria-hidden="true"></span><span>Streaming Request</span></span>

To receive responses in real time (streaming), you can use the parameter stream=True.

<Tabs>
<TabItem value="python" label="Python" default>
```python
import os
import openai

stream = client.responses.create(
  model="sabia-4",
  instructions="You are a travel agent. Be descriptive and kind.",
  input="Tell me about the Christ the Redeemer.",
  stream=True,
  max_output_tokens=8000
)
for event in stream:
  if event.type == "response.output_text.delta":
    print(event.delta, end="", flush=True)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer my_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "instructions": "You are a travel agent. Be descriptive and kind.",
    "input": "Tell me about the Christ the Redeemer.",
    "stream": true,
    "max_output_tokens": 8000
  }'
```
</TabItem>
</Tabs>

### <span className="inline-heading"><span className="geo-icon geo-icon-chat geo-icon-small" aria-hidden="true"></span><span>Also available: Chat Completions API</span></span>

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.chat.completions.create(
  model="sabia-4",
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
    "model": "sabia-4",
    "messages": [{"role": "system", "content": "You are a travel agent. Be descriptive and kind."},
                 {"role": "user", "content": "Tell me about the Christ the Redeemer."}],
    "max_tokens": 8000
  }'
```
</TabItem>
</Tabs>
