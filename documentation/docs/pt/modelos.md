---
id: modelos
title: Modelos
---

# Modelos

A Maritaca AI oferece uma gama de modelos na família Sabiá, projetados para atender a diversas necessidades e cenários de uso. Cada modelo é ajustado para oferecer um equilíbrio ideal entre inteligência, velocidade e custo, permitindo que você escolha a opção que melhor se alinha aos requisitos do seu projeto.

## Modelos disponíveis

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 Thinking</span></span>

Modelo de raciocínio da família Sabiá, com qualidade de fronteira em português e contextos brasileiros pelo menor custo entre os modelos avaliados. Em relação ao Sabiá 4, traz ganhos expressivos em uso de ferramentas, tarefas jurídicas e qualidade das respostas. Indicado para tarefas complexas que se beneficiam de raciocínio explícito antes da resposta.

**Exemplos de uso:** Resolução de problemas com múltiplas etapas, fluxos agênticos e uso de ferramentas, análise e redação jurídica, e questões de exames e raciocínio técnico.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 Thinking BR-SP</span></span>

O mesmo modelo Sabiá 4 Thinking, com **inferência e processamento realizados 100% em território nacional** — indicado para casos de uso que exigem soberania e residência de dados no Brasil. Capacidades, contexto e dados de treinamento são idênticos ao Sabiá 4 Thinking; o custo é 30% superior. Nome aceito na API: `sabia-4-thinking-br-sp`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4</span></span>

Modelo generalista com foco em capacidade agêntica e contexto brasileiro, indicado para usos que precisam de precisão e eficiência de custo. Leia o [artigo técnico (arXiv)](https://arxiv.org/abs/2603.10213) para mais detalhes.

**Exemplos de uso:** Elaboração e revisão de peças e pareceres, tutoria para provas, análise e síntese de documentos longos e orquestração de fluxos agênticos multi-etapas.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 BR-SP</span></span>

O mesmo modelo Sabiá 4, com **inferência e processamento realizados 100% em território nacional** — indicado para casos de uso que exigem residência de dados no Brasil. Capacidades, contexto e dados de treinamento são idênticos ao Sabiá 4; o custo é 30% superior. Nome aceito na API: `sabia-4-br-sp`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 4</span></span>

Modelo otimizado para aplicações em larga escala, com foco em velocidade, baixo custo e boa precisão. Apresenta melhor desempenho em fluxos agênticos, sendo indicado para tarefas de extração de informações, avaliações educacionais e aplicações jurídicas, incluindo conhecimento do contexto legal brasileiro.

**Exemplos de uso:** Escrever e revisar peças jurídicas, analisar contratos, aplicar e interpretar leis brasileiras, classificar e extrair informações de documentos, apoiar avaliações educacionais em larga escala e executar fluxos agênticos para automação de tarefas multi-etapas com respostas rápidas e custo menor.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 4 BR-SP</span></span>

O mesmo modelo Sabiazinho 4, com **inferência e processamento realizados 100% em território nacional** — indicado para casos de uso que exigem soberania e residência de dados no Brasil. Capacidades, contexto e dados de treinamento são idênticos ao Sabiazinho 4; o custo é 30% superior. Nome aceito na API: `sabiazinho-4-br-sp`.

## Especificações

| | **Sabiá 4 Thinking** | **Sabiá 4 Thinking BR-SP** | **Sabiá 4** | **Sabiá 4 BR-SP** | **Sabiazinho 4** | **Sabiazinho 4 BR-SP** |
|---|---|---|---|---|---|---|
| **Contexto máximo** | 128K | 128K | 128K | 128K | 128K | 128K |
| **Máximo de tokens de saída** | 32K | 32K | 32K | 32K | 32K | 32K |
| **Nomes aceitos (alias)** | sabia-4-thinking | sabia-4-thinking-br-sp | sabia-4<br />sabia-4-2026-01-06 | sabia-4-br-sp | sabiazinho-4<br />sabiazinho-4-2026-01-06<br />sabia-4-small<br />sabiazim-4 | sabiazinho-4-br-sp |

Para informações sobre preços, consulte a página de [Preços](precos).

## Modelos descontinuados

Conforme lançamos modelos mais seguros e avançados, descontinuamos regularmente os modelos antigos. Na tabela abaixo, você encontrará uma lista completa de modelos descontinuados, além das recomendações de substituição.

| Modelo | Data de encerramento | Substituição recomendada |
|-------|--------|-------|
| sabia-2-medium | 2024-10-01 | sabiazinho-4 |
| sabia-2-small | 2025-01-15 | sabiazinho-4 |
| sabia-3-2024-07-15 | 2024-10-01 | sabiazinho-4 |
| sabia-3-2024-09-09 | 2025-02-17 | sabiazinho-4 |
| sabiazinho-3-2024-11-13 | 2025-03-06 | sabiazinho-4 |


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
