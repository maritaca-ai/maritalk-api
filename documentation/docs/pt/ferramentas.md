---
id: ferramentas
title: Ferramentas integradas
---

# Ferramentas integradas

As ferramentas integradas permitem que os modelos Sabiá **busquem na web, executem código e consultem bases de dados oficiais brasileiras no lado do servidor**, sem que você precise implementar ou hospedar nada. Diferentemente da [chamada de funções](chamada-funcao.md) — em que o modelo delega de volta para o *seu* código — as ferramentas integradas rodam dentro da infraestrutura da Maritaca como um fluxo agêntico: o modelo decide quais ferramentas chamar, as chama em múltiplos passos e retorna apenas a resposta final. O raciocínio e as chamadas de ferramenta intermediários ficam internos.

A disponibilidade varia por ferramenta: a **Busca na web** funciona em todos os modelos Sabiá, enquanto a **Execução de código** e o **Data Ocean** estão disponíveis nos modelos **`sabia-4`** e **`sabia-4-thinking`**.

## Ferramentas disponíveis

| Ferramenta | Flag | Modelos | O que faz |
|---|---|---|---|
| **Busca na web** | `web_search` | Todos os modelos Sabiá | Pesquisa na web e lê páginas para responder com informações atualizadas e fontes. |
| **Execução de código** | `code_execution` | `sabia-4` e `sabia-4-thinking` | Executa Python/Bash em um sandbox para calcular, analisar dados e gerar arquivos (gráficos, documentos). |
| **Data Ocean** | `data_ocean` | `sabia-4` e `sabia-4-thinking` | Consulta dezenas de bases de dados oficiais brasileiras — população, empresas, saúde, clima, segurança, economia, eleições e mais — para responder com números e fontes reais. |

