---
id: models
title: Models
---

# Models
Maritaca AI offers a range of models in the Sabiá family, designed to meet various needs and usage scenarios. Each model is adjusted to provide an optimal balance between intelligence, speed, and cost, allowing you to choose the option that best aligns with the requirements of your project.

| **Field**| **Sabiá 3.1** 🥇 |  **Sabiá 3** ⚖️ | **Sabiazinho 3** ⚡ |
| -------- | --------------- | ---------- | --------------------- |
| **Description**   | Our most advanced and up-to-date model (trained with data through August 2024). Delivers superior performance in mathematical reasoning, code generation/refactoring, and any task that relies on the latest knowledge. | A strong all-round model, well-suited to most workloads and ideal for complex tasks that demand high accuracy. | Our most economical model, designed for straightforward tasks. Perfect for applications where speed and cost are top priorities. |
| **Example use cases**      | Refactoring and optimizing legacy code in multiple languages, synthesizing clinical-research reports and AI legal assistant for complex contract reviews | Writing complex research articles, producing detailed technical documents, building chatbots, and generating code  | Translating text, creating product descriptions, summarizing articles, drafting FAQ answers, and brainstorming blog-content ideas    |
| **Maximum context (tokens)**  | 128000  | 128000 | 32000|
| **Price per million input tokens** | R$5.00 | R$5.00 | R$1.00|
| **Price per million output tokens** | R$10.00 | R$10.00 | R$3.00 |
| **Off-peak price (10 p.m.– 6 a.m. BRT) per million input tokens**  | R$3.50| R$3.50| R$0.70|
| **Off-peak price (10 p.m.– 6 a.m. BRT) per million output tokens** | R$7.00| R$7.00 | R$2.10 |
| **Batch API price per million input tokens**  | R$2.50| R$2.50| R$0.50|
| **Batch API price per million output tokens** | R$5.00| R$5.00 | R$1.50 |
| **Training data cutoff** | Up to Aug 2024 | Up to mid-2023 | Up to mid-2023 |
| **Model Names/Aliases** | sabia-3.1<br />sabiá-3.1<br />sabia-3.1-2025-05-08<br />sabiá-3.1-2025-05-08 | sabia-3<br />sabiá-3<br />sabia-3-2024-12-11<br />sabiá-3-2024-12-11 | sabiazinho-3<br />sabiazinho-3-2025-02-06<br />sabia-3-small<br />sabiazim-3 |



## Deprecated Models

As we release more advanced and secure models, we regularly discontinue older models. In the table below, you will find a complete list of deprecated models, along with recommended replacements.

| Model | Deprecation Date | Recommended Replacement |
|-------|--------|-------|
| sabia-2-medium | 2024-10-01 | sabia-3 |
| sabia-2-small | 2025-01-15 | sabiazinho-3 |
| sabia-3-2024-07-15 | 2024-10-01 |sabia-3 |
| sabia-3-2024-09-09 | 2025-02-17 | sabia-3 |
| sabiazinho-3-2024-11-13	| 2025-03-06 | sabiazinho-3 | 

## How do I know how many tokens I will be charged?
To know in advance how much your requests will cost, use the function count_tokens to find out the number of tokens in a given prompt.
```python

from maritalk import count_tokens

prompt = "How many sticks does it take to make a canoe?"

total_tokens = count_tokens(prompt, model="sabia-3")

print(f'The prompt "{prompt}" contains {total_tokens} tokens.')
```

You need to install the maritalk library (`pip install maritalk`) to run the code snippet above.
