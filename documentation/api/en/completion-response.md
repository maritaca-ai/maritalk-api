---
id: completion-response
title: Chat Response
sidebar_label: Chat Response
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# The Response Object

Represents a chat response returned by the model, based on the provided input.

<div class="container">

<div class="container-left">

### id  `string`

A unique identifier for the chat response.

---

### choices  `array`

A list of chat response choices. There may be more than one if `n` is greater than 1.

<details>
<summary>Show properties</summary>

- **index:** The position of this choice in the list of generated completions.
- **message:** Contains the generated response message with properties:
  - **role:** Specifies the role of the message author (e.g., assistant).
  - **content:** The content of the assistant's response message.
  - **finish_reason:** Indicates why the model stopped generating, e.g., "stop".

</details>

---

### created  `integer`

The Unix timestamp (in seconds) of when the chat response was created.

---

### model  `string`

The model used.

---

### system_fingerprint  `string`

This fingerprint represents the backend configuration with which the model is executed. It can be used together with the request seed parameter to understand when backend changes were made that may affect determinism.

---

### object  `string`

The type of object, which is always `chat.completion`.

---

### usage  `object`

Usage statistics for the response.

<details>
<summary>Show properties</summary>

- **prompt_tokens:** The number of tokens in the input prompt.
- **completion_tokens:** The number of tokens generated in the completion.
- **total_tokens:** The total number of tokens in the request and completion.

</details>

</div>

<div class="container-right" style={{  maxWidth: '40rem', overflowY: 'auto',   padding: '10px', borderRadius: '5px', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

### Response Example
```json

{
  "id": "123abc45-67de-f89g-1011-12h131415i16",
  "object": "chat_completion",
  "created": 1730807994,
  "model": "sabia-4",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Certainly! Bahia is a state full of natural and cultural beauties. One of the most famous tourist spots is Pelourinho, located in the city of Salvador. This historic neighborhood is known for its cobblestone streets, colorful buildings, and rich Afro-Brazilian culture. Besides exploring the alleys and visiting museums and churches, you can enjoy local cuisine and watch capoeira performances and live music. Another option is to visit the beaches of Morro de São Paulo or the Trancoso area, both known for their natural beauty and tranquility."
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 54,
    "completion_tokens": 538,
    "total_tokens": 592
  },
  "system_fingerprint": "c68cf2ecaa94f232"
}
```
</div></div> 