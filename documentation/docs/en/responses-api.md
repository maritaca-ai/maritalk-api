---
id: responses-api
title: Responses API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Responses API

The Responses API is the primary interface for interacting with Sabiá models. It provides a single, cohesive surface for generating text, calling external functions, producing structured outputs, and building multi-turn conversation flows — all through one endpoint.

If you already use the Chat Completions API, the Responses API is its natural evolution: same compatibility with the OpenAI SDK, but with a more expressive interface and additional features that simplify complex integrations.

### Responses API vs. Chat Completions API

The Responses API replaces Chat Completions as the recommended interface for new projects. The table below summarizes the differences:

| Aspect | Chat Completions | Responses API |
|---|---|---|
| Endpoint | `POST /v1/chat/completions` | `POST /v1/responses` |
| Input | `messages` (list of messages) | `input` (string or list of items) |
| System instructions | Via message with `role: "system"` | Dedicated `instructions` parameter |
| Output | `choices[0].message.content` | `output[0].content[0].text` |
| Streaming | (`chat.completion.chunk`) | (`response.output_text.delta`, `response.completed`, etc.) |
| Function calling | Via `tool_calls` in message | Typed `function_call` items in output |
| Structured outputs | `response_format` | `text.format` with `json_schema` |

The Chat Completions API remains available and functional. If you already have a working integration with it, there's no immediate need to migrate. For new projects, we recommend the Responses API.

### Migrating from Chat Completions

Migration is straightforward. Compare the two equivalent examples:

**Chat Completions:**
```python
response = client.chat.completions.create(
    model="sabia-4",
    messages=[
        {"role": "system", "content": "Respond concisely."},
        {"role": "user", "content": "What is the capital of Brazil?"},
    ],
    max_tokens=200,
)
print(response.choices[0].message.content)
```

**Responses API:**
```python
response = client.responses.create(
    model="sabia-4",
    instructions="Respond concisely.",
    input="What is the capital of Brazil?",
    max_output_tokens=200,
)
print(response.output[0].content[0].text)
```

The main changes are: `messages` becomes `input`, the `system` message becomes the `instructions` parameter, `max_tokens` becomes `max_output_tokens`, and accessing the response changes from `choices[0].message.content` to `output[0].content[0].text`.

---

## Quick start

Install the OpenAI library (the Maritaca API is compatible with the OpenAI SDK):

```bash
pip install openai
```

Make your first request:

<Tabs>
<TabItem value="python" label="Python" default>

```python
import openai

client = openai.OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://chat.maritaca.ai/api",
)

response = client.responses.create(
    model="sabia-4",
    input="What is the capital of Brazil?",
)

print(response.output[0].content[0].text)
# "The capital of Brazil is Brasília."
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "input": "What is the capital of Brazil?"
  }'
```

</TabItem>
</Tabs>


## Input formats

The `input` parameter accepts two formats. Choose the one that best fits your use case:

### Simple text — for direct questions

Use when you have a single question, with no need for prior context:

```python
response = client.responses.create(
    model="sabia-4",
    input="What is the capital of Brazil?",
)
```

### Message list — for conversations and context

Use when you need to maintain conversation history or define roles (user, assistant):

```python
response = client.responses.create(
    model="sabia-4",
    input=[
        {"role": "user", "content": "My name is Alice."},
        {"role": "assistant", "content": "Hello Alice! Nice to meet you."},
        {"role": "user", "content": "What is my name?"},
    ],
)

print(response.output[0].content[0].text)  # Should mention "Alice"
```

Supported roles: `user` (user), `assistant` (model), `system` (system instructions), and `developer` (developer instructions).

<br/>
<div className="custom-box" style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--ifm-table-stripe-background)',
    padding: '12px',
    border: '1px solid var(--navbar-border)',
    borderRadius: '8px',
    margin: '12px 0',
    color: 'var(--ifm-font-color-base)'
    }}>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>Tip: Use `instructions` to define behavior</strong>
        <p style={{ fontSize: '0.9em' }}>Instead of including system instructions in the message list, you can use the <code>instructions</code> parameter. This separates the model's behavior from the conversation content, making your code cleaner and more organized.</p>
    </div>
</div>
<br/>

### With system instructions

```python
response = client.responses.create(
    model="sabia-4",
    instructions="You are a history teacher. Respond in a didactic way.",
    input="Who was Dom Pedro I?",
)

print(response.output[0].content[0].text)
```

## Streaming (real-time response)

By default, the API waits for the model to generate the entire response before returning it. With streaming, you receive the response **word by word** as it's generated — ideal for chat interfaces or long responses.

<Tabs>
<TabItem value="python" label="Python" default>

```python
stream = client.responses.create(
    model="sabia-4",
    input="Tell a brief story about Brazil.",
    stream=True,
)

for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "input": "Tell a brief story about Brazil.",
    "stream": true
  }'
```

</TabItem>
</Tabs>

<br/>
<div className="custom-box" style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--ifm-table-stripe-background)',
    padding: '12px',
    border: '1px solid var(--navbar-border)',
    borderRadius: '8px',
    margin: '12px 0',
    color: 'var(--ifm-font-color-base)'
    }}>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>In practice</strong>
        <p style={{ fontSize: '0.9em' }}>The main event is <code>response.output_text.delta</code>, which contains each text fragment generated. The other events (<code>response.created</code>, <code>response.completed</code>, etc.) are useful for advanced control, such as knowing when the response finished or tracking token usage. In case of an error, a `response.failed` event is emitted instead of `response.completed`.</p>
    </div>
