# MariTalk Local - Exemplos

Nesta pasta, estão exemplos de como fazer o deploy da MariTalk Local em provedores de cloud ([Google Cloud Platform](./google-cloud.md) e [Oracle Cloud Infrastructure](./oracle-cloud.md)), em [containers Docker](./docker.md) e no [Google Colab Pro](./colab-pro.ipynb).

### Respondendo perguntas

O script [question_answering.py](./question_answering.py) contém um código de exemplo de uso da MariTalk Local para realizar a tarefa de resposta a perguntas (question answering). O texto de exemplo foi extraído do dataset [FaQuAD](https://huggingface.co/datasets/eraldoluis/faquad?row=32).

```
$ python question_answering.py
```

## Desempenho

Para a versão MariTalk-small rodando em uma máquina com 1xA100 40GB, é esperado um throughput de ~118 tokens/s, considerando uma entrada de 500 tokens e saída de 100 tokens. Ou seja, uma requisição com esse tamanho de entrada e saída demora cerca de 5 segundos para finalizar. Em um cenário com um prompt de 1.000 tokens e 500 tokens de saída, este tempo é cerca de 27 segundos. Conforme o número de requisições simultâneas aumenta, é esperado ver um aumento no throughput total do sistema e um aumento no tempo de resposta do ponto de vista de cada requisição isoladamente.

Na versão MariTalk-medium, rodando em uma máquina com 2xA100 40GB, a mesma requisição com 500 tokens de entrada e 100 tokens de saída demoraria cerca de 10 segundos.

Disponibilizamos [esta ferramenta de benchmark](https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/benchmark.py) para que você possa avaliar o desempenho no seu ambiente. Abaixo estão os resultados obtidos na versão atual em 23 de fevereiro de 2024.

### Resultados

| **GPU**     | **Modelo**     | **Total (token/s)** | **Geração (token/s)** |
|-------------|----------------|---------------------|-----------------------|
| 1xA100 40GB | Sabiá-2 Small  |               167.2 |                  42.2 |
| 2xA100 40GB | Sabiá-2 Small  |               213.5 |                  54.0 |
| 1xA10 24GB  | Sabiá-2 Small  |                89.8 |                  21.3 |
| 2xA100 40GB | Sabiá-2 Medium |                79.3 |                  18.6 |

### Detalhes

<details>
<summary><b>Sabiá-2 Small (GPU 1xA100 40GB)</b></summary>

- Total tokens: 167.2 tokens/s
- Generated tokens: 42.2 tokens/s

```console
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

![benchmark-small-2xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/524a0b74-7998-4f24-928d-61ae803b98eb)
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
