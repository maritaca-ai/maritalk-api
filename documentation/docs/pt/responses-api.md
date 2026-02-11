---
id: responses-api
title: Responses API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Responses API

A Responses API é a interface principal para interagir com os modelos Sabiá. Ela oferece uma superfície única e coesa para gerar texto, chamar funções externas, produzir saídas estruturadas e construir fluxos de conversa multi-turno — tudo através de um único endpoint.

Se você já utiliza a Chat Completions API, a Responses API é sua evolução natural: mesma compatibilidade com o SDK da OpenAI, mas com uma interface mais expressiva e recursos adicionais que simplificam integrações complexas.

### Responses API vs. Chat Completions API

A Responses API substitui a Chat Completions como a interface recomendada para novos projetos. A tabela abaixo resume as diferenças:

| Aspecto | Chat Completions | Responses API |
|---|---|---|
| Endpoint | `POST /v1/chat/completions` | `POST /v1/responses` |
| Entrada | `messages` (lista de mensagens) | `input` (string ou lista de itens) |
| Instruções de sistema | Via mensagem com `role: "system"` | Parâmetro dedicado `instructions` |
| Saída | `choices[0].message.content` | `output[0].content[0].text` |
| Streaming | (`chat.completion.chunk`) | (`response.output_text.delta`, `response.completed`, etc.) |
| Chamada de funções | Via `tool_calls` no message | Itens tipados `function_call` no output |
| Saídas estruturadas | `response_format` | `text.format` com `json_schema` |

A Chat Completions API continua disponível e funcional. Se você já tem uma integração funcionando com ela, não há necessidade imediata de migrar. Para novos projetos, recomendamos a Responses API.

### Migrando da Chat Completions

A migração é direta. Compare os dois exemplos equivalentes:

**Chat Completions:**
```python
response = client.chat.completions.create(
    model="sabia-4",
    messages=[
        {"role": "system", "content": "Responda de forma concisa."},
        {"role": "user", "content": "Qual é a capital do Brasil?"},
    ],
    max_tokens=200,
)
print(response.choices[0].message.content)
```

**Responses API:**
```python
response = client.responses.create(
    model="sabia-4",
    instructions="Responda de forma concisa.",
    input="Qual é a capital do Brasil?",
    max_output_tokens=200,
)
print(response.output[0].content[0].text)
```

As principais mudanças são: `messages` vira `input`, a mensagem `system` vira o parâmetro `instructions`, `max_tokens` vira `max_output_tokens`, e o acesso à resposta muda de `choices[0].message.content` para `output[0].content[0].text`.

---

## Início rápido

Instale a biblioteca da OpenAI (a Maritaca API é compatível com o SDK da OpenAI):

```bash
pip install openai
```

Faça sua primeira requisição:

<Tabs>
<TabItem value="python" label="Python" default>

```python
import openai

client = openai.OpenAI(
    api_key="SUA_CHAVE_API",
    base_url="https://chat.maritaca.ai/api",
)

response = client.responses.create(
    model="sabia-4",
    input="Qual é a capital do Brasil?",
)

print(response.output[0].content[0].text)
# "A capital do Brasil é Brasília."
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer SUA_CHAVE_API" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "input": "Qual é a capital do Brasil?"
  }'
```

</TabItem>
</Tabs>


## Formatos de entrada

O parâmetro `input` aceita dois formatos. Escolha o que melhor se adequa ao seu caso:

### Texto simples — para perguntas diretas

Use quando você tem uma pergunta única, sem necessidade de contexto anterior:

```python
response = client.responses.create(
    model="sabia-4",
    input="Qual é a capital do Brasil?",
)
```

### Lista de mensagens — para conversas e contexto

Use quando precisa manter o histórico da conversa ou definir papéis (usuário, assistente):

```python
response = client.responses.create(
    model="sabia-4",
    input=[
        {"role": "user", "content": "Meu nome é Alice."},
        {"role": "assistant", "content": "Olá Alice! Prazer em conhecê-la."},
        {"role": "user", "content": "Qual é o meu nome?"},
    ],
)

print(response.output[0].content[0].text)  # Deve mencionar "Alice"
```

Papéis suportados: `user` (usuário), `assistant` (modelo), `system` (instruções de sistema) e `developer` (instruções de desenvolvedor).

