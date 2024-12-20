---
id: embeddings
title: Embeddings
---

# Embeddings?

## What Are They?

Embeddings are numerical representations of texts used to capture the semantic meaning and relationships between words, phrases, or documents in a vector format. These vectors enable the measurement of semantic similarity between texts and facilitate tasks such as information retrieval and semantic similarity analysis.

# How to Obtain Embeddings with Maritaca AI
Maritaca AI does not currently offer its own embeddings model. Therefore, it recommends using [DeepInfra](https://deepinfra.com/docs) as an embeddings provider. DeepInfra offers the [Multilingual-E5-large](https://arxiv.org/pdf/2402.05672) model, which specializes in embeddings for multiple languages. The rest of this guide focuses on DeepInfra, but we encourage you to evaluate different embeddings providers to find the solution that best fits your specific use case.

## Quick Start with DeepInfra
DeepInfra offers a multilingual embeddings model called **`intfloat/multilingual-e5-large`**. The following sections demonstrate how to use the model to obtain embeddings via Python.

### 1. Sign Up and Get Your API Key
You need to obtain an API key from DeepInfra to authenticate your requests.

### 2. Use Python to Send Embeddings Requests
You can use the `requests` library in Python to interact with the DeepInfra API.
```bash
pip install requests
```
#### Code Example for Sending a DeepInfra API Request
```python
import requests
import json

API_KEY = "" # Replace with your DeepInfra API key
URL = "https://api.deepinfra.com/v1/inference/intfloat/multilingual-e5-large"

payload = {
    "inputs": ["olá mundo", "hello world"]
}
headers = {
    "Authorization": f"bearer {API_KEY}",
}
response = requests.post(URL, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print("Embeddings:")
    for idx, embedding in enumerate(data["embeddings"]):
        print(f"Input {idx + 1}: {embedding}")
    print("Input Tokens:", data["input_tokens"])
else:
    print("Error:", response.status_code, response.text)
```

---

### Example Output
When you run the code, the output will be similar to this:
```plaintext
Embeddings:
Input 1: [float, ... , float]
Input 2: [float, ... , float]
Input Tokens: 10
```

---

## Input Fields

| Parameter       | Type       | Description                                                                  | Default Value |
|------------------|------------|----------------------------------------------------------------------------|---------------|
| **model**       | `string`    | Name of the model used.                                  | `-`          |
| **input**    | `array ou string`  | Sequences to generate embeddings.                                   | `-`       |
| **encoding_format**        | `string`   | Format used for encoding.                               | `float`       |

Example:
```json
{
  "model": "intfloat/multilingual-e5-large",
  "inputs": ["Hello world"],
}
```

---

## Output Fields

| Parameter             | Type          | Description                                                                                  |
|-------------------------|---------------|-----------------------------------------------------------------------------------------------|
| **embeddings**          | `array`       | The embeddings calculated for each input sequence.     |
| **input_tokens**        | `integer`     | The number of input tokens in the request.                                               |
| **request_id**          | `string`      | The ID of the request (optional).                                                              |
| **inference_status**    | `object`      | Object containing the status of the inference request.                                   |

---

## Model Description

|Model | Context Length | Embedding Dimension | Description |
|-------|-----------------------|-------------|
|intfloat/multilingual-e5-large	| 512 |1024	|Multilingual embedding model fine-tuned for text retrieval, semantic similarity, and clustering.|

# Pricing
Visit the model pricing page on DeepInfra for more details: [(https://deepinfra.com/intfloat/multilingual-e5-large)](https://deepinfra.com/intfloat/multilingual-e5-large).