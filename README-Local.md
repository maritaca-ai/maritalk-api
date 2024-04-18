
# MariTalk Local

## Conteúdo

  - [Introdução](#introduçãoo)
  - [Executando em Python](#executando-em-python)
  - [Executando o binário diretamente](#executando-o-binário-diretamente)
  - [Exemplo Google Colab Pro](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/colab-pro.ipynb)
  - [Em GPUs da Oracle Cloud (OCI)](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/oracle-cloud.md)
  - [Em GPUs da Google Cloud (GCP)](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/google-cloud.md)


## Introdução

Além da API da Maritaca AI, é possível executar a MariTalk localmente em duas versões, small e large.

[Para fazer download dos modelos e obter uma licença, consulte esta seção](https://maritaca.ai/#maritalk-local)


O executável funciona em máquinas Linux de 64 bits com uma ou mais GPUs Nvidia. Veja as recomendações mínimas abaixo e as GPUs testadas até agora:

| Modelo | Memória Mínima GPU | Memória Mínima CPU | GPUs Testadas |
|--|--|--|--|
| Small | 24GB | 32GB | A100, A10, A6000, L4 |
| Medium | 70GB | 130GB | 2xA100 40GB, 2xA6000 48GB |

A memória de GPU pode ser distribuída em vários dispositivos. Por exemplo, para o modelo Medium, que requer pelo menos 70GB, pode-se utilizar uma A100 de 80 GB, duas GPUs A100 de 40 GB ou quatro A10 de 24 GB.

As GPUs compatíveis são aquelas com capacidade de computação >= 8.0 (`nvidia-smi --query-gpu=compute_cap --format=csv`).


A memória de CPU necessária (por exemplo, 130GB para o Medium) é apenas para o carregamento do modelo na memória da GPU. Após o carregamento, essa memória é liberada. Estamos planejando otimizar este processo de carregamento para utilizar menos memória.

## Executando em Python

Primeiro, instale a biblioteca da MariTalk:
```bash
pip install maritalk
```

Uma vez obtida uma chave de licença, é possível fazer o download, inicializar e executar a MariTalk local utilizando a biblioteca em Python, conforme exemplo abaixo.

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

Também existem 2 comandos para facilitar o gerenciamento do executável:

#### Download

Para fazer o download do exectuável para um determinado path, você pode executar:

```console
$ python -m maritalk.download --license <SUA LICENÇA> --path maritalk-small
```

#### Start

Para fazer o download automaticamente e iniciar o servidor da MariTalk Local, você pode executar:

```console
$ python -m maritalk.start --license <SUA LICENÇA>
```


## Iniciando o executável diretamente

Também é possivel executar o servidor diretamente no terminal, sem o wrapper em Python.

#### Download
```bash
wget -O maritalk <link do executável recebido no email>
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
