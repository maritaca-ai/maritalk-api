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
| **Maximum Context Tokens**         | 128000                                                                                              | 32000                                                              |
| **Price per Million Input Tokens**  | R$ 5.00                                                                                               | R$ 1.00                                                                                                      | 
| **Price per Million Output Tokens** | R$ 10.00                                                                                              | R$ 3.00|
| **Off-peak price (22:00 - 06:00 BRT) Input**  | R$ 3.50                                                                                               | R$ 0.70                                                                                                      | 
| **Off-peak price (22:00 - 06:00 BRT) (Output)** | R$ 7.00                                                                                              | R$ 2.10|
| **Training Data**                    | Up to mid 2023                                                                                     | Up to mid 2023                                                                                            | Up to mid 2023                                                                                     |


TPM = Tokens per minute.

RPM = Requests per minute.

This table excludes all of our deprecated models.

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
