---
id: precos
title: Preços
---

# Preços

Todos os preços são por milhão de tokens processados. A cobrança considera tanto tokens de input quanto de output.

| | **Sabiá 4 Thinking** | **Sabiá 4** | **Sabiazinho 4** |
|---|---|---|---|
| **Input** | R$ 5,00 | R$ 5,00 | R$ 1,00 |
| **Output** | R$ 40,00 | R$ 20,00 | R$ 4,00 |
| **Input em cache ¹** | R$ 1,25 | R$ 1,25 | R$ 0,25 |
| **Input noturno ²** | R$ 3,50 | R$ 3,50 | R$ 0,70 |
| **Output noturno ²** | R$ 28,00 | R$ 14,00 | R$ 2,80 |
| **Input Flex ³** | R$ 2,50 | R$ 2,50 | R$ 0,50 |
| **Output Flex ³** | R$ 20,00 | R$ 10,00 | R$ 2,00 |
| **Input Batch API** | R$ 2,50 | R$ 2,50 | R$ 0,50 |
| **Output Batch API** | R$ 20,00 | R$ 10,00 | R$ 2,00 |

<small>¹ Tokens de input reutilizados entre requisições são cobrados com 75% de desconto (1/4 do preço). Saiba mais em [Cache de Prompt](cache-de-prompt).</small>

<small>² Noturno: 22:00–06:00 BRT.</small>

<small>³ Requisições Flex oferecem 50% de desconto, sujeitas a disponibilidade de capacidade. Saiba mais em [Flex Tier](flex-tier).</small>

:::info Como os descontos interagem
O desconto de cache (75%) se aplica apenas aos tokens de input em cache. Os descontos de Batch API, Flex e horário noturno se aplicam apenas aos tokens de input não cacheados e de output — eles não se multiplicam com o desconto de cache. Além disso, Batch API, Flex e horário noturno são mutuamente exclusivos. Veja mais detalhes em [Cache de Prompt](cache-de-prompt#como-os-descontos-interagem).
:::

## Modelos BR-SP

Os modelos BR-SP têm inferência e processamento realizados 100% em território nacional, com os mesmos preços do modelo correspondente acrescidos de 30%. Nomes na API: `sabia-4-thinking-br-sp`, `sabia-4-br-sp`, `sabiazinho-4-br-sp`.

| | **Sabiá 4 Thinking BR-SP** | **Sabiá 4 BR-SP** | **Sabiazinho 4 BR-SP** |
|---|---|---|---|
| **Input** | R$ 6,50 | R$ 6,50 | R$ 1,30 |
| **Output** | R$ 52,00 | R$ 26,00 | R$ 5,20 |
| **Input em cache ¹** | R$ 1,63 | R$ 1,63 | R$ 0,33 |
| **Input noturno ²** | R$ 4,55 | R$ 4,55 | R$ 0,91 |
| **Output noturno ²** | R$ 36,40 | R$ 18,20 | R$ 3,64 |
| **Input Flex ³** | R$ 3,25 | R$ 3,25 | R$ 0,65 |
| **Output Flex ³** | R$ 26,00 | R$ 13,00 | R$ 2,60 |
| **Input Batch API** | R$ 3,25 | R$ 3,25 | R$ 0,65 |
| **Output Batch API** | R$ 26,00 | R$ 13,00 | R$ 2,60 |

## Ferramentas integradas

As [ferramentas integradas](ferramentas.md) (busca na web, execução de código e Data Ocean) são cobradas por uso, além dos custos normais de tokens. As cobranças são reportadas em `usage.tool_execution_details` e na sua fatura.

| Ferramenta | Unidade | Preço (BRL) |
|---|---|---|
| Busca na web | por busca | R$ 0,0165 |
| Leitura de página | por página lida | R$ 0,066 |
| Data Ocean | por GB processado | R$ 0,10 |
| Execução de código | por minuto (arredondado para cima) | R$ 0,016 |

Uma única requisição com `web_search` pode gerar cobranças tanto de `web_search_calls` quanto de `page_reads`: o modelo busca e depois lê uma ou mais páginas de resultado. O tempo de execução de código é o tempo total de computação no sandbox ao longo da requisição, arredondado para o próximo minuto inteiro.

Como o `data_ocean` liga automaticamente a busca na web e a execução de código (veja [Ferramentas integradas](ferramentas.md)), uma requisição com `data_ocean: true` pode gerar cobranças de **Data Ocean, busca na web (`web_search_calls`/`page_reads`) e execução de código** na mesma resposta.

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
