---
id: geracao-de-imagens
title: Geração de imagens
---

# Geração de imagens

A geração de imagens é uma [ferramenta integrada](ferramentas.md): o modelo Sabiá **cria imagens a partir de texto e edita ou combina imagens que você envia na própria requisição**. Assim como as demais ferramentas integradas, ela roda no servidor como um fluxo agêntico. O modelo decide quando gerar, escreve o prompt da imagem e devolve a resposta final junto com as imagens prontas.

Disponível nos modelos com ferramentas integradas: **`S5`**, **`S5-nano`**, **`sabia-4`** e **`sabia-4-thinking`**. As imagens saem em JPEG, 1024×1024.

## Gerando uma imagem

### Chat Completions

Ative com a flag `image_generation: true`. Com a biblioteca da OpenAI, envie a flag via `extra_body`. As imagens voltam em base64 no array `generated_files`.

```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "S5",
    "stream": false,
    "image_generation": true,
    "messages": [
      {"role": "user", "content": "Gere uma imagem de um farol no litoral catarinense ao amanhecer, estilo fotográfico."}
    ]
  }'
```

```python
import base64
from openai import OpenAI

client = OpenAI(api_key=MARITACA_API_KEY, base_url="https://chat.maritaca.ai/api")

response = client.chat.completions.create(
    model="S5",
    stream=False,
    messages=[{"role": "user", "content": "Gere uma imagem de um farol no litoral catarinense ao amanhecer, estilo fotográfico."}],
    extra_body={"image_generation": True},
)

print(response.choices[0].message.content)

for f in response.to_dict().get("generated_files", []):
    if f.get("source") == "image_generation":
        with open(f["filename"], "wb") as out:
            out.write(base64.b64decode(f["content_base64"]))
        print("salvo", f["filename"])
```

Cada imagem em `generated_files` traz `"source": "image_generation"`, o que a distingue dos arquivos produzidos pela [execução de código](ferramentas.md#arquivos-gerados):

```json
"generated_files": [
  {
    "filename": "imagem_ad0d6683.jpg",
    "mime_type": "image/jpeg",
    "size_bytes": 518583,
    "content_base64": "/9j/4AAQSkZJRg...",
    "source": "image_generation"
  }
]
```

### Responses API

Na [Responses API](responses-api.md), use a ferramenta integrada `{"type": "image_generation"}` (a mesma convenção da OpenAI) ou a flag `image_generation: true`. Cada imagem volta como um item `image_generation_call` em `output`, com a imagem em base64 no campo `result`:

```python
import base64
from openai import OpenAI

client = OpenAI(api_key=MARITACA_API_KEY, base_url="https://chat.maritaca.ai/api")

response = client.responses.create(
    model="S5",
    input="Desenhe um ícone minimalista de uma maritaca verde, fundo branco.",
    tools=[{"type": "image_generation"}],
)

print(response.output_text)

for item in response.output:
    if item.type == "image_generation_call":
        with open(f"{item.id}.{item.output_format}", "wb") as f:
            f.write(base64.b64decode(item.result))
```

```json
"output": [
  {
    "type": "image_generation_call",
    "id": "ig_3ac46cd10d954d5eab53b1ef",
    "status": "completed",
    "result": "/9j/4AAQSkZJRg...",
    "output_format": "jpeg",
    "mime_type": "image/jpeg"
  },
  {
    "type": "message",
    "role": "assistant",
    "content": [{"type": "output_text", "text": "Aqui está o ícone minimalista da maritaca verde!"}]
  }
]
```

## Editando e combinando imagens

Envie as imagens de referência na mesma mensagem, como partes `image_url` (em Chat Completions) ou `input_image` (na Responses API), por URL ou em base64, como em [Documentos e PDFs](files_in_completions_api_pt.md). O modelo pode usá-las como base para editar (mudar o estilo, trocar o fundo, ajustar elementos) ou combinar várias em uma nova imagem.

```python
import base64

with open("foto.jpg", "rb") as f:
    foto_b64 = base64.b64encode(f.read()).decode()

response = client.chat.completions.create(
    model="S5",
    stream=False,
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "Transforme esta foto em uma pintura em aquarela, mantendo a composição."},
            {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{foto_b64}"}},
        ],
    }],
    extra_body={"image_generation": True},
)
```

Na Responses API:

```python
response = client.responses.create(
    model="S5",
    tools=[{"type": "image_generation"}],
    input=[{
        "role": "user",
        "content": [
            {"type": "input_text", "text": "Coloque este produto sobre uma mesa de madeira, com luz natural."},
            {"type": "input_image", "image_url": f"data:image/jpeg;base64,{foto_b64}"},
        ],
    }],
)
```

- Formatos aceitos: **PNG e JPEG**, até 8 MB por imagem.
- Até **4 imagens de referência** por imagem gerada.
- Referências maiores que 1 megapixel são reduzidas automaticamente (mantendo a proporção) antes da geração.
- As imagens enviadas também passam pela extração de conteúdo, para que o modelo saiba o que há nelas. Essa extração é cobrada como em [Documentos e PDFs](files_in_completions_api_pt.md).

## Preços

Além dos tokens do modelo, cada imagem **entregue** é cobrada:

| Item | Preço (BRL) |
|---|---|
| Imagem gerada | R$ 0,25 por imagem |
| Imagem de referência (edição) | R$ 0,10 por imagem enviada usada na geração |

Por exemplo, gerar uma imagem só a partir de texto custa R$ 0,25. Editar uma foto custa R$ 0,35. Combinar 3 fotos em uma imagem custa R$ 0,55. O modelo pode gerar mais de uma imagem na mesma requisição se você pedir. Cada uma é cobrada.

Tentativas bloqueadas pela moderação ou que falham **não são cobradas**. As quantidades aparecem em `usage.tool_execution_details`:

```json
"tool_execution_details": {
  "web_search_calls": 0,
  "page_reads": 0,
  "data_ocean_gb_processed": 0.0,
  "code_execution_minutes": 0,
  "image_generations": 1,
  "image_generation_input_images": 1
}
```

## Moderação

Os prompts e as imagens passam por filtros de segurança. Se um pedido for bloqueado, nenhuma imagem é gerada nem cobrada, e o modelo explica na resposta que não pôde atender. Para fins de segurança e prevenção de abusos, as gerações ficam registradas e podem ser revisadas.

## Observações e limitações

- **Streaming não é suportado**: envie `stream: false`. Uma requisição em streaming com `image_generation` retorna erro `400` (`streaming_not_supported`).
- Em modelos sem ferramentas integradas (por exemplo, `sabiazinho-4` e `S5-free`), a API retorna erro `400` (`tool_not_supported_for_model`).
- Ativar `image_generation` não obriga o modelo a gerar uma imagem: ele só gera quando o pedido pede uma. Requisições sem geração não têm a cobrança de imagem.
- Você pode combinar `image_generation` com as outras [ferramentas integradas](ferramentas.md), como `web_search`, e com as suas próprias [ferramentas de função](chamada-funcao.md).
