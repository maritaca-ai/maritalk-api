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

The limit is reached when either of these metrics (RPM or TPM) hits its maximum value. For example, if you are allowed to send 10 requests per minute (RPM = 10) and 100 tokens per minute (TPM = 100), sending 9 requests that consume 1000 tokens would exhaust your token limit first, even if you haven't reached the 10-request limit within that minute.

Note:

* Rate limits vary depending on the model used.
* For even larger demands, please contact us at suporte@maritaca.ai


## Usage Levels

As your API usage and spending increase, you are automatically promoted to the next tier. Each tier provides higher rate limits for the models.
**Note:** Initial credits and coupons do not count towards tier upgrades; only API spending does.

<div className="tier-grid">
  <div className="tier-card">
    <div className="tier-chip">Tier 0</div>
    <p className="tier-meta">Required spending: R$ 0</p>
    <p className="tier-note">To start testing</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 1</div>
    <p className="tier-meta">Required spending: any amount</p>
    <p className="tier-note">Once you have paid usage</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 2</div>
    <p className="tier-meta">Required spending: R$ 100</p>
    <p className="tier-note">More room for prototypes</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 3</div>
    <p className="tier-meta">Required spending: R$ 500</p>
    <p className="tier-note">For consistent workloads</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 4</div>
    <p className="tier-meta">Required spending: R$ 2,000</p>
    <p className="tier-note">Production operation</p>
  </div>
  <div className="tier-card">
    <div className="tier-chip">Tier 5</div>
    <p className="tier-meta">Required spending: R$ 5,000</p>
    <p className="tier-note">High volumes and squads</p>
  </div>
</div>

## Limits per tier

<div className="tier-grid tier-grid--wide">
  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 0</div>
    <p className="tier-meta">Moderate entry for testing</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Model</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
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
    <p className="tier-meta">For MVPs and first customers</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Model</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>1,000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabiazinho-4</td><td>1,000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabia-3</td><td>1,000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabia-3.1</td><td>1,000</td><td>2M</td><td>200k</td></tr>
        <tr><td>sabiazinho-3</td><td>1,000</td><td>2M</td><td>200k</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 2</div>
    <p className="tier-meta">Scaling with confidence</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Model</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>1,500</td><td>4M</td><td>350k</td></tr>
        <tr><td>sabiazinho-4</td><td>2,000</td><td>4M</td><td>400k</td></tr>
        <tr><td>sabia-3</td><td>1,500</td><td>4M</td><td>350k</td></tr>
        <tr><td>sabia-3.1</td><td>1,500</td><td>4M</td><td>350k</td></tr>
        <tr><td>sabiazinho-3</td><td>2,000</td><td>4M</td><td>400k</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 3</div>
    <p className="tier-meta">Intensive flows</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Model</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>2,000</td><td>6M</td><td>500k</td></tr>
        <tr><td>sabiazinho-4</td><td>5,000</td><td>20M</td><td>800k</td></tr>
        <tr><td>sabia-3</td><td>2,000</td><td>6M</td><td>500k</td></tr>
        <tr><td>sabia-3.1</td><td>2,000</td><td>6M</td><td>500k</td></tr>
        <tr><td>sabiazinho-3</td><td>5,000</td><td>20M</td><td>800k</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 4</div>
    <p className="tier-meta">Large-scale production</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Model</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>5,000</td><td>10M</td><td>1M</td></tr>
        <tr><td>sabiazinho-4</td><td>10,000</td><td>50M</td><td>2M</td></tr>
        <tr><td>sabia-3</td><td>5,000</td><td>10M</td><td>1M</td></tr>
        <tr><td>sabia-3.1</td><td>5,000</td><td>10M</td><td>1M</td></tr>
        <tr><td>sabiazinho-3</td><td>10,000</td><td>50M</td><td>2M</td></tr>
      </tbody>
    </table>
  </div>

  <div className="tier-card tier-card--table">
    <div className="tier-chip">Tier 5</div>
    <p className="tier-meta">Large operations</p>
    <table className="tier-table">
      <thead>
        <tr>
          <th>Model</th><th>RPM</th><th>TPM In</th><th>TPM Out</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>sabia-4</td><td>10,000</td><td>20M</td><td>2M</td></tr>
        <tr><td>sabiazinho-4</td><td>30,000</td><td>100M</td><td>10M</td></tr>
        <tr><td>sabia-3</td><td>10,000</td><td>20M</td><td>2M</td></tr>
        <tr><td>sabia-3.1</td><td>10,000</td><td>20M</td><td>2M</td></tr>
        <tr><td>sabiazinho-3</td><td>30,000</td><td>100M</td><td>10M</td></tr>
      </tbody>
    </table>
  </div>
</div>
