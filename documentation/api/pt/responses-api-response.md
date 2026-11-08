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

Lista de itens de saída. Cada item pode ser um raciocínio, uma mensagem ou uma chamada de função. Nos modelos S5, o item `reasoning` vem primeiro; para ler só o texto da resposta, use `output_text` no SDK da OpenAI.

<details>
<summary>reasoning (object)</summary>

Raciocínio do modelo (modelos S5). O texto é confidencial e vem só cifrado; no `S5-nano` (pesos abertos), vem em texto em `content`, sem `encrypted_content`. Devolva o item na próxima chamada para o modelo retomar o raciocínio. Veja [Raciocínio](/pt/raciocinio).

- **id** (string): Identificador único do item (`rs_...`).
- **type** (string): Sempre `"reasoning"`.
- **content** (array): Vazio (`[]`), exceto no `S5-nano`, em que traz o texto do raciocínio:
  - **type** (string): `"reasoning_text"`.
  - **text** (string): Texto do raciocínio.
- **encrypted_content** (string): Raciocínio cifrado. Só pode ser usado pela mesma conta. Ausente no `S5-nano`.
- **summary** (array): Resumo do raciocínio, quando pedido em `reasoning.summary`; senão, vazio.
  - **type** (string): `"summary_text"`.
  - **text** (string): Texto do resumo.

</details>

<details>
<summary>message (object)</summary>

- **id** (string): Identificador único da mensagem.
- **type** (string): Sempre `"message"`.
- **role** (string): Sempre `"assistant"`.
- **status** (string): `"completed"` ou `"in_progress"`.
- **content** (array): Lista de partes de conteúdo:
  - **type** (string): `"output_text"`.
  - **text** (string): Texto gerado pelo modelo.
  - **annotations** (array): Citações associadas ao texto. Fica vazio quando
    não há fontes citadas. Cada citação de URL contém:
    - **type** (string): Sempre `"url_citation"`.
    - **start_index** (integer): Índice inicial da citação em `text`.
    - **end_index** (integer): Índice final da citação em `text`.
    - **url** (string): URL da fonte citada.
    - **title** (string): Título da fonte citada.

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

### reasoning `object ou null`

Configuração de raciocínio usada (modelos S5). Não contém o texto do raciocínio.

<details>
<summary>Mostrar propriedades</summary>

- **effort** (string): Esforço usado (`xhigh` quando não informado).
- **summary** (string ou null): Tipo de resumo pedido (`auto` aparece como `detailed`).
- **context** (string): `all_turns` ou `current_turn`.
- **mode** (string): Sempre `"standard"`.

</details>

---

### previous_response_id `string ou null`

Id da resposta anterior usada na requisição, se houver.

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

Se a resposta foi armazenada (padrão `true`). Respostas armazenadas ficam disponíveis por 30 dias para `previous_response_id`.

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
| `response.reasoning_summary_part.added` | Nova parte do resumo do raciocínio iniciada (com `reasoning.summary`) |
| `response.reasoning_summary_text.delta` | Fragmento do resumo do raciocínio |
| `response.reasoning_summary_text.done` | Resumo do raciocínio finalizado |
| `response.reasoning_summary_part.done` | Parte do resumo do raciocínio finalizada |
| `response.completed` | Resposta completa (com `usage`) |
| `response.failed` | Erro durante a geração |

Todos os eventos incluem um campo `sequence_number` incrementado a cada evento.

Nos modelos S5, o item `reasoning` é o primeiro item de saída (`output_index` 0) e já traz o `encrypted_content` em `response.output_item.added` e `response.output_item.done`. Não há eventos com o texto do raciocínio. No `S5-nano`, não há `encrypted_content`: o texto do raciocínio vem completo no item `reasoning` de `response.output_item.done` (no `added`, `content` vem vazio).

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
  "store": true,
  "error": null,
  "incomplete_details": null
}
```

### Exemplo com raciocínio (S5)
```json
{
  "id": "resp-7c1e9a2b",
  "object": "response",
  "status": "completed",
  "model": "S5",
  "output": [
    {
      "id": "rs_6f1c0d3e",
      "type": "reasoning",
      "content": [],
      "encrypted_content": "gAAAAABp...",
      "summary": []
    },
    {
      "id": "fc-abc123",
      "type": "function_call",
      "name": "get_weather",
      "arguments": "{\"city\": \"Campinas\"}",
      "call_id": "call_abc123",
      "status": "completed"
    }
  ],
  "reasoning": {
    "effort": "xhigh",
    "summary": null,
    "context": "all_turns",
    "mode": "standard"
  },
  "previous_response_id": null,
  "store": true,
  "usage": {
    "input_tokens": 52,
    "output_tokens": 230,
    "total_tokens": 282,
    "output_tokens_details": {
      "reasoning_tokens": 204
    }
  }
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
