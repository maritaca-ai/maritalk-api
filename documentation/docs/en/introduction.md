# Introduction to Sabiá

Maritaca AI's Portuguese-specialized models, known as Sabiá, are available through an API.

Billing for model usage is based on the volume of tokens, considering both input and output data. The specialized training of the Sabiá models guarantees superior performance at a more accessible cost compared to other solutions on the market.


## What you can do with Sabiá

The Sabiá family of models, developed by Maritaca AI, can simulate human interactions in Portuguese with high fidelity. In addition to generating texts that cover a wide range of topics and communication styles, from everyday dialogues to complex analyses, it is a useful and accessible tool for anyone seeking meaningful interaction in Portuguese.

<div className="intro-features">
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-chat" aria-hidden="true"></span>
    <h3>Answer questions</h3>
    <p>It can answer a wide variety of questions on many different topics. The information provided is based on the training data, which includes a vast range of books, websites, and other materials.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-context" aria-hidden="true"></span>
    <h3>Provide Information</h3>
    <p>It can follow the context of a conversation and adjust responses accordingly, providing up-to-date information up to its cutoff date, such as details about historical events, science, technology, culture, and more.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-translate" aria-hidden="true"></span>
    <h3>Translation</h3>
    <p>It has the ability to translate texts to and from many different languages.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-education" aria-hidden="true"></span>
    <h3>Teaching and tutoring</h3>
    <p>It can help explain complex concepts and assist in learning various subjects, providing detailed explanations about a variety of topics.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-creative" aria-hidden="true"></span>
    <h3>Creative text generation</h3>
    <p>It can create texts, stories, poems, dialogues, and other creative content in Portuguese.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-support" aria-hidden="true"></span>
    <h3>Customer support</h3>
    <p>It is capable of helping with frequently asked questions and offering basic customer assistance.</p>
  </div>
  <div className="intro-feature-card">
    <span className="geo-icon geo-icon-data" aria-hidden="true"></span>
    <h3>Data analysis</h3>
    <p>It can help interpret and analyze provided data that do not require updates after the cutoff date.</p>
  </div>
</div>

It is important to remember that, although the models are a powerful tool for language tasks, they do not have consciousness or real understanding and their responses are based on language patterns learned during training.

---
## Performance

Thanks to our specialized training in Portuguese and Brazilian-specific contexts, our models achieve strong performance on national benchmarks at significantly lower cost than comparable alternatives. The table below compares Sabiazinho 4, Sabiazinho 3, and competing models across a range of Brazilian evaluations—including legal exams, educational assessments, legislative knowledge, agentic capabilities, and conversational skills—taking into account both quality and API execution cost.

The results show that Sabiazinho 4 leads most Brazil-focused benchmarks, such as legal writing (OAB and Magis), knowledge of Brazilian legislation, and Portuguese conversational ability, while maintaining a substantially lower execution cost than comparable models.

This comparison highlights that our models offer a competitive combination of high performance on real Brazilian tasks and cost efficiency, making them particularly well suited for legal, educational, and institutional applications in Brazil.

<div className="benchmark-table">
  <table>
    <caption>Comparison of performance and cost on Brazilian benchmarks</caption>
    <thead>
      <tr>
        <th>Benchmark</th>
        <th>Description</th>
        <th>Metric</th>
        <th>Sabiazinho 4</th>
        <th>Sabiazinho 3</th>
        <th>gpt-oss 120b</th>
        <th>GPT-4.1 mini</th>
        <th>GPT-5.1 mini</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cost</td>
        <td>Cost to run the benchmarks below</td>
        <td>Brazilian reais spent on tokens via API</td>
        <td>R$ 15.87</td>
        <td>R$ 9.42</td>
        <td>R$ 31.76</td>
        <td>R$ 47.59</td>
        <td>R$ 101.94</td>
      </tr>
      <tr>
        <td>OAB Bench</td>
        <td>Legal writing (lawyer) – 21 exams</td>
        <td>Average score (0–10)</td>
        <td><strong>7.02</strong></td>
        <td>6.01</td>
        <td>5.99</td>
        <td>5.50</td>
        <td>6.37</td>
      </tr>
      <tr>
        <td>Magis Bench</td>
        <td>Legal writing (judge) – 24 exams</td>
        <td>Average score (0–10)</td>
        <td><strong>4.50</strong></td>
        <td>3.64</td>
        <td>3.62</td>
        <td>3.67</td>
        <td>4.47</td>
      </tr>
      <tr>
        <td>Brazilian laws</td>
        <td>Knowledge of Brazilian legislation</td>
        <td>Accuracy (5 options)</td>
        <td><strong>85.0%</strong></td>
        <td>72.9%</td>
        <td>52.3%</td>
        <td>57.0%</td>
        <td>68.2%</td>
      </tr>
      <tr>
        <td>Agentic capabilities</td>
        <td>Use of tools and environments in Portuguese</td>
        <td>Pass³ and success@1</td>
        <td>55.2%</td>
        <td>14.1%</td>
        <td>60.9%</td>
        <td>59.4%</td>
        <td><strong>85.1%</strong></td>
      </tr>
      <tr>
        <td>Brazilian exams</td>
        <td>13 exams (ENEM, USP, OAB, etc.)</td>
        <td>Accuracy (4 and 5 options)</td>
        <td>81.5%</td>
        <td>77.9%</td>
        <td>77.0%</td>
        <td>81.0%</td>
        <td><strong>84.6%</strong></td>
      </tr>
      <tr>
        <td>Portuguese Multi-IF</td>
        <td>Ability to follow instructions</td>
        <td>Strict, average of 3 turns</td>
        <td>81.4%</td>
        <td>72.2%</td>
        <td>82.0%</td>
        <td>79.6%</td>
        <td><strong>85.8%</strong></td>
      </tr>
      <tr>
        <td>BRACEval</td>
        <td>Conversational skills in Portuguese</td>
        <td>Wins against GPT-4o</td>
        <td><strong>66.5%</strong></td>
        <td>36.2%</td>
        <td>55.8%</td>
        <td>32.7%</td>
        <td>56.3%</td>
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
