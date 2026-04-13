---
id: flex-tier
title: Flex Tier
---

# Flex Tier

O Flex Tier oferece **50% de desconto** em requisições síncronas (tempo real), sujeitas a disponibilidade de capacidade. Quando não há capacidade disponível, a API retorna o código HTTP `429`.

## Como usar

Para ativar o Flex Tier, basta incluir o parâmetro `service_tier: "flex"` na sua requisição:

```python
import openai

client = openai.OpenAI(
    api_key="sua-chave-aqui",
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
    model="sabiazinho-4",
    messages=[
        {"role": "user", "content": "Qual a capital do Brasil?"},
    ],
    extra_body={"service_tier": "flex"},
)

print(response.choices[0].message.content)
print(f"Service tier: {response.service_tier}")  # "flex"
```

## Preços

Requisições Flex têm o mesmo desconto de 50% da Batch API, mas são processadas em tempo real. Consulte a tabela completa na página de [Preços](precos).

## Flex vs Batch API

| | **Flex** | **Batch API** |
|---|---|---|
| **Desconto** | 50% | 50% |
| **Resposta** | Tempo real (síncrona) | Até 24h (assíncrona) |
| **Disponibilidade** | Sujeita a capacidade (pode retornar 429) | Garantida dentro da janela de 24h |
| **Streaming** | Sim | Não |
| **Ideal para** | Aplicações que toleram retry | Processamento em lote sem urgência |

## Boas práticas

1. **Combine com cache de prompt**: tokens cacheados mantêm o desconto de 75% sobre o preço de input, acumulando com o desconto Flex para economia ainda maior.
2. **Implemente retry com backoff**: como requisições Flex podem retornar 429, adicione lógica de retry com backoff exponencial.

```python
import openai
import time
import random

client = openai.OpenAI(
    api_key="sua-chave-aqui",
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
            wait = (2 ** attempt) + random.random()  # jitter para evitar retries simultâneos
            print(f"429 recebido. Tentando novamente em {wait:.1f}s...")
            time.sleep(wait)

response = chat_flex_with_retry(
    messages=[{"role": "user", "content": "Qual a capital do Brasil?"}]
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
