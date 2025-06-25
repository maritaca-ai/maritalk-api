---
id: batch-api
title: Batch API
sidebar_label: Batch API
---

import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Visão geral

A Batch API da Maritaca oferece operações para:

* **Arquivos** – armazenar ou recuperar arquivos usados em requisições.
* **Batch inference** – executar jobs assíncronos em lote.

---

## Arquivos `/api/files`

| Método & Endpoint | Descrição                    |
| ----------------- | ---------------------------- |
| `GET /api/files` | Listar todos os arquivos.    |
| `POST /api/files` | Fazer upload de um novo arquivo. |
| `GET /api/files/{file_id}` | Detalhes de um arquivo. |
| `GET /api/files/{file_id}/content` | Fazer download do conteúdo. |
| `DELETE /api/files/{file_id}` | Excluir um arquivo. |

> **Base URL:** `https://chat.maritaca.ai`

---

### Listar arquivos

Lista arquivos submetidos.

**GET** `/api/files`

<div class="container">

<div class="container-esquerda">

#### Parâmetros de Consulta

---

**limit** `integer` <sup class="sup-opcional">Opcional</sup>  
Máximo de itens por página.

**after** `string` <sup class="sup-opcional">Opcional</sup>  
Cursor para a próxima página (valor de `next_cursor` da resposta anterior).

**purpose** `string` <sup class="sup-opcional">Opcional</sup>  
Filtra os arquivos por finalidade (`batch_input`).

**order** `string` <sup class="sup-opcional">Opcional</sup>  
Ordem dos arquivos.

</div>
</div>


<div class="container">
<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
import openai

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

files = client.files.list()
print(files)         
````

</TabItem>
<TabItem value="python4" label="Direct API Call">
```python
import requests

url = "https://chat.maritaca.ai/api/files"
headers = {"Authorization": f"Key {api_key}"}

response = requests.get(url, headers=headers)
print(response.json())
```
</TabItem>
</Tabs>
</div>

---

### Upload de arquivo

Submete o arquivo que contém as requisições.

**POST** `/api/files`

<div class="container">

<div class="container-esquerda">

#### Corpo da Requisição

---

**file** `file` <sup class="sup-obrigatorio">Obrigatório</sup>  
O próprio arquivo a ser enviado. Aceita qualquer tipo binário
(`.jsonl`, `.csv`, `.txt`, etc.).

**purpose** `string` <sup class="sup-obrigatorio">Obrigatório</sup>  
Define o uso pretendido do arquivo, por exemplo  
atualmente apenas `batch_input` é aceito


</div>
</div>


<div class="container">
<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
from openai import OpenAI

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)


batch_input_file = client.files.create(
    file=open("batch_input.jsonl", "rb"),
    purpose="batch"
)

print(batch_input_file)

     
````

</TabItem>
<TabItem value="python4" label="Direct API Call">
```python
import requests

url = "https://chat.maritaca.ai/api/files"
headers = {"Authorization": f"Key {api_key}"}


files = {"file": ("batch_input.jsonl", open("batch_input.jsonl", "rb"))}


resp = requests.post(url, headers=headers, files=files)
print(resp.json())

```
</TabItem>
</Tabs>
</div>
---

### Recuperar detalhes de um arquivo

Retorna metadata de um arquivo.

**GET** `/api/files/{file_id}`

<div class="container">

<div class="container-esquerda">

#### Parâmetros de Caminho

---

**file_id** `string` <sup class="sup-obrigatorio">Obrigatório</sup>  
<br/>ID do arquivo retornado no upload ou na listagem.  
Utilizado para recuperar os metadados completos do arquivo.

</div>
</div>


<div class="container">
<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
metadata = client.files.retrieve("file-1")
print(metadata)
     
````

</TabItem>
<TabItem value="python4" label="Direct API Call">
```python
import requests

file_id = "file-1"
url = f"https://chat.maritaca.ai/api/files/{file_id}"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.get(url, headers=headers)
print(resp.json())

```
</TabItem>
</Tabs>
</div>
---

### Baixar conteúdo de um arquivo

Retornar o conteúdo de um arquivo.

**GET** `/api/files/{file_id}/content`

<div class="container">

<div class="container-esquerda">

#### Parâmetros de Caminho

---

**file_id** `string` <sup class="sup-obrigatorio">Obrigatório</sup>  
<br/>ID do arquivo, obtido durante o upload ou na listagem.

</div>
</div>


<div class="container">
<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
import openai

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

metadata = client.files.retrieve("batch_input.jsonl")
print(metadata)

     
````

</TabItem>
<TabItem value="python4" label="Direct API Call">
```python
import requests

file_id = "batch_input.jsonl"
url = f"https://chat.maritaca.ai/api/files/{file_id}"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.get(url, headers=headers)
print(resp.json())


```
</TabItem>
</Tabs>
</div>
---

### Excluir um arquivo
Excluir um arquivo.

**DELETE** `/api/files/{file_id}`

<div class="container">

<div class="container-esquerda">

#### Parâmetros de Caminho

---

**file_id** `string` <sup class="sup-obrigatorio">Obrigatório</sup>  
<br/>ID do arquivo, obtido durante o upload ou na listagem.

