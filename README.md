# Introdução
Este repositório contém o código e a documentação explicando como usar a API da MariTalk.
A MariTalk é um chatbot baseado em um modelo de linguagem que foi especialmente treinado para entender bem o português.
Ela é capaz de seguir instruções de maneira zero-shot, assim como o ChatGPT.

# Exemplo de Uso
Este Google Colab contém um exemplo mostrando como usar a API, que é semelhante à API do ChatGPT:

[Exemplo no Google Colab](https://colab.research.google.com/drive/13tieiQdQqYDQGHI8aLtlqoBWMpJ2elyo?usp=sharing)

Você também encontrará no colab um exemplo de como usar o modelo em um método few-shot.

Você pode encontrar mais detalhes sobre a API em https://chat.maritaca.ai/docs

# Aspectos Técnicos

### A API é gratuita?
A API está disponível gratuitamente para todos os usuários. Planejamos introduzir uma versão paga no futuro que oferecerá maior capacidade e confiabilidade.

### Limite de Taxa
No momento, há um limite de uma solicitação a cada 5 segundos para garantir que todos tenham a oportunidade de testar o modelo. Será retornado um erro HTTP 429 caso a taxa de requisições ultrapasse esse limite.

### Comprimento máximo de sequência
Atualmente, suportamos um comprimento máximo de sequência de 2000 tokens, que é equivalente a aproximadamente 1000 palavras em português. Em breve, suportaremos 8000 tokens.

### Capacidade de Processamento
Leva cerca de 1 a 2 segundos para gerar o primeiro token, dado uma sequência de 1000 tokens como entrada.
Após isso, novos tokens são gerados a uma taxa de 10 a 15 tokens/seg.

# Interface Web
Experimente a interface Web em:
[chat.maritaca.ai](https://chat.maritaca.ai/)

<img src="imgs/web_interface.png" width="600">
