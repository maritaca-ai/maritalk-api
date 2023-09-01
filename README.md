# Introdução
Este repositório contém o código e a documentação explicando como usar a API da MariTalk.
A MariTalk é um chatbot baseado em um modelo de linguagem que foi especialmente treinado para entender bem o português.
Ela é capaz de seguir instruções de maneira zero-shot, assim como o ChatGPT.

# Instalação

Instale a biblioteca da MariTalk usando pip:
```bash
pip install maritalk
```

# Exemplo de Uso

Mostramos abaixo um exemplo simples de uso em Python.

Primeiramente, você precisa de uma chave da API, que pode ser obtida em chat.maritaca.ai -> "Chaves da API" -> "Crie uma chave".

```python
import maritalk

model = maritalk.MariTalk(key="insira sua chave aqui. Ex: '100088...'")

answer = model.generate("Quanto é 25 + 27?")

print(f"Resposta: {answer}")   # Deve imprimir algo como "25 + 27 é igual a 52."
```

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
    top_p=0.95)

print(f"Resposta: {answer}")   # Deve imprimir algo como "nemo, dory e neptuno."
```

Este Google Colab contém outros exemplos de uso da API, incluindo como usá-la de maneira few-shot:

[Exemplo no Google Colab](https://colab.research.google.com/drive/1DyaxA_rWfgvpY95Jqc3_OsBN9Y13PhdX?usp=sharing)

Você pode encontrar mais detalhes sobre os parâmetros mostrados acima (do_sample, max_tokens, etc) em https://chat.maritaca.ai/docs

# Aspectos Técnicos

### A API é gratuita?
A API está disponível gratuitamente para todos os usuários. Planejamos introduzir uma versão paga no futuro que oferecerá maior capacidade e confiabilidade.

### Limite de Taxa de Requisições
No momento, há um limite de uma solicitação a cada 5 segundos para garantir que todos tenham a oportunidade de testar o modelo. Será retornado um erro HTTP 429 caso a taxa de requisições ultrapasse esse limite.

### Comprimento máximo de sequência
Atualmente, suportamos um comprimento máximo de sequência de 8000 tokens, que é equivalente a aproximadamente 4000 palavras em português.

### Capacidade de Processamento
Leva cerca de 1 a 2 segundos para gerar o primeiro token, dado uma sequência de 1000 tokens como entrada.
Após isso, novos tokens são gerados a uma taxa de 10 a 15 tokens/seg.

# Interface Web
Experimente a interface Web em:
[chat.maritaca.ai](https://chat.maritaca.ai/)

<img src="imgs/web_interface.png" width="600">
