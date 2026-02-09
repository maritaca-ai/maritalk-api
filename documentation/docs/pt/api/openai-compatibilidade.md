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

#### Instalação da biblioteca

Primeiro instale a biblioteca da openai digitando este comando no terminal:

```bash
pip install openai
```

### <span className="inline-heading"><span className="geo-icon geo-icon-chain geo-icon-small" aria-hidden="true"></span><span>Configurando o Cliente</span></span>
A configuração do cliente OpenAI é o primeiro passo para utilizar a API. Certifique-se de fornecer sua chave de API e a URL base personalizada. Ou seja, para utilizar a Maritaca API, basta apontar o endpoint para `https://chat.maritaca.ai/api`, preencher a chave de API com uma chave obtida na plataforma (como descrito em início rápido) e usar um dos modelos Sabiá.
```python
import os
import openai

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),
    base_url="https://chat.maritaca.ai/api",
)
```


### <span className="inline-heading"><span className="geo-icon geo-icon-chat geo-icon-small" aria-hidden="true"></span><span>Realizando uma Requisição</span></span>

Você pode fazer uma requisição para o modelo sabia-4 usando a Responses API.

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.responses.create(
  model="sabia-4",
  instructions="Você é um agente de viagem. Seja descritivo e gentil.",
  input="Me fale sobre o Cristo Redentor",
  max_output_tokens=8000
)

print(response.output[0].content[0].text)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "instructions": "Você é um agente de viagem. Seja descritivo e gentil.",
    "input": "Me fale sobre o Cristo Redentor",
    "max_output_tokens": 8000
  }'
```
</TabItem>
</Tabs>

### <span className="inline-heading"><span className="geo-icon geo-icon-chat geo-icon-small" aria-hidden="true"></span><span>Realizando uma Requisição com Lista de Mensagens</span></span>

Você também pode passar uma lista de mensagens como entrada para conversas multi-turno.

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.responses.create(
  model="sabia-4",
  input=[
    {"role": "user", "content": "Meu nome é Alice."},
    {"role": "assistant", "content": "Olá Alice! Prazer em conhecê-la."},
    {"role": "user", "content": "Qual é o meu nome?"},
  ],
  max_output_tokens=8000
)

print(response.output[0].content[0].text)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "input": [
      {"role": "user", "content": "Meu nome é Alice."},
      {"role": "assistant", "content": "Olá Alice! Prazer em conhecê-la."},
      {"role": "user", "content": "Qual é o meu nome?"}
    ],
    "max_output_tokens": 8000
  }'
```
</TabItem>
</Tabs>

### <span className="inline-heading"><span className="geo-icon geo-icon-stream geo-icon-small" aria-hidden="true"></span><span>Requisição com Streaming</span></span>

Para receber as respostas em tempo real (streaming), você pode utilizar o parâmetro stream=True.

<Tabs>
<TabItem value="python" label="Python" default>
```python
import os
import openai

stream = client.responses.create(
  model="sabia-4",
  instructions="Você é um agente de viagem. Seja descritivo e gentil.",
  input="Me fale sobre o Cristo Redentor",
  stream=True,
  max_output_tokens=8000
)
for event in stream:
  if event.type == "response.output_text.delta":
    print(event.delta, end="", flush=True)
```
</TabItem>
<TabItem value="curl" label="cURL">
```bash
curl -X POST https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer minha_chave" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4",
    "instructions": "Você é um agente de viagem. Seja descritivo e gentil.",
    "input": "Me fale sobre o Cristo Redentor",
    "stream": true,
    "max_output_tokens": 8000
  }'
```
</TabItem>
</Tabs>

### <span className="inline-heading"><span className="geo-icon geo-icon-chat geo-icon-small" aria-hidden="true"></span><span>Também disponível: Chat Completions API</span></span>

<Tabs>
<TabItem value="python" label="Python" default>
```python
response = client.chat.completions.create(
  model="sabia-4",
  messages=[
    {"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
    {"role": "user", "content": "Me fale sobre o Cristo Redentor"},
  ],
  max_tokens=8000
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
    "model": "sabia-4",
    "messages": [{"role": "system", "content": "Você é um agente de viagem. Seja descritivo e gentil."},
                 {"role": "user", "content": "Me fale sobre o Cristo Redentor"}],
    "max_tokens": 8000
  }'
```
</TabItem>
</Tabs>
U