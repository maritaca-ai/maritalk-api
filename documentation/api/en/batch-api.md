---
id: batch-api
title: Batch API
sidebar_label: Batch API
---

import styles from './style_api.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overview

Maritaca’s **Batch API** provides operations for:

* **Files** – store or retrieve files used in requests.  
* **Batch inference** – run asynchronous jobs in bulk.

> **Base URL:** `https://chat.maritaca.ai`

---

## Files `/api/files`

| Method & Endpoint | Description |
| ----------------- | ----------- |
| `GET /api/files` | List all files |
| `POST /api/files` | Upload a new file |
| `GET /api/files/{file_id}` | File details |
| `GET /api/files/{file_id}/content` | Download file content |
| `DELETE /api/files/{file_id}` | Delete a file |

---

### List files

Lists previously uploaded files.

**GET** `/api/files`

<div class="container">

<div class="container-esquerda">

#### Query Parameters

---

**limit** `integer` <sup class="sup-opcional">Optional</sup>  
Maximum items per page.

**after** `string` <sup class="sup-opcional">Optional</sup>  
Cursor for the next page (value of `next_cursor` from the previous response).

**purpose** `string` <sup class="sup-opcional">Optional</sup>  
Filter files by purpose (`batch_input`).

**order** `string` <sup class="sup-opcional">Optional</sup>  
Sort order.

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
import openai

