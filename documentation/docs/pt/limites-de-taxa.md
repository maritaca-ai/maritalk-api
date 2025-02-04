---
id: limites-de-taxa
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

*   Rate limits variam por modelo usado.


## Níveis de uso

Conforme o uso e o gasto na API aumentam, você é automaticamente promovido para o próximo nível. Cada nível oferece limites de taxa mais altos para os modelos.

|Tier|Gasto requerido|
|---|---|
|Free| 0 | 
|Tier 1|Qualquer gasto com a API|
|Tier 2|R$100 |
|Tier 3|R$500|
|Tier 4|R$2000|
|Tier 5|R$5000|

Selecione um nível abaixo para conferir o resumo geral dos limites de taxa por modelo:

### Free tier rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|60|128000|10000|
|sabiazinho-3|60|128000|10000|


### Tier 1 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|1000|2000000|200000|
|sabiazinho-3|1000|2000000|200000|


### Tier 2 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|1500|4000000|350000|
|sabiazinho-3|2000|4000000|400000|


### Tier 3 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|2000|6000000|500000|
|sabiazinho-3|5000|20000000|800000|


### Tier 4 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|5000|10000000|1000000|
|sabiazinho-3|10000|50000000|2000000|


### Tier 5 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|10000|20000000|2000000|
|sabiazinho-3|30000|100000000|10000000|

