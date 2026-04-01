---
id: flex-tier
title: Flex Tier
---

# Flex Tier

The Flex Tier offers a **50% discount** on synchronous (real-time) requests, subject to capacity availability. When capacity is unavailable, the API returns HTTP status code `429`.

## How to use

To enable the Flex Tier, include the `service_tier: "flex"` parameter in your request:

```python
import openai

client = openai.OpenAI(
    api_key="your-api-key",
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
    model="sabiazinho-4",
    messages=[
        {"role": "user", "content": "What is the capital of Brazil?"},
    ],
    extra_body={"service_tier": "flex"},
)

print(response.choices[0].message.content)
print(f"Service tier: {response.service_tier}")  # "flex"
```

## Pricing

Flex requests have the same 50% discount as the Batch API, but are processed in real time. See the full pricing table on the [Pricing](precos) page.

## Flex vs Batch API

| | **Flex** | **Batch API** |
|---|---|---|
| **Discount** | 50% | 50% |
| **Response** | Real-time (synchronous) | Up to 7 days (asynchronous) |
| **Availability** | Subject to capacity (may return 429) | No delivery guarantee (requests may expire) |
| **Streaming** | Yes | No |
| **Best for** | Applications that tolerate retry | Non-urgent batch processing |

## Best practices

1. **Implement retry with backoff**: since Flex requests may return 429, add retry logic with exponential backoff.
2. **Ideal for multi-agent architectures**: agents can send discounted requests and simply retry if they receive 429.
3. **Combine with prompt caching**: cached tokens have a 75% discount on input price, but this discount does not stack with the Flex discount.

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
