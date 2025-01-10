---
id: modelos
title: Modelos
---

# Modelos
A Maritaca AI oferece uma gama de modelos na família Sabiá, projetados para atender a diversas necessidades e cenários de uso. Cada modelo é ajustado para oferecer um equilíbrio ideal entre inteligência, velocidade e custo, permitindo que você escolha a opção que melhor se alinha aos requisitos do seu projeto.

| **Campo**                            | **Sabiá 3** 🥇                                                                                       | **Sabiazinho 3** ⚡                                                                                      | **Sabiá 2 Small** 💡                                                                            |
|--------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Descrição**                        | Nosso modelo mais avançado, ideal para tarefas complexas que exigem maior assertividade.            | Nosso modelo mais econômico, projetado para tarefas mais simples. Ideal para aplicações  que priorizam velocidade e custo. | Nosso modelo mais básico, desenvolvido para tarefas simples. Ideal para aplicações  que priorizam velocidade e custo. |
| **Exemplos de uso**                  | Escrever artigos de pesquisa complexos, criar documentos técnicos detalhados, chatbots, gerar código |  Tradução de textos, gerar descrições de produtos, resumos de artigos, criação de respostas para FAQs, ideias de conteúdo para blogs  | Gerar postagens breves para redes sociais, tradução de textos curtos, sugestões de nomes de produtos  |
| **Contexto Máximo (Tokens)**         | 128000                                                                                              | 32000                                                                                                    | 8192                                                                                             |
| **Custo por Milhão de Tokens (Entrada)** | R$ 5                                                                                              | R$ 1                                                                                                      | R$ 1                                                                                              |
| **Custo por Milhão de Tokens (Saída)**   | R$ 10                                                                                             | R$ 3                                                                                                      | R$ 3                                                                                              |
| **TPM (Entrada)**                    | 2 milhões                                                                                           | 2 milhões                                                                                                | 2 milhões                                                                                          |
| **TPM (Saída)**                      | 200 mil                                                                                            | 200 mil                                                                                                   | 200 mil                                                                                           |
| **RPM**                              | 1000                                                                                               | 1000                                                                                                      | 1000                                                                                              |
| **Dados de Treinamento**             | Até meados de 2023                                                                                 | Até meados de 2023                                                                                        | Até meados de 2023                                                                                 |




TPM = Tokens por minuto.

RPM = Requisições por minuto.

Essa tabela exclui todos os nossos modelos descontinuados.

**O modelo sabia-2-small será descontinuado em 2025-01-15. Recomendamos a mudança para o sabiazinho-3.**

**O modelo sabia-3-2024-09-09 será descontinuado em 2025-02-15. Recomendamos a mudança para o sabia-3.**

### Como saber quantos tokens serei cobrado?
Para saber de antemão o quanto suas requisições irão custar, use a função count_tokens para saber o número de tokens em um dado prompt.
```python
from maritalk import count_tokens

prompt = "Com quantos paus se faz uma canoa?"

total_tokens = count_tokens(prompt, model="sabia-3")

print(f'O prompt "{prompt}" contém {total_tokens} tokens.')
```

É necessário instalar a biblioteca da maritalk (`pip install maritalk`) para rodar do trecho de código acima.
