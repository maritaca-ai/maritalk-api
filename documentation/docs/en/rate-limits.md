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

*   Rate limits vary depending on the model used.


## Usage Levels

As your API usage and spending increase, you are automatically promoted to the next tier. Each tier provides higher rate limits for the models.

|Tier|Required Spending|
|---|---|
|Free| 0 | 
|Tier 1|Any API Spending|
|Tier 2|R$100 |
|Tier 3|R$500|
|Tier 4|R$2000|
|Tier 5|R$5000|

Select a tier below to view a general summary of rate limits per model:

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
|sabia-3|2000|4000000|400000|
|sabiazinho-3|2000|4000000|350000|


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

