---
id: responses-api
title: Responses
hide_table_of_contents: true
---
import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Responses

## Create a response

**POST** `https://chat.maritaca.ai/api/v1/responses`

Sends a question to the model and receives a response. Supports plain text, multi-turn conversations, function calling, structured outputs, and streaming.

<div class="container">

<div class="container-esquerda">

## Request Body

---
### model `string` <sup class="sup-obrigatorio">Required</sup>
Model to use (e.g., `sabia-4`).

---
### input `string or array` <sup class="sup-obrigatorio">Required</sup>
What you want to ask the model. Can be a simple text or a list of input items.

<details>
<summary>Conversation message (object)</summary>

- **role** (string) **Required**: Author role: `user`, `assistant`, `system`, or `developer`.
- **content** (string or array) **Required**: Message content.

</details>

<details>
<summary>function_call (object)</summary>

Represents a function call made by the assistant in a previous turn.

- **type** (string) **Required**: Always `"function_call"`.
- **call_id** (string) **Required**: Unique call identifier.
- **name** (string) **Required**: Name of the called function.
- **arguments** (string) **Required**: Arguments as serialized JSON.

</details>

<details>
<summary>function_call_output (object)</summary>

Result of a function call to return to the model.

- **type** (string) **Required**: Always `"function_call_output"`.
- **call_id** (string) **Required**: Same `call_id` as the corresponding call.
- **output** (string) **Required**: Function result (string, usually JSON).

</details>

---
### instructions `string or null` <sup class="sup-opcional">Optional</sup>
System instructions that define the model's behavior (e.g., "Always respond in Portuguese").

---
### temperature `float or null` <sup class="sup-opcional">Optional</sup>
Default is `0.7`. Controls response randomness (0.0 to 2.0).

---
### top_p `float or null` <sup class="sup-opcional">Optional</sup>
Default is `0.95`. Nucleus sampling — keeps tokens with cumulative probability >= top_p.

---
### max_output_tokens `int or null` <sup class="sup-opcional">Optional</sup>
Maximum number of tokens in the response.

---
### stop `array or null` <sup class="sup-opcional">Optional</sup>
Sequences that, when generated, make the model stop generating.

---
### stream `bool or null` <sup class="sup-opcional">Optional</sup>
Default is `false`. If `true`, returns the response via Server-Sent Events in real time.

---
### tools `array or null` <sup class="sup-opcional">Optional</sup>
List of tools (functions) the model can call. Each tool has the format:

<details>
<summary>Tool object format</summary>

- **type** (string): Always `"function"`.
- **name** (string) **Required**: Function name.
- **description** (string): Function description.
- **parameters** (object): JSON Schema of the parameters.
- **strict** (bool): If `true`, enables strict schema validation. Default: `true`.

</details>

---
### tool_choice `string or object or null` <sup class="sup-opcional">Optional</sup>
Default is `"auto"`. Controls tool usage:
  - `"auto"`: the model decides whether to use a tool.
  - `"none"`: the model will not use tools.
  - `"required"`: the model must call at least one tool.
  - `{"type": "function", "name": "name"}`: forces a specific function.

---
### parallel_tool_calls `bool or null` <sup class="sup-opcional">Optional</sup>
Default is `true`. Allows the model to make multiple function calls in parallel.

---
### text `object or null` <sup class="sup-opcional">Optional</sup>
Structured output format configuration.

<details>
<summary>Show properties</summary>

- **format.type** (string): `"text"`, `"json_schema"`, or `"json_object"`. Default: `"text"`.
- **format.name** (string): Schema name (required when type is `"json_schema"`).
- **format.schema** (object): Output JSON Schema (required when type is `"json_schema"`).
- **format.strict** (bool): Enables strict mode for schema validation.

</details>

---
### metadata `object or null` <sup class="sup-opcional">Optional</sup>
Key-value pairs for tracking. Maximum 16 pairs, key up to 64 characters, value up to 512 characters.

---
### store `bool or null` <sup class="sup-opcional">Optional</sup>
Default is `false`. Whether to store the response on the server.

---
</div>

<div class="container-direita" style={{ overflowY: 'auto', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

### Request Example

<Tabs>
<TabItem value="python" label="Simple text" default>
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
```
</TabItem>
<TabItem value="python2" label="Streaming">
```python
import openai

client = openai.OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://chat.maritaca.ai/api",
)

stream = client.responses.create(
    model="sabia-4",
    input="Tell a story about Brazil.",
    stream=True,
)

for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
```
</TabItem>
<TabItem value="python3" label="Function Calling">
```python
import openai
import json

client = openai.OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://chat.maritaca.ai/api",
)

tools = [
    {
        "type": "function",
        "name": "get_weather",
        "description": "Returns the weather for a city.",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "description": "City name",
                },
            },
            "required": ["city"],
        },
    }
]

response = client.responses.create(
    model="sabia-4",
    input="What's the weather in São Paulo?",
    tools=tools,
)

# Check function_call
tool_call = response.output[0]
print(f"Function: {tool_call.name}")
print(f"Arguments: {tool_call.arguments}")
print(f"call_id: {tool_call.call_id}")
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

</div></div>
