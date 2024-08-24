---
id: maritalk-local-introduction
title: Introduction
---
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles-maritalk-local.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';

# Maritalk Local
In addition to using our models via API, you can also host them locally. Your data never leaves your local machine; only information about the usage time of the model is sent to our servers for billing purposes. The licensing policy of "Maritalk Local" allows for multiple simultaneous instances per license, with the value charged proportionally to the number of active instances. Users are not limited to hardware, meaning they can switch as often as they wish without restrictions.

## Examples

<div className={styles.grid}>
  <Link to="google-cloud" className={styles.card}>
    <FontAwesomeIcon icon={faCloud} className={styles.icon} />
    <h3>Google Cloud Platform</h3>
    <p>See how to deploy MariTalk Local on GCP.</p>
  </Link>
  <Link to="oracle-cloud" className={styles.card}>
    <FontAwesomeIcon icon={faServer} className={styles.icon} />
    <h3>Oracle Cloud Infrastructure</h3>
    <p>See how to deploy MariTalk Local on OCI.</p>
  </Link>
  <Link to="docker" className={styles.card}>
    <FontAwesomeIcon icon={faDocker} className={styles.icon} />
    <h3>Docker</h3>
    <p>See how to run MariTalk Local in Docker containers.</p>
  </Link>
  <Link to="https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/colab-pro.ipynb" className={styles.card}>
    <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
    <h3>Google Colab Pro</h3>
    <p>See how to use MariTalk Local on Google Colab Pro.</p>
  </Link>
</div>

## Performance

For the Sabiá-2 Small version running on a machine with 1xA100 40GB, an expected throughput of ~118 tokens/s is achieved, considering an input of 500 tokens and output of 100 tokens. That is, a request with this size of input and output takes about 5 seconds to complete. In a scenario with a prompt of 1,000 tokens and 500 tokens output, this time is about 27 seconds. As the number of simultaneous requests increases, it is expected to see an increase in the total throughput of the system and an increase in the response time from the perspective of each request individually.

In the Sabiá-2 Medium version, running on a machine with 2xA100 40GB, the same request with 500 input tokens and 100 output tokens would take about 10 seconds.

We provide [this benchmark tool](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/benchmark.py) for you to evaluate performance in your environment. Below are the results obtained in the current version on February 23, 2024.

### Results

| **GPU**     | **Model**     | **Memory Required** | **Total (token/s)** | **Generation (token/s)** |
|-------------|----------------|---------------------|---------------------|--------------------------|
| 1xA100 40GB | Sabiá-2 Small  | 20GB                | 167.2               | 42.2                     |
| 2xA100 40GB | Sabiá-2 Small  | 20GB                | 213.5               | 54.0                     |
| 1xA10 24GB  | Sabiá-2 Small  | 20GB                | 89.8                | 21.3                     |
| 2xA100 40GB | Sabiá-2 Medium | 70GB                | 79.3                | 18.6                     |

### Details

<details>
<summary><b>Sabiá-2 Small (GPU 1xA100 40GB)</b></summary>

- Total tokens: 167.2 tokens/s
- Generated tokens: 42.2 tokens/s

```bash
$ python benchmark.py --concurrency 1,2,4,8 --n-repeats 5 --prompt-size 550 --max-tokens 150
            generated_tps             total_tps
                     mean median  std      mean median  std
concurrency
1                    42.2   42.2  0.3     167.1  167.2  0.7
2                    24.2   24.2  1.0     101.4  101.4  0.9
4                    13.0   13.2  1.0      56.5   57.1  2.5
8                     7.1    7.2  0.6      30.8   30.9  0.6

System tokens
             median   std
concurrency
1             167.2   0.7
2             202.9   0.1
4             230.4  10.3
8             245.8  11.9
```
![benchmark-small-1xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/7acfb1c6-b2a2-40e4-b6e7-2ed08201819d)
</details>

<details>
<summary><b>Sabiá-2 Small (GPU 2xA100 40GB)</b></summary>

- Total tokens: 213.5 tokens/s
- Generated tokens: 54.0 tokens/s

```console
$ python benchmark.py --concurrency 1,2,4,8 --n-repeats 5 --prompt-size 550 --max-tokens 150
            generated_tps             total_tps
                     mean median  std      mean median   std
concurrency
1                    54.0   53.6  0.8     213.5  208.1  12.3
2                    33.2   33.1  1.4     135.6  135.6   1.2
4                    20.1   20.6  1.3      85.2   85.6   1.2
8                    11.1   11.2  0.9      48.1   48.3   0.9

System tokens
             median   std
concurrency
1             208.1  12.3
2             271.3   0.3
4             340.8   0.8
8             384.7   1.0
```

![benchmark-small-2xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/524a0b74-7998-4f24-928d-61ae803b98eb)
</details>

<details>
<summary><b>Sabiá-2 Small (GPU 1xA10 24GB)</b></summary>

- Total tokens: 89.8 tokens/s
- Generated tokens: 21.3 tokens/s

```console
$ python benchmark.py --concurrency 1,2,4,8 --n-repeats 5 --prompt-size 550 --max-tokens 150
            generated_tps             total_tps
                     mean median  std      mean median  std
concurrency
1                    21.3   21.3  0.2      89.8   88.6  2.2
2                    11.3   11.2  0.4      47.7   48.0  0.9
4                     5.8    5.9  0.3      24.4   24.5  0.3
8                     2.9    2.9  0.2      12.2   12.2  0.2

System tokens
             median  std
concurrency
1              88.6  2.2
2              96.4  1.9
4              97.6  0.2
8              97.5  0.2
```

![benchmark-small-1xa10](https://github.com/maritaca-ai/maritalk-api/assets/1206395/524a0b74-7998-4f24-928d-61ae803b98eb)
</details>

<details>
<summary><b>Sabiá-2 Medium (GPU 2xA100 40GB)</b></summary>

- Total tokens: 79.3 tokens/s
- Generated tokens: 18.6 tokens/s

```console
$ python benchmark.py --concurrency 1,2,4,8 --n-repeats 5 --prompt-size 550 --max-tokens 150 --tokenizer maritaca-ai/maritalk-tokenizer-large
            generated_tps             total_tps
                     mean median  std      mean median  std
concurrency
1                    18.6   18.6  0.3      79.3   78.9  1.0
2                    10.4   10.5  0.4      44.9   45.0  0.6
4                     5.8    5.8  0.2      25.5   25.5  0.2
8                     3.1    3.1  0.2      13.6   13.7  0.2

System tokens
             median  std
concurrency
1              78.9  1.0
2              90.1  1.1
4             101.9  0.1
8             108.9  0.2
```

![benchmark-medium-2xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/a379f94b-4472-4eeb-b166-d262bf853a1c)
</details>
