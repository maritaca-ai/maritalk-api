---
id: csharp-js
title: C# and JavaScript
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The examples below use the official OpenAI SDKs with Maritaca's compatible
endpoint. Both make a regular call and complete a full tool-calling cycle.

Set the API key before running the examples. The default model is `sabia-4`; set
`MARITACA_MODEL=sabia-4-thinking` to use the reasoning model.

```bash
export MARITACA_API_KEY="your-key-here"
export MARITACA_MODEL="sabia-4"
```

<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>

Install the SDK and save the example as `example.mjs`:

```bash
npm install openai
node example.mjs
```

```javascript
import OpenAI from "openai";

const apiKey = process.env.MARITACA_API_KEY;
if (!apiKey) throw new Error("Set MARITACA_API_KEY");

const model = process.env.MARITACA_MODEL ?? "sabia-4";
const client = new OpenAI({
  apiKey,
  baseURL: "https://chat.maritaca.ai/api",
});

const normal = await client.chat.completions.create({
  model,
  messages: [{ role: "user", content: "What is 25 + 27? Include 52 in the answer." }],
});
const normalText = normal.choices[0].message.content;
console.log("Regular call:", normalText);

const multiplyTool = {
  type: "function",
  function: {
    name: "multiply",
    description: "Multiply two integers.",
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
  { role: "user", content: "Use multiply to calculate 6 times 7." },
];
const toolRequest = await client.chat.completions.create({
  model,
  messages,
  tools: [multiplyTool],
  tool_choice: { type: "function", function: { name: "multiply" } },
});

const assistantMessage = toolRequest.choices[0].message;
const toolCall = assistantMessage.tool_calls?.[0];
if (!toolCall) throw new Error("The model did not request a tool");

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
console.log("Tool response:", final.choices[0].message.content); // 42
```

</TabItem>
<TabItem value="C#" label="C#">

Create a .NET 8 or newer project, install the SDK, and replace `Program.cs` with
the example:

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
    ?? throw new InvalidOperationException("MARITACA_API_KEY is required.");
string model = Environment.GetEnvironmentVariable("MARITACA_MODEL") ?? "sabia-4";

ChatClient client = new ChatClient(
    model: model,
    credential: new ApiKeyCredential(apiKey),
    options: new OpenAIClientOptions
    {
        Endpoint = new Uri("https://chat.maritaca.ai/api")
    });

ChatCompletion normal = await client.CompleteChatAsync(
    "What is 25 + 27? Include 52 in the answer.");
string normalText = normal.Content[0].Text;
Console.WriteLine($"Regular call: {normalText}");

ChatTool multiplyTool = ChatTool.CreateFunctionTool(
    functionName: nameof(Multiply),
    functionDescription: "Multiply two integers.",
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
    new UserChatMessage("Use Multiply to calculate 6 times 7.")
];
ChatCompletionOptions options = new()
{
    ToolChoice = ChatToolChoice.CreateFunctionChoice(nameof(Multiply))
};
options.Tools.Add(multiplyTool);

ChatCompletion toolRequest = await client.CompleteChatAsync(messages, options);
if (toolRequest.ToolCalls.Count == 0)
    throw new InvalidOperationException("The model did not request a tool.");

messages.Add(new AssistantChatMessage(toolRequest));
ChatToolCall toolCall = toolRequest.ToolCalls[0];
using JsonDocument arguments = JsonDocument.Parse(toolCall.FunctionArguments);
int result = Multiply(
    arguments.RootElement.GetProperty("a").GetInt32(),
    arguments.RootElement.GetProperty("b").GetInt32());
messages.Add(new ToolChatMessage(toolCall.Id, result.ToString()));

options.ToolChoice = ChatToolChoice.CreateAutoChoice();
ChatCompletion final = await client.CompleteChatAsync(messages, options);
Console.WriteLine($"Tool response: {final.Content[0].Text}"); // 42
```

</TabItem>
</Tabs>

Do not rely on `FinishReason` alone to detect a tool request: check whether
`ToolCalls` contains items. The same flow works with `sabia-4` and
`sabia-4-thinking`.
