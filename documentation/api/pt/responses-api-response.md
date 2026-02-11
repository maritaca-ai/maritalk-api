---
id: responses-api-response
title: Responses Response
sidebar_label: Responses Response
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# O objeto de resposta

Representa uma resposta retornada pelo modelo na Responses API, baseada na entrada fornecida.

<div class="container">

<div class="container-esquerda">

### id `string`

Identificador único da resposta (ex: `resp-abc123def456`).

---

### object `string`

O tipo do objeto, sempre `"response"`.

---

### created_at `integer`

Timestamp Unix (em segundos) da criação da resposta.

---

### status `string`

Status da resposta: `"completed"`, `"failed"` ou `"in_progress"`.

---

### model `string`

O modelo utilizado para gerar a resposta.

---

### output `array`

Lista de itens de saída. Cada item pode ser uma mensagem ou uma chamada de função.

<details>
<summary>message (object)</summary>

- **id** (string): Identificador único da mensagem.
- **type** (string): Sempre `"message"`.
- **role** (string): Sempre `"assistant"`.
- **status** (string): `"completed"` ou `"in_progress"`.
- **content** (array): Lista de partes de conteúdo:
  - **type** (string): `"output_text"`.
  - **text** (string): Texto gerado pelo modelo.
  - **annotations** (array): Anotações (geralmente vazia).

</details>

<details>
<summary>function_call (object)</summary>

- **id** (string): Identificador único do item.
- **type** (string): Sempre `"function_call"`.
- **name** (string): Nome da função a ser chamada.
- **arguments** (string): Argumentos em JSON serializado.
- **call_id** (string): Identificador da chamada (usado para enviar o resultado de volta).
- **status** (string): `"completed"`.

</details>

---

### usage `object`

Estatísticas de uso de tokens.

<details>
<summary>Mostrar propriedades</summary>

- **input_tokens** (integer): Tokens consumidos na entrada.
- **output_tokens** (integer): Tokens gerados na saída.
- **total_tokens** (integer): Total de tokens (entrada + saída).
- **input_tokens_details** (object ou null):
  - **cached_tokens** (integer): Tokens vindos de cache.
- **output_tokens_details** (object ou null):
  - **reasoning_tokens** (integer): Tokens usados em raciocínio.

</details>

---

### error `object ou null`

Objeto de erro quando `status` é `"failed"`.

<details>
<summary>Mostrar propriedades</summary>

- **code** (string): Código do erro (ex: `"server_error"`, `"internal_error"`).
- **message** (string): Mensagem descritiva do erro.

</details>

---

### incomplete_details `object ou null`

Detalhes sobre por que a resposta está incompleta (ex: atingiu `max_output_tokens`).

<details>
<summary>Mostrar propriedades</summary>

- **reason** (string): Motivo da interrupção (ex: `"max_output_tokens"`).

</details>

---

### instructions `string ou null`

Instruções de sistema enviadas na requisição.

---

### temperature `float ou null`

Temperatura de amostragem usada.

---

### top_p `float ou null`

Top-p usado.

---

### max_output_tokens `int ou null`

Limite de tokens configurado.

---

### metadata `object`

Metadados da requisição (pares chave-valor).

---

### tools `array`

Ferramentas que estavam disponíveis para o modelo.

---

### tool_choice `string ou object ou null`

Configuração de uso de ferramentas.

---

### parallel_tool_calls `boolean`

Se chamadas paralelas de ferramentas estavam habilitadas.

---

### store `boolean`

Se a resposta foi armazenada.

---

## Eventos de Streaming

Quando `stream: true`, a API retorna eventos via Server-Sent Events (SSE).

| Evento | Descrição |
|---|---|
| `response.created` | Resposta criada |
| `response.in_progress` | Geração iniciada |
| `response.output_item.added` | Novo item de saída adicionado |
| `response.content_part.added` | Nova parte de conteúdo iniciada |
| `response.output_text.delta` | Fragmento de texto gerado |
| `response.output_text.done` | Texto completo finalizado |
| `response.content_part.done` | Parte de conteúdo finalizada |
| `response.output_item.done` | Item de saída finalizado |
| `response.completed` | Resposta completa (com `usage`) |
| `response.failed` | Erro durante a geração |

