---
id: llama-index
title: LlamaIndex
---

Use o `OpenAILike` do LlamaIndex para conectar modelos compatíveis com a API da
OpenAI a um endpoint personalizado.

## Instalação

```bash
pip install -U llama-index-core llama-index-llms-openai-like
export MARITACA_API_KEY="sua-chave-aqui"
```

O exemplo usa `sabia-4` por padrão. Para usar o modelo de raciocínio, defina
`MARITACA_MODEL=sabia-4-thinking`.

## Chamada normal e tools

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
    [ChatMessage(role="user", content="Quanto é 25 + 27? Inclua 52 na resposta.")]
)
print("Chamada normal:", normal_response)


def multiply(a: int, b: int) -> int:
    """Multiplica dois números inteiros."""
    return a * b


tool = FunctionTool.from_defaults(fn=multiply)
tool_spec = tool.metadata.to_openai_tool()
messages = [
    ChatMessage(role="user", content="Use multiply para calcular 6 vezes 7.")
]

tool_request = llm.chat(
    messages,
    tools=[tool_spec],
    tool_choice={"type": "function", "function": {"name": "multiply"}},
)
tool_calls = tool_request.message.additional_kwargs.get("tool_calls", [])
if not tool_calls:
    raise RuntimeError("O modelo não solicitou uma ferramenta")

tool_call = tool_calls[0]
tool_result = tool(**json.loads(tool_call.function.arguments))
messages.extend(
    [
        tool_request.message,
        ChatMessage(role="tool", content=str(tool_result), additional_kwargs={"tool_call_id": tool_call.id}),
    ]
)

final_response = llm.chat(messages, tools=[tool_spec])
print("Resposta com tool:", final_response)  # 42
```

Esse tool loop usa apenas APIs públicas do LlamaIndex e funciona com `sabia-4`
e `sabia-4-thinking`. Sua aplicação recebe a solicitação estruturada, executa a
função e devolve o resultado como uma mensagem com o mesmo `tool_call_id`.

Para mais detalhes, consulte a
[documentação do OpenAILike](https://docs.llamaindex.ai/en/stable/api_reference/llms/openai_like/).
