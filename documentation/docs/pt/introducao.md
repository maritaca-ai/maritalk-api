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
    <p>Pode seguir o contexto de uma conversa e ajustar as respostas de acordo com a situação, fornecendo informações sobre eventos históricos, ciência, tecnologia, cultura e muito mais.</p>
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
    <p>Pode ajudar a interpretar e analisar dados fornecidos.</p>
  </div>
</div>

É importante lembrar que, embora os modelos sejam uma ferramenta poderosa para tarefas de linguagem, eles não possuem consciência ou entendimento real e suas respostas são baseadas em padrões de linguagem aprendidos durante o treinamento.

---
## Desempenho

Graças ao nosso treinamento especializado em português e em contextos brasileiros, nossos modelos apresentam excelente desempenho em benchmarks nacionais, com custos significativamente menores do que alternativas comparáveis.

### Sabiá 4 Thinking

Sabiá 4 Thinking é o modelo de raciocínio da família Sabiá: alcança qualidade de fronteira em português e contextos brasileiros pelo menor custo entre os modelos avaliados. Em relação ao Sabiá 4, traz ganhos expressivos em uso de ferramentas, tarefas jurídicas e qualidade das respostas.

A tabela abaixo traz o desempenho do Sabiá 4 Thinking, benchmark a benchmark, frente aos principais modelos de fronteira, em três frentes: chamada de função e agentes, jurídico e tarefas gerais. Os concorrentes (Gemini 3.1 Pro, GPT-5.4 e Opus 4.8) foram avaliados com *reasoning effort* medium. Rodar a suíte completa custa, no Sabiá 4 Thinking, menos da metade do GPT-5.4 e cerca de um terço do Opus 4.8. Em **negrito**, o melhor de cada linha.

<style>{`
  .bench-thinking { margin: 1.75rem auto; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; overflow-x: auto; }
  .bench-thinking table { width: 100%; table-layout: fixed; border-collapse: collapse; }
  .bench-thinking caption { padding: 1rem 1.25rem; font-weight: 700; font-size: 0.95rem; text-align: center; color: #0f172a; }
  .bench-thinking th, .bench-thinking td { padding: 0.6rem 0.5rem; border-bottom: 1px solid #e5e7eb; text-align: center; vertical-align: middle; font-size: 0.82rem; }
  .bench-thinking thead th { background: #111827; color: #f8fafc; text-transform: uppercase; letter-spacing: 0.02em; font-size: 0.72rem; white-space: normal; line-height: 1.25; }
  .bench-thinking thead th .eff { display: block; text-transform: none; font-weight: 400; font-size: 0.9em; opacity: 0.7; letter-spacing: 0; margin-top: 3px; }
  .bench-thinking th:nth-child(1), .bench-thinking td:nth-child(1) { text-align: left; width: 32%; }
  .bench-thinking th:nth-child(2), .bench-thinking td:nth-child(2) { background: #e8f9f1; color: #0f172a; font-weight: 600; }
  .bench-thinking tbody tr:nth-child(odd) { background: #f9fafb; }
  .bench-thinking td.grp { text-align: left; background: #fff; color: #ea580c; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding-top: 1rem; padding-bottom: 0.35rem; }
  .bench-thinking .src { color: #94a3b8; font-weight: 400; }
  [data-theme='dark'] .bench-thinking { border-color: #262626; background: #0f1115; }
  [data-theme='dark'] .bench-thinking th, [data-theme='dark'] .bench-thinking td { border-color: #262626; color: #e5e7eb; }
  [data-theme='dark'] .bench-thinking thead th { background: #1f2937; color: #f8fafc; }
  [data-theme='dark'] .bench-thinking tbody tr:nth-child(odd) { background: #161922; }
  [data-theme='dark'] .bench-thinking td:nth-child(2) { background: rgba(110,212,75,0.14); color: #e5e7eb; }
  [data-theme='dark'] .bench-thinking td.grp { background: #0f1115; color: #fb923c; }
`}</style>

