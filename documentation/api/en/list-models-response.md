---
id: list-models-response
title: List Models Response
sidebar_label: List Models Response
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# The Response Object

Represents the response from the model listing endpoint.

<div style={{ display: 'flex' }}>

<div style={{ flex: 1, paddingRight: '20px' }}>

### object  `string`

The type of the returned object. For this route, it is always "list".

---

### data  `array`

List of available `model` objects.

---

### id  `string`

A unique identifier for the model, which can be referenced in the API.

---

### created  `integer`
The Unix timestamp (in seconds) of when the model was created.

---

### owned_by  `string`

The organization that owns the model.

---

### context_length  `integer`

The model’s context window in tokens.

---

### top_provider  `object`

Information about the primary provider, including `context_length` and `max_completion_tokens`.

---
</div>

<div class="container-right" style={{  maxWidth: '40rem', overflowY: 'auto',   padding: '10px', borderRadius: '5px', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

```json
{
  "object": "list",
  "data": [
    {
      "id": "sabia-3.1",
      "created": 1746662400,
      "object": "model",
      "owned_by": "maritacaai",
      "context_length": 128000,
      "top_provider": {
        "context_length": 128000,
        "max_completion_tokens": 12000
      }
    },
    {
      "id": "sabia-3",
      "created": 1733875200,
      "object": "model",
      "owned_by": "maritacaai",
      "context_length": 128000,
      "top_provider": {
        "context_length": 128000,
        "max_completion_tokens": 12000
      }
    },
    {
      "id": "sabiazinho-3",
      "created": 1738800000,
      "object": "model",
      "owned_by": "maritacaai",
      "context_length": 32000,
      "top_provider": {
        "context_length": 32000,
        "max_completion_tokens": 12000
      }
    }
  ]
}
```
</div></div> 
