---
id: raciocinio
title: Raciocínio
---

# Raciocínio

Os modelos S5 (`S5`, `S5-br-sp`, `S5-free` e `S5-nano`) pensam antes de responder. Eles geram uma cadeia interna de raciocínio, analisam o pedido, planejam e só então escrevem a resposta ou chamam uma ferramenta. Isso os torna bons em problemas com várias etapas, em fluxos agênticos e em chamadas de função encadeadas.

Na Responses API, o raciocínio aparece no `output` como um item do tipo `reasoning`. O texto do raciocínio é **confidencial**: ele vem sempre **cifrado**, no campo `encrypted_content`, e só a Maritaca consegue lê-lo. Para o modelo continuar de onde parou, devolva esse item na próxima chamada, como no fluxo dos modelos de raciocínio da OpenAI.

A exceção é o **S5-nano**: por ser um modelo de pesos abertos, ele devolve o raciocínio **em texto**, sem cifra. Veja [Raciocínio em texto no S5-nano](#raciocínio-em-texto-no-s5-nano).

## Começando

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["MARITACA_API_KEY"],
    base_url="https://chat.maritaca.ai/api",
)

response = client.responses.create(
    model="S5",
    reasoning={"effort": "medium"},
    input="Um trem sai de Campinas às 8h a 80 km/h. Outro sai de São Paulo, a 90 km de distância, "
          "às 8h30 a 100 km/h, no sentido oposto. A que horas eles se cruzam?",
)

print(response.output_text)
```

:::tip Leia a resposta com `output_text`
Nos modelos S5 o primeiro item de `output` é o `reasoning`, e a mensagem vem depois. Use `response.output_text` (que junta o texto de todas as mensagens) em vez de `response.output[0].content[0].text`.
:::

## Esforço de raciocínio

O parâmetro `reasoning.effort` controla quanto o modelo pensa antes de responder.

| Valor | Comportamento |
|---|---|
| `none` | Desliga o raciocínio. Respostas mais rápidas e baratas. |
| `minimal`, `low` | Raciocínio curto. `minimal` equivale a `low`. |
| `medium` | Equilíbrio entre qualidade e custo. |
| `high`, `xhigh`, `max` | Raciocínio mais longo, para problemas difíceis. `high` e `max` equivalem a `xhigh`. |

Sem `reasoning.effort`, o padrão é `xhigh`. Use `none` ou `low` para conversas e extrações simples e deixe o padrão para problemas com várias etapas.

O mesmo controle existe na Chat Completions API, pelo parâmetro `reasoning_effort` (veja [Primeiros passos com o S5](primeiros-passos-s5)).

## Como o raciocínio funciona

A cada chamada, o S5 gera **tokens de raciocínio** antes da resposta. Eles:

- são cobrados como tokens de saída e aparecem em `usage.output_tokens_details.reasoning_tokens`;
- ocupam espaço na janela de contexto e contam no limite de `max_output_tokens`;
- nunca saem em texto: o conteúdo vem só cifrado, no item `reasoning`.

```json
{
  "output": [
    {
      "id": "rs_6f1c...",
      "type": "reasoning",
      "content": [],
      "encrypted_content": "gAAAAABp...",
      "summary": []
    },
    {
      "id": "msg_9a2b...",
      "type": "message",
      "role": "assistant",
      "content": [{"type": "output_text", "text": "Eles se cruzam por volta das 8h47.", "annotations": []}]
    }
  ],
  "reasoning": {"effort": "medium", "summary": null, "context": "all_turns", "mode": "standard"},
  "usage": {
    "input_tokens": 61,
    "output_tokens": 812,
    "output_tokens_details": {"reasoning_tokens": 790},
    "total_tokens": 873
  }
}
```

:::caution Reserve espaço para o raciocínio
Se `max_output_tokens` for pequeno, o modelo pode gastar todo o limite raciocinando e terminar sem texto na resposta. Deixe folga ou reduza o esforço.
:::

## Mantendo o raciocínio entre chamadas

Em fluxos com chamada de funções, o modelo raciocina, pede uma ferramenta e depois precisa continuar com o resultado. Se você devolver o item `reasoning` junto com o restante do `output`, o modelo retoma o raciocínio da etapa anterior em vez de recomeçar do zero. Isso melhora a qualidade das respostas em fluxos agênticos.

Há duas formas de fazer isso.

### 1. `previous_response_id` (mais simples)

Com `store: true` (o padrão), a Maritaca guarda a resposta por 30 dias, com o raciocínio cifrado. Na chamada seguinte, envie só o que é novo e aponte para a resposta anterior:

```python
import json

