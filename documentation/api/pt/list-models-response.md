---
id: list-models-response
title: Listar Modelos Response
sidebar_label: Listar Modelos Response
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# O objeto de resposta

Representa uma resposta de chat retornada pelo modelo, baseada na entrada fornecida.

<div style={{ display: 'flex' }}>

<div style={{ flex: 1, paddingRight: '20px' }}>

### id  `string`

Um identificador único para o modelo, que pode ser referenciado na API.

---

### created  `integer`
O timestamp Unix (em segundos) de quando o modelo foi criado.

---

### object  `string`

O tipo de objeto que é sempre "model".

---

### owned_by  `string`

A organização que possui o modelo.

---
</div>

<div class="container-direita" style={{  maxWidth: '40rem', overflowY: 'auto',   padding: '10px', borderRadius: '5px', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

```json
[
  {
    'id': 'sabia-3', 
    'object': 'model',
    'created': 1725840000,
    'owned_by': 'maritacaai'
  }, 
  {
    'id': 'sabia-2-small', 
    'object': 'model', 
    'created': 1710201600, 
    'owned_by': 'maritacaai'
  }
]


```
</div></div> 