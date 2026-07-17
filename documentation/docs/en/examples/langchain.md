---
id: langchain
title: LangChain
---

The Maritaca API is compatible with the OpenAI Chat Completions API. In
LangChain, use the `ChatOpenAI` class from the `langchain-openai` package and set
Maritaca's endpoint as the `base_url`.

:::note Migrating from the old integration

The `ChatMaritalk` class from `langchain-community` is a legacy integration.
Examples that use `sabia-2-small` or `sabia-2-medium` are also outdated because
those models have been discontinued. Use `ChatOpenAI` with a current model as
shown below.

:::

## Installation

Install LangChain's OpenAI integration:

```bash
pip install -U langchain-openai
```

Set your API key in an environment variable. You can create a key in the
[Maritaca platform](https://plataforma.maritaca.ai/chaves-de-api).

```bash
export MARITACA_API_KEY="your-key-here"
```

## Regular call

```python
import os

from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="sabia-4",
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

response = llm.invoke(
    [
        ("system", "Answer directly and briefly."),
        ("human", "What is 25 + 27?"),
    ]
)

print(response.content)
```

Both models use the same configuration:

| Model | When to use it |
|---|---|
| `sabia-4` | General use with a good balance of quality, speed, and cost. |
| `sabia-4-thinking` | Complex tasks that benefit from reasoning before the answer. |

To use the reasoning model, change only the model name:

```python
llm = ChatOpenAI(
    model="sabia-4-thinking",
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)
```

## Tools (function calling)

Use `bind_tools` to send tool definitions to the model. The model requests a
tool call, but your application is responsible for executing it and returning
the result in a `ToolMessage`.

The example below forces the first tool call only to make the demonstration
reproducible. In a regular application, omit `tool_choice` and let the model
decide when to use the tool.

```python
import os

from langchain_core.messages import HumanMessage, ToolMessage
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI


@tool
def multiply(a: int, b: int) -> int:
    """Multiply two integers."""
    return a * b


llm = ChatOpenAI(
    model="sabia-4-thinking",
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

question = "Use the multiply tool to calculate 6 times 7."
messages = [HumanMessage(content=question)]

llm_with_forced_tool = llm.bind_tools([multiply], tool_choice="multiply")
tool_request = llm_with_forced_tool.invoke(messages)
messages.append(tool_request)

if not tool_request.tool_calls:
    raise RuntimeError("The model did not request a tool")

tool_call = tool_request.tool_calls[0]
tool_result = multiply.invoke(tool_call["args"])
messages.append(
    ToolMessage(content=str(tool_result), tool_call_id=tool_call["id"])
)

final_response = llm.bind_tools([multiply]).invoke(messages)
print(final_response.content)  # 42
```

This flow works with both `sabia-4` and `sabia-4-thinking`. For more information
about messages, chains, and agents, see the
[ChatOpenAI documentation](https://docs.langchain.com/oss/python/integrations/chat/openai).
