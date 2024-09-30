---
id: openai-compatibilidade
title: Compatibilidade com a OpenAI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Compatibilidade com a OpenAI 

A Maritaca API é compatível com as bibliotecas de clientes da OpenAI, tornando fácil experimentar nossos modelos de código aberto em aplicações existentes.

Isso significa que os modelos Sabiá podem ser utilizados em qualquer programa que use as bibliotecas da OpenAI.

### **Configurando a OpenAI para usar a Maritaca API**

#### Intalação da biblioteca

Primeiro instale a biblioteca da openai digitando este comando no terminal: 

```bash
pip install openai
```

### 🛠️ Configurando o Cliente
A configuração do cliente OpenAI é o primeiro passo para utilizar a API. Certifique-se de fornecer sua chave de API e a URL base personalizada. Ou seja, para utilizar a Maritaca API, basta apontar o endpoint para `https://chat.maritaca.ai/api`, preencher a chave de API com uma chave obtida na plataforma (como descrito em início rápido) e usar um dos modelos Sabiá.
```python
import os
import openai

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),
    base_url="https://chat.maritaca.ai/api",
)
```


### 🗨️ Realizando uma Requisição de Chat

Você pode fazer uma requisição de chat para o modelo sabia-3 passando uma lista de mensagens.

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
    {"role": "user", "content": "Me fale sobre o Cristo Redentor"},
  ],
  max_tokens=50
)

print(response.choices[0].message.content)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "messages": [{"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
                 {"role": "user", "content": "Me fale sobre o Cristo Redentor"}],
    "max_tokens": 50
  }'
```
</TabItem>
</Tabs>

### 💻 Realizando uma requisição para completar entrada
Além de chats, você também pode utilizar o modelo para completar a entrada, como no exemplo abaixo:

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.completions.create(
  model="sabia-3",
  prompt="Era uma vez, em um reino distante, um jovem aventureiro que sonhava em explorar terras desconhecidas. Um dia, ele encontrou um mapa misterioso que mostrava o caminho para um tesouro perdido",
  max_tokens=175
)

print(response.choices[0].text)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/completions \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "prompt": "def menu_principal():\n  print(\"Bem-vindo ao Receitas Brasileiras!\")\n  print(\"Escolha uma das opções abaixo para ver a receita:\")\n  print(\"1. Feijoada\")",
    "max_tokens": 175
  }'
```
</TabItem>
</Tabs>

### 🔄 Requisição de Chat com Streaming

Para receber as respostas em tempo real (streaming), você pode utilizar o parâmetro stream=True.

<Tabs>
<TabItem value="python" label="Python" default>
```python
import os
import openai

stream = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
    {"role": "user", "content": "Me fale sobre o Cristo Redentor"},
  ],
  stream=True,
  max_tokens=50
)
for chunk in stream:
  print(chunk.choices[0].delta.content or "", end="", flush=True)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-3",
    "messages": [{"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
                 {"role": "user", "content": "Me fale sobre o Cristo Redentor"}],
    "max_tokens": 50
  }'
```
</TabItem>
</Tabs>
