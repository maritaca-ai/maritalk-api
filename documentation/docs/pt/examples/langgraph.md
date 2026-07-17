---
id: langgraph
title: LangGraph
---

O `create_agent` do LangChain cria um agente baseado em LangGraph. A API da
Maritaca pode ser usada por meio do `ChatOpenAI`, configurando o endpoint em
`base_url`.

## Instalação

```bash
pip install -U langchain langchain-openai langgraph
export MARITACA_API_KEY="sua-chave-aqui"
```

O exemplo usa `sabia-4` por padrão. Para usar o modelo de raciocínio, defina
`MARITACA_MODEL=sabia-4-thinking`.

## Chamada normal e agente com ferramenta

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

normal_response = llm.invoke("Quanto é 25 + 27? Inclua 52 na resposta.")
print("Chamada normal:", normal_response.content)


@tool
def add(a: int, b: int) -> int:
    """Soma dois números inteiros."""
    return a + b


agent = create_agent(
    model=llm,
    tools=[add],
    system_prompt="Sempre use a ferramenta add para fazer somas.",
)
result = agent.invoke(
    {"messages": [{"role": "user", "content": "Use add para calcular 12 + 3."}]}
)

print("Agente:", result["messages"][-1].content)  # 15
```

O mesmo código funciona com `sabia-4` e `sabia-4-thinking`. O agente executa a
ferramenta localmente e adiciona o resultado ao histórico antes de pedir a
resposta final ao modelo.

Para mais detalhes, consulte a
[documentação de agentes do LangChain](https://docs.langchain.com/oss/python/langchain/agents).
