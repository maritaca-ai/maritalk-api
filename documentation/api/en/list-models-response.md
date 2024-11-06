---
id: list-models-response
title: List Models Response
sidebar_label: List Models Response
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# The Response Object

Represents a chat response returned by the model, based on the provided input.

<div style={{ display: 'flex' }}>

<div style={{ flex: 1, paddingRight: '20px' }}>

### id  `string`

A unique identifier for the model, which can be referenced in the API.

---

### created  `integer`
The Unix timestamp (in seconds) of when the model was created.

---

### object  `string`

The type of object, which is always "model".

---

### owned_by  `string`

The organization that owns the model.

---
</div>

<div class="container-right" style={{  maxWidth: '40rem', overflowY: 'auto',   padding: '10px', borderRadius: '5px', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

```json
[
  {
    "id": "sabia-3", 
    "object": "model",
    "created": 1725840000,
    "owned_by": "maritacaai"
  }, 
  {
    "id": "sabia-2-small", 
    "object": "model", 
    "created": 1710201600, 
    "owned_by": "maritacaai"
  }
]
```
</div></div> 