---
id: files
title: File Inputs
---

Our API supports uploading files directly through the Chat Completions endpoint.
At the moment, files must be sent **in Base64 format**.

Below is an example illustrating how to upload a PDF to the API:

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
                "text": "What is the title of the research proposed here?",
            },
        ],
    }
]

response = client.chat.completions.create(
    model="sabia-3.1",
    messages=messages,
)
```

When you submit files, the API extracts the text content and feeds it to the model.
All extracted content is returned in the response and can be accessed like this:

```python
extracted_docs = response.extracted_content

for doc in extracted_docs:
    print(doc["filename"])  # File name
    print(doc["text"])      # Extracted text
```

We currently support the following file types:

* **PDF**
* **DOCX**
* **TXT**
* **CSV**
* **XML**
* **XLSX**
* **MD**

---

## Extraction effort

For **PDF files**, you can specify the extraction effort level.
This setting currently has **no effect** on other file types.

If not specified, the default extraction level is **`medium`**.

### Available extraction levels

| Level      | Description                                                            | Cost per page of PDF   |
| ---------- | ---------------------------------------------------------------------- | ---------------------- |
| `medium`   | Balanced extraction. Works best for most PDFs.                         | R$ 0,02                |
| `advanced` | Highest-quality extraction for complex layouts, formulas, or diagrams. | R$ 0,045               |

You can check the extraction pricing on our [platform](https://plataforma.maritaca.ai/modelos).

### Example using extraction effort

```python
response = client.chat.completions.create(
    model="sabia-3.1",
    messages=messages,
    extra_body={
        "extraction_effort": "medium"
    },
)
```

The `usage` field includes both token usage and the number of extracted PDF pages:

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

## Important Considerations

* **Extracted text is not stored by the API.**
  If you plan to ask follow-up questions about the same file, store the extracted text yourself — otherwise, a new request will trigger extraction (and trigger extraction charges for medium/advanced PDFs).

* **The combined size of all files in a request must be under 50 MB.**

* **PDFs extracted using `medium` or `advanced` effort incur extraction charges**, in addition to the prompt tokens processed by the model.

* **Discounts** Off-peak and Batch API discounts apply only to input and output tokens. *These discounts do not apply to the extraction cost.*

---


## Other examples

### Multiple documents of different types

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