import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Capa do S5 na Visão geral: a faixa verde-floresta da home (fundo com grão,
// pílulas, faixa de especificações) com o nome animado como no vídeo de
// lançamento: "Sabiá 5" aparece grande, o miolo "abiá " se apaga e o "5"
// desliza até encostar no "S". Estilos em src/css/custom.css (prefixo .s5c).
// Clicar no nome repete a animação. Com prefers-reduced-motion mostra "S5".

const ARROW = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const COPY = {
  pt: {
    eyebrow: 'Nova geração do Sabiá',
    p: 'Raciocínio nativo com intensidade ajustável, até 1 milhão de tokens de contexto e o menor preço da família. Disponível no chat e na API.',
    cta1: 'Conhecer o S5', cta1Href: '/pt/modelos',
    cta2: 'Começo rápido', cta2Href: '/pt/api/comeco-rapido',
    replay: 'Ver de novo',
    specs: [['Contexto', '1 milhão de tokens'], ['Entrada', 'R$ 0,50 por 1M'], ['Saída', 'R$ 2,50 por 1M'], ['Nome na API', 'S5', 'mono']],
  },
  en: {
    eyebrow: 'The next generation of Sabiá',
    p: 'Native reasoning with adjustable intensity, up to 1 million tokens of context, and the lowest price in the family. Available in the chat and through the API.',
    cta1: 'Meet S5', cta1Href: '/en/models',
    cta2: 'Quick start', cta2Href: '/en/api/quick-start',
    replay: 'Replay',
    specs: [['Context', '1 million tokens'], ['Input', 'R$ 0.50 per 1M'], ['Output', 'R$ 2.50 per 1M'], ['API name', 'S5', 'mono']],
  },
};

export default function S5Cover({ lang = 'pt' }) {
  const c = COPY[lang] || COPY.pt;
  const bg = useBaseUrl('/img/brand/hero.png');
  const [run, setRun] = useState(0);
  return (
    <section className="s5c">
      <img className="s5c-bg" src={bg} alt="" aria-hidden="true" />
      <div className="s5c-shade" aria-hidden="true" />
      <div className="s5c-in">
        <p className="s5c-eyebrow">{c.eyebrow}</p>
        <h2 className="s5c-name" key={run} role="img" aria-label="S5" title={c.replay} onClick={() => setRun(run + 1)}>
          <span className="s5c-s" aria-hidden="true">S</span>
          <span className="s5c-mid" aria-hidden="true"><span>abiá&nbsp;</span></span>
          <span className="s5c-5" aria-hidden="true">5</span>
        </h2>
        <p className="s5c-p">{c.p}</p>
        <div className="s5c-ctas">
          <a className="s5c-pill s5c-pill--orange" href={c.cta1Href}>{c.cta1} {ARROW}</a>
          <a className="s5c-pill s5c-pill--light" href={c.cta2Href}>{c.cta2}</a>
        </div>
      </div>
      <dl className="s5c-specs">
        {c.specs.map(([k, v, cls]) => (
          <div key={k}><dt>{k}</dt><dd className={cls || ''}>{v}</dd></div>
        ))}
      </dl>
    </section>
  );
}
