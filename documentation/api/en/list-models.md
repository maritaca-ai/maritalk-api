---
id: list-models
title: List Models
sidebar_label: List Models
hide_table_of_contents: true
---

import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Models

## List Models

**GET** `https://chat.maritaca.ai/api/models`

The model list provides an overview of the models available in the API, including basic information such as owner and availability.

### Request Example

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
<TabItem value="python4" label="Direct API Call">
```python
import requests
import json

base_url = "https://chat.maritaca.ai/api/models"
headers = {
    "Authorization": f"Key {api_key}",
    "Content-Type": "application/json"
}

# Makes a direct GET request to the API
response = requests.get(base_url, headers=headers)

# Checks the response status and displays the content
if response.status_code == 200:
    models = response.json()
    print(models["data"])  # Displays available models
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```
</TabItem>
</Tabs>
</div>