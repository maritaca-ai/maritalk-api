---
id: tools
title: Built-in Tools
---

# Built-in Tools

Built-in tools let Sabiá models **search the web, run code, and query official Brazilian databases on the server side**, without you having to implement or host anything. Unlike [function calls](function-call.md) — which the model delegates back to *your* code — built-in tools run inside Maritaca's infrastructure as an agentic flow: the model decides which tools to call, calls them across multiple steps, and returns only the final answer. The intermediate reasoning and tool calls stay internal.

Availability varies by tool: **web search** works on all Sabiá models, while **code execution** and **Data Ocean** are available on **`sabia-4`** and **`sabia-4-thinking`**.

## Available tools

| Tool | Flag | Models | What it does |
|---|---|---|---|
| **Web search** | `web_search` | All Sabiá models | Searches the web and reads pages to answer with up-to-date information and sources. |
| **Code execution** | `code_execution` | `sabia-4` and `sabia-4-thinking` | Runs Python/Bash in a sandbox to compute, analyze data, and generate files (charts, documents). |
| **Data Ocean** | `data_ocean` | `sabia-4` and `sabia-4-thinking` | Queries dozens of official Brazilian databases — population, companies, health, climate, public safety, economy, elections, and more — to answer with real figures and sources. |

:::info Data Ocean turns on the other tools automatically
Enabling `data_ocean` also turns on **web search** (`web_search`) and **code execution** (`code_execution`) automatically. Data Ocean answers typically cross official data with web search and calculations. As a result, `data_ocean: true` can incur charges for **Data Ocean + web search + code execution** in the same request (see [Pricing](precos.md#built-in-tools)).
:::

## Enabling tools

Built-in tools require **`stream: false`** (the agentic flow returns only the final answer) and a compatible model (see the table above). They are **off by default** — you opt in per request.

### Chat Completions

Enable a tool by setting its boolean flag in the request body. With the OpenAI SDK, pass them through `extra_body`.

```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4-thinking",
    "stream": false,
    "data_ocean": true,
    "messages": [
      {"role": "user", "content": "Quantos habitantes tem Campinas segundo o Censo 2022?"}
    ]
  }'
```

```python
from openai import OpenAI

client = OpenAI(api_key=MARITACA_API_KEY, base_url="https://chat.maritaca.ai/api")

response = client.chat.completions.create(
    model="sabia-4-thinking",
    stream=False,
    messages=[{"role": "user", "content": "Pesquise na web a cotação atual do dólar e cite a fonte."}],
    extra_body={"web_search": True},
)
print(response.choices[0].message.content)
```

### Responses API

On the [Responses API](responses-api.md) you can enable tools the same way (the flags), **or** with the OpenAI built-in-tools convention in the `tools` array:

```bash
curl https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4-thinking",
    "input": "Gere um gráfico de barras (3, 7, 2, 5) com matplotlib e mostre para mim.",
    "tools": [{"type": "code_interpreter"}]
  }'
```

The same call with the OpenAI SDK. Generated files come back as
`code_execution_artifact` items in `response.output` — decode `content_base64`
to save them:

```python
import base64
from openai import OpenAI

client = OpenAI(api_key=MARITACA_API_KEY, base_url="https://chat.maritaca.ai/api")

response = client.responses.create(
    model="sabia-4-thinking",
    input="Gere um gráfico de barras (3, 7, 2, 5) com matplotlib e mostre para mim.",
    tools=[{"type": "code_interpreter"}],  # or extra_body={"code_execution": True}
)

print(response.output_text)

for item in response.output:
    if item.type == "code_execution_artifact":
        with open(item.filename, "wb") as f:
            f.write(base64.b64decode(item.content_base64))
        print("saved", item.filename)
```

The built-in tool types map to the flags as follows:

| `tools` entry | Enables |
|---|---|
| `{"type": "web_search"}` | `web_search` |
| `{"type": "code_interpreter"}` | `code_execution` |
| `{"type": "data_ocean"}` | `data_ocean` |

You can mix built-in tools with your own [function tools](function-call.md) in the same request.

## What you get back

### Usage metering

Every response reports how many tool executions ran in `usage.tool_execution_details`:

```json
"usage": {
  "prompt_tokens": 20,
  "completion_tokens": 139,
  "total_tokens": 159,
  "tool_execution_details": {
    "web_search_calls": 0,
    "page_reads": 0,
    "data_ocean_gb_processed": 0.000161,
    "code_execution_minutes": 0
  }
}
```

This field is present only when at least one built-in tool ran. On the Responses API it appears under the same `usage` object.

### Generated files

When code execution produces a file (a chart or an editable document), it is returned with the file bytes encoded in base64.

**Chat Completions** — in a top-level `generated_files` array:

```json
"generated_files": [
  {
    "filename": "grafico_barras.png",
    "mime_type": "image/png",
    "size_bytes": 26728,
    "content_base64": "iVBORw0KGgo..."
  }
]
```

**Responses API** — as `code_execution_artifact` items in the `output` array:

```json
"output": [
  {
    "type": "code_execution_artifact",
    "id": "cea_...",
    "status": "completed",
    "filename": "grafico_barras.png",
    "mime_type": "image/png",
    "size_bytes": 26728,
    "content_base64": "iVBORw0KGgo..."
  },
  {
    "type": "message",
    "role": "assistant",
    "content": [{"type": "output_text", "text": "Aqui está o gráfico..."}]
  }
]
```

Inspect `mime_type` to tell images apart from documents. Decode `content_base64` to obtain the file.

## Pricing

Built-in tool executions are billed per use, in addition to the usual token costs, and reported in `usage.tool_execution_details`. See the figures on the [Pricing](precos.md#built-in-tools) page.

## Notes and limitations

- **Streaming is not supported** with built-in tools — send `stream: false`. A streaming request that enables a tool returns a `400` error.
- **Availability depends on the tool**: web search (`web_search`) works on all Sabiá models; code execution (`code_execution`) and Data Ocean (`data_ocean`) work on `sabia-4` and `sabia-4-thinking`. On incompatible models the API returns a 400 error.
- The agentic flow is **internal**: intermediate reasoning and tool calls are not exposed — only the final assistant message (plus any generated files) is returned.
