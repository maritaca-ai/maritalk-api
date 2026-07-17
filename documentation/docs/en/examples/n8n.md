---
id: n8n
title: n8n
---

[n8n](https://n8n.io) can use Maritaca models through the **OpenAI Chat Model**
sub-node. The configuration below was validated on n8n 2.30.7 with both a
simple chain and an agent that executes a tool.

## Prerequisites

- An n8n Cloud or self-hosted instance.
- A key created in the
  [Maritaca platform](https://plataforma.maritaca.ai/chaves-de-api).

Keep the `MARITACA_API_KEY` value outside the workflow and only store it in an
n8n credential.

## Create the credential

1. Go to **Settings** > **Credentials** > **Add Credential**.
2. Search for **OpenAI**.
3. In **API Key**, paste the value of your `MARITACA_API_KEY`.
4. Set **Base URL** to `https://chat.maritaca.ai/api`.
5. Save it with a name such as **Maritaca AI**.

## Configure OpenAI Chat Model

Add **OpenAI Chat Model** to the chain or agent's **Chat Model** slot and set:

- **Credential:** `Maritaca AI`.
- **Model:** select **ID** mode and enter `sabia-4` or
  `sabia-4-thinking`.
- **Use Responses API:** disabled.

Disabling **Use Responses API** makes the sub-node use Chat Completions, which
is the flow validated in the examples below.

## Regular call with Basic LLM Chain

Build this workflow:

```text
Manual Trigger → Basic LLM Chain
                       │
                OpenAI Chat Model
```

1. In **Basic LLM Chain**, select **Define below** for the prompt.
2. Enter `What is 25 + 27? Include 52 in the answer.`.
3. Connect the configured **OpenAI Chat Model**.
4. Execute the workflow and inspect the chain output.

## Agent with Calculator

Build this workflow:

```text
Manual Trigger → AI Agent
                    ├── OpenAI Chat Model
                    └── Calculator
```

1. In **AI Agent**, select **Define below** for the prompt.
2. Enter `Use the Calculator tool to calculate 6 times 7.`.
3. Connect **OpenAI Chat Model** to the **Chat Model** slot.
4. Add **Calculator** to the **Tool** slot.
5. Execute the workflow; the final answer should include `42`.

## HTTP Request alternative

For a direct request, configure an **HTTP Request** node:

- **Method:** `POST`.
- **URL:** `https://chat.maritaca.ai/api/chat/completions`.
- **Authentication:** `Header Auth`.
- **Header Name:** `Authorization`.
- **Header Value:** `Bearer YOUR_API_KEY`.
- **Content-Type:** `application/json`.
- **Body:**

```json
{
  "model": "sabia-4",
  "messages": [
    {
      "role": "user",
      "content": "What is 25 + 27? Include 52 in the answer."
    }
  ],
  "max_tokens": 100
}
```

To use the reasoning model, only change `model` to `sabia-4-thinking`. Do not
put the API key directly in the workflow JSON.