Todos os eventos incluem um campo `sequence_number` incrementado a cada evento.

---

## Códigos de Erro HTTP

| Status | Descrição |
|---|---|
| `200` | Sucesso |
| `400` | Parâmetro não suportado ou requisição inválida |
| `401` | Chave de API ausente ou inválida |
| `422` | Erro de validação |
| `429` | Rate limit excedido |
| `500` | Erro interno do servidor |

</div>

<div class="container-direita" style={{  maxWidth: '40rem', overflowY: 'auto',   padding: '10px', borderRadius: '5px', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

### Exemplo de Response
```json
{
  "id": "resp-abc123def456",
  "object": "response",
  "created_at": 1234567890,
  "status": "completed",
  "model": "sabia-4",
  "output": [
    {
      "id": "msg-def456",
      "type": "message",
      "role": "assistant",
      "status": "completed",
      "content": [
        {
          "type": "output_text",
          "text": "A capital do Brasil é Brasília.",
          "annotations": []
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 12,
    "output_tokens": 8,
    "total_tokens": 20,
    "input_tokens_details": {
      "cached_tokens": 0
    },
    "output_tokens_details": {
      "reasoning_tokens": 0
    }
  },
  "temperature": 0.7,
  "top_p": 0.95,
  "max_output_tokens": null,
  "instructions": null,
  "metadata": {},
  "tools": [],
  "tool_choice": "auto",
  "parallel_tool_calls": true,
  "store": false,
  "error": null,
  "incomplete_details": null
}
```

### Exemplo de function_call no output
```json
{
  "id": "resp-xyz789",
  "object": "response",
  "created_at": 1234567890,
  "status": "completed",
  "model": "sabia-4",
  "output": [
    {
      "id": "fc-abc123",
      "type": "function_call",
      "name": "get_weather",
      "arguments": "{\"city\": \"São Paulo\"}",
      "call_id": "call_abc123",
      "status": "completed"
    }
  ],
  "usage": {
    "input_tokens": 25,
    "output_tokens": 15,
    "total_tokens": 40
  }
}
```

### Exemplo de Streaming (SSE)
```
event: response.created
data: {"type":"response.created","response":{...},"sequence_number":1}

event: response.in_progress
data: {"type":"response.in_progress","response":{...},"sequence_number":2}

event: response.output_item.added
data: {"type":"response.output_item.added","output_index":0,"item":{...},"sequence_number":3}

event: response.content_part.added
data: {"type":"response.content_part.added","item_id":"msg-def456","output_index":0,"content_index":0,"part":{"type":"output_text","text":""},"sequence_number":4}

event: response.output_text.delta
data: {"type":"response.output_text.delta","item_id":"msg-def456","output_index":0,"content_index":0,"delta":"A capital","sequence_number":5}

event: response.output_text.delta
data: {"type":"response.output_text.delta","item_id":"msg-def456","output_index":0,"content_index":0,"delta":" do Brasil","sequence_number":6}

event: response.output_text.done
data: {"type":"response.output_text.done","item_id":"msg-def456","output_index":0,"content_index":0,"text":"A capital do Brasil é Brasília.","sequence_number":7}

event: response.content_part.done
data: {"type":"response.content_part.done","item_id":"msg-def456","output_index":0,"content_index":0,"part":{"type":"output_text","text":"A capital do Brasil é Brasília."},"sequence_number":8}

event: response.output_item.done
data: {"type":"response.output_item.done","output_index":0,"item":{...},"sequence_number":9}

event: response.completed
data: {"type":"response.completed","response":{...,"usage":{"input_tokens":12,"output_tokens":8,"total_tokens":20}},"sequence_number":10}
```

</div></div>
