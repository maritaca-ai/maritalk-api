

# MariTalk API

## Conteúdo

- [Introdução](#introdução)
- [Compatibilidade com API da Open AI](#29072024-a-api-da-maritalk-agora-é-compatível-com-a-api-da-open-ai)
- [Instalação](#instalação)  
- [Exemplo de uso](#exemplo-de-uso)
- [Exemplo de uso via requisições HTTP - Python](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisições_https.ipynb)
- [Exemplo de uso via requisições HTTP - JavaScript](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisições_https.js)
- [Exemplo MariTalk + RAG com LangChain](https://python.langchain.com/docs/integrations/chat/maritalk)
- [Exemplo Maritalk no LlamaIndex](https://docs.llamaindex.ai/en/latest/examples/llm/maritalk)
- [Documentação da API](https://chat.maritaca.ai/docs)

[MariTalk Local](https://github.com/maritaca-ai/maritalk-api/blob/main/README-Local.md)

[Chat (gratuito)](#web-chat)


# Introdução
Este repositório contém o código e a documentação explicando como usar a API da MariTalk e a versão local para deploy on-premises.
A MariTalk é uma assistente baseada em um modelo de linguagem que foi especialmente treinado para entender bem o português.

Este é um serviço pré-pago que requer a adição de créditos via cartão ou boleto bancário.

Para tanto, acesse [plataforma.maritaca.ai/recarga](https://plataforma.maritaca.ai/recarga)

Novos usuários recebem R$20 em créditos da API ao cadastrarem um cartão de crédito _ou_ fazerem a primeira recarga (cujo valor mínimo é R$5).

_O sistema de pagamento pós-pago será descontinuado em 31 de setembro de 2024._

[Consulte os preços aqui.](https://maritaca.ai/#pricing)


# (29/07/2024) A API da MariTalk agora é compatível com a API da Open AI

Isso significa que os modelos Sabiá podem ser utilizados em qualquer programa que use as bibliotecas da Open AI.

Para tanto, basta apontar o endpoint para `https://chat.maritaca.ai/api` e usar um dos modelos Sabiá.

Veja o exemplo em Python a seguir:


```bash
# Primeiro instale a biblioteca da openai, digitando este comando no terminal:
pip install openai  
```

```python
import openai

client = openai.OpenAI(
  api_key="insira sua chave aqui. Ex: '100088...'",
  base_url="https://chat.maritaca.ai/api",   # ** Esta linha de código que foi trocada **
)

messages = [
    {"role": "user", "content": "Quanto é 25 + 27?"},
]

response = client.chat.completions.create(
    model="sabia-3",   # ** Esta linha de código que foi trocada **
    messages=messages,
    temperature=0.7,
    max_tokens=512,
)
answer = response.choices[0].message.content

print(answer)  # Deve imprimir algo como "25 + 27 é 52"
```

# API legada da MariTalk (suporte até 31/12/2024)

# Instalação

Instale a biblioteca da MariTalk usando pip:
```bash
pip install maritalk
```

# Exemplo de Uso

Mostramos abaixo um exemplo simples de uso em Python. Na [pasta exemplos](https://github.com/maritaca-ai/maritalk-api/tree/main/examples/api) existem mais códigos mostrando como chamar a API.

Primeiramente, você precisa de uma chave da API, que pode ser obtida em [plataforma.maritaca.ai](https://plataforma.maritaca.ai/chaves-de-api) -> "Criar nova chave".

```python
import maritalk

model = maritalk.MariTalk(
    key="insira sua chave aqui. Ex: '100088...'",
    model="sabia-3"  # No momento, suportamos os modelos sabia-3, sabia-2-medium e sabia-2-small
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
Para saber de antemão o quanto suas requisições irão custar, use a função `count_tokens` para saber o número de tokens em um dado prompt.

Exemplo de uso:
```python
from maritalk import count_tokens

prompt = "Com quantos paus se faz uma canoa?"

total_tokens = count_tokens(prompt, model="sabia-3")

print(f'O prompt "{prompt}" contém {total_tokens} tokens.')
```


# Web Chat

Teste a MariTalk Large via interface web em:
[chat.maritaca.ai](https://chat.maritaca.ai/)

<img src="https://raw.githubusercontent.com/maritaca-ai/maritalk-api/main/.github/imgs/web-interface.png" width="600">

# Citação

Para referenciar os modelos da família [Sabiá-2](https://www.maritaca.ai/sabia-2), por favor, cite nosso [relatório técnico](https://arxiv.org/abs/2403.09887).

```bibtext
@article{maritaca2024sabia2,
  title={Sabi{\'a}-2: A New Generation of Portuguese Large Language Models},
  author={Sales Almeida, Thales and Abonizio, Hugo and Nogueira, Rodrigo and Pires, Ramon},
  year={2024}
}
```
