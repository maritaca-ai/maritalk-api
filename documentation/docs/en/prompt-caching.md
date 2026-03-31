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

Cached tokens pay 25% of the standard input price:

| Model | Standard input (1M tokens) | Cached input (1M tokens) |
|---|---|---|
| **Sabiá 4** | R$ 5.00 | R$ 1.25 |
| **Sabiazinho 4** | R$ 1.00 | R$ 0.25 |
| **Sabiá 3.1** | R$ 5.00 | R$ 1.25 |
| **Sabiá 3** | R$ 5.00 | R$ 1.25 |
| **Sabiazinho 3** | R$ 1.00 | R$ 0.25 |

## Tips for maximizing cache hits

1. **Place stable content at the beginning of the prompt**: system prompts and reference documents should come before dynamic content (e.g., the user's question).
2. **Reuse identical prefixes**: the larger the common prefix between requests, the greater the savings.
3. **Combine with other strategies**: caching stacks with off-peak, Flex, and Batch API discounts to maximize savings.

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
