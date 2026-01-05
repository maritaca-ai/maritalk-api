---
id: list-models-response
title: Listar Modelos Response
sidebar_label: Listar Modelos Response
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# O objeto de resposta

Representa a resposta do endpoint de listagem de modelos.

<div style={{ display: 'flex' }}>

<div style={{ flex: 1, paddingRight: '20px' }}>

### object  `string`

Tipo do objeto retornado. Para esta rota, é sempre "list".

---

### data  `array`

Lista de objetos `model` disponíveis.

---

### id  `string`

Um identificador único para o modelo, que pode ser referenciado na API.

---

### created  `integer`

O timestamp Unix (em segundos) de quando o modelo foi criado.

---

### owned_by  `string`

Proprietário do modelo (organização).

---

### context_length  `integer`

Janela de contexto do modelo em tokens.

---

### top_provider  `object`

Informações do provedor principal, incluindo `context_length` e `max_completion_tokens`.

---
</div>

<div class="container-direita" style={{  maxWidth: '40rem', overflowY: 'auto',   padding: '10px', borderRadius: '5px', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

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