</div>
</div>


<div class="container">

<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
client.files.delete("batch_input.jsonl")
```
</TabItem> <TabItem value="python4" label="Chamada direta para a API">
```python
import requests

file_id = "batch_input.jsonl"
url = f"https://chat.maritaca.ai/api/files/{file_id}"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.delete(url, headers=headers)
print(resp.status_code)  

```
</TabItem>
</Tabs>
</div>
---

## Batch Inference `/api/batches`

| Método & Endpoint                     | Descrição                          |
| ------------------------------------- | ---------------------------------- |
| `GET /api/batches`                    | Listar todos os batches.           |
| `POST /api/batches`                   | Criar um novo batch de inferência. |
| `GET /api/batches/{batch_id}`         | Detalhes de um batch.              |
| `POST /api/batches/{batch_id}/cancel` | Cancelar um batch em execução.     |

---

### Criar batch

Cria um lote a partir de um arquivo que já foi carregado seguindo as recomendações listadas das operações com arquivos.

**POST** `/api/batches`

<div class="container">

<div class="container-esquerda">

#### Corpo da Requisição

---

**input_file_id** `string` <sup class="sup-obrigatorio">Obrigatório</sup>  
ID do arquivo `.jsonl` contendo as linhas de entrada para o lote.

**endpoint** `string` <sup class="sup-obrigatorio">Obrigatório</sup>  
Rota de destino que receberá cada requisição, por exemplo `/chat/completions`.

**completion_window** `string` <sup class="sup-opcional">Opcional</sup>  
Prazo máximo de execução (ex.: `24h`, `1h`).  
Usado para abortar o job automaticamente após esse período.

**metadata** `object` <sup class="sup-opcional">Opcional</sup>  
Qualquer par chave-valor (ex.: `{"project":"demo"}`).

</div>
</div>

<div class="container">

<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
batch = client.beta.batches.create(
    input_file_id="file-1",
    endpoint="/v1/chat/completions",
    completion_window="24h",
    metadata={
        "description": "job for marketing data",
        "owner": "marketing team"
    }
)
print(batch.id)
```
</TabItem> <TabItem value="python4" label="Chamada direta para a API">
```python
import requests, json

url = "https://chat.maritaca.ai/api/batches"
headers = {
    "Authorization": f"Key {api_key}",
    "Content-Type": "application/json"
}

payload = {
    "input_file_id": "file-1",
    "endpoint": "/v1/chat/completions",
    "completion_window": "24h",
    "metadata": {
        "description": "job for marketing data",
        "owner": "marketing team"
    }
}

resp = requests.post(url, headers=headers, json=payload)
print(resp.json())
```
</TabItem> </Tabs> </div>
---

### Listar batches

Liste seus lotes.

**GET** `/api/batches`


<div class="container">

<div class="container-esquerda">

#### Corpo da Requisição

---

**limit** `integer` <sup class="sup-opcional">Opcional</sup>
Máximo de itens por página.

**after** `string` <sup class="sup-opcional">Opcional</sup>  
Cursor para a próxima página (valor de `next_cursor` da resposta anterior).

</div></div>


<div class="container">

<br/>
<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
batches = client.beta.batches.list(limit=10)
for batch in batches.data:
    print(batch.id, batch.status)
```
</TabItem> <TabItem value="python4" label="Chamada direta para a API">
```python
import requests, json

url = "https://chat.maritaca.ai/api/batches"
params = {"limit": 10}
headers = {"Authorization": f"Key {api_key}"}

resp = requests.get(url, headers=headers, params=params)
print(resp.json())
```
</TabItem> </Tabs> </div>

---

### Recuperar um batch

Obtém todos os detalhes de um job em lote.

**GET** `/api/batches/{batch_id}`


<div class="container">

<div class="container-esquerda">

#### Corpo da Requisição

---
**batch_id** `string` <sup class="sup-obrigatorio">Obrigatório</sup>
ID retornado na criação ou listagem.
</div></div>


<div class="container">

<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
batch = client.batches.retrieve("batch-1")
print(batch)
```
</TabItem> <TabItem value="python4" label="Chamada direta para a API">
```python

import requests

batch_id = "batch1"
url = f"https://chat.maritaca.ai/api/batches/{batch_id}"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.get(url, headers=headers)
print(resp.json())
```
</TabItem> </Tabs> </div>
---

### Cancelar um batch

Interrompe o processamento de um job em lote.

**POST** `/api/batches/{batch_id}/cancel`


<div class="container">

<div class="container-esquerda">

#### Corpo da Requisição

---
**batch_id** `string` <sup class="sup-obrigatorio">Obrigatório</sup>
ID retornado na criação ou listagem.
</div></div>


#### Exemplo de Request
<div class="container">

<br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
import openai
cancelled = client.beta.batches.cancel("batch-1")
print(cancelled.status)    
```
</TabItem> <TabItem value="python4" label="Chamada direta para a API">
```python

import requests

batch_id = "batch-1"
url = f"https://chat.maritaca.ai/api/batches/{batch_id}/cancel"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.post(url, headers=headers)
print(resp.json())         
``` 
</TabItem> </Tabs> </div>
---