</div>
<br/>



## More examples

### Example 1 — Function calling (full flow)
The entire function calling flow with a real API: define the tool, send a question, receive the `function_call`, execute the function locally by calling the [Open-Meteo API](https://open-meteo.com/), and send the result back to the model for the final response.

```python
import openai
import requests
import json

client = openai.OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://chat.maritaca.ai/api",
)

# Define the function that will be executed
def get_weather(latitude, longitude):
    """Calls the Open-Meteo API and returns real data."""
    response = requests.get(
        "https://api.open-meteo.com/v1/forecast",
        params={
            "latitude": latitude,
            "longitude": longitude,
            "current_weather": True,
            "timezone": "America/Sao_Paulo",
        },
    )
    data = response.json()
    return {
        "temperature": data["current_weather"]["temperature"],
        "unit": "°C",
    }

tools = [
    {
        "type": "function",
        "name": "get_weather",
        "description": "Gets the current weather forecast for a location.",
        "parameters": {
            "type": "object",
            "properties": {
                "latitude": {
                    "type": "number",
                    "description": "City latitude.",
                },
                "longitude": {
                    "type": "number",
                    "description": "City longitude.",
                },
            },
            "required": ["latitude", "longitude"],
        },
    }
]

response = client.responses.create(
    model="sabia-4",
    input="What's the weather forecast in Rio de Janeiro?",
    tools=tools,
)

# Verify the model requested a function call
tool_call = response.output[0]
assert tool_call.type == "function_call"

print(f"Function: {tool_call.name}")         # "get_weather"
print(f"Arguments: {tool_call.arguments}")   # '{"latitude": -22.9068, "longitude": -43.1729}'
print(f"call_id: {tool_call.call_id}")       # "call_abc123..."

# Execute the function with the model's arguments
args = json.loads(tool_call.arguments)
real_result = get_weather(args["latitude"], args["longitude"])
print(f"Real API data: {real_result}")
# {"temperature": 25.6, "unit": "°C"}

# Send the result back to the model for the final response
final_response = client.responses.create(
    model="sabia-4",
    input=[
        {"role": "user", "content": "What's the weather forecast in Rio de Janeiro?"},
        {
            "type": "function_call",
            "call_id": tool_call.call_id,
            "name": tool_call.name,
            "arguments": tool_call.arguments,
        },
        {
            "type": "function_call_output",
            "call_id": tool_call.call_id,
            "output": json.dumps(real_result),
        },
    ],
    tools=tools,
)

print(final_response.output[0].content[0].text)
# "The weather forecast in Rio de Janeiro indicates a current temperature of 24.8°C."
```

### Example 2 — Structured outputs with Pydantic

Use Pydantic to define the schema, pass it via `text.format`, and validate the result automatically.

```python
import openai
import json
from pydantic import BaseModel
from typing import List

client = openai.OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://chat.maritaca.ai/api",
)

# 1. Define the schema with Pydantic
class Event(BaseModel):
    name: str
    date: str
    location: str

class ExtractedEvents(BaseModel):
    events: List[Event]

# 2. Send with structured format
response = client.responses.create(
    model="sabia-4",
    instructions="Extract the events mentioned in the text.",
    input="The 2014 World Cup was held in Brazil. "
          "The 2016 Olympics took place in Rio de Janeiro.",
    text={
        "format": {
            "type": "json_schema",
            "name": "extracted_events",
            "schema": ExtractedEvents.model_json_schema(),
            "strict": True,
        }
    },
)

# 3. Parse and validate the result
raw_json = response.output[0].content[0].text
data = json.loads(raw_json)
result = ExtractedEvents.model_validate(data)

for event in result.events:
    print(f"{event.name} — {event.date} in {event.location}")
# "World Cup — 2014 in Brazil"
# "Olympics — 2016 in Rio de Janeiro"
```

> For more format options (`json_object`, `strict`), see [Structured Outputs](./structured_outputs.md).

### Example 3 — Streaming with token tracking

Accumulate the generated text and capture token usage statistics at the end of the stream.

```python
import openai

client = openai.OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://chat.maritaca.ai/api",
)

stream = client.responses.create(
    model="sabia-4",
    input="Explain the importance of the Amazon Rainforest in 3 paragraphs.",
    stream=True,
)

full_text = ""
usage = None

for event in stream:
    if event.type == "response.output_text.delta":
        # Accumulate generated text
        full_text += event.delta
        print(event.delta, end="", flush=True)

    elif event.type == "response.completed":
        # Capture token statistics
        usage = event.response.usage

print("\n")
print(f"--- Statistics ---")
print(f"Input tokens:   {usage.input_tokens}")
print(f"Output tokens:  {usage.output_tokens}")
print(f"Total tokens:   {usage.total_tokens}")
print(f"Text length:    {len(full_text)} characters")
```

### Example 4 — Multi-turn chatbot with memory

A conversation loop where the history is maintained in the `input` list, allowing the model to remember previous messages.

```python
import openai

client = openai.OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://chat.maritaca.ai/api",
)

history = []

print("Chatbot (type 'exit' to quit)")
print("-" * 40)

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break

    history.append({"role": "user", "content": user_input})

    response = client.responses.create(
        model="sabia-4",
        instructions="You are a friendly and helpful assistant.",
        input=history,
    )

    assistant_message = response.output[0].content[0].text
    history.append({"role": "assistant", "content": assistant_message})

    print(f"Assistant: {assistant_message}")
```

> The history grows with each turn. For long conversations, consider limiting the number of messages or using summaries to keep token usage under control.
