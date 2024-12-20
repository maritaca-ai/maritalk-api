---
id: embeddings
title: Embeddings
---

# Embeddings?

## O Que São?

Embeddings são representações numéricas de textos, utilizadas para capturar o significado semântico e as relações entre palavras, frases ou documentos em um formato vetorial. Esses vetores permitem medir a similaridade semântica entre textos e realizar tarefas de recuperação de informações e análise de similaridade semântica.

# Como obter embeddings com a Maritaca AI
A Maritaca AI não disponibiliza atualmente um modelo próprio de embeddings. Por isso, recomenda a utilização da [DeepInfra](https://deepinfra.com/docs) como provedor de embeddings. A DeepInfra oferece o modelo [Multilingual-E5-large](https://arxiv.org/pdf/2402.05672), especializado em embeddings para múltiplos idiomas. O restante deste guia é dedicado ao DeepInfra, mas incentivamos você a avaliar diferentes fornecedores de embeddings para encontrar a solução mais adequada ao seu caso de uso específico.

## Começo rápido com DeepInfra
O DeepInfra oferece um modelo de embeddings multilíngue chamado **`intfloat/multilingual-e5-large`**. As seções a seguir demonstram como usar esse modelo para obter embeddings via Python.

### 1. **Registre-se e obtenha sua chave de API**
Você precisa obter uma chave de API do DeepInfra para autenticar suas requisições.

### 2. **Use Python para enviar requisições de embeddings**
Você pode usar a biblioteca `requests` no Python para interagir com a API do DeepInfra.

```bash
pip install requests
```

#### Exemplo de Código para Enviar uma Requisição de API do DeepInfra
```python
import requests
import json

API_KEY = "" #Substitua com sua chave de api do DeepInfra
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
        print(f"Entrada {idx + 1}: {embedding}")
    print("Tokens de Entrada:", data["input_tokens"])
else:
    print("Erro:", response.status_code, response.text)
```

---

### Saída de Exemplo
Ao executar o código, a saída gerada será semelhante a esta:
```plaintext
Embeddings:
Entrada 1: [float, ... , float]
Entrada 2: [float, ... , float]
Tokens de Entrada: 10
```

---

## Campos de Entrada

| Parâmetro       | Tipo       | Descrição                                                                  | Valor Padrão |
|------------------|------------|----------------------------------------------------------------------------|---------------|
| **model**       | `string`    | Nome do modelo utilizado.                                  | `-`          |
| **input**    | `array ou string`  | Sequências para gerar embeddings.                                   | `-`       |
| **encoding_format**        | `string`   | Formato usado para a codificação.                               | `float`       |

Exemplo:
```json
{
  "model": "intfloat/multilingual-e5-large",
  "inputs": ["Olá mundo"],
}
```

---

## Campos de Saída

| Parâmetro               | Tipo            | Descrição                                                                                   |
|-------------------------|---------------|-----------------------------------------------------------------------------------------------|
| **embeddings**          | `array`       | Os embeddings calculados para cada sequência de entrada.                                      |
| **input_tokens**        | `integer`     | O número de tokens de entrada na requisição.                                                  |
| **request_id**          | `string`      | O ID da requisição.                                                                           |
| **inference_status**    | `object`      | Objeto contendo o status da requisição de inferência.                                         |


## Descrição do modelo

|Modelo | Contexto | Dimensão do Embedding | Descrição |
|-------|----------|-----------------------|-----------|
|intfloat/multilingual-e5-large	| 512 |1024	|Modelo de embeddings multilingue, ajustado para recuperação de texto, similaridade semântica e clustering.|

# Preço
Visite a página de precificação do modelo da DeepInfra para obter mais detalhes [(https://deepinfra.com/intfloat/multilingual-e5-large)](https://deepinfra.com/intfloat/multilingual-e5-large).