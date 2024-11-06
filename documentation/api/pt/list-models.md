---
id: list-models
title: Listar Modelos
sidebar_label: Listar Modelos
hide_table_of_contents: true
---
import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Modelos

## Listar modelos

**GET** `https://chat.maritaca.ai/api/models`

A lista de modelos fornece uma visão geral dos modelos disponíveis na API, incluindo informações básicas como proprietário e disponibilidade.

### Exemplo de Request

<div class="container">


<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>
```python
import openai

client = openai.OpenAI(
        api_key=maritaca_key,
        base_url="https://chat.maritaca.ai/api",
    )

client.models.list()

```
</TabItem>
<TabItem value="python4" label="Chamada direta para a API">
```python
import requests
import json

base_url = "https://chat.maritaca.ai/api/models"
headers = {
    "Authorization": f"Key {api_key}",
    "Content-Type": "application/json"
}

# Faz a requisição GET diretamente para a API
response = requests.get(base_url, headers=headers)

# Verifica o status da resposta e exibe o conteúdo
if response.status_code == 200:
    models = response.json()
    print(models["data"])  # Exibe os modelos disponíveis
else:
    print(f"Erro: {response.status_code}")
    print(response.text)
```
</TabItem>
</Tabs>
</div>