import React from 'react';

// Nome do modelo com a animação do vídeo de lançamento: "Sabiá 5" aparece,
// o miolo "abiá " se apaga e sobram "S" e "5" juntos, formando "S5".
// Só CSS (regras .s5n em src/css/custom.css); com prefers-reduced-motion
// mostra "S5" direto. Para leitores de tela o nome é sempre "S5".
export default function S5Name({ className = '' }) {
  return (
    <span className={`s5n ${className}`.trim()} role="img" aria-label="S5">
      <span className="s5n-s" aria-hidden="true">S</span>
      <span className="s5n-mid" aria-hidden="true"><span>abiá&nbsp;</span></span>
      <span className="s5n-5" aria-hidden="true">5</span>
    </span>
  );
}
