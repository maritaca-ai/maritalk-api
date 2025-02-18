---
id: glossario
title: Glossário
---

# Glossário

## **Tokens**
Tokens são as unidades fundamentais que os modelos de linguagem utilizam para processar texto. Eles representam sequências de caracteres que compõem a linguagem escrita. 
Um **token** pode ser: Uma palavra inteira, parte de uma palavra, um caractere único ou uma sequência de caracteres especiais.
Por exemplo, a palavra "**tokenização**" pode ser dividida em "**token**" e "**ização**". Em média, um token corresponde a aproximadamente 4 caracteres.

### Por que os tokens são importantes?

- **Limitação de Processamento**: O tamanho do texto que um modelo pode processar é limitado pelo número de tokens que ele pode manipular de uma vez, conhecido como **'janela de contexto'**.
- **Cálculo de Custos**: Os custos são calculados com base no número de tokens processados, sendo cobrados por milhão de tokens.

---

## **Contexto (Janela de contexto)**

A **janela de contexto** refere-se à quantidade de texto que um modelo de linguagem pode levar em conta ao gerar uma nova resposta. Ela funciona como a capacidade de lembrar detalhes ao contar uma história. Quando alguém explica um evento que aconteceu durante o dia, se consegue lembrar de muitos detalhes desde o começo, pode contar a história de forma completa e bem conectada. Mas, se só recordar os últimos momentos, a história pode ficar incompleta ou sem nexo.

Da mesma forma, em um modelo de linguagem, a janela de contexto determina quantos detalhes anteriores ele pode "lembrar" ao criar uma nova resposta. Quanto maior for essa janela, mais contexto o modelo tem para gerar uma resposta rica e precisa. Se a janela for menor, ele só consegue considerar uma parte limitada da informação, o que pode afetar a qualidade da resposta.

### Importância do Tamanho da Janela de Contexto

- **Maior Janela de Contexto**: Permite que o modelo compreenda e responda a prompts mais complexos e extensos.
- **Menor Janela de Contexto**: Pode limitar a capacidade do modelo de lidar com prompts longos ou de manter a coerência em conversas prolongadas.

### Limitações

- Para **modelos de geração de texto**, a soma do tamanho do prompt e da saída gerada não deve ultrapassar o comprimento máximo da janela de contexto.

---

## **Temperatura**

A temperatura é um parâmetro que controla o nível de aleatoriedade nas respostas de um modelo de linguagem durante a geração de texto. 

- **Temperaturas mais altas** resultam em respostas mais criativas e variadas. Por exemplo, ao pedir para o modelo continuar uma história, ele pode inventar finais diferentes e inesperados. Isso é útil quando se busca originalidade, como na escrita de ficção, onde múltiplas possibilidades e surpresas são desejadas.

- **Temperaturas mais baixas**, por outro lado, produzem respostas mais previsíveis e conservadoras. Nesse caso, o modelo tende a seguir o caminho mais provável e seguro, repetindo padrões comuns de linguagem. Isso é ideal para tarefas que exigem respostas consistentes e confiáveis, como ao avaliar o desempenho de um modelo em um cenário.

Ajustar a temperatura é essencial para encontrar o equilíbrio certo entre criatividade e precisão, dependendo do objetivo da tarefa. Em atividades como a criação de histórias, diálogos, ou qualquer outro tipo de conteúdo onde a originalidade é importante, configurar a temperatura adequadamente pode ser a chave para alcançar o resultado desejado. Por outro lado, quando a precisão e a consistência são mais importantes, uma temperatura mais baixa ajuda a garantir que as respostas sejam claras e previsíveis.

---

## **TTFT (Tempo para o Primeiro Token)**

O **Tempo para o Primeiro Token (TTFT)** mede a rapidez com que um modelo de linguagem começa a responder após receber uma solicitação (prompt). Um TTFT baixo indica que o modelo responde rapidamente, o que é essencial para uma experiência de usuário fluida, especialmente em chatbots e sistemas em tempo real.

### O que influencia o TTFT?

- **Tamanho do modelo**: Modelos maiores podem ser mais lentos.
- **Hardware**: Computadores mais potentes reduzem o TTFT.
- **Condições de rede**: Internet lenta aumenta o TTFT.
- **Comprimento do prompt**: Prompts mais longos aumentam o TTFT.

---