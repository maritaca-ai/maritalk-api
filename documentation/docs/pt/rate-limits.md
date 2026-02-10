---
id: rate-limits
title: Rate Limits
---

# Rate Limits

Os **Rate Limits** são mecanismos que controlam quantas requisições ou operações podem ser feitas em um período de tempo específico. Essa prática é muito comum em diversas APIs, pois ajuda a prevenir abusos e evitar sobrecargas.

## Por que Rate Limits são importantes?

1. **Proteção contra abuso e ataques contra a API**  
   Ao impor limites de requisição, evitamos que um agente mal-intencionado possa fazer inúmeras chamadas à API para sobrecarregá-la ou interromper o serviço.

2. **Estabilidade do sistema e qualidade de serviço**  
   Ao limitar o número de requisições, garantimos uma distribuição mais equilibrada dos recursos. Dessa forma, quando alguém excede o número de solicitações, o desempenho para os demais usuários não é afetado. Isso assegura que todos tenham acesso equitativo aos recursos e mantém a qualidade do serviço.

## Como funciona o Rate Limit?

**Limite por usuário (user-level rate limit)**  
Estabelece quantas requisições cada usuário ou api_key pode fazer dentro de um período específico. Os rate limits são medidos de duas maneiras:

* RPM (Requisições por minuto)
* TPM (Tokens por minuto)

O limite é atingido quando qualquer uma dessas métricas (RPM ou TPM) chega ao valor máximo. Por exemplo, se você puder enviar 10 requisições por minuto (RPM = 10) e 100 tokens por minuto (TPM = 100), então enviar 9 requisições que somem 1000 tokens consumiria seu limite de tokens primeiro, mesmo que você ainda não tenha atingido as 10 requisições no mesmo minuto.

Observação:

* Rate limits variam por modelo usado.
* Para demandas ainda maiores, por favor nos contate em suporte@maritaca.ai


## Níveis de uso

Conforme o uso e o gasto na API aumentam, você é automaticamente promovido para o próximo nível. Cada nível oferece rate limits mais altos para os modelos.  
**Observação:** créditos iniciais e cupons não contam para subir de tier, apenas os gastos na API.

<div className="tier-grid">
  <div className="tier-card">
    <div className="tier-chip">Tier 0</div>
    <p className="tier-meta">Gasto requerido: R$ 0</p>
    <p className="tier-note">Para começar a testar</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 1</div>
    <p className="tier-meta">Gasto requerido: qualquer valor</p>
    <p className="tier-note">Assim que tiver uso pago</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 2</div>
    <p className="tier-meta">Gasto requerido: R$ 100</p>
    <p className="tier-note">Mais fôlego para protótipos</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 3</div>
    <p className="tier-meta">Gasto requerido: R$ 500</p>
    <p className="tier-note">Para workloads consistentes</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 4</div>
    <p className="tier-meta">Gasto requerido: R$ 2.000</p>
    <p className="tier-note">Operação em produção</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 5</div>
    <p className="tier-meta">Gasto requerido: R$ 5.000</p>
    <p className="tier-note">Altos volumes e squads</p>
  </div>
</div>

## Limites por tier

<div className="tier-grid tier-grid--wide">
  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 0</div>
    <p className="tier-meta">Entrada moderada para testes</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Modelo</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>60</td><td>128k</td><td>10k</td></tr>
        <tr><td>sabiazinho-4</td><td>60</td><td>128k</td><td>10k</td></tr>
        <tr><td>sabia-3</td><td>60</td><td>128k</td><td>10k</td></tr>
        <tr><td>sabia-3.1</td><td>60</td><td>128k</td><td>10k</td></tr>
        <tr><td>sabiazinho-3</td><td>60</td><td>128k</td><td>10k</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 1</div>
    <p className="tier-meta">Para MVPs e primeiros clientes</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Modelo</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>1.000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabiazinho-4</td><td>1.000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabia-3</td><td>1.000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabia-3.1</td><td>1.000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabiazinho-3</td><td>1.000</td><td>2M</td><td>200k</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 2</div>
    <p className="tier-meta">Escalando com segurança</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Modelo</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>1.500</td><td>4M</td><td>350k</td></tr>
        <tr><td>sabiazinho-4</td><td>2.000</td><td>4M</td><td>400k</td></tr>
        <tr><td>sabia-3</td><td>1.500</td><td>4M</td><td>350k</td></tr>
        <tr><td>sabia-3.1</td><td>1.500</td><td>4M</td><td>350k</td></tr>
        <tr><td>sabiazinho-3</td><td>2.000</td><td>4M</td><td>400k</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 3</div>
    <p className="tier-meta">Fluxos intensos</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Modelo</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>2.000</td><td>6M</td><td>500k</td></tr>
        <tr><td>sabiazinho-4</td><td>5.000</td><td>20M</td><td>800k</td></tr>
        <tr><td>sabia-3</td><td>2.000</td><td>6M</td><td>500k</td></tr>
        <tr><td>sabia-3.1</td><td>2.000</td><td>6M</td><td>500k</td></tr>
        <tr><td>sabiazinho-3</td><td>5.000</td><td>20M</td><td>800k</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 4</div>
    <p className="tier-meta">Produção em larga escala</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Modelo</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>5.000</td><td>10M</td><td>1M</td></tr>
        <tr><td>sabiazinho-4</td><td>10.000</td><td>50M</td><td>2M</td></tr>
        <tr><td>sabia-3</td><td>5.000</td><td>10M</td><td>1M</td></tr>
        <tr><td>sabia-3.1</td><td>5.000</td><td>10M</td><td>1M</td></tr>
        <tr><td>sabiazinho-3</td><td>10.000</td><td>50M</td><td>2M</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 5</div>
    <p className="tier-meta">Grandes operações</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Modelo</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>10.000</td><td>20M</td><td>2M</td></tr>
        <tr><td>sabiazinho-4</td><td>30.000</td><td>100M</td><td>10M</td></tr>
        <tr><td>sabia-3</td><td>10.000</td><td>20M</td><td>2M</td></tr>
        <tr><td>sabia-3.1</td><td>10.000</td><td>20M</td><td>2M</td></tr>
        <tr><td>sabiazinho-3</td><td>30.000</td><td>100M</td><td>10M</td></tr>
      </tbody>
    </table>
  </div>
</div>
