---
id: models
title: Models
---

# Models

Maritaca AI offers a range of models in the Sabiá family, designed to meet various needs and usage scenarios. Each model is adjusted to provide an optimal balance between intelligence, speed, and cost, allowing you to choose the option that best aligns with the requirements of your project.

## Available models

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 Thinking</span></span>

The reasoning model of the Sabiá family, delivering frontier quality in Portuguese and Brazilian contexts at the lowest cost among the evaluated models. Compared to Sabiá 4, it brings significant gains in tool use, legal tasks, and answer quality. Recommended for complex tasks that benefit from explicit reasoning before answering.

**Example use cases:** Multi-step problem solving, agentic workflows and tool use, legal analysis and drafting, and exam questions and technical reasoning.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 Thinking BR-SP</span></span>

The same Sabiá 4 Thinking model, with **inference and processing performed entirely (100%) within Brazilian territory** — intended for use cases that require Brazilian data residency. Capabilities, context, and training data are identical to Sabiá 4 Thinking; pricing is 30% higher. API model name: `sabia-4-thinking-br-sp`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4</span></span>

General-purpose model focused on agentic capability and Brazilian context, updated through August 2024 and recommended for uses that need accuracy with cost efficiency. Read the [technical paper (arXiv)](https://arxiv.org/abs/2603.10213) for more details.

**Example use cases:** Drafting and reviewing briefs and opinions, tutoring for exams, analyzing and synthesizing long documents, and orchestrating multi-step agentic workflows.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 BR-SP</span></span>

The same Sabiá 4 model, with **inference and processing performed entirely (100%) within Brazilian territory** — intended for use cases that require Brazilian data sovereignty and residency. Capabilities, context, and training data are identical to Sabiá 4; pricing is 30% higher. API model name: `sabia-4-br-sp`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 4</span></span>

Optimized for large-scale applications with a focus on speed, low cost, and solid accuracy. Delivers the best performance in agentic workflows and is recommended for information extraction, educational assessments, and legal applications, including awareness of the Brazilian legal context.

**Example use cases:** Drafting and reviewing legal documents, analyzing contracts, applying and interpreting Brazilian law, classifying and extracting information from documents, supporting large-scale educational assessments, and running agentic multi-step automations with fast responses and lower cost.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 4 BR-SP</span></span>

The same Sabiazinho 4 model, with **inference and processing performed entirely (100%) within Brazilian territory** — intended for use cases that require Brazilian data sovereignty and residency. Capabilities, context, and training data are identical to Sabiazinho 4; pricing is 30% higher. API model name: `sabiazinho-4-br-sp`.

## Specifications

| | **Sabiá 4 Thinking** | **Sabiá 4 Thinking BR-SP** | **Sabiá 4** | **Sabiá 4 BR-SP** | **Sabiazinho 4** | **Sabiazinho 4 BR-SP** |
|---|---|---|---|---|---|---|
| **Max context** | 128K | 128K | 128K | 128K | 128K | 128K |
| **Training data cutoff** | Through Aug 2024 | Through Aug 2024 | Through Aug 2024 | Through Aug 2024 | Through Aug 2024 | Through Aug 2024 |
| **Model names/aliases** | sabia-4-thinking | sabia-4-thinking-br-sp | sabia-4<br />sabia-4-2026-01-06 | sabia-4-br-sp | sabiazinho-4<br />sabiazinho-4-2026-01-06<br />sabia-4-small<br />sabiazim-4 | sabiazinho-4-br-sp |

For pricing information, see the [Pricing](precos) page.

## Deprecated models

As we release more advanced and secure models, we regularly discontinue older models. In the table below, you will find a complete list of deprecated models, along with recommended replacements.

| Model | Deprecation date | Recommended replacement |
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