tools = [{
    "type": "function",
    "name": "consultar_clima",
    "description": "Clima atual de uma cidade.",
    "parameters": {
        "type": "object",
        "properties": {"cidade": {"type": "string"}},
        "required": ["cidade"],
    },
}]

response = client.responses.create(
    model="S5",
    input="Vou a Campinas hoje. Preciso de guarda-chuva?",
    tools=tools,
)

call = next(item for item in response.output if item.type == "function_call")
resultado = {"temperatura": 24, "chuva": "forte"}  # sua função de verdade aqui

final = client.responses.create(
    model="S5",
    previous_response_id=response.id,
    input=[{
        "type": "function_call_output",
        "call_id": call.call_id,
        "output": json.dumps(resultado),
    }],
    tools=tools,
)
print(final.output_text)
```

Uma resposta guardada só pode ser usada pela mesma conta. Um id inexistente, expirado ou de outra conta retorna `400` com o código `previous_response_not_found`.

### 2. Sem estado: devolva o `output` na entrada

Se você não quer que nada fique guardado (por exemplo, por política de retenção de dados), use `store: false` e devolva você mesmo os itens. Basta acrescentar o `output` da resposta à lista de entrada:

```python
context = [{"role": "user", "content": "Vou a Campinas hoje. Preciso de guarda-chuva?"}]

response = client.responses.create(
    model="S5",
    input=context,
    tools=tools,
    store=False,
    include=["reasoning.encrypted_content"],
)

context += response.output  # inclui o item reasoning cifrado e o function_call

call = next(item for item in response.output if item.type == "function_call")
context.append({
    "type": "function_call_output",
    "call_id": call.call_id,
    "output": json.dumps({"temperatura": 24, "chuva": "forte"}),
})

final = client.responses.create(model="S5", input=context, tools=tools, store=False)
print(final.output_text)
```

O `encrypted_content` sempre vem no item, com ou sem `include`. O valor `"reasoning.encrypted_content"` é aceito para manter o mesmo código que você usaria com a OpenAI.

### Regras do item cifrado

- O `encrypted_content` só pode ser decifrado na mesma conta (usuário ou organização) que o recebeu. Um blob alterado ou de outra conta retorna `400` com o código `invalid_encrypted_content`.
- Um item gerado por outro modelo é ignorado em silêncio, como na OpenAI.
- O campo `content` de um item `reasoning` na entrada deve ficar vazio (`[]`). Enviar texto ali retorna `400` com o código `array_above_max_length`.
- O raciocínio devolvido conta como entrada: ele aparece em `usage.input_tokens` e é cobrado pelo preço de entrada.

### Raciocínio de quais turnos o modelo vê

Por padrão (`reasoning.context: "all_turns"`), o modelo vê o raciocínio de todos os turnos anteriores que você devolveu. Com `"current_turn"`, ele só vê o raciocínio gerado depois da última mensagem do usuário, o que economiza contexto em conversas longas.

```python
response = client.responses.create(
    model="S5",
    previous_response_id=anterior.id,
    input="E amanhã?",
    reasoning={"context": "current_turn"},
)
```

## Resumos do raciocínio

O raciocínio em si não é exposto, mas você pode pedir um **resumo** legível dele com `reasoning.summary`:

| Valor | Resumo |
|---|---|
| `auto` | Igual a `detailed`. |
| `concise` | Curto, com os passos principais. |
| `detailed` | Mais completo. |

```python
response = client.responses.create(
    model="S5",
    input="Quanto é 17 × 23? Explique.",
    reasoning={"effort": "low", "summary": "auto"},
)

