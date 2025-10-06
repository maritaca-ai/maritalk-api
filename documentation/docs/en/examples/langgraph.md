---
id: langgraph
title: Langgraph
---


## LangGraph + ReAct

Maritaca models work with LangGraph via the OpenAI SDK. Configure base_url, api_key, and model. ReAct agent example with one tool:

```python
# pip install -U langchain-openai langgraph langchain-core
import os
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent
from langchain_core.messages import HumanMessage

llm = ChatOpenAI(
    model="sabiazinho-3",
    api_key=os.environ.get("MARITACA_API_KEY"),
    base_url="https://chat.maritaca.ai/api",
)

def add(a: int, b: int) -> int:
    """Sum a and b.

    Args:
        a: first integer
        b: second integer
    """
    return a + b

tools = [add]
react_graph = create_react_agent(llm, tools=tools)
messages = [HumanMessage(content="Add 12 and 3.")]
state = react_graph.invoke({"messages": messages})

for m in state["messages"]:
    m.pretty_print()