<div className="bench-thinking">
  <table>
    <caption>Sabiá 4 Thinking — desempenho por benchmark vs. modelos de fronteira</caption>
    <thead>
      <tr>
        <th>Benchmark</th>
        <th>Sabiá 4<br/>Thinking</th>
        <th>Gemini 3.1 Pro<span className="eff">(effort medium)</span></th>
        <th>GPT-5.4<span className="eff">(effort medium)</span></th>
        <th>Opus 4.8<span className="eff">(effort medium)</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Custo total <span className="src">· R$ para rodar a suíte</span></td>
        <td><strong>R$ 206</strong></td>
        <td>R$ 281</td>
        <td>R$ 449</td>
        <td>R$ 590</td>
      </tr>
      <tr><td className="grp" colSpan={5}>Chamada de função / Agentes</td></tr>
      <tr>
        <td>Pix-Bench <span className="src">· interno</span></td>
        <td><strong>100%</strong></td>
        <td><strong>100%</strong></td>
        <td><strong>100%</strong></td>
        <td>97%</td>
      </tr>
      <tr>
        <td>Ticket-Bench <span className="src">· público</span></td>
        <td>98%</td>
        <td><strong>100%</strong></td>
        <td>98%</td>
        <td>96,7%</td>
      </tr>
      <tr>
        <td>MARCA <span className="src">· público</span></td>
        <td>83,9%</td>
        <td>84,8%</td>
        <td><strong>93,2%</strong></td>
        <td>91,5%</td>
      </tr>
      <tr><td className="grp" colSpan={5}>Jurídico</td></tr>
      <tr>
        <td>OAB (juiz) <span className="src">· interno</span></td>
        <td>90,1%</td>
        <td>91,1%</td>
        <td><strong>91,6%</strong></td>
        <td>90,1%</td>
      </tr>
      <tr>
        <td>Redação jurídica <span className="src">· interno</span></td>
        <td><strong>77,7%</strong></td>
        <td>75,9%</td>
        <td>72,8%</td>
        <td>74,8%</td>
      </tr>
      <tr>
        <td>Extração de processos <span className="src">· interno</span></td>
        <td>92,3%</td>
        <td>91,4%</td>
        <td><strong>95,7%</strong></td>
        <td>94,3%</td>
      </tr>
      <tr><td className="grp" colSpan={5}>Geral</td></tr>
      <tr>
        <td>BLUEX <span className="src">· público</span></td>
        <td>93%</td>
        <td><strong>96,8%</strong></td>
        <td>95,7%</td>
        <td>95,4%</td>
      </tr>
      <tr>
        <td>ENAMED <span className="src">· público</span></td>
        <td>94,4%</td>
        <td><strong>98,9%</strong></td>
        <td>97,8%</td>
        <td>97,8%</td>
      </tr>
      <tr>
        <td>POSCOMP <span className="src">· público</span></td>
        <td>90,8%</td>
        <td>94,6%</td>
        <td>94,6%</td>
        <td><strong>96,2%</strong></td>
      </tr>
      <tr>
        <td>PoETa v2 <span className="src">· público</span></td>
        <td>83,7%</td>
        <td>85%</td>
        <td>83,3%</td>
        <td><strong>86,3%</strong></td>
      </tr>
      <tr>
        <td>Sotaques Digitais <span className="src">· público</span></td>
        <td>94,6%</td>
        <td>97,6%</td>
        <td><strong>97,8%</strong></td>
        <td><strong>97,8%</strong></td>
      </tr>
    </tbody>
  </table>
</div>

### Sabiá 4

