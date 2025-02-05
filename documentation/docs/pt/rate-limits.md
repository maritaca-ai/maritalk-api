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
Estabelece quantas requisições cada usuário ou api_key pode fazer dentro de um período específico. Os limites de taxa são medidos de duas maneiras:

* RPM (Requisições por minuto)
* TPM (Tokens por minuto)

O limite é atingido quando qualquer uma dessas métricas (RPM ou TPM) chega ao valor máximo. Por exemplo, se você puder enviar 10 requisições por minuto (RPM = 10) e 100 tokens por minuto (TPM = 100), então enviar 9 requisições que somem 1000 tokens consumiria seu limite de tokens primeiro, mesmo que você ainda não tenha atingido as 10 requisições no mesmo minuto.

Observação:

* Rate limits variam por modelo usado.
* Para demandas ainda maiores, por favor nos contate em suporte@maritaca.ai


## Níveis de uso

Conforme o uso e o gasto na API aumentam, você é automaticamente promovido para o próximo nível. Cada nível oferece limites de taxa mais altos para os modelos.
**Observação:** Créditos iniciais e cupons não contam para subir de tier, apenas os gastos na API.

|Tier|Gasto requerido|
|---|---|
|Free| 0 | 
|Tier 1|Qualquer gasto com a API|
|Tier 2|R$100 |
|Tier 3|R$500|
|Tier 4|R$2.000|
|Tier 5|R$5.000|

Selecione um nível abaixo para conferir o resumo geral dos limites de taxa por modelo:

### Free tier rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|60|128.000|10.000|
|sabiazinho-3|60|128.000|10.000|


### Tier 1 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|1.000|2M|200.000|
|sabiazinho-3|1.000|2M|200.000|


### Tier 2 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|1.500|4M|350.000|
|sabiazinho-3|2.000|4M|400.000|


### Tier 3 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|2000|6M|500.000|
|sabiazinho-3|5000|20M|800.000|


### Tier 4 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|5.000|10M|1M|
|sabiazinho-3|10.000|50M|2M|


### Tier 5 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|10.000|20M|2M|
|sabiazinho-3|30.000|100M|10M|

