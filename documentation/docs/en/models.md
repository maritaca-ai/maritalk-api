---
id: models
title: Models
---

# Models
Maritaca AI offers a range of models in the Sabiá family, designed to meet various needs and usage scenarios. Each model is adjusted to provide an optimal balance between intelligence, speed, and cost, allowing you to choose the option that best aligns with the requirements of your project.
| **Field**                            | **Sabiá 3** 🥇                                                                                       | **Sabiazinho 3** ⚡                                                                                      | 
|--------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| **Description**                      | Our most advanced model, ideal for complex tasks that require higher accuracy.                      | Our more economical model, designed for simpler tasks. Ideal for applications where speed and cost are priorities. | 
| **Examples of Use**                  | Writing complex research articles, creating detailed technical documents, chatbots, code generation | Translating texts, generating product descriptions, article summaries, creating responses for FAQs, content ideas for blogs | 
| **Maximum Context (Tokens)**         | 128000                                                                                              | 32000                                                              |
| **Price per Million Tokens (Input)**  | R$ 5                                                                                               | R$ 1                                                                                                      | 
| **Price per Million Tokens (Output)** | R$ 10                                                                                              | R$ 3|
| **TPM (Input)**                      | 2 million                                                                                          | 2 million                                                                                                 |
| **TPM (Output)**                     | 200 thousand                                                                                       | 200 thousand                                                                                              |
| **RPM**                              | 1000                                                                                               | 1000                                                                                                      |
| **Training Data**                    | Up to mid 2023                                                                                     | Up to mid 2023                                                                                            | Up to mid 2023                                                                                     |


TPM = Tokens per minute.

RPM = Requests per minute.

This table excludes all of our deprecated models.

**The sabia-3-2024-09-09 model will be deprecated on 2025-02-15. We recommended changing to sabia-3.**

## Discontinued Models

As we release more advanced and secure models, we regularly discontinue older models. Our documentation is continuously updated with this information. On this page, you will find a complete list of discontinued models, along with recommended replacements.

Here are the models that have been discontinued:

| Model | Discontinuation Date | Recommended Replacement |
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
