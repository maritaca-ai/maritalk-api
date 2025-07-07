---
id: batch-api-response
title: Batch API Responses
sidebar_label: Batch API Responses
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# Response objects

This page describes every JSON object returned by the **Batch API** endpoints.  

---

## File Object

Represents a file uploaded to, or listed from, `/api/files`.

<div class="container">

<div class="container-esquerda">

### id `string`  
Unique file identifier (`file-xxx`).

### bytes `integer`  
Size of the file in bytes.

### created_at `integer`  
Unix timestamp in seconds.

### expires_at `integer \| null`  
When the file will be automatically removed (may be `null`).

### filename `string`  
Original filename.

### object `string`  
Always `"file"`.

### purpose `string`  
Purpose of the file (`batch_input`).

### status `string`  
`uploaded`, `processed`, `failed`.

### status_details `string \| null`  
Error message when `status == "failed"`.

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

Response from `GET /api/files`.

* **data** – array of **File Object**

```json
{
  "data": [ /* File Object … */ ]
}
```

---

## Delete File Response

`DELETE /api/files/{file_id}` returns **200 OK** with the JSON below, confirming the file was removed:

* **id** – the same identifier of the deleted file
* **object** – always `"file"`
* **deleted** – `true` means the deletion succeeded

```json
{
  "id": "file1",
  "object": "file",
  "deleted": true
}
```

---

## Batch Object

Main object returned by `/api/batches`.

<div class="container">

<div class="container-esquerda">

### id `string`

Batch identifier (`batch-xyz`).

### object `string`

Always `"batch"`.

### endpoint `string`

Destination route (e.g. `/chat/completions`).

### errors `array<string>`

List of pre-validation error messages (usually empty).

### input\_file\_id `string`

Input `.jsonl` file ID.

### completion\_window `string`

Maximum time window defined at creation (e.g. `"24h"`).

### status `string`

`queued`, `running`, `finalizing`, `succeeded`, `failed`, `cancelling`, `cancelled`, `expired`.

### output\_file\_id `string \| null`

File with the responses, once the batch finishes.

### error\_file\_id `string \| null`

File containing the rows that failed, if any.

### created\_at `integer`

Unix timestamp (seconds) when the batch was created.

### in\_progress\_at `integer`

When processing started (0 if not yet).

### finalizing\_at `integer`

When the batch entered finalization.

### completed\_at `integer`

When it completed successfully.

### failed\_at `integer`

When it completed with failure.

### expires\_at `integer`

When related files expire.

### cancelling\_at `integer`

When cancellation was requested.

### cancelled\_at `integer`

When the batch was fully cancelled.

### expired\_at `integer`

When it expired automatically.

### request\_counts `object`

Row totals —
&nbsp;&nbsp;&nbsp;&nbsp;• **total** `integer`
&nbsp;&nbsp;&nbsp;&nbsp;• **completed** `integer`
&nbsp;&nbsp;&nbsp;&nbsp;• **failed** `integer`

### metadata `object`

Free-form keys supplied at creation.

</div>

<div class="container-direita" style={{maxWidth:'32rem',overflowY:'auto',whiteSpace:'nowrap',padding:'10px',borderRadius:'5px',position:'sticky',top:'0'}}>

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

Response from `GET /api/batches`.

* **data** – array of **Batch Object**

```json
{
  "object": "list",
  "data": [ /* Batch Object … */ ]
}
```

---

## Cancel Batch Response

`POST /api/batches/{batch_id}/cancel` returns the **Batch Object** again with
`status` set to `cancelling` (or `cancelled` if the operation finishes quickly).

---
