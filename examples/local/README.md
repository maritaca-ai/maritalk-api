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


<details>
<summary><b>MariTalk-small on 1xA100 40GB</b></summary>

- Total tokens: 91.4 tokens/s
- Generated tokens: 21.4 tokens/s

```console
$ python benchmark.py --concurrency 1,2,4,8 --n-repeats 5 --prompt-size 550 --max-tokens 150
            generated_tps             total_tps
                     mean median  std      mean median  std
concurrency
1                    21.4   21.4  0.2      91.9   91.4  1.0
2                    15.0   15.2  0.5      64.3   64.5  0.5
4                     9.7   10.1  0.9      42.0   42.5  1.0
8                     5.8    5.9  0.6      24.8   24.9  0.6

System tokens
             median   std
concurrency
1              91.4   1.0
2             128.7   0.5
4             169.4  20.5
8             196.4  19.6
```
![benchmark-small-1xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/2bfbe758-f576-4a86-9379-be476336a4cb)
</details>

<details>
<summary><b>MariTalk-small on 2xA100 40GB</b></summary>

- Total tokens: 85.7 tokens/s
- Generated tokens: 20.1 tokens/s

```console
$ python benchmark.py --concurrency 1,2,4,8 --n-repeats 5 --prompt-size 550 --max-tokens 150
            generated_tps             total_tps
                     mean median  std      mean median  std
concurrency
1                    20.2   20.1  0.3      86.2   85.7  1.9
2                    18.5   18.6  1.1      78.0   77.8  2.1
4                    13.2   13.5  1.0      56.7   56.6  1.3
8                     8.5    8.7  1.0      36.5   36.7  1.1

System tokens
             median   std
concurrency
1              85.7   1.9
2             155.5  32.5
4             225.5  22.0
8             291.3  13.5
```

![benchmark-small-2xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/a8af0778-bbf8-4923-a845-391dcca5b054)
</details>

<details>
<summary><b>MariTalk-medium on 2xA100 40GB</b></summary>

- Total tokens: 43.8 tokens/s
- Generated tokens: 10.1 tokens/s

```console
$ python benchmark.py --concurrency 1,2,4,8 --n-repeats 5 --prompt-size 550 --max-tokens 150 --tokenizer maritaca-ai/maritalk-tokenizer-large
            generated_tps             total_tps
                     mean median  std      mean median  std
concurrency
1                    10.1   10.1  0.2      43.9   43.8  0.1
2                     7.2    7.2  0.2      31.5   31.5  0.2
4                     4.6    4.6  0.2      20.0   20.1  0.2
8                     2.7    2.7  0.2      11.6   11.7  0.2

System tokens
             median  std
concurrency
1              43.8  0.1
2              63.0  0.1
4              79.8  8.6
8              92.9  0.3
```

![benchmark-medium-2xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/9bb16696-7d72-459b-b46f-1e45480ee6f2)
</details>
