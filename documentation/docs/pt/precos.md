---
id: precos
title: Preços
---

# Preços

Todos os preços são por milhão de tokens processados. A cobrança considera tanto tokens de input quanto de output.

| | **Sabiá 4** | **Sabiazinho 4** | **Sabiá 3.1** | **Sabiá 3** | **Sabiazinho 3** |
|---|---|---|---|---|---|
| **Input** | R$ 5,00 | R$ 1,00 | R$ 5,00 | R$ 5,00 | R$ 1,00 |
| **Output** | R$ 20,00 | R$ 4,00 | R$ 10,00 | R$ 10,00 | R$ 3,00 |
| **Input em cache ¹** | R$ 1,25 | R$ 0,25 | R$ 1,25 | R$ 1,25 | R$ 0,25 |
| **Input noturno ²** | R$ 3,50 | R$ 0,70 | R$ 3,50 | R$ 3,50 | R$ 0,70 |
| **Output noturno ²** | R$ 14,00 | R$ 2,80 | R$ 7,00 | R$ 7,00 | R$ 2,10 |
| **Input Flex ³** | R$ 2,50 | R$ 0,50 | R$ 2,50 | R$ 2,50 | R$ 0,50 |
| **Output Flex ³** | R$ 10,00 | R$ 2,00 | R$ 5,00 | R$ 5,00 | R$ 1,50 |
| **Input Batch API** | R$ 2,50 | R$ 0,50 | R$ 2,50 | R$ 2,50 | R$ 0,50 |
| **Output Batch API** | R$ 10,00 | R$ 2,00 | R$ 5,00 | R$ 5,00 | R$ 1,50 |

<small>¹ Tokens de input reutilizados entre requisições são cobrados com 75% de desconto (1/4 do preço). Saiba mais em [Cache de Prompt](cache-de-prompt).</small>

<small>² Noturno: 22:00–06:00 BRT.</small>

<small>³ Requisições Flex oferecem 50% de desconto, sujeitas a disponibilidade de capacidade. Saiba mais em [Flex Tier](flex-tier).</small>

:::info Como os descontos interagem
O desconto de cache (75%) se aplica apenas aos tokens de input em cache. Os descontos de Batch API, Flex e horário noturno se aplicam apenas aos tokens de input não cacheados e de output — eles não se multiplicam com o desconto de cache. Além disso, Batch API, Flex e horário noturno são mutuamente exclusivos. Veja mais detalhes em [Cache de Prompt](cache-de-prompt#como-os-descontos-interagem).
:::

## Como saber quantos tokens serei cobrado?

Para saber de antemão o quanto suas requisições irão custar, use a função `count_tokens` para saber o número de tokens em um dado prompt.

```python
from maritalk import count_tokens

prompt = "Com quantos paus se faz uma canoa?"

total_tokens = count_tokens(prompt, model="sabia-4")

print(f'O prompt "{prompt}" contém {total_tokens} tokens.')
```

É necessário instalar a biblioteca da Maritaca (`pip install maritalk`) para rodar o trecho de código acima.

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