<br/>
<div className="custom-box" style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--ifm-table-stripe-background)',
    padding: '12px',
    border: '1px solid var(--navbar-border)',
    borderRadius: '8px',
    margin: '12px 0',
    color: 'var(--ifm-font-color-base)'
    }}>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>Dica: Use `instructions` para definir o comportamento</strong>
        <p style={{ fontSize: '0.9em' }}>Em vez de incluir instruções de sistema na lista de mensagens, você pode usar o parâmetro <code>instructions</code>. Isso separa o comportamento do modelo do conteúdo da conversa, tornando o código mais limpo e organizado.</p>
    </div>
</div>
<br/>

### Com instruções de sistema

```python
response = client.responses.create(
    model="sabia-4",
    instructions="Você é um professor de história. Responda de forma didática.",
    input="Quem foi Dom Pedro I?",
)

print(response.output[0].content[0].text)
```

## Streaming (resposta em tempo real)

Por padrão, a API aguarda o modelo gerar toda a resposta antes de retorná-la. Com streaming, você recebe a resposta **palavra por palavra**, conforme é gerada — ideal para interfaces de chat ou respostas longas.

<Tabs>
<TabItem value="python" label="Python" default>

```python
stream = client.responses.create(
    model="sabia-4",
    input="Conte uma breve história sobre o Brasil.",
    stream=True,
)

for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer SUA_CHAVE_API" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "input": "Conte uma breve história sobre o Brasil.",
    "stream": true
  }'
```

</TabItem>
</Tabs>

<br/>
<div className="custom-box" style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--ifm-table-stripe-background)',
    padding: '12px',
    border: '1px solid var(--navbar-border)',
    borderRadius: '8px',
    margin: '12px 0',
    color: 'var(--ifm-font-color-base)'
    }}>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>Na prática</strong>
        <p style={{ fontSize: '0.9em' }}>O evento principal é o <code>response.output_text.delta</code>, que contém cada fragmento de texto gerado. Os demais eventos (<code>response.created</code>, <code>response.completed</code>, etc.) são úteis para controle avançado, como saber quando a resposta terminou ou rastrear uso de tokens. Em caso de erro, um evento `response.failed` é emitido no lugar de `response.completed`.</p>
    </div>
</div>
<br/>



## Mais exemplos 

