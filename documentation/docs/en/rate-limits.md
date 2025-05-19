---
id: rate-limits
title: Rate Limits
---

# Rate Limits

**Rate Limits** are mechanisms that control how many requests or operations can be made within a specific time period. This practice is very common in various APIs as it helps prevent abuse and avoid overload.

## Why Are Rate Limits Important?

1. **Protection Against Abuse and API Attacks**  
   By enforcing request limits, we prevent malicious agents from making an excessive number of API calls to overload or disrupt the service.

2. **System Stability and Service Quality**  
   Limiting the number of requests ensures a more balanced distribution of resources. This way, when someone exceeds the request limit, the performance for other users remains unaffected. It guarantees equitable access to resources and maintains service quality.

## How Does Rate Limiting Work?

**User-Level Rate Limit**  
This establishes how many requests each user or API key can make within a specific time period. Rate limits are measured in two ways:

* RPM (Requests Per Minute)
* TPM (Tokens Per Minute)

The limit is reached when either of these metrics (RPM or TPM) hits its maximum value. For example, if you are allowed to send 10 requests per minute (RPM = 10) and 100 tokens per minute (TPM = 100), sending 9 requests that consume 1000 tokens would exhaust your token limit first, even if you haven’t reached the 10-request limit within that minute.

Note:

* Rate limits vary depending on the model used.
* For even larger demands, please contact us at suporte@maritaca.ai


## Usage Levels

As your API usage and spending increase, you are automatically promoted to the next tier. Each tier provides higher rate limits for the models.
**Note:** Initial credits and coupons do not count towards tier upgrades; only API spending does.

|Tier|Required Spending|
|---|---|
|Tier 0| 0 | 
|Tier 1|Any API Spending|
|Tier 2|R$100 |
|Tier 3|R$500|
|Tier 4|R$2,000|
|Tier 5|R$5,000|

### Tier 0 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|60|128,000|10,000|
|sabia-3.1|60|128,000|10,000|
|sabiazinho-3|60|128,000|10,000|

### Tier 1 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|1,000|2M|200,000|
|sabia-3.1|1,000|2M|200,000|
|sabiazinho-3|1,000|2M|200,000|

### Tier 2 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|1,500|4M|350,000|
|sabia-3.1|1,500|4M|350,000|
|sabiazinho-3|2,000|4M|400,000|


### Tier 3 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|2000|6M|500,000|
|sabia-3.1|2000|6M|500,000|
|sabiazinho-3|5000|20M|800,000|

### Tier 4 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|5,000|10M|1M|
|sabia-3.1|5,000|10M|1M|
|sabiazinho-3|10,000|50M|2M|


### Tier 5 rate limits

|Model|RPM|TPM Input|TPM Output|
|---|---|---|---|
|sabia-3|10,000|20M|2M|
|sabia-3.1|10,000|20M|2M|
|sabiazinho-3|30,000|100M|10M|

