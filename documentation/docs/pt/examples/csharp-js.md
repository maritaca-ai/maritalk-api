---
id: csharp-js
title: C# e JavaScript
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Os exemplos abaixo usam as SDKs oficiais da OpenAI com o endpoint compatível da
Maritaca. Ambos fazem uma chamada normal e um ciclo completo de tool calling.

Defina a chave antes de executar. O modelo padrão é `sabia-4`; para usar o
modelo de raciocínio, defina `MARITACA_MODEL=sabia-4-thinking`.

```bash
export MARITACA_API_KEY="sua-chave-aqui"
export MARITACA_MODEL="sabia-4"
```

<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>

Instale a SDK e salve o exemplo como `example.mjs`:

```bash
npm install openai
node example.mjs
```

```javascript
import OpenAI from "openai";

const apiKey = process.env.MARITACA_API_KEY;
if (!apiKey) throw new Error("Defina MARITACA_API_KEY");

const model = process.env.MARITACA_MODEL ?? "sabia-4";
const client = new OpenAI({
  apiKey,
  baseURL: "https://chat.maritaca.ai/api",
});

const normal = await client.chat.completions.create({
  model,
  messages: [{ role: "user", content: "Quanto é 25 + 27? Inclua 52 na resposta." }],
});
const normalText = normal.choices[0].message.content;
console.log("Chamada normal:", normalText);

const multiplyTool = {
  type: "function",
  function: {
    name: "multiply",
    description: "Multiplica dois números inteiros.",
    parameters: {
      type: "object",
      properties: {
        a: { type: "integer" },
        b: { type: "integer" },
      },
      required: ["a", "b"],
      additionalProperties: false,
    },
  },
};

const messages = [
  { role: "user", content: "Use multiply para calcular 6 vezes 7." },
];
const toolRequest = await client.chat.completions.create({
  model,
  messages,
  tools: [multiplyTool],
  tool_choice: { type: "function", function: { name: "multiply" } },
});

const assistantMessage = toolRequest.choices[0].message;
const toolCall = assistantMessage.tool_calls?.[0];
if (!toolCall) throw new Error("O modelo não solicitou uma ferramenta");

const { a, b } = JSON.parse(toolCall.function.arguments);
messages.push(
  assistantMessage,
  { role: "tool", tool_call_id: toolCall.id, content: String(a * b) },
);

const final = await client.chat.completions.create({
  model,
  messages,
  tools: [multiplyTool],
});
console.log("Resposta com tool:", final.choices[0].message.content); // 42
```

</TabItem>
<TabItem value="C#" label="C#">

Crie um projeto .NET 8 ou mais recente, instale a SDK e substitua o conteúdo de
`Program.cs` pelo exemplo:

```bash
dotnet new console -n MaritacaExample
cd MaritacaExample
dotnet add package OpenAI
dotnet run
```

```csharp
using System.ClientModel;
using System.Text.Json;
using OpenAI;
using OpenAI.Chat;

static int Multiply(int a, int b) => a * b;

string apiKey = Environment.GetEnvironmentVariable("MARITACA_API_KEY")
    ?? throw new InvalidOperationException("MARITACA_API_KEY é obrigatória.");
string model = Environment.GetEnvironmentVariable("MARITACA_MODEL") ?? "sabia-4";

ChatClient client = new ChatClient(
    model: model,
    credential: new ApiKeyCredential(apiKey),
    options: new OpenAIClientOptions
    {
        Endpoint = new Uri("https://chat.maritaca.ai/api")
    });

ChatCompletion normal = await client.CompleteChatAsync(
    "Quanto é 25 + 27? Inclua 52 na resposta.");
string normalText = normal.Content[0].Text;
Console.WriteLine($"Chamada normal: {normalText}");

ChatTool multiplyTool = ChatTool.CreateFunctionTool(
    functionName: nameof(Multiply),
    functionDescription: "Multiplica dois números inteiros.",
    functionParameters: BinaryData.FromBytes("""
        {
          "type": "object",
          "properties": {
            "a": { "type": "integer" },
            "b": { "type": "integer" }
          },
          "required": ["a", "b"],
          "additionalProperties": false
        }
        """u8.ToArray()));

List<ChatMessage> messages =
[
    new UserChatMessage("Use Multiply para calcular 6 vezes 7.")
];
ChatCompletionOptions options = new()
{
    ToolChoice = ChatToolChoice.CreateFunctionChoice(nameof(Multiply))
};
options.Tools.Add(multiplyTool);

ChatCompletion toolRequest = await client.CompleteChatAsync(messages, options);
if (toolRequest.ToolCalls.Count == 0)
    throw new InvalidOperationException("O modelo não solicitou uma ferramenta.");

messages.Add(new AssistantChatMessage(toolRequest));
ChatToolCall toolCall = toolRequest.ToolCalls[0];
using JsonDocument arguments = JsonDocument.Parse(toolCall.FunctionArguments);
int result = Multiply(
    arguments.RootElement.GetProperty("a").GetInt32(),
    arguments.RootElement.GetProperty("b").GetInt32());
messages.Add(new ToolChatMessage(toolCall.Id, result.ToString()));

options.ToolChoice = ChatToolChoice.CreateAutoChoice();
ChatCompletion final = await client.CompleteChatAsync(messages, options);
Console.WriteLine($"Resposta com tool: {final.Content[0].Text}"); // 42
```

</TabItem>
</Tabs>

Não dependa apenas de `FinishReason` para detectar uma solicitação: verifique
se `ToolCalls` contém itens. O mesmo fluxo funciona com `sabia-4` e
`sabia-4-thinking`.
