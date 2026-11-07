---
id: reasoning
title: Reasoning
---

# Reasoning

The S5 models (`S5`, `S5-free`, `S5-br-sp` and `S5-nano`) think before they answer. They produce an internal chain of reasoning, analyze the request, plan, and only then write the answer or call a tool. This makes them strong at multi-step problems, agentic workflows and chained function calls.

In the Responses API, reasoning shows up in `output` as an item of type `reasoning`. The reasoning text is **confidential**: it is always **encrypted**, in the `encrypted_content` field, and only Maritaca can read it. To let the model pick up where it left off, pass that item back on the next call, just like the flow for OpenAI's reasoning models.

The exception is **S5-nano**: as an open-weights model, it returns its reasoning **as plain text**, unencrypted. See [Plain-text reasoning on S5-nano](#plain-text-reasoning-on-s5-nano).

## Getting started

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

response = client.responses.create(
    model="S5",
    reasoning={"effort": "medium"},
    input="A train leaves Campinas at 8:00 at 80 km/h. Another leaves São Paulo, 90 km away, "
          "at 8:30 at 100 km/h, heading the opposite way. When do they meet?",
)

print(response.output_text)
```

:::tip Read the answer with `output_text`
On S5 models the first item in `output` is the `reasoning` item, and the message comes after it. Use `response.output_text` (which joins the text of all messages) instead of `response.output[0].content[0].text`.
:::

## Reasoning effort

The `reasoning.effort` parameter controls how much the model thinks before answering.

| Value | Behavior |
|---|---|
| `none` | Turns reasoning off. Faster, cheaper answers. |
| `minimal`, `low` | Short reasoning. `minimal` is the same as `low`. |
| `medium` | Balance between quality and cost. |
| `high`, `xhigh`, `max` | Longer reasoning, for hard problems. `high` and `max` are the same as `xhigh`. |

Without `reasoning.effort`, the default is `xhigh`. Use `none` or `low` for chat and simple extraction, and keep the default for multi-step problems.

The same control exists in the Chat Completions API through the `reasoning_effort` parameter (see [S5 quick start](s5-quick-start)).

## How reasoning works

On every call, S5 generates **reasoning tokens** before the answer. They:

- are billed as output tokens and show up in `usage.output_tokens_details.reasoning_tokens`;
- take up room in the context window and count toward `max_output_tokens`;
- are never returned as text: the content only comes encrypted, in the `reasoning` item.

```json
{
  "output": [
    {
      "id": "rs_6f1c...",
      "type": "reasoning",
      "content": [],
      "encrypted_content": "gAAAAABp...",
      "summary": []
    },
    {
      "id": "msg_9a2b...",
      "type": "message",
      "role": "assistant",
      "content": [{"type": "output_text", "text": "They meet at about 8:47.", "annotations": []}]
    }
  ],
  "reasoning": {"effort": "medium", "summary": null, "context": "all_turns", "mode": "standard"},
  "usage": {
    "input_tokens": 61,
    "output_tokens": 812,
    "output_tokens_details": {"reasoning_tokens": 790},
    "total_tokens": 873
  }
}
```

:::caution Leave room for reasoning
If `max_output_tokens` is small, the model may spend the whole budget reasoning and finish with no answer text. Leave headroom or lower the effort.
:::

## Keeping reasoning across calls

In function-calling flows, the model reasons, asks for a tool, and then has to continue with the result. If you pass the `reasoning` item back along with the rest of the `output`, the model resumes the previous step's reasoning instead of starting over. This improves answer quality in agentic flows.

There are two ways to do this.

### 1. `previous_response_id` (simplest)

With `store: true` (the default), Maritaca keeps the response for 30 days, with the reasoning encrypted. On the next call, send only what is new and point to the previous response:

```python
import json

tools = [{
    "type": "function",
    "name": "get_weather",
    "description": "Current weather for a city.",
    "parameters": {
        "type": "object",
        "properties": {"city": {"type": "string"}},
        "required": ["city"],
    },
}]

response = client.responses.create(
    model="S5",
    input="I'm going to Campinas today. Do I need an umbrella?",
    tools=tools,
)

call = next(item for item in response.output if item.type == "function_call")
result = {"temperature": 24, "rain": "heavy"}  # your real function here

final = client.responses.create(
    model="S5",
    previous_response_id=response.id,
    input=[{
        "type": "function_call_output",
        "call_id": call.call_id,
        "output": json.dumps(result),
    }],
    tools=tools,
)
print(final.output_text)
```

A stored response can only be used by the same account. An id that does not exist, has expired or belongs to another account returns `400` with the code `previous_response_not_found`.

### 2. Stateless: pass `output` back as input

If you don't want anything stored (for example, because of a data retention policy), use `store: false` and pass the items back yourself. Just append the response's `output` to the input list:

```python
context = [{"role": "user", "content": "I'm going to Campinas today. Do I need an umbrella?"}]

response = client.responses.create(
    model="S5",
    input=context,
    tools=tools,
    store=False,
    include=["reasoning.encrypted_content"],
)

context += response.output  # includes the encrypted reasoning item and the function_call

call = next(item for item in response.output if item.type == "function_call")
context.append({
    "type": "function_call_output",
    "call_id": call.call_id,
    "output": json.dumps({"temperature": 24, "rain": "heavy"}),
})

final = client.responses.create(model="S5", input=context, tools=tools, store=False)
print(final.output_text)
```

`encrypted_content` is always included in the item, with or without `include`. The `"reasoning.encrypted_content"` value is accepted so you can keep the same code you would use with OpenAI.

### Encrypted item rules

- `encrypted_content` can only be decrypted by the same account (user or organization) that received it. A tampered blob, or one from another account, returns `400` with the code `invalid_encrypted_content`.
- An item produced by a different model is silently ignored, as on OpenAI.
- The `content` field of an input `reasoning` item must be empty (`[]`). Sending text there returns `400` with the code `array_above_max_length`.
- Reasoning you pass back counts as input: it shows up in `usage.input_tokens` and is billed at the input price.

### Which turns' reasoning the model sees

By default (`reasoning.context: "all_turns"`), the model sees the reasoning of every previous turn you passed back. With `"current_turn"`, it only sees the reasoning generated after the last user message, which saves context in long conversations.

```python
response = client.responses.create(
    model="S5",
    previous_response_id=previous.id,
    input="And tomorrow?",
    reasoning={"context": "current_turn"},
)
```

## Reasoning summaries

The reasoning itself is not exposed, but you can ask for a readable **summary** of it with `reasoning.summary`:

| Value | Summary |
|---|---|
| `auto` | Same as `detailed`. |
| `concise` | Short, with the main steps. |
| `detailed` | More complete. |

```python
response = client.responses.create(
    model="S5",
    input="What is 17 × 23? Explain.",
    reasoning={"effort": "low", "summary": "auto"},
)

for item in response.output:
    if item.type == "reasoning":
        for part in item.summary:
            print(part.text)
```

The summary comes in the item's `summary` field, as parts of type `summary_text`. It is written separately, from the reasoning, and never reproduces the original text. When streaming, it arrives through the `response.reasoning_summary_part.added`, `response.reasoning_summary_text.delta`, `response.reasoning_summary_text.done` and `response.reasoning_summary_part.done` events.

## Streaming

When streaming, the `reasoning` item is the first output item (`output_index` 0), before the message. The `response.output_item.added` and `response.output_item.done` events for that item already carry `encrypted_content`. There are no events with the reasoning text.

```python
stream = client.responses.create(
    model="S5",
    input="Explain in two sentences how Pix works.",
    reasoning={"effort": "low"},
    stream=True,
)

for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
    elif event.type == "response.completed":
        print("\nReasoning tokens:", event.response.usage.output_tokens_details.reasoning_tokens)
```

## Plain-text reasoning on S5-nano

`S5-nano` has [open weights](https://huggingface.co/maritaca-ai/S5-nano), so its reasoning is not confidential: it comes as plain text, for every account, and is never encrypted. Everything else on this page applies the same way (effort, billing, `previous_response_id`, passing `output` back as input).

In the Responses API, the text comes in the `reasoning` item's `content`, as parts of type `reasoning_text`, and there is no `encrypted_content`:

```json
{
  "id": "rs_6f1c...",
  "type": "reasoning",
  "content": [{"type": "reasoning_text", "text": "By 8:30 the first train has already covered 40 km..."}],
  "summary": []
}
```

```python
response = client.responses.create(
    model="S5-nano",
    reasoning={"effort": "low"},
    input="What is 17 × 23?",
)

for item in response.output:
    if item.type == "reasoning":
        for part in item.content:
            print("Reasoning:", part.text)

print("Answer:", response.output_text)
```

In the Chat Completions API, the reasoning comes in the message's `reasoning_content` field (and in each `delta`, when streaming):

```python
completion = client.chat.completions.create(
    model="S5-nano",
    reasoning_effort="low",
    messages=[{"role": "user", "content": "What is 17 × 23?"}],
)

message = completion.choices[0].message
print("Reasoning:", message.to_dict().get("reasoning_content"))
print("Answer:", message.content)
```

Differences from S5:

- To resume the reasoning, pass the `reasoning` item back as it came, with the text in `content`. With `previous_response_id`, Maritaca stores the text along with the response.
- An encrypted `reasoning` item generated by `S5` is ignored by `S5-nano`, and vice versa.
- When streaming the Responses API, the full reasoning text comes in the `reasoning` item of the `response.output_item.done` event. There are no delta events with the reasoning text.

## Tips

- **Agentic flows:** always pass the `reasoning` items back (or use `previous_response_id`). Without them the model restarts its reasoning at every step and spends more tokens.
- **Cost and latency:** start with `low` or `medium` and only raise the effort if quality is not enough.
- **Instructions:** state the goal and the constraints; there is no need to ask it to "think step by step", the model already does.
