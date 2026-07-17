---
id: langchain
title: LangChain
---

A API da Maritaca é compatível com a API de Chat Completions da OpenAI. No
LangChain, use a classe `ChatOpenAI` do pacote `langchain-openai` e configure o
endpoint da Maritaca em `base_url`.

:::note Migração da integração antiga

A classe `ChatMaritalk`, disponível em `langchain-community`, é uma integração
legada. Exemplos que usam `sabia-2-small` ou `sabia-2-medium` também estão
desatualizados, pois esses modelos foram descontinuados. Use a configuração
abaixo com `ChatOpenAI` e um modelo atual.

:::

## Instalação

Instale a integração OpenAI do LangChain:

```bash
pip install -U langchain-openai
```

Defina sua chave em uma variável de ambiente. Você pode criar uma chave na
[plataforma da Maritaca](https://plataforma.maritaca.ai/chaves-de-api).

```bash
export MARITACA_API_KEY="sua-chave-aqui"
```

## Chamada normal

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
        ("system", "Responda de forma direta e curta."),
        ("human", "Quanto é 25 + 27?"),
    ]
)

print(response.content)
```

Os dois modelos podem ser usados com a mesma configuração:

| Modelo | Quando usar |
|---|---|
| `sabia-4` | Uso geral, com bom equilíbrio entre qualidade, velocidade e custo. |
| `sabia-4-thinking` | Tarefas complexas que se beneficiam de raciocínio antes da resposta. |

Para usar o modelo de raciocínio, altere somente o nome do modelo:

```python
llm = ChatOpenAI(
    model="sabia-4-thinking",
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)
```

## Tools (function calling)

Use `bind_tools` para enviar a definição das ferramentas ao modelo. O modelo
solicita a chamada, mas sua aplicação é responsável por executá-la e devolver o
resultado em uma `ToolMessage`.

O exemplo abaixo força a primeira chamada da ferramenta apenas para tornar a
demonstração reproduzível. Em uma aplicação normal, omita `tool_choice` para o
modelo decidir quando usar a ferramenta.

```python
import os

from langchain_core.messages import HumanMessage, ToolMessage
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI


@tool
def multiply(a: int, b: int) -> int:
    """Multiplica dois números inteiros."""
    return a * b


llm = ChatOpenAI(
    model="sabia-4-thinking",
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

question = "Use a ferramenta multiply para calcular 6 vezes 7."
messages = [HumanMessage(content=question)]

llm_with_forced_tool = llm.bind_tools([multiply], tool_choice="multiply")
tool_request = llm_with_forced_tool.invoke(messages)
messages.append(tool_request)

if not tool_request.tool_calls:
    raise RuntimeError("O modelo não solicitou uma ferramenta")

tool_call = tool_request.tool_calls[0]
tool_result = multiply.invoke(tool_call["args"])
messages.append(
    ToolMessage(content=str(tool_result), tool_call_id=tool_call["id"])
)

final_response = llm.bind_tools([multiply]).invoke(messages)
print(final_response.content)  # 42
```

Esse fluxo funciona tanto com `sabia-4` quanto com `sabia-4-thinking`. Para mais
detalhes sobre mensagens, chains e agentes, consulte a
[documentação do ChatOpenAI](https://docs.langchain.com/oss/python/integrations/chat/openai).
