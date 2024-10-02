---
id: casos-de-uso
title: Casos de Uso
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Casos de Uso
### Streaming
Para tarefas de geração de texto longo, como a criação de um artigo extenso ou a tradução de um documento grande, pode ser vantajoso receber a resposta em partes, à medida que o texto é gerado, em vez de esperar pelo texto completo. Isso torna a aplicação mais responsiva e eficiente, especialmente quando o texto gerado é extenso. Oferecemos duas abordagens para atender a essa necessidade: o uso de um generator e de um async_generator.

#### Generator
- Ao use `stream=True`, o código irá retornar um `generator`. Este `generator` fornecerá as partes da resposta conforme elas são geradas pelo modelo, permitindo que você imprima ou processe os tokens à medida que são produzidos.

```python
for response in model.generate(
    messages,
    do_sample=True,
    max_tokens=200,
    temperature=0.7,
    top_p=0.95,
    stream=True,
    num_tokens_per_message=4
):
    print(response)
```

#### AsyncGenerator
Ao utilizar `stream=True` em conjunto com `return_async_generator=True`, o código irá retornar um `AsyncGenerator`. Este tipo de gerador é projetado para ser consumido de forma assíncrona, o que significa que você pode executar o código que consome o `AsyncGenerator` de maneira concorrente com outras tarefas, melhorando a eficiência do seu processamento.

```python
import asyncio

async_generator = model.generate(
    messages,
    do_sample=True,
    max_tokens=200,
    temperature=0.7,
    top_p=0.95,
    stream=True,
    return_async_generator=True,
    num_tokens_per_message=4
)

async def consume_generator():
    async for response in async_generator:
        print(response)
                # Seu código aqui...

asyncio.run(consume_generator)
```

## Modo chat

Você pode definir uma conversa especificando uma lista de dicionários, sendo que cada dicionário precisar ter duas chaves: `content` e `role`.

Atualmente, a API da Maritaca suporta três valores para `role`: "system" para mensagem de instrução do chatbot, "user" para mensagens do usuário, e "assistant" para mensagens do assistente.

Mostramos um exemplo de conversa abaixo:
```bash
messages = [
    {"role": "user", "content": "sugira três nomes para a minha cachorra"},
    {"role": "assistant", "content": "nina, bela e luna."},
    {"role": "user", "content": "e para o meu peixe?"},
]

answer = model.generate(
    messages,
    do_sample=True,
    max_tokens=200,
    temperature=0.7,
    top_p=0.95)["answer"]

print(f"Resposta: {answer}")   # Deve imprimir algo como "nemo, dory e neptuno."
```

## Exemplos few-shot

Embora o Sabiá seja capaz de responder a instruções sem nenhum exemplo de demonstração, fornecer alguns exemplos da tarefa pode melhorar significativamente a qualidade de suas respostas.

Abaixo mostramos como isso é feito para uma tarefa simples de análise de sentimento, i.e., classificar se uma resenha de filme é positiva ou negativa.
Neste caso, passaremos dois exemplos few-shot, um positivo e outro negativo, e um terceiro exemplo, para o qual o Sabiá efetivamente fará a predição.
```python
prompt = """Classifique a resenha de filme como "positiva" ou "negativa".

Resenha: Gostei muito do filme, é o melhor do ano!
Classe: positiva

Resenha: O filme deixa muito a desejar.
Classe: negativa

Resenha: Apesar de longo, valeu o ingresso..
Classe:"""

answer = model.generate(
    prompt,
    chat_mode=False,
    do_sample=False,
    max_tokens=20,
    stopping_tokens=["\n"]
)["answer"]

print(f"Resposta: {answer.strip()}")  # Deve imprimir "positiva"
```

Note que usamos `chat_mode=False`, pois melhora a qualidade das respostas quando usando exemplos few-shot.

O argumento `stopping_tokens=["\n"]` é usado para interromper a geração quando o token "\n" é gerado. Isso é necessário porque, quando não estamos no modo chat, o modelo pode não saber quando interromper a geração.

Para tarefas com apenas uma resposta correta, como no exemplo acima, é recomendado usar `do_sample=False`. Isso garante que a mesma resposta seja gerada dado um prompt específico.

Para tarefas de geração de textos diversos ou longos, é recomendado usar `do_sample=True` e `temperature=0.7`. Quanto maior a temperatura, mais diversos serão os textos gerados, mas há maior chance de o modelo "alucinar" e gerar textos sem sentido. Quanto menor a temperatura, a resposta é mais conservadora, mas corre o risco de gerar textos repetidos.

## Exemplos de Uso em Outras Linguagens
Aqui estão exemplos de como você pode integrar a API da Maritaca em outras linguagens:
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
```
</TabItem>
</Tabs>

## Integrações
<div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', flexWrap: 'wrap' }}>
  <a href="https://docs.llamaindex.ai/en/latest/examples/llm/maritalk/" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <i className="fas fa-file-alt" style={{ fontSize: '2em', marginBottom: '10px' }}></i> 
    <h3>LlamaIndex</h3>
    <p>Maritalk no LlamaIndex.</p>
  </a>
  <a href="https://python.langchain.com/v0.2/docs/integrations/chat/maritalk/" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <i className="fas fa-link" style={{ fontSize: '2em', marginBottom: '10px' }}></i> 
    <h3>LangChain</h3>
    <p>MariTalk + RAG com LangChain.</p>
  </a>
</div>
