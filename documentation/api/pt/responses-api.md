---
id: responses-api
title: Responses
hide_table_of_contents: true
---
import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Responses

## Criar uma resposta

**POST** `https://chat.maritaca.ai/api/v1/responses`

Envia uma pergunta ao modelo e recebe uma resposta. Suporta texto simples, conversas multi-turno, chamada de funções, saídas estruturadas e streaming.

<div class="container">

<div class="container-esquerda">

## Corpo da Requisição

---
### model `string` <sup class="sup-obrigatorio">Obrigatório</sup>
Modelo a ser usado (ex: `sabia-4`).

---
### input `string ou array` <sup class="sup-obrigatorio">Obrigatório</sup>
O que você quer perguntar ao modelo. Pode ser um texto simples ou uma lista de itens de entrada.

<details>
<summary>Mensagem de conversa (object)</summary>

- **role** (string) **Obrigatório**: Papel do autor: `user`, `assistant`, `system` ou `developer`.
- **content** (string ou array) **Obrigatório**: Conteúdo da mensagem.

</details>

<details>
<summary>function_call (object)</summary>

Representa uma chamada de função feita pelo assistente em um turno anterior.

- **type** (string) **Obrigatório**: Sempre `"function_call"`.
- **call_id** (string) **Obrigatório**: Identificador único da chamada.
- **name** (string) **Obrigatório**: Nome da função chamada.
- **arguments** (string) **Obrigatório**: Argumentos em JSON serializado.

</details>

<details>
<summary>function_call_output (object)</summary>

Resultado de uma chamada de função para devolver ao modelo.

- **type** (string) **Obrigatório**: Sempre `"function_call_output"`.
- **call_id** (string) **Obrigatório**: O mesmo `call_id` da chamada correspondente.
- **output** (string) **Obrigatório**: Resultado da função (string, geralmente JSON).

</details>

---
### instructions `string ou null` <sup class="sup-opcional">Opcional</sup>
Instruções de sistema que definem o comportamento do modelo (ex: "Responda sempre em português").

---
### temperature `float ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `0.7`. Controla a aleatoriedade das respostas (0.0 a 2.0).

---
### top_p `float ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `0.95`. Amostragem nucleus — mantém tokens com probabilidade cumulativa >= top_p.

---
### max_output_tokens `int ou null` <sup class="sup-opcional">Opcional</sup>
Número máximo de tokens na resposta.

---
### stop `array ou null` <sup class="sup-opcional">Opcional</sup>
Sequências que, quando geradas, fazem o modelo parar de gerar.

---
### stream `bool ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `false`. Se `true`, retorna a resposta via Server-Sent Events em tempo real.

---
### tools `array ou null` <sup class="sup-opcional">Opcional</sup>
Lista de ferramentas (funções) que o modelo pode chamar. Cada tool tem o formato:

<details>
<summary>Formato do objeto Tool</summary>

- **type** (string): Sempre `"function"`.
- **name** (string) **Obrigatório**: Nome da função.
- **description** (string): Descrição da função.
- **parameters** (object): JSON Schema dos parâmetros.
- **strict** (bool): Se `true`, ativa validação estrita do schema. Padrão: `true`.

</details>

---
### tool_choice `string ou object ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `"auto"`. Controla o uso de ferramentas:
  - `"auto"`: o modelo decide se usa uma ferramenta.
  - `"none"`: o modelo não usará ferramentas.
  - `"required"`: o modelo deve chamar ao menos uma ferramenta.
  - `{"type": "function", "name": "nome"}`: força uma função específica.

---
### parallel_tool_calls `bool ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `true`. Permite que o modelo faça múltiplas chamadas de função em paralelo.

---
### text `object ou null` <sup class="sup-opcional">Opcional</sup>
Configuração de formato de saída estruturada.

<details>
<summary>Mostrar propriedades</summary>

- **format.type** (string): `"text"`, `"json_schema"` ou `"json_object"`. Padrão: `"text"`.
- **format.name** (string): Nome do schema (obrigatório quando type é `"json_schema"`).
- **format.schema** (object): JSON Schema da saída (obrigatório quando type é `"json_schema"`).
- **format.strict** (bool): Ativa modo estrito para validação do schema.

</details>

---
### metadata `object ou null` <sup class="sup-opcional">Opcional</sup>
Pares chave-valor para rastreamento. Máximo 16 pares, chave até 64 caracteres, valor até 512 caracteres.

---
### store `bool ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `false`. Se deve armazenar a resposta no servidor.

---
</div>

<div class="container-direita" style={{ overflowY: 'auto', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

### Exemplo de Request

<Tabs>
<TabItem value="python" label="Texto simples" default>
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
```
</TabItem>
<TabItem value="python2" label="Streaming">
```python
import openai

client = openai.OpenAI(
    api_key="SUA_CHAVE_API",
    base_url="https://chat.maritaca.ai/api",
)

stream = client.responses.create(
    model="sabia-4",
    input="Conte uma história sobre o Brasil.",
    stream=True,
)

for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
```
</TabItem>
<TabItem value="python3" label="Function Calling">
```python
import openai
import json

client = openai.OpenAI(
    api_key="SUA_CHAVE_API",
    base_url="https://chat.maritaca.ai/api",
)

tools = [
    {
        "type": "function",
        "name": "get_weather",
        "description": "Retorna o clima de uma cidade.",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "description": "Nome da cidade",
                },
            },
            "required": ["city"],
        },
    }
]

response = client.responses.create(
    model="sabia-4",
    input="Qual o clima em São Paulo?",
    tools=tools,
)

# Verificar function_call
tool_call = response.output[0]
print(f"Função: {tool_call.name}")
print(f"Argumentos: {tool_call.arguments}")
print(f"call_id: {tool_call.call_id}")
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

</div></div>
