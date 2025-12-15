---
id: glossario
title: Glossário
---

# Glossário

<div className="glossary-grid">
  <div className="glossary-card token-card">
    <div className="glossary-icon glossary-icon--token" />
    <span className="glossary-chip">Tokens</span>
    <p className="glossary-desc">Unidades de texto (≈4 caracteres). Contam para custo e limite de contexto.</p>
    <ul className="glossary-points">
      <li>Palavra, parte de palavra ou caractere</li>
      <li>Custo por milhão de tokens</li>
      <li>Prompt + resposta deve caber no limite</li>
    </ul>
  </div>

  <div className="glossary-card context-card">
    <div className="glossary-icon glossary-icon--context" />
    <span className="glossary-chip">Janela de contexto</span>
    <p className="glossary-desc">Tamanho máximo de texto que o modelo “lembra” por requisição.</p>
    <ul className="glossary-points">
      <li>Prompt + saída ≤ limite do modelo</li>
      <li>Janelas maiores = diálogos mais coerentes</li>
      <li>Exceder o limite retorna erro</li>
    </ul>
  </div>

  <div className="glossary-card temperature-card">
    <div className="glossary-icon glossary-icon--temp" />
    <span className="glossary-chip">Temperatura</span>
    <p className="glossary-desc">Controla a aleatoriedade da geração.</p>
    <ul className="glossary-points">
      <li>Alta: mais criativo e variado</li>
      <li>Baixa: mais seguro e consistente</li>
      <li>Prefira baixo para respostas determinísticas</li>
    </ul>
  </div>

  <div className="glossary-card ttft-card">
    <div className="glossary-icon glossary-icon--ttft" />
    <span className="glossary-chip">TTFT</span>
    <p className="glossary-desc">Tempo para o primeiro token aparecer.</p>
    <ul className="glossary-points">
      <li>Depende de modelo, utilização do servidor e tamanho do prompt</li>
      <li>Baixo TTFT indica que o modelo responde rapidamente, o que é essencial para uma experiência de usuário fluida</li>
    </ul>
  </div>
</div>
