# Introdução ao Sabiá

Os modelos especializados em língua portuguesa da Maritaca AI, conhecidos como Sabiá, estão disponíveis por meio de uma API.

A cobrança pelo uso dos modelos é baseada no volume de tokens, considerando tanto os dados de entrada quanto os de saída. O treinamento especializado dos modelos Sabiá garante um desempenho superior a um custo mais acessível em comparação com outras soluções do mercado.


## O que você pode fazer com o Sabiá

  A família de modelos Sabiá, desenvolvida pela Maritaca AI, é capaz de simular interações humanas em língua portuguesa com alta fidelidade. Além de gerar textos que abrangem uma diversidade de temas e estilos de comunicação, desde diálogos cotidianos até análises complexas, é uma ferramenta útil e acessível para qualquer pessoa que busque uma interação significativa em português.

<div className="intro-features">
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-chat" aria-hidden="true"></span>
    <h3>Responder perguntas</h3>
    <p>Pode responder uma variedade ampla de perguntas em muitos tópicos diferentes. As informações fornecidas são baseadas nos dados de treinamento, que incluem uma vasta gama de livros, sites e outros materiais.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-context" aria-hidden="true"></span>
    <h3>Auxiliar com Informações</h3>
    <p>Pode seguir o contexto de uma conversa e ajustar as respostas de acordo com a situação, fornecendo informações atualizadas até sua data de corte, como detalhes sobre eventos históricos, ciência, tecnologia, cultura e muito mais.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-translate" aria-hidden="true"></span>
    <h3>Tradução</h3>
    <p>Tem a capacidade de traduzir textos para e de muitas línguas diferentes.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-education" aria-hidden="true"></span>
    <h3>Ensino e tutoria</h3>
    <p>Pode ajudar a explicar conceitos complexos e auxiliar no aprendizado de diversas matérias, fornecendo explicações detalhadas sobre uma variedade de tópicos.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-creative" aria-hidden="true"></span>
    <h3>Geração de texto criativo</h3>
    <p>Pode criar textos, histórias, poemas, diálogos e outros conteúdos criativos em português.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-support" aria-hidden="true"></span>
    <h3>Suporte ao cliente</h3>
    <p>É capaz de ajudar com questões frequentes e oferecer assistência básica ao cliente.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-data" aria-hidden="true"></span>
    <h3>Análise de dados</h3>
    <p>Pode ajudar a interpretar e analisar dados fornecidos que não exijam atualizações após a data de corte.</p>
  </div>
</div>

É importante lembrar que, embora os modelos sejam uma ferramenta poderosa para tarefas de linguagem, eles não possuem consciência ou entendimento real e suas respostas são baseadas em padrões de linguagem aprendidos durante o treinamento.

---
## Desempenho

Graças ao nosso treinamento especializado, nossos modelos oferecem qualidade superior a um custo menor em comparação com a concorrência. Confira abaixo a comparação da qualidade do Sabiá-3 (nosso modelo mais avançado), medida pelo desempenho em 93 Exames Brasileiros (como ENEM, Enade, Revalida, OAB, ENAM, CPNU, UNICAMP, USP, entre outros), em relação ao preço:

<div id="graph-container">
  <iframe 
    src="/img/price_vs_performance_ptbr.html" 
    style={{
      width: '2384px',  /* Dimensões originais multiplicadas por 2 */
      height: '1164px', /* Dimensões originais multiplicadas por 2 */
      border: 'none',
      transformOrigin: '0 0',
      position: 'absolute',
      backgroundColor: 'white'
    }} 
    frameBorder="0"
    scrolling="no"
  />
</div>

<style>
  {`
    #graph-container {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
    }
    @media (min-width: 1024px) {
      #graph-container {
        height: 465.6px; /* 1164px * 0.4 */
      }
      #graph-container iframe {
        transform: scale(0.4);
      }
    }
    @media (min-width: 768px) and (max-width: 1023px) {  /* Landscape - @media (orientation: landscape) {*/
      #graph-container {
        height: 349.2px; /* 1164px * 0.3 */
      }
      #graph-container iframe {
        transform: scale(0.30);
      }
    }
    @media (max-width: 767px) { /* Portrait - @media (orientation: portrait) {*/
      #graph-container {
        height: 186.24px; /* 1164px * 0.16 */
      }
      #graph-container iframe {
        transform: scale(0.16);
      }
    }
  `}
</style>
