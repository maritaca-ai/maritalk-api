---
id: cache-de-prompt
title: Cache de Prompt
---

# Cache de Prompt

O cache de prompt reduz automaticamente o custo de tokens de input que são reutilizados entre requisições. Tokens cacheados são cobrados com **75% de desconto** — ou seja, pagam apenas **1/4 do preço** de input.

## Como funciona

Quando você envia uma requisição, a API identifica automaticamente prefixos de tokens que já foram processados em requisições recentes. Esses tokens são marcados como "cached" e cobrados com o desconto aplicado.

Isso é especialmente útil em cenários onde há repetição de contexto entre requisições, como:

- **System prompts** fixos ou longos reutilizados em múltiplas chamadas
- **Documentos de referência** incluídos como contexto em várias requisições
- **Conversas multi-turno**, onde o histórico de mensagens cresce a cada interação
- **Arquiteturas multiagente**, onde vários agentes compartilham o mesmo contexto base

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
3. **Combine com outras estratégias**: o cache se acumula com descontos de horário noturno, Flex e Batch API para maximizar a economia.

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
