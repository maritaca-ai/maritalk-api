---
id: batch-api-response
title: Batch API Responses
sidebar_label: Batch API Responses
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# Objetos de resposta

Esta página descreve todos os objetos JSON retornados pelos endpoints da **Batch API**.  

---

## File Object

Representa um arquivo enviado ou listado em `/api/files`.

<div class="container">

<div class="container-esquerda">

### id `string`  
Identificador exclusivo do arquivo (`file-xxx`).

### bytes `integer`  
Tamanho do arquivo em bytes.

### created_at `integer`  
Timestamp Unix em segundos.

### expires_at `integer \| null`  
Quando o arquivo será removido automaticamente (pode ser `null`).

### filename `string`  
Nome do arquivo original.

### object `string`  
Sempre `"file"`.

### purpose `string`  
Finalidade do arquivo (`batch_input`).

### status `string`  
`uploaded`, `processed`, `failed`.

### status_details `string \| null`  
Mensagem de erro quando `status == "failed"`.

</div>

<div class="container-direita" style={{maxWidth:'32rem',overflowY:'auto',whiteSpace:'nowrap',padding:'10px',borderRadius:'5px',position:'sticky',top:'0'}}>

```json
{
  "id": "file1",
  "bytes": 102400,
  "created_at": 1710263812,
  "expires_at": null,
  "filename": "batchapi.jsonl",
  "object": "file",
  "purpose": "batch_input",
  "status": "uploaded",
  "status_details": null
}
````

</div>
</div>

---

## File List Object

Resposta de `GET /api/files`.

* **data** – lista de **File Object**

```json
{
  "data": [ /* File Object … */ ],
}
```

---

## Delete File Response


`DELETE /api/files/{file_id}` devolve **200 OK** com o corpo JSON abaixo, confirmando que o arquivo foi removido:


* **id** – o mesmo identificador do arquivo removido.
* **object** – sempre `"file"`.
* **deleted** – `true` indica exclusão bem-sucedida.

```json
{
  "id": "file1",
  "object": "file",
  "deleted": true
}
````

---

## Batch Object

Objeto principal retornado pelo conjunto `/api/batches`.

<div class="container">

<div class="container-esquerda">

### id `string`

Identificador do batch (`batch-xyz`).

### object `string`

Sempre `"batch"`.

### endpoint `string`

Rota de destino (ex.: `/chat/completions`).

### errors `array<string>`

Lista de mensagens de erro de pré-validação (geralmente vazia).

### input_file_id `string`

ID do arquivo `.jsonl` de entrada.

### completion_window `string`

Janela máxima definida na criação (ex.: `"24h"`).

### status `string`

`queued`, `running`, `finalizing`, `succeeded`, `failed`, `cancelling`, `cancelled`, `expired`.

### output_file_id `string | null`

Arquivo com as respostas quando o lote termina.

### error_file_id `string | null`

Arquivo contendo as linhas que falharam, se houver.

### created_at `integer`

Timestamp Unix (segundos) da criação.

### in_progress_at `integer`

Quando começou a processar (0 se ainda não).

### finalizing_at `integer`

Quando entrou na fase de finalização.

### completed_at `integer`

Quando concluiu com sucesso.

### failed_at `integer`

Quando concluiu com falha.

### expires_at `integer`

Quando arquivos relacionados expiram.

### cancelling_at `integer`

Quando o cancelamento foi solicitado.

### cancelled_at `integer`

Quando o lote foi totalmente cancelado.

### expired_at `integer`

Quando expirou automaticamente.

### request_counts `object`

Totais de linhas —  
&nbsp;&nbsp;&nbsp;&nbsp;• **total** `integer`  
&nbsp;&nbsp;&nbsp;&nbsp;• **completed** `integer`  
&nbsp;&nbsp;&nbsp;&nbsp;• **failed** `integer`

### metadata `object`

Chaves livres enviadas na criação.

</div> <div class="container-direita" style={{maxWidth:'32rem',overflowY:'auto',whiteSpace:'nowrap',padding:'10px',borderRadius:'5px',position:'sticky',top:'0'}}>
json
Copiar
Editar

```json
{
  "id": "batch-1",
  "object": "batch",
  "endpoint": "/chat/completions",
  "errors": [],
  "input_file_id": "file-1",
  "completion_window": "24h",
  "status": "running",
  "output_file_id": null,
  "error_file_id": null,
  "created_at": 1750358500,
  "in_progress_at": 1750358520,
  "expires_at": 1751222500,
  "finalizing_at": 0,
  "completed_at": 0,
  "failed_at": 0,
  "expired_at": 0,
  "cancelling_at": 0,
  "cancelled_at": 0,
  "request_counts": {
    "total": 10,
    "completed": 9,
    "failed": 1
  },
  "metadata": {
    "project": "demo"
  }
}
```
</div>
</div>
---

## Batch List Object

Resposta de `GET /api/batches`.

* **data** – lista de **Batch Object**


```json
{
  "object": "list",
  "data": [ /* Batch Object … */ ],
}
```

---

## Cancel Batch Response

`POST /api/batches/{batch_id}/cancel` devolve novamente o **Batch Object**
com `status` igual a `cancelling` (ou `cancelled`, se a operação terminar logo).

---

