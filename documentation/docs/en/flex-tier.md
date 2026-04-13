---
id: flex-tier
title: Flex Tier
---

# Flex Tier

The Flex Tier offers a **50% discount** on synchronous (real-time) requests, subject to capacity availability. When capacity is not immediately available, the request is queued and waits for **up to 5 minutes** before the API returns HTTP status code `429`. If the queue is already full when the request arrives, the API returns `429` immediately.

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
| **Response** | Real-time (synchronous) | Up to 24h (asynchronous) |
| **Availability** | Subject to capacity (queue up to 5 min, or immediate 429 if queue is full) | Guaranteed within 24h window |
| **Streaming** | Yes | No |
| **Best for** | Applications that tolerate retry | Non-urgent batch processing |

## Best practices

1. **Combine with prompt caching**: cached tokens keep the 75% discount on input price. Note that the cache and Flex discounts are **not cumulative** — each applies independently to its respective component.
2. **Implement retry with backoff**: since Flex requests may return 429, add retry logic with exponential backoff.

```python
import openai
import time
import random

client = openai.OpenAI(
    api_key="your-api-key",
    base_url="https://chat.maritaca.ai/api",
)

def chat_flex_with_retry(messages, model="sabiazinho-4", max_retries=5):
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model=model,
                messages=messages,
                extra_body={"service_tier": "flex"},
            )
            return response
        except openai.RateLimitError:
            if attempt == max_retries - 1:
                raise
            wait = (2 ** attempt) + random.random()  # jitter to avoid simultaneous retries
            print(f"429 received. Retrying in {wait:.1f}s...")
            time.sleep(wait)

response = chat_flex_with_retry(
    messages=[{"role": "user", "content": "What is the capital of Brazil?"}]
)
print(response.choices[0].message.content)
```

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
