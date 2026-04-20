---
id: prompt-caching
title: Prompt Caching
---

# Prompt Caching

Prompt caching automatically reduces the cost of input tokens that are reused across requests. Cached tokens are charged at a **75% discount** — paying only **1/4 of the standard input price**.

## How it works

When you send a request, the API automatically identifies token prefixes that have already been processed in recent requests. These tokens are marked as "cached" and charged at the discounted rate.

This is especially useful in scenarios with repeated context across requests, such as:

- **Fixed system prompts** reused across multiple calls
- **Reference documents** included as context in several requests
- **Multi-turn conversations**, where message history grows with each interaction
- **Multi-agent architectures**, where multiple agents share the same base context

## Checking cached tokens

The `prompt_tokens_details.cached_tokens` field in the API response indicates how many input tokens were served from the cache:

```python
import openai

client = openai.OpenAI(
    api_key="your-api-key",
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
    model="sabia-4",
    messages=[
        {"role": "system", "content": "You are a legal assistant specialized in..."},
        {"role": "user", "content": "Summarize Article 5 of the Brazilian Constitution."},
    ],
)

usage = response.usage
print(f"Input tokens: {usage.prompt_tokens}")
print(f"Cached tokens: {usage.prompt_tokens_details.cached_tokens}")
print(f"Output tokens: {usage.completion_tokens}")
```

## Cached pricing

Cached tokens pay 25% of the standard input price. See the full pricing table on the [Pricing](precos) page.

## Tips for maximizing cache hits

1. **Place stable content at the beginning of the prompt**: system prompts and reference documents should come before dynamic content (e.g., the user's question).
2. **Reuse identical prefixes**: the larger the common prefix between requests, the greater the savings.
3. **Combine with other strategies**: the cache discount can be used alongside off-peak, Flex, and Batch API discounts — each one applies to a different part of the cost (see below).

## How discounts interact

The cache discount (75%) applies only to cached input tokens. Other discounts (Batch API, Flex, off-peak) apply only to non-cached input tokens and output tokens. Discounts do not multiply with each other.

Batch API, Flex, and off-peak are mutually exclusive — only one of them is applied per request.

| Scenario | Non-cached input and output | Cached tokens |
|---|---|---|
| Batch + cache | 50% discount | 75% discount |
| Flex + cache | 50% discount | 75% discount |
| Off-peak + cache | 30% discount | 75% discount |
| Off-peak + Flex | Flex only (50%) | — |
| Off-peak + Batch | Batch only (50%) | — |
| Cache only | no discount | 75% discount |

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
