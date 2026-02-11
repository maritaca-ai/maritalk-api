---
id: modelos
title: Modelos
---

# Modelos
A Maritaca AI oferece uma gama de modelos na família Sabiá, projetados para atender a diversas necessidades e cenários de uso. Cada modelo é ajustado para oferecer um equilíbrio ideal entre inteligência, velocidade e custo, permitindo que você escolha a opção que melhor se alinha aos requisitos do seu projeto.

| **Campo** | <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4</span></span> | <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 4</span></span> |<span className="inline-title"><span className="geo-icon geo-icon-trophy geo-icon-small" aria-hidden="true"></span><span>Sabiá 3.1</span></span> |  <span className="inline-title"><span className="geo-icon geo-icon-balance geo-icon-small" aria-hidden="true"></span><span>Sabiá 3</span></span> | <span className="inline-title"><span className="geo-icon geo-icon-bolt geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 3</span></span> | 
|-----------|----------------|------------------|---------------|---------------|---------------|
| **Descrição**| Modelo generalista com foco em capacidade agêntica e contexto brasileiro, atualizado até agosto de 2024 e indicado para usos que precisam de precisão e eficiência de custo. | Modelo otimizado para aplicações em larga escala, com foco em velocidade, baixo custo e boa precisão. Apresenta melhor desempenho em fluxos agênticos, sendo indicado para tarefas de extração de informações, avaliações educacionais e aplicações jurídicas, incluindo conhecimento do contexto legal brasileiro. |  Modelo robusto e atualizado até agosto de 2024, com ótimo desempenho em raciocínio matemático, geração/refatoração de código e tarefas que exigem conhecimento amplo. |  Geração Anterior | Geração Anterior| 
| **Exemplos de uso**   | Elaboração e revisão de peças e pareceres, tutoria para provas, análise e síntese de documentos longos e orquestração de fluxos agênticos multi-etapas. |  Escrever e revisar peças jurídicas, analisar contratos, aplicar e interpretar leis brasileiras, classificar e extrair informações de documentos, apoiar avaliações educacionais em larga escala e executar fluxos agênticos para automação de tarefas multi-etapas com respostas rápidas e custo menor. |  Refatoração e otimização de código legado em múltiplas linguagens, síntese de relatórios de pesquisa clínica e assistente jurídico para revisão de contratos complexos |  -|  -  | 
| **Contexto Máximo (Tokens)**  |  128000| 128000 |  128000 | 128000 | 32000 | 
| **Preço por Milhão de Tokens de Entrada**  | R$ 5,00 | R$1,00|   R$5,00 | R$5,00 | R$1,00| 
| **Preço por Milhão de Tokens de Saída**   | R$ 20,00 | R$4,00 |  R$10,00 | R$10,00| R$3,00 |  
| **Preço Fora de pico (22:00 - 06:00 BRT) por Milhão de Tokens de Entrada**  | R$3,50 | R$0,70 |  R$3,50| R$3,50  | R$0,70 | 
| **Preço Fora de pico (22:00 - 06:00 BRT) por Milhão de Tokens de Saída** | R$14,00|R$2,80  |   R$7,00 | R$7,00 | R$2,10| 
| **Preço Batch API por Milhão de Tokens de Entrada** |R$2,50  |R$0,50 |  R$2,50| R$2,50  | R$0,50 | 
| **Preço Batch API por Milhão de Tokens de Saída** |R$10,00| R$2,00|   R$5,00 | R$5,00 | R$1,50| 
| **Dados de Treinamento**  | Até agosto de 2024| Até agosto de 2024|   Até agosto de 2024 |Até meados de 2023 | Até meados de 2023 | 
| **Nomes Aceitos (Alias)**  |  sabia-4<br />sabia-4-2026-01-06 | sabiazinho-4<br />sabiazinho-4-2026-01-06<br />sabia-4-small<br />sabiazim-4| sabia-3.1<br />sabiá-3.1<br />sabia-3.1-2025-05-08<br />sabiá-3.1-2025-05-08 | sabia-3<br />sabiá-3<br />sabia-3-2024-12-11<br />sabiá-3-2024-12-11 | sabiazinho-3<br />sabiazinho-3-2025-02-06<br />sabia-3-small<br />sabiazim-3 | 


## Modelos descontinuados

Conforme lançamos modelos mais seguros e avançados, descontinuamos regularmente os modelos antigos. Na tabela abaixo, você encontrará uma lista completa de modelos descontinuados, além das recomendações de substituição.

| Modelo | Data de encerramento | Substituição Recomendada |
|-------|--------|-------|
| sabia-2-medium | 2024-10-01 | sabiazinho-4 |
| sabia-2-small | 2025-01-15 | sabiazinho-4 |
| sabia-3-2024-07-15 | 2024-10-01 | sabiazinho-4 |
| sabia-3-2024-09-09 | 2025-02-17 | sabiazinho-4 |
| sabiazinho-3-2024-11-13	| 2025-03-06 | sabiazinho-4 | 

## Como saber quantos tokens serei cobrado?
Para saber de antemão o quanto suas requisições irão custar, use a função count_tokens para saber o número de tokens em um dado prompt.
```python
from maritalk import count_tokens

prompt = "Com quantos paus se faz uma canoa?"

total_tokens = count_tokens(prompt, model="sabia-4")

print(f'O prompt "{prompt}" contém {total_tokens} tokens.')
```

É necessário instalar a biblioteca da Maritaca (`pip install maritalk`) para rodar o trecho de código acima.

<style>
  {`
    .markdown table,
    .theme-doc-markdown table {
      display: table;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 100%;
      table-layout: fixed;
      overflow-x: auto;
      border-collapse: collapse;
    }
    .markdown table th,
    .markdown table td,
    .theme-doc-markdown table th,
    .theme-doc-markdown table td {
      white-space: normal;
      word-break: normal;
      overflow-wrap: break-word;
    }
  `}
</style>