:::info O Data Ocean liga as outras ferramentas automaticamente
Ao ativar `data_ocean`, a **busca na web** (`web_search`) e a **execução de código** (`code_execution`) também são ativadas automaticamente. As respostas do Data Ocean costumam cruzar dados oficiais com busca na web e cálculos. Como consequência, `data_ocean: true` pode gerar cobranças de **Data Ocean + busca na web + execução de código** na mesma requisição (veja [Preços](precos.md#ferramentas-integradas)).
:::

## Ativando as ferramentas

As ferramentas integradas exigem **`stream: false`** (o fluxo agêntico retorna apenas a resposta final) e um modelo compatível (veja a tabela acima). Elas vêm **desligadas por padrão** — você as ativa por requisição.

### Chat Completions

Ative uma ferramenta definindo a flag booleana correspondente no corpo da requisição. Com a biblioteca da OpenAI, envie as flags via `extra_body`.

```bash
curl https://chat.maritaca.ai/api/chat/completions \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4-thinking",
    "stream": false,
    "data_ocean": true,
    "messages": [
      {"role": "user", "content": "Quantos habitantes tem Campinas segundo o Censo 2022?"}
    ]
  }'
```

```python
from openai import OpenAI

client = OpenAI(api_key=MARITACA_API_KEY, base_url="https://chat.maritaca.ai/api")

response = client.chat.completions.create(
    model="sabia-4-thinking",
    stream=False,
    messages=[{"role": "user", "content": "Pesquise na web a cotação atual do dólar e cite a fonte."}],
    extra_body={"web_search": True},
)
print(response.choices[0].message.content)
```

### Responses API

Na [Responses API](responses-api.md) você pode ativar as ferramentas da mesma forma (pelas flags), **ou** pela convenção de ferramentas integradas da OpenAI, no array `tools`:

```bash
curl https://chat.maritaca.ai/api/v1/responses \
  -H "Authorization: Bearer $MARITACA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "sabia-4-thinking",
    "input": "Gere um gráfico de barras (3, 7, 2, 5) com matplotlib e mostre para mim.",
    "tools": [{"type": "code_interpreter"}]
  }'
```

A mesma chamada com a biblioteca da OpenAI. Os arquivos gerados voltam como
itens `code_execution_artifact` em `response.output` — decodifique o
`content_base64` para salvá-los:

```python
import base64
from openai import OpenAI

client = OpenAI(api_key=MARITACA_API_KEY, base_url="https://chat.maritaca.ai/api")

response = client.responses.create(
    model="sabia-4-thinking",
    input="Gere um gráfico de barras (3, 7, 2, 5) com matplotlib e mostre para mim.",
    tools=[{"type": "code_interpreter"}],  # ou extra_body={"code_execution": True}
)

print(response.output_text)

for item in response.output:
    if item.type == "code_execution_artifact":
        with open(item.filename, "wb") as f:
            f.write(base64.b64decode(item.content_base64))
        print("salvo", item.filename)
```

Os tipos de ferramenta integrada são mapeados para as flags da seguinte forma:

| Entrada em `tools` | Ativa |
|---|---|
| `{"type": "web_search"}` | `web_search` |
| `{"type": "code_interpreter"}` | `code_execution` |
| `{"type": "data_ocean"}` | `data_ocean` |

Você pode combinar ferramentas integradas com as suas próprias [ferramentas de função](chamada-funcao.md) na mesma requisição.

## O que você recebe de volta

### Medição de uso

Toda resposta informa quantas execuções de ferramenta ocorreram, em `usage.tool_execution_details`:

```json
"usage": {
  "prompt_tokens": 20,
  "completion_tokens": 139,
  "total_tokens": 159,
  "tool_execution_details": {
    "web_search_calls": 0,
    "page_reads": 0,
    "data_ocean_gb_processed": 0.000161,
    "code_execution_minutes": 0
  }
}
```

Esse campo só aparece quando ao menos uma ferramenta integrada foi executada. Na Responses API ele aparece sob o mesmo objeto `usage`.

### Arquivos gerados

Quando a execução de código produz um arquivo (um gráfico ou um documento editável), ele é retornado com os bytes do arquivo codificados em base64.

**Chat Completions** — em um array `generated_files` de nível superior:

```json
"generated_files": [
  {
    "filename": "grafico_barras.png",
    "mime_type": "image/png",
    "size_bytes": 26728,
    "content_base64": "iVBORw0KGgo..."
  }
]
```

**Responses API** — como itens `code_execution_artifact` no array `output`:

```json
"output": [
  {
    "type": "code_execution_artifact",
    "id": "cea_...",
    "status": "completed",
    "filename": "grafico_barras.png",
    "mime_type": "image/png",
    "size_bytes": 26728,
    "content_base64": "iVBORw0KGgo..."
  },
  {
    "type": "message",
    "role": "assistant",
    "content": [{"type": "output_text", "text": "Aqui está o gráfico..."}]
  }
]
```

Verifique o `mime_type` para distinguir imagens de documentos. Decodifique o `content_base64` para obter o arquivo.

## Preços

As execuções de ferramentas integradas são cobradas por uso, além dos custos normais de tokens, e reportadas em `usage.tool_execution_details`. Os valores estão na página de [Preços](precos.md#ferramentas-integradas).

## Observações e limitações

- **Streaming não é suportado** com ferramentas integradas — envie `stream: false`. Uma requisição em streaming que ative uma ferramenta retorna um erro `400`.
- **A disponibilidade depende da ferramenta**: a Busca na web (`web_search`) funciona em todos os modelos Sabiá; a Execução de código (`code_execution`) e o Data Ocean (`data_ocean`) funcionam nos modelos `sabia-4` e `sabia-4-thinking`. Em modelos incompatíveis, a API retorna erro 400.
- O fluxo agêntico é **interno**: o raciocínio e as chamadas de ferramenta intermediários não são expostos — apenas a mensagem final do assistente (mais eventuais arquivos gerados) é retornada.
