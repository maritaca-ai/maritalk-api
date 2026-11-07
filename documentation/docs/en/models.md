---
id: models
title: Models
---

# Models

Maritaca AI offers a range of models in the Sabiá family, designed to meet various needs and usage scenarios. Each model is adjusted to provide an optimal balance between intelligence, speed, and cost, allowing you to choose the option that best aligns with the requirements of your project.

## Available models

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>S5</span></span>

Our most intelligent model, recommended for analyzing documents, working with data, and solving complex problems. Use it to build assistants that look up information and perform tasks with tools.

**Example use cases:** Document analysis and summarization, information extraction, task automation with tools, and structured content generation.

**API details:** The `reasoning_effort` parameter controls reasoning intensity (`none`, `low`, `medium` or `xhigh`, the default). S5 supports up to 1 million tokens of context and is also available through the Batch API. API model names: `S5` or `s5`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>S5 Free</span></span>

S5 **free of charge for a limited time**, to try the model at no cost. Text only; Batch API, Flex and [built-in tools](tools.md) are not included, and rate limits are fixed (see [Rate Limits](rate-limits)). API model names: `S5-free` or `s5-free`.

:::caution Available for a limited time
S5 Free is a temporary launch offer and may be discontinued at any time. For ongoing or production use, use `S5`.
:::

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>S5 BR-SP</span></span>

The same S5 model, with **inference and processing performed entirely (100%) within Brazilian territory** — intended for use cases that require Brazilian data sovereignty and residency. Capabilities, context, and training data are identical to S5; pricing is 30% higher. API model names: `S5-br-sp` or `s5-br-sp`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>S5 Nano</span></span>

A compact version of S5, with **open weights** ([maritaca-ai/S5-nano on Hugging Face](https://huggingface.co/maritaca-ai/S5-nano)) and the lowest cost in the family: R$ 0.10 per 1M input tokens and R$ 0.60 per 1M output tokens. It has the same **native reasoning** as S5 and, as an open model, returns its reasoning **as plain text**, unencrypted (see [Reasoning](reasoning)). It supports up to **256K tokens of context**, function calling, [built-in tools](tools), and the Batch API. Accepted API names: `S5-nano` or `s5-nano`.

**Use cases:** High-volume classification and information extraction, customer support and chat with fast responses, routing and triage in agentic flows, and simple tasks where cost and latency matter more than peak quality.

## Previous generation

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 Thinking</span></span>

The reasoning model of the Sabiá family, delivering frontier quality in Portuguese and Brazilian contexts at the lowest cost among the evaluated models. Compared to Sabiá 4, it brings significant gains in tool use, legal tasks, and answer quality. Recommended for complex tasks that benefit from explicit reasoning before answering. Supports up to **1 million tokens of context**, so long documents, entire case files or whole knowledge bases fit in a single request (also available through the Batch API).

**Example use cases:** Multi-step problem solving, agentic workflows and tool use, legal analysis and drafting, and exam questions and technical reasoning.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 Thinking BR-SP</span></span>

The same Sabiá 4 Thinking model, with **inference and processing performed entirely (100%) within Brazilian territory** — intended for use cases that require Brazilian data residency. Capabilities, context, and training data are identical to Sabiá 4 Thinking; pricing is 30% higher. API model name: `sabia-4-thinking-br-sp`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4</span></span>

General-purpose model focused on agentic capability and Brazilian context, recommended for uses that need accuracy with cost efficiency. Read the [technical paper (arXiv)](https://arxiv.org/abs/2603.10213) for more details.

**Example use cases:** Drafting and reviewing briefs and opinions, tutoring for exams, analyzing and synthesizing long documents, and orchestrating multi-step agentic workflows.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiá 4 BR-SP</span></span>

The same Sabiá 4 model, with **inference and processing performed entirely (100%) within Brazilian territory** — intended for use cases that require Brazilian data sovereignty and residency. Capabilities, context, and training data are identical to Sabiá 4; pricing is 30% higher. API model name: `sabia-4-br-sp`.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 4</span></span>

Optimized for large-scale applications with a focus on speed, low cost, and solid accuracy. Delivers the best performance in agentic workflows and is recommended for information extraction, educational assessments, and legal applications, including awareness of the Brazilian legal context.

**Example use cases:** Drafting and reviewing legal documents, analyzing contracts, applying and interpreting Brazilian law, classifying and extracting information from documents, supporting large-scale educational assessments, and running agentic multi-step automations with fast responses and lower cost.

### <span className="inline-title"><span className="geo-icon geo-icon-sabiazinho4 geo-icon-small" aria-hidden="true"></span><span>Sabiazinho 4 BR-SP</span></span>

The same Sabiazinho 4 model, with **inference and processing performed entirely (100%) within Brazilian territory** — intended for use cases that require Brazilian data sovereignty and residency. Capabilities, context, and training data are identical to Sabiazinho 4; pricing is 30% higher. API model name: `sabiazinho-4-br-sp`.

## Specifications

| | **S5** | **S5 Free** | **S5 BR-SP** | **S5 Nano** |
|---|---|---|---|---|
| **Max context** | 1M | 1M | 1M | 256K |
| **Max output tokens** | 32K | 32K | 32K | 32K |
| **Model names/aliases** | S5<br />s5 | S5-free<br />s5-free | S5-br-sp<br />s5-br-sp | S5-nano<br />s5-nano |

### Previous generation

| | **Sabiá 4 Thinking** | **Sabiá 4 Thinking BR-SP** | **Sabiá 4** | **Sabiá 4 BR-SP** | **Sabiazinho 4** | **Sabiazinho 4 BR-SP** |
|---|---|---|---|---|---|---|
| **Max context** | 1M | 1M | 128K | 128K | 128K | 128K |
| **Max output tokens** | 32K | 32K | 32K | 32K | 32K | 32K |
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
