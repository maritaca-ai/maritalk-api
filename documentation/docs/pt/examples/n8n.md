---
id: n8n
title: n8n
---

## Maritaca AI + n8n

O [n8n](https://n8n.io) é uma plataforma de automação de workflows que permite conectar diversas aplicações e serviços. Como a API da Maritaca é compatível com o formato OpenAI, você pode usar o nó **OpenAI Chat Model** do n8n para integrar os modelos Sabiá (por exemplo, Sabiá-4) nos seus workflows.

### Pré-requisitos

- Uma instância do n8n (self-hosted ou n8n Cloud)
- Uma chave de API da Maritaca ([obtenha aqui](https://chat.maritaca.ai))

### Passo 1: Criar a credencial

1. No n8n, vá em **Settings** > **Credentials** > **Add Credential**
2. Busque por **OpenAI** e selecione
3. Preencha os campos:
   - **API Key:** sua chave de API da Maritaca
   - **Base URL:** `https://chat.maritaca.ai/api`
4. Dê um nome descritivo, como **"Maritaca AI"**
5. Clique em **Save**

:::info
O botão "Test" da credencial pode mostrar um aviso, pois o n8n tenta validar usando endpoints específicos da OpenAI. Isso não afeta o funcionamento — prossiga normalmente.
:::

### Passo 2: Configurar o modelo no workflow

1. Crie um novo workflow e adicione um nó raiz — **AI Agent** (para workflows com ferramentas) ou **Basic LLM Chain** (para chamadas simples)
2. Clique no **"+"** no slot **Chat Model** do nó raiz
3. Selecione **OpenAI Chat Model**
4. Configure:
   - **Credential:** selecione a credencial "Maritaca AI" criada no Passo 1
   - **Model:** digite `sabia-4` manualmente (use o modo de expressão caso o dropdown não liste o modelo)

:::tip
Se o dropdown de modelos não carregar, clique no ícone de expressão ao lado do campo e digite o nome do modelo diretamente: `sabia-4`.
:::

### Exemplo 1: Chatbot simples

Monte o seguinte workflow:

```
Chat Trigger → Basic LLM Chain → (saída)
                     │
               OpenAI Chat Model
               (credencial: Maritaca AI)
               (modelo: sabia-4)
```

**Passos:**
1. Adicione um nó **Chat Trigger** (fornece a interface de chat para testes)
2. Adicione um nó **Basic LLM Chain** e conecte ao Chat Trigger
3. Anexe o sub-nó **OpenAI Chat Model** ao Basic LLM Chain (via slot Chat Model)
4. Selecione a credencial Maritaca AI e o modelo `sabia-4`
5. Clique em **Chat** na parte inferior do canvas para testar

### Exemplo 2: Agente com ferramentas

```
Chat Trigger → AI Agent → (saída)
                  │
            OpenAI Chat Model  +  Tool nodes  +  Memory
            (credencial: Maritaca AI)
            (modelo: sabia-4)
```

**Passos:**
1. Adicione um nó **Chat Trigger**
2. Adicione um nó **AI Agent** e conecte ao trigger
3. Anexe o sub-nó **OpenAI Chat Model** com a credencial Maritaca AI
4. Adicione **Tool** sub-nós conforme necessário (HTTP Request Tool, Calculator, Code Tool, etc.)
5. Opcionalmente, adicione um sub-nó de **Memory** (ex: Window Buffer Memory) para manter o histórico da conversa

### Exemplo 3: Chamada HTTP direta (alternativa)

Se preferir controle total sobre a requisição, use o nó **HTTP Request**:

1. Adicione um nó **HTTP Request**
2. Configure:
   - **Method:** POST
   - **URL:** `https://chat.maritaca.ai/api/chat/completions`
   - **Authentication:** Header Auth
   - **Header Name:** `Authorization`
   - **Header Value:** `Bearer SUA_CHAVE_API`
   - **Body (JSON):**

```json
{
  "model": "sabia-4",
  "messages": [
    {"role": "user", "content": "Explique o que é inteligência artificial."}
  ],
  "max_tokens": 1024
}
```

### Dicas

- **Modelos disponíveis:** `sabia-4`, `sabiazinho-4`, `sabia-3.1`, `sabia-3`, `sabiazinho-3`
- **Chamada de funções (function calling):** o Sabiá-4 suporta function calling no formato OpenAI, compatível com o nó AI Agent do n8n
- **Docker:** se o n8n roda em Docker e a API é local, use o IP da máquina host ou `host.docker.internal` ao invés de `localhost`
