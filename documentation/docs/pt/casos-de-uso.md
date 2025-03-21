---
id: casos-de-uso
title: Casos de uso
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Casos de Uso
## Exemplos de Uso em Outras Linguagens
Aqui estão exemplos de como você pode integrar a API da Maritaca em outras linguagens:
<Tabs>
<TabItem value="JavaScript" label="JavaScript" default>
```javascript
const process = require('node:process');

const CHAT_API_URL = "https://chat.maritaca.ai/api/chat/inference";

if (!process.env.MARITACA_API_KEY) {
    console.error("Environment variable MARITACA_API_KEY not found!");
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
                "Authorization": `Key ${process.env.MARITACA_API_KEY}`,
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
        const result = await sendChatRequest('Olá, qual é seu nome?');
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
using OpenAI;
using OpenAI.Chat;
using System.ClientModel;

namespace ChatMaritaca
{
    class Program
    {
        static async Task Main(string[] args)
        {
            //variables
            string key = "";
            string model = "sabia-3";
            string url = "https://chat.maritaca.ai/api";
            string nameProject = "ExemploUsandoMaritaca";

            //Create the credential using the API access key
            ApiKeyCredential apiKeyCredential = new ApiKeyCredential(key);

            //Configure the Client for the Maritaca endpoint
            OpenAIClientOptions openAIClientOptions = new OpenAIClientOptions
            {
                Endpoint = new Uri(url),
                OrganizationId = nameProject,
                ApplicationId = nameProject,
                ProjectId = nameProject
            };

            //Create the ChatClient
            ChatClient chatClient = new ChatClient(model, apiKeyCredential, openAIClientOptions);

            //Create the chat options
            ChatCompletionOptions chatOptions = new ChatCompletionOptions
            {
                MaxTokens = 255,
                Temperature = 0.7f,
            };

            //Create a list to store the chat messages
            List<ChatMessage> chatMessages = new List<ChatMessage>();

            //Show the menu
            ShowMenu();
            do
            {
                try
                {
                    //User question
                    string prompt = ShowPrompt();

                    //If the user types 'sair', the chat ends
                    if (prompt.ToLower() == "sair")
                        break;

                    //Create the user message
                    UserChatMessage userChat = ChatMessage.CreateUserMessage(prompt);
                    chatMessages.Add(userChat);

                    //Send the question to the API
                    ChatCompletion chatCompletion = await chatClient.CompleteChatAsync(chatMessages, chatOptions);

                    //Capture the response from the model
                    AssistantChatMessage assistant = ChatMessage.CreateAssistantMessage(chatCompletion.Content[0].Text);
                    chatMessages.Add(assistant);

                    //Display the model's response
                    ShowAssistant(assistant);
                }
                catch (Exception e)
                {
                    ShowError(e);
                }
            } while (true);

            ShowSair();
        }

        static void ShowMenu()
        {
            Console.WriteLine(new string('-', 100));
            Console.WriteLine();
            Console.WriteLine("Bem-vindo ao Maritaca Chat!");
            Console.WriteLine();
            Console.WriteLine(new string('-', 100));
            Console.WriteLine("Digite 'sair' para encerrar o chat.");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
        }

        static string ShowPrompt()
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write($"[{DateTime.Now}] Envie uma mensagem: ");
            Console.ResetColor();
            string prompt = Console.ReadLine();
            if (string.IsNullOrEmpty(prompt))
            {
                throw new Exception("Por favor, insira uma mensagem.");
            }
            return prompt;
        }

        static void ShowAssistant(AssistantChatMessage assistant)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine();
            Console.Write($"[{DateTime.Now}] Assistente: ");
            Console.ResetColor();
            Console.WriteLine(assistant.Content[0].Text);
            Console.WriteLine();
        }

        static void ShowError(Exception e)
        {
            Console.WriteLine();
            Console.ForegroundColor = ConsoleColor.Red;
            Console.Write($"[{DateTime.Now}] Erro: ");
            Console.ResetColor();
            Console.WriteLine(e.Message);
            Console.WriteLine();
        }

        static void ShowSair()
        {
            Console.WriteLine(new string('-', 100));
            Console.WriteLine();
            Console.WriteLine("Obrigado por usar o Maritaca Chat!");
            Console.WriteLine();
            Console.WriteLine();
        }
    }
}
```
</TabItem>
</Tabs>

## Integrações
<div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', flexWrap: 'wrap' }}>
  <a href="https://docs.llamaindex.ai/en/latest/examples/llm/maritalk/" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <i className="fas fa-file-alt" style={{ fontSize: '2em', marginBottom: '10px' }}></i> 
    <h3>LlamaIndex</h3>
    <p>Maritaca no LlamaIndex.</p>
  </a>
  <a href="https://python.langchain.com/v0.2/docs/integrations/chat/maritalk/" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <i className="fas fa-link" style={{ fontSize: '2em', marginBottom: '10px' }}></i> 
    <h3>LangChain</h3>
    <p>Maritaca + RAG com LangChain.</p>
  </a>
</div>
