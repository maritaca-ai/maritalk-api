---
id: precos
title: Pricing
---

# Pricing

All prices are per million tokens processed. Billing considers both input and output tokens.

| | **Sabiá 4 Thinking** | **Sabiá 4** | **Sabiazinho 4** |
|---|---|---|---|
| **Input** | R$ 5.00 | R$ 5.00 | R$ 1.00 |
| **Output** | R$ 40.00 | R$ 20.00 | R$ 4.00 |
| **Cached input ¹** | R$ 1.25 | R$ 1.25 | R$ 0.25 |
| **Off-peak input ²** | R$ 3.50 | R$ 3.50 | R$ 0.70 |
| **Off-peak output ²** | R$ 28.00 | R$ 14.00 | R$ 2.80 |
| **Flex input ³** | R$ 2.50 | R$ 2.50 | R$ 0.50 |
| **Flex output ³** | R$ 20.00 | R$ 10.00 | R$ 2.00 |
| **Batch API input** | R$ 2.50 | R$ 2.50 | R$ 0.50 |
| **Batch API output** | R$ 20.00 | R$ 10.00 | R$ 2.00 |

<small>¹ Reused input tokens are charged at a 75% discount (1/4 of the price). Learn more at [Prompt Caching](prompt-caching).</small>

<small>² Off-peak: 10 p.m.–6 a.m. BRT.</small>

<small>³ Flex requests offer a 50% discount, subject to capacity availability. Learn more at [Flex Tier](flex-tier).</small>

:::info How discounts interact
The cache discount (75%) applies only to cached input tokens. Batch API, Flex, and off-peak discounts apply only to non-cached input tokens and output tokens — they do not multiply with the cache discount. Additionally, Batch API, Flex, and off-peak are mutually exclusive. See more details at [Prompt Caching](prompt-caching#how-discounts-interact).
:::

## BR-SP models

BR-SP models perform inference and processing entirely (100%) within Brazilian territory, priced 30% above the corresponding model. API model names: `sabia-4-thinking-br-sp`, `sabia-4-br-sp`, `sabiazinho-4-br-sp`.

| | **Sabiá 4 Thinking BR-SP** | **Sabiá 4 BR-SP** | **Sabiazinho 4 BR-SP** |
|---|---|---|---|
| **Input** | R$ 6.50 | R$ 6.50 | R$ 1.30 |
| **Output** | R$ 52.00 | R$ 26.00 | R$ 5.20 |
| **Cached input ¹** | R$ 1.63 | R$ 1.63 | R$ 0.33 |
| **Off-peak input ²** | R$ 4.55 | R$ 4.55 | R$ 0.91 |
| **Off-peak output ²** | R$ 36.40 | R$ 18.20 | R$ 3.64 |
| **Flex input ³** | R$ 3.25 | R$ 3.25 | R$ 0.65 |
| **Flex output ³** | R$ 26.00 | R$ 13.00 | R$ 2.60 |
| **Batch API input** | R$ 3.25 | R$ 3.25 | R$ 0.65 |
| **Batch API output** | R$ 26.00 | R$ 13.00 | R$ 2.60 |

## Built-in tools

[Built-in tool](tools.md) executions (web search, code execution, and Data Ocean) are billed per use, in addition to the usual token costs. Charges are reported in `usage.tool_execution_details` and on your invoice.

| Tool | Unit | Price (BRL) |
|---|---|---|
| Web search | per search | R$ 0.0165 |
| Page read | per page read | R$ 0.066 |
| Data Ocean | per GB scanned | R$ 0.10 |
| Code execution | per minute (rounded up) | R$ 0.016 |

A single `web_search` request can incur both `web_search_calls` and `page_reads` charges: the model searches, then reads one or more result pages. Code execution time is the total sandbox compute time across the request, rounded up to the next whole minute.

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
