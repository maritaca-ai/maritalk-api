---
id: modelos
title: Modelos
---

# Modelos
A Maritaca AI oferece uma gama de modelos na família Sabiá, projetados para atender a diversas necessidades e cenários de uso. Cada modelo é ajustado para oferecer um equilíbrio ideal entre inteligência, velocidade e custo, permitindo que você escolha a opção que melhor se alinha aos requisitos do seu projeto.

| **Campo** | **Sabiá 3.1** 🥇 |  **Sabiá 3** ⚖️ | **Sabiazinho 3** ⚡ |
|-----------|----------------|------------------|---------------|
| **Descrição**| Nosso modelo mais avançado e atualizado, incorporando dados de até agosto de 2024. Oferece desempenho superior em raciocínio matemático, geração/refatoração de código e qualquer tarefa que exija conhecimento mais atualizado. |  Modelo bom para a maioria das tarefas e ideal para tarefas complexas que exigem maior assertividade. | Nosso modelo mais econômico, projetado para tarefas mais simples. Ideal para aplicações  que priorizam velocidade e custo. | 
| **Exemplos de uso**  | Refatoração e otimização de código legado em múltiplas linguagens, síntese de relatórios de pesquisa clínica e assistente jurídico para revisão de contratos complexos |  Escrever artigos de pesquisa complexos, criar documentos técnicos detalhados, chatbots, gerar código|  Tradução de textos, gerar descrições de produtos, resumos de artigos, criação de respostas para FAQs, ideias de conteúdo para blogs  |  
| **Contexto Máximo (Tokens)**  | 128000 | 128000 | 32000 | 
| **Preço por Milhão de Tokens de Entrada** | R$5,00 | R$5,00 | R$1,00| 
| **Preço por Milhão de Tokens de Saída**   | R$10,00 | R$10,00| R$3,00 |  
| **Preço Fora de pico (22:00 - 06:00 BRT) por Milhão de Tokens de Entrada**  |R$3,50| R$3,50  | R$0,70 | 
| **Preço Fora de pico (22:00 - 06:00 BRT) por Milhão de Tokens de Saída** | R$7,00 | R$7,00 | R$2,10|
| **Preço Batch API por Milhão de Tokens de Entrada**  |R$2,50| R$2,50  | R$0,50 | 
| **Preço Batch API por Milhão de Tokens de Saída** | R$5,00 | R$5,00 | R$1,50|
| **Dados de Treinamento** | Até agosto de 2024 |Até meados de 2023 | Até meados de 2023 | 


## Modelos descontinuados

Conforme lançamos modelos mais seguros e avançados, descontinuamos regularmente os modelos antigos. Na tabela abaixo, você encontrará uma lista completa de modelos descontinuados, além das recomendações de substituição.

| Modelo | Data de encerramento | Substituição Recomendada |
|-------|--------|-------|
| sabia-2-medium | 2024-10-01 | sabia-3.1 |
| sabia-2-small | 2025-01-15 | sabiazinho-3 |
| sabia-3-2024-07-15 | 2024-10-01 |sabia-3.1 |
| sabia-3-2024-09-09 | 2025-02-17 | sabia-3.1 |
| sabiazinho-3-2024-11-13	| 2025-03-06 | sabiazinho-3 | 

## Como saber quantos tokens serei cobrado?
Para saber de antemão o quanto suas requisições irão custar, use a função count_tokens para saber o número de tokens em um dado prompt.
```python
from maritalk import count_tokens

prompt = "Com quantos paus se faz uma canoa?"

total_tokens = count_tokens(prompt, model="sabia-3")

print(f'O prompt "{prompt}" contém {total_tokens} tokens.')
```

É necessário instalar a biblioteca da Maritaca (`pip install maritalk`) para rodar do trecho de código acima.