for item in response.output:
    if item.type == "reasoning":
        for part in item.summary:
            print(part.text)
```

O resumo vem no campo `summary` do item, como partes do tipo `summary_text`. Ele é escrito à parte, a partir do raciocínio, e nunca reproduz o texto original. No streaming, ele chega pelos eventos `response.reasoning_summary_part.added`, `response.reasoning_summary_text.delta`, `response.reasoning_summary_text.done` e `response.reasoning_summary_part.done`.

## Streaming

No streaming, o item `reasoning` é o primeiro item de saída (`output_index` 0), antes da mensagem. Os eventos `response.output_item.added` e `response.output_item.done` desse item já trazem o `encrypted_content`. Não há eventos com o texto do raciocínio.

```python
stream = client.responses.create(
    model="S5",
    input="Explique em duas frases como funciona o Pix.",
    reasoning={"effort": "low"},
    stream=True,
)

for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
    elif event.type == "response.completed":
        print("\nTokens de raciocínio:", event.response.usage.output_tokens_details.reasoning_tokens)
```

## Raciocínio em texto no S5-nano

O `S5-nano` tem [pesos abertos](https://huggingface.co/maritaca-ai/S5-nano), então o raciocínio dele não é confidencial: vem em texto, em qualquer conta, e nunca é cifrado. Todo o resto desta página vale igual (esforço, cobrança, `previous_response_id`, devolver o `output` na entrada).

Na Responses API, o texto vem em `content` do item `reasoning`, como partes do tipo `reasoning_text`, e não há `encrypted_content`:

```json
{
  "id": "rs_6f1c...",
  "type": "reasoning",
  "content": [{"type": "reasoning_text", "text": "O primeiro trem já andou 40 km às 8h30..."}],
  "summary": []
}
```

```python
response = client.responses.create(
    model="S5-nano",
    reasoning={"effort": "low"},
    input="Quanto é 17 × 23?",
)

for item in response.output:
    if item.type == "reasoning":
        for part in item.content:
            print("Raciocínio:", part.text)

print("Resposta:", response.output_text)
```

Na Chat Completions API, o raciocínio vem no campo `reasoning_content` da mensagem (e de cada `delta`, no streaming):

```python
completion = client.chat.completions.create(
    model="S5-nano",
    reasoning_effort="low",
    messages=[{"role": "user", "content": "Quanto é 17 × 23?"}],
)

message = completion.choices[0].message
print("Raciocínio:", message.to_dict().get("reasoning_content"))
print("Resposta:", message.content)
```

Diferenças em relação ao S5:

- Para retomar o raciocínio, devolva o item `reasoning` como veio, com o texto em `content`. Com `previous_response_id`, a Maritaca guarda o texto junto com a resposta.
- Um item `reasoning` cifrado, gerado pelo `S5`, é ignorado pelo `S5-nano`, e vice-versa.
- No streaming da Responses API, o texto do raciocínio vem completo no item `reasoning` do evento `response.output_item.done`. Não há eventos de delta com o texto do raciocínio.

## Dicas

- **Fluxos agênticos:** devolva sempre os itens `reasoning` (ou use `previous_response_id`). Sem eles o modelo recomeça o raciocínio a cada etapa e gasta mais tokens.
- **Custo e latência:** comece com `low` ou `medium` e só suba o esforço se a qualidade não bastar.
- **Instruções:** diga o objetivo e as restrições; não é preciso pedir "pense passo a passo", o modelo já faz isso.
