---
id: langgraph
title: Langgraph
---


## LangGraph + ReAct

Os modelos da Maritaca funcionam com LangGraph via SDK OpenAI. Configure `base_url`, `api_key` e `model`. Exemplo de agente ReAct com uma ferramenta:

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
    """Soma a com b.

    Args:
        a: primeiro número inteiro
        b: segundo número inteiro
    """
    return a + b

tools = [add]
react_graph = create_react_agent(llm, tools=tools)
messages = [HumanMessage(content="Adiciona 12 com 3.")]
state = react_graph.invoke({"messages": messages})

for m in state["messages"]:
    m.pretty_print()



