---
id: s5-quick-start
title: Getting started with S5
---

<style>{`.markdown table td:first-child code { white-space: nowrap; }`}</style>

# Getting started with S5

S5 is our most intelligent model. Use it to analyze documents, work with data, and solve complex tasks. This page shows how to make your first call in a few minutes.

## Pick the model name

S5 is available in the API under three names. The model is the same; what changes is where it runs and how it is billed.

| API name | Use it for | Price |
|---|---|---|
| `S5-free` | Trying it at no cost. Text only, no Batch API, Flex or built-in tools. | **Free for a limited time** |
| `S5` | Ongoing and production use, with every feature. | R$ 0.50 (input) and R$ 2.50 (output) per 1M tokens |
| `S5-br-sp` | The same S5, with inference 100% in Brazil. | 30% above `S5` |

Lowercase names are also accepted (`s5-free`, `s5`, `s5-br-sp`). Details in [Models](models), [Pricing](precos) and [Rate Limits](rate-limits).

:::caution S5 Free is temporary
`S5-free` is a launch offer and may be discontinued at any time. For ongoing or production use, use `S5`: change the model name and the rest of your code stays the same.
:::

## 1. Create an API key

Create an account on the [Maritaca platform](https://plataforma.maritaca.ai/), generate a key on the [API keys page](https://plataforma.maritaca.ai/chaves-de-api), and store it in an environment variable:

```bash
export MARITACA_API_KEY='your_key'
```

## 2. Make your first call

The API is OpenAI-compatible. Point the `base_url` to Maritaca.

```bash
pip install openai
```

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
    model="S5-free",  # switch to "S5" for production use
    messages=[
        {"role": "user", "content": "Explique em três frases como funciona o Pix."},
    ],
)
print(response.choices[0].message.content)
```

The same request with `curl`:

```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "S5-free",
    "messages": [
      {"role": "user", "content": "Explique em três frases como funciona o Pix."}
    ]
  }'
```

## 3. Tune the reasoning

S5 thinks before answering. The `reasoning_effort` parameter controls how much: `none` (turns reasoning off, faster answers), `low`, `medium` or `xhigh` (the default). Only the final answer is returned; the reasoning stays internal.

```python
response = client.chat.completions.create(
    model="S5-free",
    reasoning_effort="low",  # none, low, medium or xhigh
    messages=[{"role": "user", "content": "Qual é o maior divisor comum de 84 e 120?"}],
)
print(response.choices[0].message.content)
```

Use `none` or `low` for conversation and simple extraction, and keep the default for multi-step problems.

## 4. Stream the response

```python
stream = client.chat.completions.create(
    model="S5-free",
    messages=[{"role": "user", "content": "Escreva um haicai sobre o sabiá."}],
    stream=True,
)
for chunk in stream:
    if chunk.choices and chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
```

## Next steps

- With `S5`, turn on [web search](tools) for answers with up-to-date information and sources.
- Connect the model to your code with [function calling](function-call) and [structured outputs](structured-outputs).
- Cut the cost of repeated prompts with [prompt caching](prompt-caching): on S5 models, reused tokens cost 1/10 of the price.
- For simple, high-volume tasks, switch to `S5-nano`, the compact version of S5 (R$ 0.10 / R$ 0.60 per 1M tokens). The code stays the same.
