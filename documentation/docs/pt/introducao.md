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

Graças ao nosso treinamento especializado em português e em contextos brasileiros, nossos modelos apresentam excelente desempenho em benchmarks nacionais, com custos significativamente menores do que alternativas comparáveis. A tabela abaixo compara Sabiázinho 4, Sabiázinho 3 e modelos concorrentes em uma série de avaliações brasileiras — incluindo exames jurídicos, provas educacionais, conhecimento legislativo, capacidade agentiva e habilidades conversacionais (considerando qualidade e custo de execução via API).

Os resultados mostram que o Sabiázinho 4 lidera a maior parte dos benchmarks focados no Brasil, como redação jurídica (OAB e Magis), conhecimento da legislação brasileira e conversação em português, mantendo um custo de execução muito inferior aos modelos comparativos. 

Essa comparação evidencia que nossos modelos oferecem uma combinação competitiva de alto desempenho em tarefas brasileiras reais e eficiência de custo, sendo especialmente adequados para aplicações jurídicas, educacionais e institucionais no Brasil.


<div className="benchmark-table">
  <table>
    <caption>Comparação de desempenho e custo em benchmarks brasileiros</caption>
    <thead>
      <tr>
        <th>Benchmark</th>
        <th>Descrição</th>
        <th>Métrica</th>
        <th>Sabiázinho 4</th>
        <th>Sabiázinho 3</th>
        <th>gpt-oss 120b</th>
        <th>GPT-4.1 mini</th>
        <th>GPT-5.1 mini</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Custo</td>
        <td>Custo para rodar os benchmarks abaixo</td>
        <td>Reais gastos em tokens via API</td>
        <td>R$ 15,87</td>
        <td>R$ 9,42</td>
        <td>R$ 31,76</td>
        <td>R$ 47,59</td>
        <td>R$ 101,94</td>
      </tr>
      <tr>
        <td>OAB Bench</td>
        <td>Redação jurídica (advogado) – 21 provas</td>
        <td>Pontuação média (0–10)</td>
        <td><strong>7,02</strong></td>
        <td>6,01</td>
        <td>5,99</td>
        <td>5,50</td>
        <td>6,37</td>
      </tr>
      <tr>
        <td>Magis Bench</td>
        <td>Redação jurídica (juiz) – 24 provas</td>
        <td>Pontuação média (0–10)</td>
        <td><strong>4,50</strong></td>
        <td>3,64</td>
        <td>3,62</td>
        <td>3,67</td>
        <td>4,47</td>
      </tr>
      <tr>
        <td>Leis brasileiras</td>
        <td>Conhecimento da legislação brasileira</td>
        <td>Acurácia (5 alternativas)</td>
        <td><strong>85,0%</strong></td>
        <td>72,9%</td>
        <td>52,3%</td>
        <td>57,0%</td>
        <td>68,2%</td>
      </tr>
      <tr>
        <td>Capacidades Agenticas</td>
        <td>Uso de ferramentas e ambientes em português</td>
        <td>Pass³ e success@1</td>
        <td>55,2%</td>
        <td>14,1%</td>
        <td>60,9%</td>
        <td>59,4%</td>
        <td><strong>85,1%</strong></td>
      </tr>
      <tr>
        <td>Provas brasileiras</td>
        <td>13 provas (ENEM, USP, OAB, etc.)</td>
        <td>Acurácia (4 e 5 alternativas)</td>
        <td>81,5%</td>
        <td>77,9%</td>
        <td>77,0%</td>
        <td>81,0%</td>
        <td><strong>84,6%</strong></td>
      </tr>
      <tr>
        <td>Multi-IF Português</td>
        <td>Capacidade de seguir instruções</td>
        <td>Strict, média de 3 turnos</td>
        <td>81,4%</td>
        <td>72,2%</td>
        <td>82,0%</td>
        <td>79,6%</td>
        <td><strong>85,8%</strong></td>
      </tr>
      <tr>
        <td>BRACEval</td>
        <td>Habilidades conversacionais em português</td>
        <td>Vitórias contra GPT-4o</td>
        <td><strong>66,5%</strong></td>
        <td>36,2%</td>
        <td>55,8%</td>
        <td>32,7%</td>
        <td>56,3%</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  {`
    .benchmark-table {
      margin: 1.75rem auto;
      max-width: 1100px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: #ffffff;
      overflow-x: auto;
    }
    .benchmark-table table {
      width: 100%;
      min-width: 880px;
      border-collapse: collapse;
    }
    .benchmark-table caption {
      padding: 1rem 1.25rem;
      font-weight: 700;
      font-size: 0.95rem;
      text-align: center;
      letter-spacing: 0.01em;
      color: #0f172a;
    }
    .benchmark-table th,
    .benchmark-table td {
      padding: 0.9rem 1rem;
      border-bottom: 1px solid #e5e7eb;
      vertical-align: top;
      text-align: center;
    }
    .benchmark-table thead th {
      background: #111827;
      color: #f8fafc;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      font-size: 0.78rem;
    }
    .benchmark-table tbody tr:nth-child(odd) {
      background: #f9fafb;
    }
    .benchmark-table tbody tr:hover {
      background: #f3f4f6;
    }
    .benchmark-table th:nth-child(1),
    .benchmark-table td:nth-child(1),
    .benchmark-table th:nth-child(2),
    .benchmark-table td:nth-child(2) {
      text-align: left;
    }
    .benchmark-table th:nth-child(4),
    .benchmark-table td:nth-child(4) {
      background: #e8f9f1;
      color: #0f172a;
      font-weight: 800;
    }
    .benchmark-table td strong {
      color: #0f172a;
    }
    [data-theme='dark'] .benchmark-table {
      border-color: #262626;
      background: #0f1115;
    }
    [data-theme='dark'] .benchmark-table table {
      color: #e5e7eb;
    }
    [data-theme='dark'] .benchmark-table caption {
      color: #e5e7eb;
    }
    [data-theme='dark'] .benchmark-table th,
    [data-theme='dark'] .benchmark-table td {
      border-color: #1c1f26;
    }
    [data-theme='dark'] .benchmark-table thead th {
      background: #13161d;
      color: #e5e7eb;
    }
    [data-theme='dark'] .benchmark-table tbody tr:nth-child(odd) {
      background: #151820;
    }
    [data-theme='dark'] .benchmark-table tbody tr:nth-child(even) {
      background: #0f1115;
    }
    [data-theme='dark'] .benchmark-table tbody tr:hover {
      background: #1c1f28;
    }
    [data-theme='dark'] .benchmark-table th:nth-child(4),
    [data-theme='dark'] .benchmark-table td:nth-child(4) {
      background: #133524;
      color: #d8f3e6;
    }
    [data-theme='dark'] .benchmark-table td strong {
      color: #e5e7eb;
    }
    @media (max-width: 768px) {
      .benchmark-table th,
      .benchmark-table td {
        padding: 0.75rem 0.65rem;
        font-size: 0.9rem;
      }
      .benchmark-table caption {
        padding: 0.85rem 0.65rem;
      }
    }
  `}
</style>
