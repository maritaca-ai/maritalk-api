### Conteúdo

**MariTalk API**
- [Introdução](#introdução)  
- [Instalação](#instalação)  
- [Exemplo de uso](#exemplo-de-uso)
- [Exemplo de uso via requisições HTTP - Python](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisições_https.ipynb)
- [Exemplo de uso via requisições HTTP - JavaScript](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisições_https.js)
- [Exemplo MariTalk + RAG com LangChain](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_langchain.ipynb)
- [Exemplo Maritalk no LlamaIndex](https://github.com/run-llama/llama_index/blob/main/docs/examples/llm/maritalk.ipynb)
- [Documentação Swagger](https://chat.maritaca.ai/docs)

**MariTalk Local**
  - [Executando localmente](#modo-local)
  - [Exemplo Google Colab Pro](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/colab-pro.ipynb)
  - [Em GPUs da Oracle Cloud (OCI)](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/oracle-cloud.md)
  - [Em GPUs da Google Cloud (GCP)](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/google-cloud.md)

[Chat (gratuito)](#web-chat)

# Introdução
Este repositório contém o código e a documentação explicando como usar a API da MariTalk e a versão local para deploy on-premises.
A MariTalk é uma assistente baseada em um modelo de linguagem que foi especialmente treinado para entender bem o português.
Ela é capaz de seguir instruções de maneira zero-shot, assim como o ChatGPT.

Este é um serviço pago que requer a validação de um meio de pagamento, como um cartão de crédito. Para validar, acesse [chat.maritaca.ai](https://chat.maritaca.ai/) -> "Meu Plano" -> "Validar forma de pagamento".

A cobrança é feita por tokens, sendo o mesmo valor cobrado por tokens de entrada (i.e., prompt) e saída (i.e., gerados pelo modelo).

Novos assinantes recebem R$20 em créditos da API.

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
    model="maritalk"  # No momento, "maritalk" aponta para "maritalk-large-2024-01-08"
)

response = model.generate("Quanto é 25 + 27?")
answer = response["answer"]

print(f"Resposta: {answer}")   # Deve imprimir algo como "25 + 27 é igual a 52."
```

Atualmente apenas suportamos o modelo "maritalk-large-2024-01-08". Mais modelos serão suportados em breve.

Note que o dicionário `response` contém a chave `usage`, que informa a quantidade de tokens de entrada e saída que serão cobrados.

## Modo chat

Você pode definir uma conversa especificando uma lista de dicionários, sendo que cada dicionário precisar ter duas chaves: `content` e `role`.

Atualmente, a API da MariTalk suporta dois valores para `role`: "user" para mensagens do usuário, e "assistant" para mensagens do assistente.

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

# Modo local

Além da API da Maritaca AI, é possível executar a MariTalk localmente em duas versões, small e large.
A tabela abaixo compara essas duas versões e apresenta algumas comparações com os modelos da OpenAI.

| Modelo | GPU RAM (min)  | Max tokens | Pontuação média (14 Datasets)[^1] | Link para Download |
|--|--|--|--|--|
| MariTalk Local Small v1.0| 6GB | 8.000 | 65,4 | [Link](https://chat.maritaca.ai/checkout/maritalk-small) |
| MariTalk Local Large v1.0| 24GB | 8.000 | 73,0 | Lançamento em breve |
| GPT-3.5-turbo | - | 16k | 67,0 | - |
| GPT-4-turbo | - | 132k | 80,6 | - |

O executável roda em máquinas Linux 64-bit com uma ou mais GPUs Nvidia. Atualmente, a MariTalk local roda apenas em GPUs da arquitetura Ampere (A100, A6000 e A10).

[^1]: Datasets em Português do [Poeta benchmark](https://arxiv.org/abs/2304.07880).

## Executando em Python

Uma vez obtida uma chave de licença usando um dos links acima, é possível fazer o download, inicializar e executar a MariTalk local utilizando a biblioteca em Python, conforme exemplo abaixo.

```python
import maritalk

# Criando uma instância do cliente MariTalkLocal
client = maritalk.MariTalkLocal()

# Iniciando o servidor com uma chave de licença especificada. O executável será baixado em ~/bin/maritalk
client.start_server(license='000000-00000-00000-00000')

# Verificando o status do servidor
status = client.status()
print(status)  # {'status': 'idle'}

# Gerando uma resposta para classificar resenhas de filmes
response = client.generate("""Classifique a resenha de filme como "positiva" ou "negativa".

Resenha: Gostei muito do filme, é o melhor do ano!
Classe: positiva

Resenha: O filme deixa muito a desejar.
Classe: negativa

Resenha: Foi fantástico, valeu o ingresso..
Classe:""", max_tokens=2, do_sample=False)
print(response)  # {'output': 'positiva', 'queue_time': 0, 'prompt_time': 158, 'generation_time': 9}

# Preparando uma série de mensagens para uma interação de chat
messages = [
    {"role": "user", "content": "sugira três nomes para a minha cachorra"},
    {"role": "assistant", "content": "nina, bela e luna."},
    {"role": "user", "content": "e para o meu peixe?"},
]

# Gerando a resposta do chat
chat_response = client.generate(messages)
print(chat_response)  # {'output': 'nani, bento e leo.', 'queue_time': 0, 'prompt_time': 185, 'generation_time': 127}
```

O retorno das chamadas contém o texto gerado e os tempos de espera, de execução do prompt e da geração do texto para fins de debug do usuário.


## Executando o binário diretamente

Também é possivel executar o servidor diretamente no terminal, sem o wrapper em python.

#### Download
```bash
wget -O maritalk <link do binário recebido no email> 
```

#### Dependências

As principais dependências são as bibliotecas CUDA para comunicação com a GPU e de SSL. Para instalar as bibliotecas da Nvidia compatíveis com seu driver, é recomendado instalar o CUDA Toolkit na versão 11 ou 12. Exemplo: `apt install cuda-toolkit-12`. Atualmente suportamos as versões de CUDA 11 e 12 e Ubuntu versões 20 e 22. Caso queria sobrescrever a detecção automática das versões locais na hora do download do binário compatível, utilize o argumento `cuda_version` ou `ssl_version`, exemplo: `client.start_server('00000-00000-00000-00000', cuda_version=12)`.

Também é possível executar a MariTalk em um container Docker utilizando as imagens da Nvidia com as dependências necessárias já instaladas. Por exemplo, a imagem `nvidia/cuda:11.8.0-devel-ubuntu22.04` pode ser utilizada para executar o binário compatível com Ubuntu 22 e CUDA 11.

#### Execução

```bash
$ ./maritalk [OPTIONS] --license <LICENSE>
```

`--license <LICENSE>`: Sua chave de licença.

`-p, --port <PORT>`: Porta HTTP para escutar. [padrão: 9000]

`-h, --help`: Mostra uma mensagem de ajuda com a descrição dos argumentos disponíveis.

`-V, --version`: Mostra a versão do executável.

#### Modo interativo

Também é possível utilizar a MariTalk Local no próprio terminal sem precisar fazer requisções à API através do modo interativo:

```bash
$ ./maritalk [OPTIONS] --license <LICENSE> --interactive
(...)
>> olá
MariTalk: Olá! Como posso ajudar você hoje?
>> crie uma lista de compras para uma festa de aniversário
MariTalk: Aqui está uma lista de itens que você pode precisar para uma festa de aniversário:

1. Doces: cupcakes, brownies, bolos, etc
2. Bebidas: água, refrigerante, cerveja, suco, etc
3. Decorações: balões, confetes, fitas, etc
4. Lembrancinhas: chaveiros, sacolas, canetas, etc
5. Lanternas: para decorar o ambiente
6. Mesa: guardanapos, copos, talheres, pratos
7. Música: CD ou MP3 player com música, alto-falante
8. Tendas: para proteger da chuva ou do sol
9. Mesas e cadeiras: para os convidados se sentarem
10. Utensílios de cozinha: panelas, talheres, copos, pratos, etc
11. Acessórios: guarda-sol, guarda-chuva, toalhas, etc
12. Lanterna: para levar para caminhar

Lembre-se de sempre incluir produtos de qualidade e que sejam suficientes para atender a todos os convidados.
```

# Aspectos Técnicos

### Comprimento máximo de sequência
Os modelos atuais têm um limite de sequência máxima de 8.000 tokens, o que corresponde a cerca de 4.000 palavras em português.
Isso implica que a contagem total de tokens, incluindo tanto os tokens de entrada (ou seja, o prompt fornecido) quanto os tokens de saída (ou seja, os gerados pelo modelo), não deve exceder 8.000.
Por exemplo, se o prompt contém 6.000 tokens, o valor máximo para o parâmetro `max_tokens` (isto é, a quantidade de tokens a serem gerados pelo modelo) deve ser de até 2.000 tokens.

### Capacidade de Processamento
Leva cerca de 1 a 2 segundos para gerar o primeiro token, dado uma sequência de 1000 tokens como entrada.
Após isso, novos tokens são gerados a uma taxa de 10 a 15 tokens/seg.

# Web Chat

Teste a MariTalk Large via interface web em:
[chat.maritaca.ai](https://chat.maritaca.ai/)

<img src="https://raw.githubusercontent.com/maritaca-ai/maritalk-api/main/.github/imgs/web-interface.png" width="600">
