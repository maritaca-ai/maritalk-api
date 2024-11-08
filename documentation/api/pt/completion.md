---
id: completion
title: Chat
hide_table_of_contents: true
---
import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chat

## Criar chat completion

**POST** `https://chat.maritaca.ai/api/chat/completions`

Este endpoint faz chamada para o modelo para gerar respostas baseadas em entradas especificadas. Aqui estão os parâmetros detalhados e exemplos de uso.

<div class="container">

<div class="container-esquerda">

## Corpo da Requisição

---
### model `string` <sup class="sup-obrigatorio">Obrigatório</sup>
Padrão é `sabia-3`. Modelo que irá gerar a resposta.

---
### messages `array` <sup class="sup-obrigatorio">Obrigatório</sup>
Mensagens enviadas ao modelo. Espera-se uma lista de mensagens, cada uma com "role" (papel: system, user, assistant ou tool) e "content" (conteúdo da mensagem). Exemplo:
   - user: "Olá, qual é o resultado de 25 + 27?"
   - assistant: "O resultado é 52."

<details>
<summary>System message (object)</summary>

- **content** (string) **Obrigatório**: O conteúdo da mensagem do sistema.
- **role** (string) **Obrigatório**: O papel do autor da mensagem, neste caso `system`.

</details>

<details>
<summary>User message (object)</summary>

- **content** (string) **Obrigatório**: O conteúdo da mensagem do usuário.
- **role** (string) **Obrigatório**: O papel do autor da mensagem, neste caso `user`.

</details>

<details>
<summary>Assistant message (object)</summary>

- **content** (string) **Obrigatório**: O conteúdo da resposta do assistente.
- **role** (string) **Obrigatório**: O papel do autor da mensagem, neste caso `assistant`.

</details>

<details>
<summary>Tool message (object)</summary>

- **content** (string) **Obrigatório**: O conteúdo da mensagem da ferramenta.
- **role** (string) **Obrigatório**: O papel do autor da mensagem, neste caso `tool`.

</details>

---

### frequency_penalty `float ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `0`. Intervalo entre -2.0 e 2.0. Valores positivos penalizam tokens com base na frequência na conversa, reduzindo a probabilidade de repetição.

---
### max_tokens `int ou null` <sup class="sup-opcional">Opcional</sup>
Define um limite superior para o número de tokens gerados na resposta. Controla o custo para o texto gerado via API.

---
### n `int ou null` <sup class="sup-opcional">Opcional</sup> 
Padrão é `1`. Especifica quantas opções de resposta devem ser geradas para cada mensagem de entrada.

---
### presence_penalty `float ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `0`. Intervalo de -2.0 a 2.0. Aumenta a probabilidade de novos tópicos na conversa, penalizando repetições.

---
### stop `array` <sup class="sup-opcional">Opcional</sup>
Lista de tokens que, quando gerados, indicam que o modelo deve parar de gerar tokens.

---
### stream `bool ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `false`. Se True, o modelo será executado em modo de streaming, onde tokens serão gerados e retornados ao cliente à medida que são gerados. Se False, o modelo será executado em modo de batch, onde todos os tokens serão gerados antes de serem retornados ao cliente.

---
### stream_options `object{str: bool} ou null` <sup class="sup-opcional">Opcional</sup>
Opções para controlar o comportamento do streaming. Usada apenas se stream=True. As opções disponíveis atualmente são:
  - **include_usage**: se True, um último chunk será emitido antes do fim da stream contendo a quantidade de tokens da requisição.

---
### temperature `float ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `0.7`. Temperatura de amostragem para geração, com valores mais altos produzindo respostas mais aleatórias.

