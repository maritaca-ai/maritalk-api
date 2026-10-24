---
id: cache-de-prompt
title: Cache de Prompt
---

# Cache de Prompt

O cache de prompt reduz automaticamente o custo de tokens de input que são reutilizados entre requisições. Tokens cacheados são cobrados com **75% de desconto** — ou seja, pagam apenas **1/4 do preço** de input.

## Como funciona

O cache funciona automaticamente, sem necessidade de ativar uma opção ou enviar parâmetros extras. Quando requisições para o mesmo modelo começam com a mesma sequência de tokens (o **prefixo**), a API pode reaproveitar o processamento desse trecho, desde que ele ainda esteja disponível no cache. Isso reduz o custo dos tokens reutilizados e pode diminuir o tempo até o início da resposta. A resposta é gerada novamente a cada chamada; o cache reaproveita o processamento do contexto, não uma resposta pronta.

Para aproveitar o cache, mantenha instruções fixas, exemplos e documentos de referência no início do prompt e coloque a pergunta ou os dados variáveis no final. Por exemplo, ao fazer várias perguntas sobre o mesmo documento, envie o documento e as instruções na mesma ordem e altere apenas a pergunta ao final. O prefixo precisa ser **idêntico**: uma alteração impede o reaproveitamento a partir do ponto modificado. Repetir conteúdo não garante um acerto de cache; confira os tokens efetivamente reutilizados em `usage.prompt_tokens_details.cached_tokens` na resposta de Chat Completions. Apenas esses tokens recebem o desconto de cache.

## Verificando tokens cacheados

O campo `prompt_tokens_details.cached_tokens` na resposta da API indica quantos tokens de input foram servidos a partir do cache:

```python
import openai

client = openai.OpenAI(
    api_key="sua-chave-aqui",
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
    model="sabia-4",
    messages=[
        {"role": "system", "content": "Você é um assistente jurídico especializado..."},
        {"role": "user", "content": "Resuma o artigo 5º da Constituição Federal."},
    ],
)

usage = response.usage
print(f"Tokens de input: {usage.prompt_tokens}")
print(f"Tokens cacheados: {usage.prompt_tokens_details.cached_tokens}")
print(f"Tokens de output: {usage.completion_tokens}")
```

## Preços com cache

Tokens cacheados pagam 25% do preço de input padrão. Consulte a tabela completa na página de [Preços](precos).

## Dicas para maximizar o cache

1. **Coloque o conteúdo estável no início do prompt**: system prompts e documentos de referência devem vir antes do conteúdo dinâmico (ex.: a pergunta do usuário).
2. **Reutilize prefixos idênticos**: quanto maior o prefixo comum entre requisições, maior a economia.
3. **Combine com outras estratégias**: o desconto de cache pode ser usado junto com descontos de horário noturno, Flex e Batch API — cada um incide sobre uma parte diferente do custo (veja abaixo).

## Como os descontos interagem

O desconto de cache (75%) se aplica apenas aos tokens de input em cache. Os demais descontos (Batch API, Flex, horário noturno) se aplicam apenas aos tokens de input não cacheados e aos tokens de output. Os descontos não se multiplicam entre si.

Batch API, Flex e horário noturno são mutuamente exclusivos — apenas um deles é aplicado por requisição.

| Cenário | Input não cacheado e output | Tokens em cache |
|---|---|---|
| Batch + cache | 50% de desconto | 75% de desconto |
| Flex + cache | 50% de desconto | 75% de desconto |
| Horário noturno + cache | 30% de desconto | 75% de desconto |
| Horário noturno + Flex | só Flex (50%) | — |
| Horário noturno + Batch | só Batch (50%) | — |
| Somente cache | sem desconto | 75% de desconto |

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