client = openai.OpenAI(
    api_key="",  # Your API_KEY
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

### Upload file

Uploads the file containing the requests.

**POST** `/api/files`

<div class="container">

<div class="container-esquerda">

#### Request Body

---

**file** `file` <sup class="sup-obrigatorio">Required</sup>
The binary file to upload (`.jsonl`, `.csv`, `.txt`, etc.).

**purpose** `string` <sup class="sup-obrigatorio">Required</sup>
Defines the intended use of the file — currently only `batch_input` is accepted.

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
import openai

client = openai.OpenAI(
    api_key="",  # Your API_KEY
    base_url="https://chat.maritaca.ai/api",
)

batch_input_file = client.files.create(
    file=open("batch_input.jsonl", "rb"),
    purpose="batch_input"
)

print(batch_input_file)
```

</TabItem>
<TabItem value="python4" label="Direct API Call">

```python
import requests

url = "https://chat.maritaca.ai/api/files"
headers = {"Authorization": f"Key {api_key}"}
files = {"file": ("batch_input.jsonl", open("batch_input.jsonl", "rb"))}
data  = {"purpose": "batch_input"}

resp = requests.post(url, headers=headers, files=files, data=data)
print(resp.json())
```

</TabItem>
</Tabs>
</div>

---

### Retrieve file details

Returns metadata for a file.

**GET** `/api/files/{file_id}`

<div class="container">

<div class="container-esquerda">

#### Path Parameters

---

**file\_id** `string` <sup class="sup-obrigatorio">Required</sup>
ID returned on upload or listing.

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
metadata = client.files.retrieve("file-1")
print(metadata)
```

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

### Download file content

Returns the raw content of a file.

**GET** `/api/files/{file_id}/content`

<div class="container">

<div class="container-esquerda">

#### Path Parameters

---

**file\_id** `string` <sup class="sup-obrigatorio">Required</sup>

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
content = client.files.retrieve_content("file-1")
with open("download.jsonl", "wb") as f:
    f.write(content)
```

</TabItem>
<TabItem value="python4" label="Direct API Call">

```python
import requests

file_id = "file-1"
url = f"https://chat.maritaca.ai/api/files/{file_id}/content"
headers = {"Authorization": f"Key {api_key}"}

with requests.get(url, headers=headers, stream=True) as r:
    r.raise_for_status()
    with open("download.jsonl", "wb") as f:
        for chunk in r.iter_content(chunk_size=8192):
            f.write(chunk)
```

</TabItem>
</Tabs>
</div>

---

### Delete a file

Deletes a file.

**DELETE** `/api/files/{file_id}`

<div class="container">

<div class="container-esquerda">

#### Path Parameters

---

**file\_id** `string` <sup class="sup-obrigatorio">Required</sup>

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
client.files.delete("batch_input.jsonl")
```

</TabItem>
<TabItem value="python4" label="Direct API Call">

```python
import requests

file_id = "batch_input.jsonl"
url = f"https://chat.maritaca.ai/api/files/{file_id}"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.delete(url, headers=headers)
print(resp.status_code)  # 200 = success
```

</TabItem>
</Tabs>
</div>

---

## Batch Inference `/api/batches`

| Method & Endpoint                     | Description            |
| ------------------------------------- | ---------------------- |
| `GET /api/batches`                    | List all batches       |
| `POST /api/batches`                   | Create a new batch     |
| `GET /api/batches/{batch_id}`         | Batch details          |
| `POST /api/batches/{batch_id}/cancel` | Cancel a running batch |

---

### Create batch

Creates a job from a previously uploaded file.

**POST** `/api/batches`

<div class="container">

<div class="container-esquerda">

#### Request Body

---

**input\_file\_id** `string` <sup class="sup-obrigatorio">Required</sup>
ID of the `.jsonl` file with input lines.

**endpoint** `string` <sup class="sup-obrigatorio">Required</sup>
Destination route, e.g. `/chat/completions`.

**completion\_window** `string` <sup class="sup-opcional">Optional</sup>
Maximum execution time (`24h`, `1h`).

**metadata** `object` <sup class="sup-opcional">Optional</sup>
Any key-value pairs (e.g. `{"project": "demo"}`).

</div>
</div>

<div class="container"><br/>

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

</TabItem>
<TabItem value="python4" label="Direct API Call">

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

</TabItem>
</Tabs>
</div>

---

### List batches

**GET** `/api/batches`

<div class="container">

<div class="container-esquerda">

#### Query Parameters

---

**limit** `integer` <sup class="sup-opcional">Optional</sup>
Maximum items per page.

**after** `string` <sup class="sup-opcional">Optional</sup>
Cursor for the next page.

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
batches = client.beta.batches.list(limit=10)
for b in batches.data:
    print(b.id, b.status)
```

</TabItem>
<TabItem value="python4" label="Direct API Call">

```python
import requests

url = "https://chat.maritaca.ai/api/batches"
params = {"limit": 10}
headers = {"Authorization": f"Key {api_key}"}

resp = requests.get(url, headers=headers, params=params)
print(resp.json())
```

</TabItem>
</Tabs>
</div>

---

### Retrieve a batch

**GET** `/api/batches/{batch_id}`

<div class="container">

<div class="container-esquerda">

#### Path Parameters

---

**batch\_id** `string` <sup class="sup-obrigatorio">Required</sup>

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
batch = client.beta.batches.retrieve("batch-1")
print(batch)
```

</TabItem>
<TabItem value="python4" label="Direct API Call">

```python
import requests

batch_id = "batch-1"
url = f"https://chat.maritaca.ai/api/batches/{batch_id}"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.get(url, headers=headers)
print(resp.json())
```

</TabItem>
</Tabs>
</div>

---

### Cancel a batch

**POST** `/api/batches/{batch_id}/cancel`

<div class="container">

<div class="container-esquerda">

#### Path Parameters

---

**batch\_id** `string` <sup class="sup-obrigatorio">Required</sup>

</div>
</div>

<div class="container"><br/>

<Tabs position="center">
<TabItem value="python" label="Default" default>

```python
cancelled = client.beta.batches.cancel("batch-1")
print(cancelled.status)
```

</TabItem>
<TabItem value="python4" label="Direct API Call">

```python
import requests

batch_id = "batch-1"
url = f"https://chat.maritaca.ai/api/batches/{batch_id}/cancel"
headers = {"Authorization": f"Key {api_key}"}

resp = requests.post(url, headers=headers)
print(resp.json())
```

</TabItem>
</Tabs>
</div>
