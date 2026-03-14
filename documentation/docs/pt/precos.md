---
id: precos
title: Preços
slug: /pt/precos
---

# Preços

Todos os preços são por milhão de tokens processados. A cobrança considera tanto tokens de entrada quanto de saída.

| | **Sabiá 4** | **Sabiazinho 4** | **Sabiá 3.1** | **Sabiá 3** | **Sabiazinho 3** |
|---|---|---|---|---|---|
| **Entrada** | R$ 5,00 | R$ 1,00 | R$ 5,00 | R$ 5,00 | R$ 1,00 |
| **Saída** | R$ 20,00 | R$ 4,00 | R$ 10,00 | R$ 10,00 | R$ 3,00 |
| **Entrada fora de pico ¹** | R$ 3,50 | R$ 0,70 | R$ 3,50 | R$ 3,50 | R$ 0,70 |
| **Saída fora de pico ¹** | R$ 14,00 | R$ 2,80 | R$ 7,00 | R$ 7,00 | R$ 2,10 |
| **Entrada Batch API** | R$ 2,50 | R$ 0,50 | R$ 2,50 | R$ 2,50 | R$ 0,50 |
| **Saída Batch API** | R$ 10,00 | R$ 2,00 | R$ 5,00 | R$ 5,00 | R$ 1,50 |

<small>¹ Fora de pico: 22:00–06:00 BRT.</small>

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
