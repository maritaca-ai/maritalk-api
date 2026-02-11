---
id: completion-response
title: Chat Response
sidebar_label: Chat Response
hide_table_of_contents: true
---
import styles from './style_api.css';

---

# O objeto de resposta

Representa uma resposta de chat retornada pelo modelo, baseada na entrada fornecida.

<div class="container">

<div class="container-esquerda">

### id  `string`

Um identificador único para a resposta do chat.

---

### choices  `array`

Uma lista de escolhas de respostas de chat. Pode ser mais de uma se n for maior que 1.

<details>
<summary>Mostrar propriedades</summary>

- **index:** A posição desta escolha na lista de conclusões geradas.
- **message:** Contém a mensagem de resposta gerada, com propriedades:
  - **role:** Especifica o papel do autor da mensagem (por exemplo, assistant).
  - **content:** O conteúdo da mensagem de resposta do assistente.
  - **finish_reason:** Indica por que o modelo parou de gerar, por exemplo, "stop".

</details>

---

### created  `integer`

O timestamp Unix (em segundos) de quando a resposta do chat foi criada.

---

### model  `string`

O modelo utilizado.

---

### system_fingerprint  `string`

Este impressão digital representa a configuração do backend com a qual o modelo é executado. Pode ser usado em conjunto com o parâmetro de solicitação seed para entender quando alterações foram feitas no backend que podem afetar a determinística.

---

### object  `string`

O tipo de objeto, que é sempre chat.completion.

---

### usage  `object`

Estatísticas de uso para a resposta.

<details>
<summary>Mostrar propriedades</summary>

- **prompt_tokens:** O número de tokens no prompt de entrada.
- **completion_tokens:** O número de tokens gerados na conclusão.
- **total_tokens:** O número total de tokens na solicitação e na conclusão.

</details>

</div>

<div class="container-direita" style={{  maxWidth: '40rem', overflowY: 'auto',   padding: '10px', borderRadius: '5px', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

### Exemplo de Response
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
        "content": "Certamente! A Bahia é um estado cheio de belezas naturais e culturais. Um dos pontos turísticos mais famosos é o Pelourinho, localizado na cidade de Salvador. Este bairro histórico é conhecido por suas ruas de paralelepípedos, prédios coloridos e pela rica cultura afro-brasileira. Além de explorar as vielas e visitar museus e igrejas, você pode desfrutar da culinária local e assistir a apresentações de capoeira e música ao vivo. Outra opção é visitar as praias de Morro de São Paulo ou a região de Trancoso, ambas conhecidas por sua beleza natural e tranquilidade."
      },
      "logprobs": None,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 54,
    "completion_tokens": 538,
    "total_tokens": 592,
  },
  "system_fingerprint": "c68cf2ecaa94f232"
}

```
</div></div> 