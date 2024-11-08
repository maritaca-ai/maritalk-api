---
id: use-cases
title: Use Cases
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use Cases
## Usage Examples in Other Languages
Here are examples of how you can integrate the Maritaca API in other languages:
<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>
```javascript
const process = require('node:process');

const CHAT_API_URL = "https://chat.maritaca.ai/api/chat/inference";

if (!process.env.MARITALK_API_KEY) {
    console.error("Environment variable MARITALK_API_KEY not found!");
    process.exit(1);
}

async function sendChatRequest(message) {
    try {
        const params = {
            messages: [{ "role": "user", "content": message }],
            do_sample: true,
            max_tokens: 50,
            temperature: 0.4,
            top_p: 0.95,
            model: "sabia-3",
        };

        const response = await fetch(CHAT_API_URL, {
            headers: {
                "Authorization": `Key ${process.env.MARITALK_API_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending chat request:", error);
        throw error;
    }
}

async function main() {
    try {
        const result = await sendChatRequest('Hello, what is your name?');
        console.log("Response:", result);
    } catch (error) {
        console.error("Error in main function:", error);
    }
}

main();
```
</TabItem>
<TabItem value="C#" label="C#">
```csharp
</TabItem>
<TabItem value="C#" label="C#">
```csharp
using OpenAI;
using OpenAI.Chat;
using System.ClientModel;

namespace ChatMariTalk
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // Variables
            string key = "";  // API key
            string model = "sabia-3";
            string url = "https://chat.maritaca.ai/api";
            string projectName = "ExampleUsingMaritaca";

            // Create the API credentials
            ApiKeyCredential apiKeyCredential = new ApiKeyCredential(key);

            // Configure the client for Maritaca API
            OpenAIClientOptions openAIClientOptions = new OpenAIClientOptions
            {
                Endpoint = new Uri(url),
                OrganizationId = projectName,
                ApplicationId = projectName,
                ProjectId = projectName
            };

            // Initialize ChatClient
            ChatClient chatClient = new ChatClient(model, apiKeyCredential, openAIClientOptions);

            // Set chat options
            ChatCompletionOptions chatOptions = new ChatCompletionOptions
            {
                MaxTokens = 255,
                Temperature = 0.7f,
            };

            // List to store chat messages
            List<ChatMessage> chatMessages = new List<ChatMessage>();

            // Show welcome menu
            ShowMenu();
            do
            {
                try
                {
                    // User prompt
                    string prompt = GetUserPrompt();

                    // Exit if the user types 'exit'
                    if (prompt.ToLower() == "exit")
                        break;

                    // Create and add user message to chat
                    UserChatMessage userChat = ChatMessage.CreateUserMessage(prompt);
                    chatMessages.Add(userChat);

                    // Send message to API and receive response
                    ChatCompletion chatCompletion = await chatClient.CompleteChatAsync(chatMessages, chatOptions);

                    // Capture response from model
                    AssistantChatMessage assistant = ChatMessage.CreateAssistantMessage(chatCompletion.Content[0].Text);
                    chatMessages.Add(assistant);

                    // Display the response
                    ShowAssistantResponse(assistant);
                }
                catch (Exception e)
                {
                    DisplayError(e);
                }
            } while (true);

            ShowExitMessage();
        }

        static void ShowMenu()
        {
            Console.WriteLine(new string('-', 100));
            Console.WriteLine("\nWelcome to Maritaca Chat!\n");
            Console.WriteLine(new string('-', 100));
            Console.WriteLine("Type 'exit' to end the chat.\n");
        }

        static string GetUserPrompt()
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write($"[{DateTime.Now}] Enter your message: ");
            Console.ResetColor();
            string prompt = Console.ReadLine();
            if (string.IsNullOrEmpty(prompt))
            {
                throw new Exception("Please enter a message.");
            }
            return prompt;
        }

        static void ShowAssistantResponse(AssistantChatMessage assistant)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($"\n[{DateTime.Now}] Assistant: {assistant.Content[0].Text}\n");
            Console.ResetColor();
        }

        static void DisplayError(Exception e)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"\n[{DateTime.Now}] Error: {e.Message}\n");
            Console.ResetColor();
        }

        static void ShowExitMessage()
        {
            Console.WriteLine(new string('-', 100));
            Console.WriteLine("\nThank you for using Maritaca Chat!\n");
        }
    }
}
```
</TabItem>
</Tabs>

## Integrations
<div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', flexWrap: 'wrap' }}>
  <a href="https://docs.llamaindex.ai/en/latest/examples/llm/maritalk/" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <i className="fas fa-file-alt" style={{ fontSize: '2em', marginBottom: '10px' }}></i> 
    <h3>LlamaIndex</h3>
    <p>Maritalk on LlamaIndex.</p>
  </a>
  <a href="https://python.langchain.com/v0.2/docs/integrations/chat/maritalk/" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <i className="fas fa-link" style={{ fontSize: '2em', marginBottom: '10px' }}></i> 
    <h3>LangChain</h3>
    <p>Maritalk + RAG with LangChain.</p>
  </a>
</div>