### Exemplo 1 — Chamada de funções (fluxo completo)
O fluxo inteiro de function calling com uma API real: definir a tool, enviar a pergunta, receber o `function_call`, executar a função localmente chamando a [API Open-Meteo](https://open-meteo.com/) e devolver o resultado ao modelo para obter a resposta final.

```python
import openai
import requests
import json

client = openai.OpenAI(
    api_key="SUA_CHAVE_API",
    base_url="https://chat.maritaca.ai/api",
)

# Definir a função que será executada
def consultar_previsao_tempo(latitude, longitude):
    """Consulta a API Open-Meteo e retorna dados reais."""
    response = requests.get(
        "https://api.open-meteo.com/v1/forecast",
        params={
            "latitude": latitude,
            "longitude": longitude,
            "current_weather": True,
            "timezone": "America/Sao_Paulo",
        },
    )
    dados = response.json()
    return {
        "temperatura": dados["current_weather"]["temperature"],
        "unidade": "°C",
    }

tools = [
    {
        "type": "function",
        "name": "consultar_previsao_tempo",
        "description": "Obtém a previsão do tempo atual para uma localização.",
        "parameters": {
            "type": "object",
            "properties": {
                "latitude": {
                    "type": "number",
                    "description": "Latitude da cidade.",
                },
                "longitude": {
                    "type": "number",
                    "description": "Longitude da cidade.",
                },
            },
            "required": ["latitude", "longitude"],
        },
    }
]

response = client.responses.create(
    model="sabia-4",
    input="Qual é a previsão do tempo no Rio de Janeiro?",
    tools=tools,
)

# Verificar que o modelo pediu uma chamada de função
tool_call = response.output[0]
assert tool_call.type == "function_call"

print(f"Função: {tool_call.name}")         # "consultar_previsao_tempo"
print(f"Argumentos: {tool_call.arguments}") # '{"latitude": -22.9068, "longitude": -43.1729}'
print(f"call_id: {tool_call.call_id}")      # "call_abc123..."

# Executar a função com os argumentos do modelo
args = json.loads(tool_call.arguments)
resultado_real = consultar_previsao_tempo(args["latitude"], args["longitude"])
print(f"Dados reais da API: {resultado_real}")
# {"temperatura": 25.6, "unidade": "°C"}

# Devolver o resultado ao modelo para ele formular a resposta final
final_response = client.responses.create(
    model="sabia-4",
    input=[
        {"role": "user", "content": "Qual é a previsão do tempo no Rio de Janeiro?"},
        {
            "type": "function_call",
            "call_id": tool_call.call_id,
            "name": tool_call.name,
            "arguments": tool_call.arguments,
        },
        {
            "type": "function_call_output",
            "call_id": tool_call.call_id,
            "output": json.dumps(resultado_real),
        },
    ],
    tools=tools,
)

print(final_response.output[0].content[0].text)
# "A previsão do tempo no Rio de Janeiro indica uma temperatura atual de 24,8 °C."
```

### Exemplo 2 — Saídas estruturadas com Pydantic

Use Pydantic para definir o schema, passe-o via `text.format` e valide o resultado automaticamente.

```python
import openai
import json
from pydantic import BaseModel
from typing import List

client = openai.OpenAI(
    api_key="SUA_CHAVE_API",
    base_url="https://chat.maritaca.ai/api",
)

# 1. Definir o schema com Pydantic
class Event(BaseModel):
    name: str
    date: str
    location: str

class ExtractedEvents(BaseModel):
    events: List[Event]

# 2. Enviar com formato estruturado
response = client.responses.create(
    model="sabia-4",
    instructions="Extraia os eventos mencionados no texto.",
    input="A Copa do Mundo de 2014 foi realizada no Brasil. "
          "As Olimpíadas de 2016 aconteceram no Rio de Janeiro.",
    text={
        "format": {
            "type": "json_schema",
            "name": "extracted_events",
            "schema": ExtractedEvents.model_json_schema(),
            "strict": True,
        }
    },
)

# 3. Parsear e validar o resultado
raw_json = response.output[0].content[0].text
data = json.loads(raw_json)
result = ExtractedEvents.model_validate(data)

for event in result.events:
    print(f"{event.name} — {event.date} em {event.location}")
# "Copa do Mundo — 2014 em Brasil"
# "Olimpíadas — 2016 em Rio de Janeiro"
```

> Para mais opções de formato (`json_object`, `strict`), veja [Saídas Estruturadas](./structured_outputs.md).

### Exemplo 3 — Streaming com tracking de tokens

Acumule o texto gerado e capture as estatísticas de uso de tokens ao final do stream.

```python
import openai

client = openai.OpenAI(
    api_key="SUA_CHAVE_API",
    base_url="https://chat.maritaca.ai/api",
)

stream = client.responses.create(
    model="sabia-4",
    input="Explique a importância da Floresta Amazônica em 3 parágrafos.",
    stream=True,
)

full_text = ""
usage = None

for event in stream:
    if event.type == "response.output_text.delta":
        # Acumular o texto gerado
        full_text += event.delta
        print(event.delta, end="", flush=True)

    elif event.type == "response.completed":
        # Capturar estatísticas de tokens
        usage = event.response.usage

print("\n")
print(f"--- Estatísticas ---")
print(f"Tokens de entrada:  {usage.input_tokens}")
print(f"Tokens de saída:    {usage.output_tokens}")
print(f"Total de tokens:    {usage.total_tokens}")
print(f"Tamanho do texto:   {len(full_text)} caracteres")
```

### Exemplo 4 — Chatbot multi-turno com memória

Um loop de conversa onde o histórico é mantido na lista de `input`, permitindo que o modelo lembre de mensagens anteriores.

```python
import openai

client = openai.OpenAI(
    api_key="SUA_CHAVE_API",
    base_url="https://chat.maritaca.ai/api",
)

history = []

print("Chatbot (digite 'sair' para encerrar)")
print("-" * 40)

while True:
    user_input = input("Você: ")
    if user_input.lower() == "sair":
        break

    history.append({"role": "user", "content": user_input})

    response = client.responses.create(
        model="sabia-4",
        instructions="Você é um assistente simpático e prestativo.",
        input=history,
    )

    assistant_message = response.output[0].content[0].text
    history.append({"role": "assistant", "content": assistant_message})

    print(f"Assistente: {assistant_message}")
```

> O histórico cresce a cada turno. Para conversas longas, considere limitar o número de mensagens ou usar resumos para manter o consumo de tokens sob controle.
