---
id: overview
title: Overview
---
import styles from './styles.module.css';
import S5Cover from '@site/src/components/S5Cover';

# Maritaca documentation

The Sabiá models, trained for Portuguese and the Brazilian context, through an OpenAI-compatible API. Change the `base_url`, use your key, and make your first call in minutes.

<S5Cover lang="en" />

:::tip S5 free for a limited time
Try S5 in the API at no cost with the `S5-free` model. For ongoing or production use, use `S5` (or `S5-br-sp`, with inference 100% in Brazil). The code is the same; only the model name changes. See an example in [Getting started with S5](s5-quick-start).

| API name | Price |
|---|---|
| `S5-free` | Free for a limited time (text only) |
| `S5` | R$ 0.50 / R$ 2.50 per 1M tokens (input / output) |
| `S5-br-sp` | 30% above `S5` |
| `S5-nano` | R$ 0.10 / R$ 0.60 per 1M tokens (compact version, open weights) |
:::

<br/>
<a href="https://chat.maritaca.ai/" className={styles.ctaChat}>
  <img src="/img/maritaca.png" alt="Maritaca" style={{ width: '50px', height: 'auto', marginRight: '15px' }} />

  <p style={{ margin: 0 }}>
    <strong>Want to test our models on our chat interface?</strong> Chat with our models on maritaca.ai!
  </p>
</a>


## Get Started Now

If you're new to Maritaca API, start here to learn the essentials and make your first API call.

<div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', flexWrap: 'wrap' }}>
  <a href="/en/introduction" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <span className="geo-icon geo-icon-book" aria-hidden="true"></span>
    <h3>Introduction</h3>
    <p>Get to know the Sabiá models and their capabilities.</p>
  </a>
  <a href="/en/api/quick-start" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <span className="geo-icon geo-icon-rocket" aria-hidden="true"></span>
    <h3>Quick Start</h3>
    <p>Learn how to make your first API call in minutes.</p>
  </a>
  <a href="/en/s5-quick-start" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <span className="geo-icon geo-icon-sabiazinho4" aria-hidden="true"></span>
    <h3>Getting started with S5</h3>
    <p>Try S5 at no cost and see examples of how to integrate it through the API.</p>
  </a>
</div>
