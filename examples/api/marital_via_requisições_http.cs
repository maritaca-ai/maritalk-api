using OpenAI;
using OpenAI.Chat;
using System.ClientModel;

namespace ChatMariTalk
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
