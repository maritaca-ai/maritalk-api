---
id: primeiros-passos-s5
title: Primeiros passos com o S5
---

<style>{`.markdown table td:first-child code { white-space: nowrap; }`}</style>

# Primeiros passos com o S5

O S5 é nosso modelo mais inteligente. Use-o para analisar documentos, trabalhar com dados e resolver tarefas complexas. Esta página mostra como fazer a primeira chamada em poucos minutos.

## Escolha o nome do modelo

O S5 está disponível na API com três nomes. O modelo é o mesmo; muda onde ele roda e como é cobrado.

| Nome na API | Para quê | Preço |
|---|---|---|
| `S5-free` | Experimentar sem custo. Somente texto, sem Batch API, Flex nem ferramentas integradas. | **Gratuito por tempo limitado** |
| `S5` | Uso contínuo e produção, com todos os recursos. | R$ 0,50 (entrada) e R$ 2,50 (saída) por 1M de tokens |
| `S5-br-sp` | O mesmo S5, com inferência 100% no Brasil. | 30% acima do `S5` |

Os nomes também são aceitos em minúsculas (`s5-free`, `s5`, `s5-br-sp`). Detalhes em [Modelos](modelos), [Preços](precos) e [Rate Limits](rate-limits).

:::caution O S5 Free é temporário
O `S5-free` é uma oferta de lançamento e pode ser encerrada a qualquer momento. Para uso contínuo ou em produção, use o `S5`: basta trocar o nome do modelo, o resto do código continua igual.
:::

## 1. Crie uma chave de API

Crie uma conta na [plataforma da Maritaca](https://plataforma.maritaca.ai/), gere uma chave na [página de chaves](https://plataforma.maritaca.ai/chaves-de-api) e guarde-a em uma variável de ambiente:

```bash
export MARITACA_API_KEY='sua_chave'
```

## 2. Faça a primeira chamada

A API é compatível com a da OpenAI. Basta apontar a `base_url` para a Maritaca.

```bash
pip install openai
```

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
    model="S5-free",  # troque por "S5" para uso em produção
    messages=[
        {"role": "user", "content": "Explique em três frases como funciona o Pix."},
    ],
)
print(response.choices[0].message.content)
```

O mesmo pedido com `curl`:

```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "S5-free",
    "messages": [
      {"role": "user", "content": "Explique em três frases como funciona o Pix."}
    ]
  }'
```

## 3. Ajuste o raciocínio

O S5 pensa antes de responder. O parâmetro `reasoning_effort` controla quanto: `none` (desliga o raciocínio, respostas mais rápidas), `low`, `medium` ou `xhigh` (o padrão). Só a resposta final é devolvida; o raciocínio fica interno.

```python
response = client.chat.completions.create(
    model="S5-free",
    reasoning_effort="low",  # none, low, medium ou xhigh
    messages=[{"role": "user", "content": "Qual é o maior divisor comum de 84 e 120?"}],
)
print(response.choices[0].message.content)
```

Use `none` ou `low` para conversas e extração simples, e deixe o padrão para problemas com várias etapas.

## 4. Receba a resposta em streaming

```python
stream = client.chat.completions.create(
    model="S5-free",
    messages=[{"role": "user", "content": "Escreva um haicai sobre o sabiá."}],
    stream=True,
)
for chunk in stream:
    if chunk.choices and chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
```

## Próximos passos

- Com o `S5`, ative a [busca na web](ferramentas) para respostas com informações atualizadas e fontes.
- Conecte o modelo ao seu código com [chamada de funções](chamada-funcao) e [saídas estruturadas](structured-outputs).
- Reduza o custo de prompts repetidos com o [cache de prompt](cache-de-prompt): nos modelos S5, tokens reutilizados custam 1/10 do preço.
- Para tarefas simples em alto volume, troque para o `S5-nano`, a versão compacta do S5 (R$ 0,10 / R$ 0,60 por 1M de tokens). O código é o mesmo.
