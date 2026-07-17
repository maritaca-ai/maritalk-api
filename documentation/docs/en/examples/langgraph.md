---
id: langgraph
title: LangGraph
---

LangChain's `create_agent` creates a LangGraph-based agent. You can use the
Maritaca API through `ChatOpenAI` by configuring Maritaca's endpoint as the
`base_url`.

## Installation

```bash
pip install -U langchain langchain-openai langgraph
export MARITACA_API_KEY="your-key-here"
```

The example uses `sabia-4` by default. To use the reasoning model, set
`MARITACA_MODEL=sabia-4-thinking`.

## Regular call and agent with a tool

```python
import os

from langchain.agents import create_agent
from langchain.tools import tool
from langchain_openai import ChatOpenAI


model_name = os.getenv("MARITACA_MODEL", "sabia-4")
llm = ChatOpenAI(
    model=model_name,
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

normal_response = llm.invoke("What is 25 + 27? Include 52 in the answer.")
print("Regular call:", normal_response.content)


@tool
def add(a: int, b: int) -> int:
    """Add two integers."""
    return a + b


agent = create_agent(
    model=llm,
    tools=[add],
    system_prompt="Always use the add tool for addition.",
)
result = agent.invoke(
    {"messages": [{"role": "user", "content": "Use add to calculate 12 + 3."}]}
)

print("Agent:", result["messages"][-1].content)  # 15
```

The same code works with `sabia-4` and `sabia-4-thinking`. The agent executes
the tool locally and adds its result to the message history before requesting
the final answer from the model.

For more information, see the
[LangChain agents documentation](https://docs.langchain.com/oss/python/langchain/agents).