---
### top_p `float ou null` <sup class="sup-opcional">Opcional</sup>
Padrão é `0.95`. Se menor que 1, mantém apenas os tokens superiores com probabilidade cumulativa >= top_p (filtragem do núcleo). Por exemplo, 0.95 significa que apenas os tokens que compõem os 95% superiores da massa de probabilidade são considerados quando prevendo o próximo token. A filtragem do núcleo é descrita em [Holtzman et al.](http://arxiv.org/abs/1904.09751).

---
### tools `array` <sup class="sup-opcional">Opcional</sup>
Uma lista de ferramentas que o modelo pode chamar. Use esse parâmetro para fornecer uma lista de funções para as quais o modelo pode gerar entradas JSON.

---
### tool_choice `string ou object` <sup class="sup-opcional">Opcional</sup>
Controla qual (se houver) ferramenta é chamada pelo modelo.
  - `"none"`: o modelo não chamará nenhuma ferramenta e, em vez disso, gerará uma mensagem.
  - `"auto"`: o modelo pode escolher entre gerar uma mensagem ou chamar uma ou mais ferramentas.
  - `"required"`: o modelo deve chamar uma ou mais ferramentas.
  
---
</div>

<div class="container-direita" style={{ overflowY: 'auto', whiteSpace: 'nowrap', position: 'sticky', top: '0' }}>

### Exemplo de Request

<Tabs>
<TabItem value="python" label="Default" default>
```python
import openai

client = openai.OpenAI(
        api_key=maritaca_key,
        base_url="https://chat.maritaca.ai/api",
    )


completion = client.chat.completions.create(
  model="sabia-3",
  messages= [
    {
      "role": "system",
      "content": "Você é um assistente de viagens especializado em fornecer informações sobre destinos turísticos, hotéis, restaurantes e atividades locais."
    },
    {
      "role": "user",
      "content": "Estou planejando uma viagem para Bahia. Você poderia me recomendar um ponto turístico?"
    }
  ]

)

print(completion.choices[0].message)

```
</TabItem>
<TabItem value="python2" label="Streaming">
```python
import openai

client = openai.OpenAI(
        api_key=maritaca_key,
        base_url="https://chat.maritaca.ai/api",
    )


completion = client.chat.completions.create(
  model="sabia-3",
  messages= [
    {
      "role": "system",
      "content": "Você é um assistente de viagens especializado em fornecer informações sobre destinos turísticos, hotéis, restaurantes e atividades locais."
    },
    {
      "role": "user",
      "content": "Estou planejando uma viagem para Bahia. Você poderia me recomendar um ponto turístico?"
    }
  ],
  stream=True
)

for chunk in completion:
  print(chunk.choices[0].delta)
```
</TabItem>
<TabItem value="python3" label="Functions">
```python
import openai

client = openai.OpenAI(
    api_key=maritaca_key,
    base_url="https://chat.maritaca.ai/api",
)

# Definindo a função que o modelo pode chamar
functions = [
    {
        "name": "recommend_tourist_spot",
        "description": "Recomenda um ponto turístico na Bahia",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "Local para o qual a recomendação será fornecida, por exemplo, uma cidade ou estado",
                },
            },
            "required": ["location"],
        },
    }
]

# Definindo a conversa e o uso de function_call
completion = client.chat.completions.create(
    model="sabia-3",
    messages=[
        {
          "role": "system",
          "content": "Você é um assistente de viagens especializado em fornecer informações sobre destinos turísticos, hotéis, restaurantes e atividades locais."
        },
        {
          "role": "user",
          "content": "Estou planejando uma viagem para Bahia. Você poderia me recomendar um ponto turístico?"
        }
    ],
    tools=functions,
    tool_choice="required",
)

# Verifica se choices e tool_calls estão presentes antes de acessá-los
if completion.choices and completion.choices[0].message.tool_calls:
    function_call = completion.choices[0].message.tool_calls[0].function
    print(f"Função a ser usada: {function_call.name}, argumentos: {function_call.arguments}")
else:
    print("Nenhuma chamada de função encontrada.")
```
</TabItem>
<TabItem value="python4" label="Chamada direta para a API">
```python
import requests
import json

base_url = "https://chat.maritaca.ai/api/chat/completions"
headers = {
    "Authorization": f"Key {api_key}",
    "Content-Type": "application/json"
}

# Corpo da requisição
data = {
    "model": "sabia-3",
    "messages": [
        {
            "role": "system",
            "content": "Você é um assistente de viagens especializado em fornecer informações sobre destinos turísticos, hotéis, restaurantes e atividades locais."
        },
        {
            "role": "user",
            "content": "Estou planejando uma viagem para Bahia. Você poderia me recomendar um ponto turístico?"
        }
    ]
}

# Faz a requisição POST diretamente para a API
response = requests.post(base_url, headers=headers, data=json.dumps(data))

# Verifica o status da resposta e exibe o conteúdo
if response.status_code == 200:
    completion = response.json()
    print(completion["choices"][0]["message"]["content"])  # Exibe a resposta do modelo
else:
    print(f"Erro: {response.status_code}")
    print(response.text)
```
</TabItem>
</Tabs>

</div></div> 
