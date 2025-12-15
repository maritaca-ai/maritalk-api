---
id: glossary
title: Glossary
---

# Glossary

<div className="glossary-grid">
  <div className="glossary-card token-card">
    <div className="glossary-icon glossary-icon--token" />
    <span className="glossary-chip">Tokens</span>
    <p className="glossary-desc">Units of text (≈4 characters). Count toward cost and context.</p>
    <ul className="glossary-points">
      <li>Depends on the model, server load, and prompt size</li>
      <li>Low TTFT indicates that the model responds quickly, which is essential for a smooth user experience</li>
    </ul>
  </div>

  <div className="glossary-card context-card">
    <div className="glossary-icon glossary-icon--context" />
    <span className="glossary-chip">Context window</span>
    <p className="glossary-desc">Maximum text the model “remembers” per request.</p>
    <ul className="glossary-points">
      <li>Prompt + completion ≤ model limit</li>
      <li>Larger windows keep long chats coherent</li>
      <li>Exceeding the limit returns an error</li>
    </ul>
  </div>

  <div className="glossary-card temperature-card">
    <div className="glossary-icon glossary-icon--temp" />
    <span className="glossary-chip">Temperature</span>
    <p className="glossary-desc">Controls randomness of generation.</p>
    <ul className="glossary-points">
      <li>High: more creative, less predictable</li>
      <li>Low: safer and consistent</li>
      <li>Prefer low for deterministic answers</li>
    </ul>
  </div>

  <div className="glossary-card ttft-card">
    <div className="glossary-icon glossary-icon--ttft" />
    <span className="glossary-chip">TTFT</span>
    <p className="glossary-desc">Time to first token.</p>
    <ul className="glossary-points">
      <li>Affected by model, network, prompt size</li>
      <li>Low TTFT improves chat UX</li>
      <li>Track it with total latency</li>
    </ul>
  </div>
</div>