Leia o [artigo técnico (arXiv)](https://arxiv.org/abs/2603.10213) para mais detalhes sobre o Sabiá 4.

A tabela abaixo compara Sabiá 4, Sabiá 3.1 e modelos concorrentes em uma série de avaliações brasileiras — incluindo exames jurídicos, provas educacionais, conhecimento legislativo, capacidade agêntica e habilidades conversacionais (considerando qualidade e custo de execução via API).

O Sabiá 4 tem uma maior acurácia em Leis Brasileiras e melhorias consistentes frente ao Sabiá 3.1 em todas as demais métricas, com destaque para capacidades agênticas. Com um custo muito abaixo do cobrado pelos modelos de fronteira listados.

Essa combinação reforça o Sabiá 4 como escolha equilibrada para aplicações jurídicas, educacionais e institucionais no Brasil que exigem contexto local e boa relação custo-desempenho.

<style>{`
  .bench-thinking.wide table { table-layout: auto; min-width: 980px; }
  .bench-thinking.wide thead th { white-space: nowrap; }
  .bench-thinking.wide th:nth-child(2), .bench-thinking.wide td:nth-child(2) { display: none; }
  .bench-thinking.wide th:nth-child(1), .bench-thinking.wide td:nth-child(1) { width: auto; }
  .bench-thinking.wide th:nth-child(2), .bench-thinking.wide td:nth-child(2), .bench-thinking.wide th:nth-child(3), .bench-thinking.wide td:nth-child(3) { text-align: left; }
  .bench-thinking.wide td:nth-child(2) { background: transparent; color: inherit; font-weight: 400; }
  .bench-thinking.wide thead th:nth-child(2) { background: #111827; color: #f8fafc; }
  .bench-thinking.wide th:nth-child(4), .bench-thinking.wide td:nth-child(4) { background: #e8f9f1; color: #0f172a; font-weight: 600; }
  [data-theme='dark'] .bench-thinking.wide thead th:nth-child(2) { background: #1f2937; color: #f8fafc; }
  [data-theme='dark'] .bench-thinking.wide thead th:nth-child(4) { background: #1f2937; color: #f8fafc; }
  [data-theme='dark'] .bench-thinking.wide td:nth-child(2) { background: transparent; color: #e5e7eb; }
  [data-theme='dark'] .bench-thinking.wide td:nth-child(4) { background: rgba(110,212,75,0.14); color: #e5e7eb; }
`}</style>

<div className="bench-thinking wide">
  <table>
    <caption>Comparação de desempenho e custo em benchmarks brasileiros</caption>
    <thead>
      <tr>
        <th>Benchmark</th>
        <th>Descrição</th>
        <th>Métrica</th>
        <th>Sabiá-4</th>
        <th>Sabiá-3.1</th>
        <th>GPT-4.1</th>
        <th>GPT-5.2 s/ reasoning</th>
        <th>GPT-5.2 reasoning</th>
        <th>Gemini-3-Pro (low)</th>
        <th>Gemini-3-Pro (high)</th>
        <th>Kimi-k2-thinking</th>
        <th>Qwen3-235b-instruct-2507</th>
        <th>Deepseek-v3.2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Custo</td>
        <td>Custo para rodar os benchmarks abaixo</td>
        <td>Reais gastos em tokens via API</td>
        <td>R$ 80,49</td>
        <td>R$ 62,15</td>
        <td>R$ 182,49</td>
        <td>R$ 307,12</td>
        <td>R$ 752,41</td>
        <td>R$ 403,31</td>
        <td>R$ 804,07</td>
        <td>R$ 516,52</td>
        <td>R$ 44,36</td>
        <td>R$ 49,22</td>
      </tr>
      <tr>
        <td>Leis brasileiras</td>
        <td>Conhecimento da legislação brasileira</td>
        <td>Acurácia (5 alternativas)</td>
        <td><strong>97,4%</strong></td>
        <td>77,8%</td>
        <td>80,8%</td>
        <td>84,0%</td>
        <td>86,3%</td>
        <td>74,9%</td>
        <td>88,6%</td>
        <td>59,1%</td>
        <td>65,9%</td>
        <td>67,3%</td>
      </tr>
      <tr>
        <td>OAB Bench</td>
        <td>Redação jurídica (advogado) – 21 provas</td>
        <td>Pontuação média (0–10)</td>
        <td><strong>7,49</strong></td>
        <td>7,21</td>
        <td>7,30</td>
        <td>8,07</td>
        <td>8,73</td>
        <td>9,05</td>
        <td>8,90</td>
        <td>6,62</td>
        <td>6,33</td>
        <td>6,40</td>
      </tr>
      <tr>
        <td>Magis Bench</td>
        <td>Redação jurídica (juiz) – 24 provas</td>
        <td>Pontuação média (0–10)</td>
        <td><strong>5,08</strong></td>
        <td>4,97</td>
        <td>5,55</td>
        <td>6,66</td>
        <td>6,99</td>
        <td>7,79</td>
        <td>7,48</td>
        <td>4,49</td>
        <td>4,52</td>
        <td>4,88</td>
      </tr>
      <tr>
        <td>Capacidades Agênticas</td>
        <td>Uso de ferramentas e ambientes em português</td>
        <td>Pass³ e success@1</td>
        <td>72,2%</td>
        <td>43,1%</td>
        <td>73,3%</td>
        <td>81,1%</td>
        <td>85,7%</td>
        <td><strong>90,4%</strong></td>
        <td>90,1%</td>
        <td>77,3%</td>
        <td>67,8%</td>
        <td>40,5%</td>
      </tr>
      <tr>
        <td>Provas brasileiras</td>
        <td>13 provas (ENEM, USP, OAB, etc.)</td>
        <td>Acurácia (4 e 5 alternativas)</td>
        <td>86,6%</td>
        <td>82,4%</td>
        <td>86,1%</td>
        <td>88,0%</td>
        <td>92,9%</td>
        <td>93,3%</td>
        <td><strong>95,0%</strong></td>
        <td>83,0%</td>
        <td>82,0%</td>
        <td>84,0%</td>
      </tr>
      <tr>
        <td>Multi-IF Português</td>
        <td>Capacidade de seguir instruções</td>
        <td>Strict, média de 3 turnos</td>
        <td>82,0%</td>
        <td>80,7%</td>
        <td>82,7%</td>
        <td>83,7%</td>
        <td>87,2%</td>
        <td>86,0%</td>
        <td><strong>88,0%</strong></td>
        <td>86,0%</td>
        <td>84,4%</td>
        <td>81,5%</td>
      </tr>
      <tr>
        <td>BRACEval</td>
        <td>Habilidades conversacionais em português</td>
        <td>Vitórias contra GPT-4o</td>
        <td>53,8%</td>
        <td>44,6%</td>
        <td>50,2%</td>
        <td>59,0%</td>
        <td>60,2%</td>
        <td><strong>70,8%</strong></td>
        <td>68,1%</td>
        <td>56,9%</td>
        <td>65,6%</td>
        <td>60,8%</td>
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
      min-width: 980px;
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
      white-space: nowrap;
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
    /* destaca a coluna Sabiá-4 */
    .benchmark-table th:nth-child(4),
    .benchmark-table td:nth-child(4) {
      background: #e8f9f1;
      color: #0f172a;
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
