# MariTalk API

## Conteúdo

- [Introdução](#introdução)  
- [Instalação](#instalação)  
- [Exemplo de uso](#exemplo-de-uso)
- [Exemplo de uso via requisições HTTP - Python](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisições_https.ipynb)
- [Exemplo de uso via requisições HTTP - JavaScript](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisições_https.js)
- [Exemplo MariTalk + RAG com LangChain](https://python.langchain.com/docs/integrations/chat/maritalk)
- [Exemplo Maritalk no LlamaIndex](https://github.com/run-llama/llama_index/blob/main/docs/examples/llm/maritalk.ipynb)
- [Documentação Swagger](https://chat.maritaca.ai/docs)

[MariTalk local](https://github.com/maritaca-ai/maritalk-api/blob/main/README-Local.md)

[Chat (gratuito)](#web-chat)

# Introdução
Este repositório contém o código e a documentação explicando como usar a API da MariTalk e a versão local para deploy on-premises.
A MariTalk é uma assistente baseada em um modelo de linguagem que foi especialmente treinado para entender bem o português.
Ela é capaz de seguir instruções de maneira zero-shot, assim como o ChatGPT.

Este é um serviço pago que requer a validação de um meio de pagamento, como um cartão de crédito. Para validar, acesse [chat.maritaca.ai](https://chat.maritaca.ai/) -> "Meu Plano" -> "Validar forma de pagamento".

[Consulte os preço aqui.](https://maritaca.ai/#pricing)

Após validar uma forma de pagamento, você receberá R$20 em créditos da API.

# Instalação

Instale a biblioteca da MariTalk usando pip:
```bash
pip install maritalk
```

# Exemplo de Uso

Mostramos abaixo um exemplo simples de uso em Python. Na [pasta exemplos](https://github.com/maritaca-ai/maritalk-api/tree/main/examples/api) existem mais códigos mostrando como chamar a API.

Primeiramente, você precisa de uma chave da API, que pode ser obtida em [chat.maritaca.ai](https://chat.maritaca.ai/) -> "Chaves da API" -> "Crie uma chave".

```python
import maritalk

model = maritalk.MariTalk(
    key="insira sua chave aqui. Ex: '100088...'",
    model="sabia-2-medium"  # No momento, suportamos os modelos sabia-2-medium e sabia-2-small
)

response = model.generate("Quanto é 25 + 27?")
answer = response["answer"]

print(f"Resposta: {answer}")   # Deve imprimir algo como "25 + 27 é igual a 52."
```

Note que o dicionário `response` contém a chave `usage`, que informa a quantidade de tokens de entrada e saída que serão cobrados.

### Streaming
Para tarefas de geração de texto longo, como a criação de um artigo extenso ou a tradução de um documento grande, pode ser vantajoso receber a resposta em partes, à medida que o texto é gerado, em vez de esperar pelo texto completo. Isso tornar a aplicação mais responsiva e eficiente, especialmente quando o texto gerado é extenso. Oferecemos duas abordagens para atender a essa necessidade: o uso de um generator e de um async_generator.

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

Atualmente, a API da MariTalk suporta três valores para `role`: "system" para mensagem de instrução do chatbot, "user" para mensagens do usuário, e "assistant" para mensagens do assistente.

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

Embora a MariTalk seja capaz de responder a instruções sem nenhum exemplo de demonstração, fornecer alguns exemplos da tarefa pode melhorar significativamente a qualidade de suas respostas.

Abaixo mostramos como isso é feito para uma tarefa simples de análise de sentimento, i.e., classificar se uma resenha de filme é positiva ou negativa.
Neste caso, passaremos dois exemplos few-shot, um positivo e outro negativo, e um terceiro exemplo, para o qual a MariTalk efetivamente fará a predição.

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

## Como saber o número de tokens que serão cobrados?
Para saber de antemão o quanto suas requisições irão custar, use os tokenizadores dos modelos MariTalk, disponíveis na HuggingFace, para saber o número de tokens em um dado prompt.

Exemplo de uso:
```python
import transformers
tokenizer = transformers.AutoTokenizer.from_pretrained("maritaca-ai/sabia-2-tokenizer-medium")

prompt = "Com quantos paus se faz uma canoa?"

tokens = tokenizer.encode(prompt)

print(f'O prompt "{prompt}" contém {len(tokens)} tokens.')
```

Note que os tokenizadores da Sabiá-2 Small e Medium são diferentes.

# Aspectos Técnicos

### Comprimento máximo de sequência

Os modelos atuais têm um limite de sequência máxima de 8.000 tokens, o que corresponde a cerca de 4.000 palavras em português.
Isso implica que a contagem total de tokens, incluindo tanto os tokens de entrada (ou seja, o prompt fornecido) quanto os tokens de saída (ou seja, os gerados pelo modelo), não deve exceder 8.000.

Por exemplo, se o prompt contém 6.000 tokens, o valor máximo para o parâmetro `max_tokens` (isto é, a quantidade de tokens a serem gerados pelo modelo) deve ser de até 2.000 tokens.

# Web Chat

Teste a MariTalk Large via interface web em:
[chat.maritaca.ai](https://chat.maritaca.ai/)

<img src="https://raw.githubusercontent.com/maritaca-ai/maritalk-api/main/.github/imgs/web-interface.png" width="600">
