---
id: n8n
title: n8n
---

## Maritaca AI + n8n

[n8n](https://n8n.io) is a workflow automation platform that connects various applications and services. Since the Maritaca API is OpenAI-compatible, you can use n8n's **OpenAI Chat Model** node to integrate Sabiá models (e.g., Sabiá-4) into your workflows.

### Prerequisites

- An n8n instance (self-hosted or n8n Cloud)
- A Maritaca API key ([get one here](https://chat.maritaca.ai))

### Step 1: Create the credential

1. In n8n, go to **Settings** > **Credentials** > **Add Credential**
2. Search for **OpenAI** and select it
3. Fill in the fields:
   - **API Key:** your Maritaca API key
   - **Base URL:** `https://chat.maritaca.ai/api`
4. Give it a descriptive name, such as **"Maritaca AI"**
5. Click **Save**

:::info
The "Test" button may show a warning, as n8n tries to validate using OpenAI-specific endpoints. This does not affect functionality — proceed normally.
:::

### Step 2: Configure the model in a workflow

1. Create a new workflow and add a root node — **AI Agent** (for workflows with tools) or **Basic LLM Chain** (for simple calls)
2. Click the **"+"** on the root node's **Chat Model** slot
3. Select **OpenAI Chat Model**
4. Configure:
   - **Credential:** select the "Maritaca AI" credential created in Step 1
   - **Model:** type `sabia-4` manually (use expression mode if the dropdown doesn't list the model)

:::tip
If the model dropdown doesn't populate, click the expression icon next to the field and type the model name directly: `sabia-4`.
:::

### Example 1: Simple chatbot

Build the following workflow:

```
Chat Trigger → Basic LLM Chain → (output)
                     │
               OpenAI Chat Model
               (credential: Maritaca AI)
               (model: sabia-4)
```

**Steps:**
1. Add a **Chat Trigger** node (provides the chat UI for testing)
2. Add a **Basic LLM Chain** node and connect it to the Chat Trigger
3. Attach the **OpenAI Chat Model** sub-node to the Basic LLM Chain (via the Chat Model slot)
4. Select the Maritaca AI credential and model `sabia-4`
5. Click **Chat** at the bottom of the canvas to test

### Example 2: Agent with tools

```
Chat Trigger → AI Agent → (output)
                  │
            OpenAI Chat Model  +  Tool nodes  +  Memory
            (credential: Maritaca AI)
            (model: sabia-4)
```

**Steps:**
1. Add a **Chat Trigger** node
2. Add an **AI Agent** node and connect it to the trigger
3. Attach the **OpenAI Chat Model** sub-node with the Maritaca AI credential
4. Add **Tool** sub-nodes as needed (HTTP Request Tool, Calculator, Code Tool, etc.)
5. Optionally add a **Memory** sub-node (e.g., Window Buffer Memory) for conversation history

### Example 3: Direct HTTP call (alternative)

For full control over the request, use the **HTTP Request** node:

1. Add an **HTTP Request** node
2. Configure:
   - **Method:** POST
   - **URL:** `https://chat.maritaca.ai/api/chat/completions`
   - **Authentication:** Header Auth
   - **Header Name:** `Authorization`
   - **Header Value:** `Bearer YOUR_API_KEY`
   - **Body (JSON):**

```json
{
  "model": "sabia-4",
  "messages": [
    {"role": "user", "content": "Explain what artificial intelligence is."}
  ],
  "max_tokens": 1024
}
```

### Tips

- **Available models:** `sabia-4`, `sabiazinho-4`, `sabia-3.1`, `sabia-3`, `sabiazinho-3`
- **Function calling:** Sabiá-4 supports OpenAI-format function calling, compatible with n8n's AI Agent node
- **Docker:** if n8n runs in Docker and the API is local, use the host machine's IP or `host.docker.internal` instead of `localhost`
