---
id: pricing
title: Pricing
slug: /en/precos
---

# Pricing

All prices are per million tokens processed. Billing considers both input and output tokens.

| | **Sabiá 4** | **Sabiazinho 4** | **Sabiá 3.1** | **Sabiá 3** | **Sabiazinho 3** |
|---|---|---|---|---|---|
| **Input** | R$ 5.00 | R$ 1.00 | R$ 5.00 | R$ 5.00 | R$ 1.00 |
| **Output** | R$ 20.00 | R$ 4.00 | R$ 10.00 | R$ 10.00 | R$ 3.00 |
| **Off-peak input ¹** | R$ 3.50 | R$ 0.70 | R$ 3.50 | R$ 3.50 | R$ 0.70 |
| **Off-peak output ¹** | R$ 14.00 | R$ 2.80 | R$ 7.00 | R$ 7.00 | R$ 2.10 |
| **Batch API input** | R$ 2.50 | R$ 0.50 | R$ 2.50 | R$ 2.50 | R$ 0.50 |
| **Batch API output** | R$ 10.00 | R$ 2.00 | R$ 5.00 | R$ 5.00 | R$ 1.50 |

<small>¹ Off-peak: 10 p.m.–6 a.m. BRT.</small>

## How do I know how many tokens I will be charged?

To know in advance how much your requests will cost, use the `count_tokens` function to find out the number of tokens in a given prompt.

```python
from maritalk import count_tokens

prompt = "How many sticks does it take to make a canoe?"

total_tokens = count_tokens(prompt, model="sabia-4")

print(f'The prompt "{prompt}" contains {total_tokens} tokens.')
```

You need to install the maritalk library (`pip install maritalk`) to run the code snippet above.

<style>
  {`
    .markdown table,
    .theme-doc-markdown table {
      display: table;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 100%;
      table-layout: fixed;
      overflow-x: auto;
      border-collapse: collapse;
    }
    .markdown table th,
    .markdown table td,
    .theme-doc-markdown table th,
    .theme-doc-markdown table td {
      white-space: normal;
      word-break: normal;
      overflow-wrap: break-word;
    }
  `}
</style>
