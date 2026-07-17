---
id: n8n
title: n8n
---

O [n8n](https://n8n.io) pode usar os modelos da Maritaca por meio do sub-nó
**OpenAI Chat Model**. A configuração abaixo foi validada no n8n 2.30.7 com uma
chain simples e com um agente que executa uma ferramenta.

## Pré-requisitos

- Uma instância do n8n Cloud ou self-hosted.
- Uma chave criada na
  [plataforma da Maritaca](https://plataforma.maritaca.ai/chaves-de-api).

Mantenha o valor de `MARITACA_API_KEY` fora do workflow e salve-o somente em uma
credencial do n8n.

## Criar a credencial

1. Acesse **Settings** > **Credentials** > **Add Credential**.
2. Busque por **OpenAI**.
3. Em **API Key**, cole o valor da sua `MARITACA_API_KEY`.
4. Em **Base URL**, use `https://chat.maritaca.ai/api`.
5. Salve com um nome como **Maritaca AI**.

## Configurar o OpenAI Chat Model

Adicione **OpenAI Chat Model** ao slot **Chat Model** da chain ou do agente e
configure:

- **Credential:** `Maritaca AI`.
- **Model:** selecione o modo **ID** e informe `sabia-4` ou
  `sabia-4-thinking`.
- **Use Responses API:** desativado.

Desativar **Use Responses API** faz o sub-nó usar Chat Completions, que é o
fluxo validado nos exemplos abaixo.

## Chamada normal com Basic LLM Chain

Monte o workflow:

```text
Manual Trigger → Basic LLM Chain
                       │
                OpenAI Chat Model
```

1. Em **Basic LLM Chain**, escolha **Define below** para o prompt.
2. Use `Quanto é 25 + 27? Inclua 52 na resposta.`.
3. Conecte o **OpenAI Chat Model** configurado acima.
4. Execute o workflow e confira a saída da chain.

## Agente com Calculator

Monte o workflow:

```text
Manual Trigger → AI Agent
                    ├── OpenAI Chat Model
                    └── Calculator
```

1. Em **AI Agent**, escolha **Define below** para o prompt.
2. Use `Use a ferramenta Calculator para calcular 6 vezes 7.`.
3. Conecte o **OpenAI Chat Model** no slot **Chat Model**.
4. Adicione **Calculator** ao slot **Tool**.
5. Execute o workflow; a resposta final deve incluir `42`.

## Alternativa com HTTP Request

Para enviar uma chamada direta, configure um nó **HTTP Request**:

- **Method:** `POST`.
- **URL:** `https://chat.maritaca.ai/api/chat/completions`.
- **Authentication:** `Header Auth`.
- **Header Name:** `Authorization`.
- **Header Value:** `Bearer SUA_CHAVE_API`.
- **Content-Type:** `application/json`.
- **Body:**

```json
{
  "model": "sabia-4",
  "messages": [
    {
      "role": "user",
      "content": "Quanto é 25 + 27? Inclua 52 na resposta."
    }
  ],
  "max_tokens": 100
}
```

Para usar o modelo de raciocínio, troque apenas `model` por
`sabia-4-thinking`. Não coloque a chave diretamente no JSON do workflow.
