---
id: visao-geral
title: Visão Geral
---
import styles from './styles.module.css';
import S5Cover from '@site/src/components/S5Cover';

# Documentação da Maritaca

Os modelos Sabiá, treinados para o português e o contexto brasileiro, por uma API compatível com a da OpenAI. Troque a `base_url`, use a sua chave e faça a primeira chamada em minutos.

<S5Cover lang="pt" />

:::tip S5 gratuito por tempo limitado
Experimente o S5 na API sem custo com o modelo `S5-free`. Para uso contínuo ou em produção, use `S5` (ou `S5-br-sp`, com inferência 100% no Brasil). O código é o mesmo, só muda o nome do modelo. Veja um exemplo em [Primeiros passos com o S5](primeiros-passos-s5).

| Nome na API | Preço |
|---|---|
| `S5` | R$ 0,50 / R$ 2,50 por 1M de tokens (entrada / saída) |
| `S5-nano` | R$ 0,10 / R$ 0,60 por 1M de tokens (versão compacta, pesos abertos) |
| `S5-br-sp` | 30% acima do `S5` |
| `S5-free` | Gratuito por tempo limitado (somente texto) |
:::

<br/>
<a href="https://chat.maritaca.ai/" className={styles.ctaChat}>
  <img src="/img/nova_identidade/Digital/maritaca_elementos_final_RGB-13.png" alt="Maritaca" style={{ width: '50px', height: 'auto', marginRight: '15px' }} />

  <p style={{ margin: 0 }}>
    <strong>Deseja testar nossos modelos em nossa interface chat?</strong> Converse com nossos modelos em maritaca.ai!
  </p>
</a>


## Comece agora

Se você é novo na Maritaca API, comece aqui para aprender o essencial e fazer sua primeira chamada API.

<div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0', flexWrap: 'wrap' }}>
  <a href="/pt/introducao" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <span className="geo-icon geo-icon-book" aria-hidden="true"></span>
    <h3>Introdução</h3>
    <p>Conheça os modelos Sabiá e suas capacidades.</p>
  </a>
  <a href="/pt/api/comeco-rapido" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <span className="geo-icon geo-icon-rocket" aria-hidden="true"></span>
    <h3>Começo rápido</h3>
    <p>Aprenda a fazer sua primeira chamada API em minutos.</p>
  </a>
  <a href="/pt/primeiros-passos-s5" className="icon-box" style={{ flex: '1 1 200px', margin: '10px', textAlign: 'center' }}>
    <span className="geo-icon geo-icon-sabiazinho4" aria-hidden="true"></span>
    <h3>Primeiros passos com o S5</h3>
    <p>Experimente o S5 sem custo e veja exemplos de integração com a API.</p>
  </a>
</div>
