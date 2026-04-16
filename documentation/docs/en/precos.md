---
id: precos
title: Pricing
---

# Pricing

All prices are per million tokens processed. Billing considers both input and output tokens.

| | **Sabiá 4** | **Sabiazinho 4** | **Sabiá 3.1** | **Sabiá 3** | **Sabiazinho 3** |
|---|---|---|---|---|---|
| **Input** | R$ 5.00 | R$ 1.00 | R$ 5.00 | R$ 5.00 | R$ 1.00 |
| **Output** | R$ 20.00 | R$ 4.00 | R$ 10.00 | R$ 10.00 | R$ 3.00 |
| **Cached input ¹** | R$ 1.25 | R$ 0.25 | R$ 1.25 | R$ 1.25 | R$ 0.25 |
| **Off-peak input ²** | R$ 3.50 | R$ 0.70 | R$ 3.50 | R$ 3.50 | R$ 0.70 |
| **Off-peak output ²** | R$ 14.00 | R$ 2.80 | R$ 7.00 | R$ 7.00 | R$ 2.10 |
| **Flex input ³** | R$ 2.50 | R$ 0.50 | R$ 2.50 | R$ 2.50 | R$ 0.50 |
| **Flex output ³** | R$ 10.00 | R$ 2.00 | R$ 5.00 | R$ 5.00 | R$ 1.50 |
| **Batch API input** | R$ 2.50 | R$ 0.50 | R$ 2.50 | R$ 2.50 | R$ 0.50 |
| **Batch API output** | R$ 10.00 | R$ 2.00 | R$ 5.00 | R$ 5.00 | R$ 1.50 |

<small>¹ Reused input tokens are charged at a 75% discount (1/4 of the price). Learn more at [Prompt Caching](prompt-caching).</small>

<small>² Off-peak: 10 p.m.–6 a.m. BRT.</small>

<small>³ Flex requests offer a 50% discount, subject to capacity availability. Learn more at [Flex Tier](flex-tier).</small>

:::info How discounts interact
The cache discount (75%) applies only to cached input tokens. Batch API, Flex, and off-peak discounts apply only to non-cached input tokens and output tokens — they do not multiply with the cache discount. Additionally, Batch API, Flex, and off-peak are mutually exclusive. See more details at [Prompt Caching](prompt-caching#how-discounts-interact).
:::

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
