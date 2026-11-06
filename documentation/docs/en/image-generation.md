---
id: image-generation
title: Image generation
---

# Image generation

Image generation is a [built-in tool](tools.md): the Sabiá model **creates images from text and edits or combines images you send in the same request**. Like the other built-in tools, it runs on the server as an agentic flow. The model decides when to generate, writes the image prompt, and returns its final answer together with the finished images.

Available on the models with built-in tools: **`S5`**, **`sabia-4`**, and **`sabia-4-thinking`**. Images are returned as 1024×1024 JPEG.

## Generating an image

### Chat Completions

Turn it on with the `image_generation: true` flag. With the OpenAI library, send the flag via `extra_body`. Images come back base64-encoded in the `generated_files` array.

```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "S5",
    "stream": false,
    "image_generation": true,
    "messages": [
      {"role": "user", "content": "Generate a photo-style image of a lighthouse on the coast of Santa Catarina at sunrise."}
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
    messages=[{"role": "user", "content": "Generate a photo-style image of a lighthouse on the coast of Santa Catarina at sunrise."}],
    extra_body={"image_generation": True},
)

print(response.choices[0].message.content)

for f in response.to_dict().get("generated_files", []):
    if f.get("source") == "image_generation":
        with open(f["filename"], "wb") as out:
            out.write(base64.b64decode(f["content_base64"]))
        print("saved", f["filename"])
```

Each image in `generated_files` carries `"source": "image_generation"`, which tells it apart from files produced by [code execution](tools.md#generated-files):

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

In the [Responses API](responses-api.md), use the built-in tool `{"type": "image_generation"}` (the same convention as OpenAI) or the `image_generation: true` flag. Each image comes back as an `image_generation_call` item in `output`, with the base64 image in the `result` field:

```python
import base64
from openai import OpenAI

client = OpenAI(api_key=MARITACA_API_KEY, base_url="https://chat.maritaca.ai/api")

response = client.responses.create(
    model="S5",
    input="Draw a minimalist icon of a green parakeet on a white background.",
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
    "content": [{"type": "output_text", "text": "Here is the minimalist green parakeet icon!"}]
  }
]
```

## Editing and combining images

Send the reference images in the same message, as `image_url` parts (Chat Completions) or `input_image` parts (Responses API), by URL or base64, as described in [Documents & PDFs](files_in_completions_api_en.md). The model can use them as a base to edit (change the style, replace the background, adjust elements) or combine several into a new image.

```python
import base64

with open("photo.jpg", "rb") as f:
    photo_b64 = base64.b64encode(f.read()).decode()

response = client.chat.completions.create(
    model="S5",
    stream=False,
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "Turn this photo into a watercolor painting, keeping the composition."},
            {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{photo_b64}"}},
        ],
    }],
    extra_body={"image_generation": True},
)
```

In the Responses API:

```python
response = client.responses.create(
    model="S5",
    tools=[{"type": "image_generation"}],
    input=[{
        "role": "user",
        "content": [
            {"type": "input_text", "text": "Place this product on a wooden table, in natural light."},
            {"type": "input_image", "image_url": f"data:image/jpeg;base64,{photo_b64}"},
        ],
    }],
)
```

- Accepted formats: **PNG and JPEG**, up to 8 MB per image.
- Up to **4 reference images** per generated image.
- References larger than 1 megapixel are downscaled automatically (keeping the aspect ratio) before generation.
- The images you send also go through content extraction, so the model knows what is in them. That extraction is billed as described in [Documents & PDFs](files_in_completions_api_en.md).

## Pricing

On top of the model's tokens, each **delivered** image is billed:

| Item | Price (BRL) |
|---|---|
| Generated image | R$ 0.25 per image |
| Reference image (editing) | R$ 0.10 per input image used in the generation |

For example, generating an image from text alone costs R$ 0.25. Editing one photo costs R$ 0.35. Combining 3 photos into one image costs R$ 0.55. The model can generate more than one image in the same request if you ask it to. Each one is billed.

Attempts blocked by moderation or that fail are **not billed**. The quantities appear in `usage.tool_execution_details`:

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

## Moderation

Prompts and images go through safety filters. If a request is blocked, no image is generated or billed, and the model explains in its answer that it could not comply. For safety and abuse prevention, generations are logged and may be reviewed.

## Notes and limitations

- **Streaming is not supported**: send `stream: false`. A streaming request with `image_generation` returns a `400` error (`streaming_not_supported`).
- On models without built-in tools (for example, `sabiazinho-4` and `S5-free`), the API returns a `400` error (`tool_not_supported_for_model`).
- Turning on `image_generation` does not force the model to generate an image: it only generates when the request asks for one. Requests without a generation carry no image charge.
- You can combine `image_generation` with the other [built-in tools](tools.md), such as `web_search`, and with your own [function tools](function-call.md).

:::caution Data residency
Image generation is performed by a specialized partner outside Brazil, including on the BR-SP models. If your use case requires that data stay within Brazil, do not turn on `image_generation`.
:::
