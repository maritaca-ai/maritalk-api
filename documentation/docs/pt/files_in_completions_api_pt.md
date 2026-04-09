---
id: files
title: Processamento de Documentos e PDFs
sidebar_label: Documentos e PDFs
---

Nossa API permite o envio de documentos diretamente pelo endpoint de Chat Completions.
A API extrai o conteúdo textual dos arquivos — incluindo **OCR para PDFs** com imagens, tabelas e layouts complexos — e o repassa ao modelo.
Atualmente, os arquivos devem ser enviados **em formato Base64**.

Abaixo está um exemplo de como enviar um PDF para a API:

```python
import base64
import openai

client = openai.OpenAI(
    api_key="YOUR_KEY",
    base_url="https://chat.maritaca.ai/api",
)

with open("my_research_proposal.pdf", "rb") as f:
    file_content = f.read()
    file_content_base64 = base64.b64encode(file_content).decode("utf-8")

messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "file",
                "file": {
                    "filename": "my_research.pdf",
                    "file_data": f"data:application/pdf;base64,{file_content_base64}",
                },
            },
            {
                "type": "text",
                "text": "Qual é o título da pesquisa proposta aqui?",
            },
        ],
    }
]

response = client.chat.completions.create(
    model="sabia-4",
    messages=messages,
)
```

O conteúdo extraído é retornado na resposta e pode ser acessado assim:

```python
extracted_docs = response.extracted_files

for doc in extracted_docs:
    print(doc["filename"])  # Nome do arquivo
    print(doc["text"])      # Texto extraído
```

Atualmente, suportamos os seguintes tipos de arquivo:

* **PDF**
* **DOCX**
* **TXT**
* **CSV**
* **XML**
* **XLSX**
* **MD**
* **PNG / JPEG** (imagens)

---

## Imagens

A API também aceita imagens (PNG e JPEG) no formato compatível com a OpenAI, usando `image_url`.
O conteúdo da imagem é extraído via OCR e repassado ao modelo como texto.

Você pode enviar uma imagem via URL ou em Base64:

```python
messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "image_url",
                "image_url": {
                    "url": "https://example.com/foto.png",
                },
            },
            {
                "type": "text",
                "text": "O que está escrito nesta imagem?",
            },
        ],
    }
]

response = client.chat.completions.create(
    model="sabia-4",
    messages=messages,
)
```

Para enviar a imagem em Base64 (sem precisar de URL pública):

```python
with open("foto.png", "rb") as f:
    img_b64 = base64.b64encode(f.read()).decode("utf-8")

messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/png;base64,{img_b64}",
                },
            },
            {
                "type": "text",
                "text": "Extraia o texto desta imagem.",
            },
        ],
    }
]
```

Imagens também podem ser enviadas como `type: "file"`, da mesma forma que PDFs e outros documentos:

```python
with open("foto.png", "rb") as f:
    img_b64 = base64.b64encode(f.read()).decode("utf-8")

messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "file",
                "file": {
                    "filename": "foto.png",
                    "file_data": f"data:image/png;base64,{img_b64}",
                },
            },
            {
                "type": "text",
                "text": "Extraia o texto desta imagem.",
            },
        ],
    }
]
```

:::info
Imagens são processadas via OCR — o modelo recebe o texto extraído, não a imagem original.
Formatos suportados: **PNG** e **JPEG**.
:::

---

## Extraction effort

Para **arquivos PDF**, você pode especificar o nível de esforço da extração.
Esse parâmetro **não afeta outros tipos de arquivo**.

Se não for especificado, o nível padrão é **`medium`**.

### Níveis de extração disponíveis

| Nível      | Descrição                                                     | Custo por página do PDF  |
| ---------- | ------------------------------------------------------------- | ------------------------ |
| `medium`   | OCR para texto, tabelas e imagens; ideal para a maioria dos PDFs.  | R$ 0,02                  |
| `advanced` | Mesma cobertura do medium + fórmulas e layouts complexos.          | R$ 0,045                 |

Você pode consultar os preços de extração na nossa [plataforma](https://plataforma.maritaca.ai/modelos).

### Exemplo de uso

```python
response = client.chat.completions.create(
    model="sabia-4",
    messages=messages,
    extra_body={
        "extraction_effort": "medium"
    },
)
```

O campo `usage` retorna tanto os tokens consumidos quanto o número de páginas extraídas:

```python
usage = response.usage
print(usage)

# CompletionUsage(
#     completion_tokens=167,
#     prompt_tokens=45,
#     total_tokens=212,
#     extraction_details={
#         "medium_effort_pages_extracted": 1,
#         "advanced_effort_pages_extracted": 0,
#     },
# )
```

---

## Considerações Importantes

* **A API não armazena o texto extraído.**
  Se você pretende fazer várias perguntas sobre o mesmo arquivo, salve o texto retornado — caso contrário, uma nova extração será feita (e cobrada no caso de PDFs com nível medium/advanced).

* **O tamanho total dos arquivos enviados em uma mesma requisição deve ser inferior a 50 MB.**

* **PDFs processados com `medium` ou `advanced` geram cobrança por extração**, além dos tokens usados na requisição.

* **Descontos** Descontos para horário fora de pico e batch API são aplicados apenas aos tokens de entrada e saída. *Esses descontos não se aplicam ao custo da extração*.
 


## Outros exemplos

### Mútiplos documentos de diferentes tipos

```python
xml_path = "test.xml"
csv_path = "test.csv"
pdf_path = "test.pdf"

with open(xml_path, "rb") as xml_file:
    xml_content = xml_file.read()
    xml_content = base64.b64encode(xml_content).decode("utf-8")

with open(csv_path, "rb") as csv_file:
    csv_content = csv_file.read()
    csv_content = base64.b64encode(csv_content).decode("utf-8")

with open(pdf_path, "rb") as pdf_file:
    pdf_content = pdf_file.read()
    pdf_content = base64.b64encode(pdf_content).decode("utf-8")

csv_segment = {
    "type": "file",
    "file": {
        "filename": "test.csv",
        "file_data": f"data:text/csv;base64,{csv_content}",
    },
}

xml_segment = {
    "type": "file",
    "file": {
        "filename": "test.xml",
        "file_data": f"data:application/xml;base64,{xml_content}",
    },
}

pdf_segment = {
    "type": "file",
    "file": {
        "filename": "test.pdf",
        "file_data": f"data:application/pdf;base64,{pdf_content}",
    },
}

messages = [
    {
        "role": "system",
        "content": "You are a helpful assistant that can extract information from files",
    },
    {
        "role": "user",
        "content": [
            csv_segment,
            xml_segment,
            pdf_segment,
            {"type": "text", "text": "What is the content of each of these files?"},
        ],
    },
]

r = client.chat.completions.create(
    model=model_name,
    messages=messages,
    max_tokens=30,
    extra_body={
        "extraction_effort": "medium",
    },
)

```