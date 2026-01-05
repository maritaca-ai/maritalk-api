---
id: biblioteca
title: Biblioteca
---

# Biblioteca
Oferecemos a biblioteca Python da Maritaca para facilitar a integração com a nossa API. Recomendamos o uso da versão compatível com a OpenAI (detalhada em Compatibilidade com a OpenAI), ideal para quem já utiliza as bibliotecas da OpenAI ou busca manter compatibilidade com essa plataforma.
Para usuários que já utilizavam a versão própria da nossa biblioteca, mantemos essa alternativa disponível para garantir a continuidade dos projetos existentes. Ambas as versões compartilham as mesmas funcionalidades principais, e você pode optar pela que melhor atende ao seu fluxo de trabalho.

## Instalar a biblioteca Python da Maritaca
Com o Python instalado e opcionalmente com o ambiente virtual ativado e o pip atualizado, você pode instalar a biblioteca Maritaca. No terminal/linha de comando, execute:

```bash
pip install maritalk
```

Com o ambiente virtual ativado, você pode listar todas as bibliotecas Python instaladas nesse ambiente com o comando pip list. Abra o terminal ou prompt de comando e digite:

```bash
pip list
```
Se a instalação foi bem-sucedida, você verá algo parecido com isto:
```bash
maritalk X.X.X
```
onde X.X.X é o número da versão da biblioteca Maritaca que você instalou.


## Enviando uma solicitação para a API

Depois de configurar o Python e configurar uma chave API, você pode enviar uma solicitação à API da Maritaca usando a biblioteca Python. Para fazer isso, crie um arquivo chamado maritaca.py usando o terminal ou um IDE.
Dentro do arquivo, copie e cole um dos exemplos abaixo:

```python
import maritalk

model = maritalk.MariTalk(
    key="insira sua chave aqui. Ex: '100088...'",
    model="sabiazinho-4"  # No momento, suportamos os modelos sabia-3 e sabia-2-small
)

response = model.generate("Quanto é 25 + 27?", max_tokens=8000)
answer = response["answer"]

print(f"Resposta: {answer}")   # Deve imprimir algo como "25 + 27 é igual a 52."
```
Note que o dicionário response contém a chave usage, que informa a quantidade de tokens de entrada e saída que serão cobrados.
Para executar o código, digite python maritaca.py no terminal/linha de comando.

### Streaming
Para tarefas de geração de texto longo, como a criação de um artigo extenso ou a tradução de um documento grande, pode ser vantajoso receber a resposta em partes, à medida que o texto é gerado, em vez de esperar pelo texto completo. Isso torna a aplicação mais responsiva e eficiente, especialmente quando o texto gerado é extenso. Oferecemos duas abordagens para atender a essa necessidade: o uso de um generator e de um async_generator.

#### Generator
- Ao usar `stream=True`, o código irá retornar um `generator`. Este `generator` fornecerá as partes da resposta conforme elas são geradas pelo modelo, permitindo que você imprima ou processe os tokens à medida que são produzidos.

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
