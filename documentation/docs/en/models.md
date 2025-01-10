---
id: models
title: Models
---

# Models
Maritaca AI offers a range of models in the Sabiá family, designed to meet various needs and usage scenarios. Each model is adjusted to provide an optimal balance between intelligence, speed, and cost, allowing you to choose the option that best aligns with the requirements of your project.
| **Field**                            | **Sabiá 3** 🥇                                                                                       | **Sabiazinho 3** ⚡                                                                                      | **Sabiá 2 Small** 💡                                                                            |
|--------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Description**                      | Our most advanced model, ideal for complex tasks that require higher accuracy.                      | Our more economical model, designed for simpler tasks. Ideal for applications where speed and cost are priorities. | Our most basic model, designed for simple tasks. Ideal for applications where speed and cost are priorities. |
| **Examples of Use**                  | Writing complex research articles, creating detailed technical documents, chatbots, code generation | Translating texts, generating product descriptions, article summaries, creating responses for FAQs, content ideas for blogs | Generating brief social media posts, translating short texts, suggesting product names |
| **Maximum Context (Tokens)**         | 128000                                                                                              | 32000                                                                                                    | 8192                                                                                             |
| **Cost per Million Tokens (Input)**  | R$ 5                                                                                               | R$ 1                                                                                                      | R$ 1                                                                                              |
| **Cost per Million Tokens (Output)** | R$ 10                                                                                              | R$ 3                                                                                                      | R$ 3                                                                                              |
| **TPM (Input)**                      | 2 million                                                                                          | 2 million                                                                                                 | 2 million                                                                                         |
| **TPM (Output)**                     | 200 thousand                                                                                       | 200 thousand                                                                                              | 200 thousand                                                                                       |
| **RPM**                              | 1000                                                                                               | 1000                                                                                                      | 1000                                                                                              |
| **Training Data**                    | Up to mid 2023                                                                                     | Up to mid 2023                                                                                            | Up to mid 2023                                                                                     |                                                                         |


TPM = Tokens per minute.

RPM = Requests per minute.

This table excludes all of our deprecated models.

**The sabia-2-small model will be deprecated on 2025-01-15. We recommend changing to sabiazinho-3.**

**The sabia-3-2024-09-09 model will be deprecated on 2025-02-15. We recommended changing to sabia-3.**

### How do I know how many tokens I will be charged?
To know in advance how much your requests will cost, use the function count_tokens to find out the number of tokens in a given prompt.
```python

from maritalk import count_tokens

prompt = "How many sticks does it take to make a canoe?"

total_tokens = count_tokens(prompt, model="sabia-3")

print(f'The prompt "{prompt}" contains {total_tokens} tokens.')
```

You need to install the maritalk library (`pip install maritalk`) to run the code snippet above.
