---
id: glossary
title: Glossary
---

# Glossary

## **Tokens**
Tokens are the fundamental units that language models use to process text. They represent sequences of characters that make up written language.
A **token** can be an entire word, part of a word, a single character, or a sequence of special characters.
For example, the word **"tokenization"** can be divided into **"token"** and **"ization"**. On average, a token corresponds to approximately 4 characters.

### Why are tokens important?

- **Processing Limitation**: The amount of text a model can process is limited by the number of tokens it can handle at once, known as the **'context window'**.
- **Cost Calculation**: Costs are calculated based on the number of tokens processed and are charged per million tokens.

---

## **Context (Context Window)**

The **context window** refers to the amount of text that a language model can take into account at once when generating a new response. It works like the capacity to remember details when telling a story. When someone explains an event that happened during the day, if they can remember many details from the beginning, they can tell the story in a complete and well-connected way. But if they only recall the last moments, the story may be incomplete or nonsensical.

Similarly, in a language model, the context window determines how many previous details it can "remember" when creating a new response. The larger this window, the more context the model has to generate a rich and accurate response. If the window is smaller, it can only consider a limited part of the information, which can affect the quality of the response.

### Importance of Context Window Size

- **Larger Context Window**: Allows the model to understand and respond to more complex and extensive prompts.
- **Smaller Context Window**: Can limit the model's ability to handle long prompts or maintain coherence in prolonged conversations.

### Limitations

- For **text generation models**, the sum of the prompt size and the generated output must not exceed the maximum length of the context window.

---

## **Temperature**

Temperature is a parameter that controls the level of randomness in the responses of a language model during text generation.

- **Higher temperatures** result in more creative and varied responses. For instance, when asking the model to continue a story, it may generate different and unexpected endings. This is useful when originality is sought, such as in fiction writing, where multiple possibilities and surprises are desired.

- **Lower temperatures**, on the other hand, produce more predictable and conservative responses. In this case, the model tends to follow the most likely and safe path, repeating common language patterns. This is ideal for tasks that require consistent and reliable responses, such as when evaluating the performance of a model in a specific scenario.

Adjusting the temperature is crucial to finding the right balance between creativity and accuracy, depending on the purpose of the task. In activities such as story creation, dialogues, or any other type of content where originality is important, properly setting the temperature can be the key to achieving the desired outcome. On the other hand, when precision and consistency are more important, a lower temperature helps ensure that responses are clear and predictable.

---

## **TTFT (Time to First Token)**

**Time to First Token (TTFT)** measures how quickly a language model begins to respond after receiving a prompt. A low TTFT indicates that the model responds quickly, which is essential for a fluid user experience, especially in chatbots and real-time systems.

### What influences TTFT?

- **Model Size**: Larger models may be slower.
- **Hardware**: More powerful computers reduce TTFT.
- **Network Conditions**: Slow internet increases TTFT.
- **Prompt Length**: Longer prompts increase TTFT.

---

## **Rate Limit**

**Rate limit** is a common practice in API services to prevent overuse and ensure the stability and equitable distribution of server resources among users. It sets a limit on the number of requests a user or system can make within a given period.

### Why is rate limit important?

- **Service Stability**: Prevents overloads that can be caused by many simultaneous requests.
- **Fair Usage**: Ensures that all users have fair access to the service, preventing one user from monopolizing resources.
- **Security**: Helps identify and mitigate potential denial of service (DoS) attacks.


### How does rate limit affect API usage?

Once the request limit is reached, subsequent calls may be rejected or result in error messages. Thus, developers need to monitor and manage their API calls to avoid exceeding the limit.

In Maritaca's API, there are three types of rate limit:
- Maximum number of input tokens (prompt), sent per minute
- Maximum number of generated tokens per minute
- Maximum number of requests per minute, regardless of prompt size or generated tokens.


### Where can I find the rate limits?

The rate limits for each model are available at https://plataforma.maritaca.ai/modelos

### What should I do if I reach the rate limit?

- **Adjust Request Frequency**: Space out API calls to stay within the allowed limit.
- **Increase the Limit**: If you need higher rate limits, please send us a message to suporte@maritaca.ai
