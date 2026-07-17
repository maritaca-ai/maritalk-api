---
id: llama-index
title: LlamaIndex
---

Use LlamaIndex's `OpenAILike` integration to connect OpenAI-compatible models to
a custom endpoint.

## Installation

```bash
pip install -U llama-index-core llama-index-llms-openai-like
export MARITACA_API_KEY="your-key-here"
```

The example uses `sabia-4` by default. To use the reasoning model, set
`MARITACA_MODEL=sabia-4-thinking`.

## Regular call and tools

```python
import json
import os

from llama_index.core.llms import ChatMessage
from llama_index.core.tools import FunctionTool
from llama_index.llms.openai_like import OpenAILike


model_name = os.getenv("MARITACA_MODEL", "sabia-4")
llm = OpenAILike(
    model=model_name,
    api_key=os.environ["MARITACA_API_KEY"],
    api_base="https://chat.maritaca.ai/api",
    context_window=128_000,
    is_chat_model=True,
    is_function_calling_model=True,
)

normal_response = llm.chat(
    [ChatMessage(role="user", content="What is 25 + 27? Include 52 in the answer.")]
)
print("Regular call:", normal_response)


def multiply(a: int, b: int) -> int:
    """Multiply two integers."""
    return a * b


tool = FunctionTool.from_defaults(fn=multiply)
tool_spec = tool.metadata.to_openai_tool()
messages = [
    ChatMessage(role="user", content="Use multiply to calculate 6 times 7.")
]

tool_request = llm.chat(
    messages,
    tools=[tool_spec],
    tool_choice={"type": "function", "function": {"name": "multiply"}},
)
tool_calls = tool_request.message.additional_kwargs.get("tool_calls", [])
if not tool_calls:
    raise RuntimeError("The model did not request a tool")

tool_call = tool_calls[0]
tool_result = tool(**json.loads(tool_call.function.arguments))
messages.extend(
    [
        tool_request.message,
        ChatMessage(role="tool", content=str(tool_result), additional_kwargs={"tool_call_id": tool_call.id}),
    ]
)

final_response = llm.chat(messages, tools=[tool_spec])
print("Tool response:", final_response)  # 42
```

This tool loop only uses public LlamaIndex APIs and works with `sabia-4` and
`sabia-4-thinking`. Your application receives the structured request, executes
the function, and returns its result with the same `tool_call_id`.

For more information, see the
[OpenAILike documentation](https://docs.llamaindex.ai/en/stable/api_reference/llms/openai_like/).
