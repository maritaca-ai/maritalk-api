# Executando MariTalk Local na Google Cloud Platform (GCP)

Este tutorial mostra como executar a MariTalk Local Small na Google Cloud Platform (GCP). Para isso, utilizaremos uma instância com a GPU NVIDIA A100 40GB. Até o momento, o software também foi testado nas GPUs NVIDIA L4 e A10, mas é esperado que funcione com GPUs com *compute capability* >= 8.0 (`nvidia-smi --query-gpu=compute_cap --format=csv`).

1. Crie uma instância na GCP selecionando NVIDIA A100 como GPU utilizando a imagem Debian 11 com CUDA 11.3 para obter as biblitoecas necessárias. Abaixo está o comando para criar a instância usando `gcloud`.

```console
$ gcloud compute instances create maritalk-1 \
  --machine-type=a2-highgpu-1g \
  --zone=us-central1-c \
  --boot-disk-size=500G \
  --image=common-cu113-v20240128-debian-11 \
  --image-project=deeplearning-platform-release \
  --maintenance-policy=TERMINATE --restart-on-failure
```

2. Ao se conectar à máquina, você será questionado se deseja instalar as bibliotecas para preparar o ambiente. Responda com `y` e aguarde a instação. Após o processo de instalação, verifique se a GPU foi detectada com sucesso.

```
$ nvidia-smi
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 510.47.03    Driver Version: 510.47.03    CUDA Version: 11.6     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA A100-SXM...  On   | 00000000:00:04.0 Off |                    0 |
| N/A   29C    P0    45W / 400W |      0MiB / 40960MiB |      0%      Default |
|                               |                      |             Disabled |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

3. Instale a biblioteca Python para interagir com o servidor da MariTalk Local.

```
$ python3 -m pip install maritalk
```

4. Você pode iniciar o servidor da MariTalk Local manualmente ou utilizar o método `start_server` para fazer o download e iniciar o servidor automaticamente. Abra um console Python (`$ python3`) para iniciar o servidor e comece a testar!

```python
>>> import maritalk
>>> client = maritalk.MariTalkLocal()
>>> client.start_server(license='<SUA LICENÇA AQUI>')
Downloading MariTalk-small (path: /root/bin/maritalk)...
/root/bin/maritalk: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████| 14.6G/14.6G [09:42<00:00, 25.1MB/s]
Starting MariTalk Local API at http://localhost:9000
>>> client.status()
{'status': 'idle'}
>>> messages = [
...     {"role": "user", "content": "sugira três nomes para a minha cachorra"},
...     {"role": "assistant", "content": "nina, bela e luna."},
...     {"role": "user", "content": "e para o meu peixe?"},
... ]
>>> client.generate(messages)
{'output': 'azul, oceano e pepita.', 'queue_time': 0.224, 'generation_time': 0.407}
```

Para iniciar manualmente, primeiro faça download do executável que vai ser enviado por email após a adquirir a licença. Em seguida, execute:

```console
$ ./maritalk-cuda11 --license <SUA LICENÇA AQUI> --max-batch-total-tokens 32768
Starting MariTalk Local API v1.1...
✓ Loaded in 11s
[2024-02-22 18:20:56.260261670 +00:00] Warming up...
Start using MariTalk Local API:

        $ python
        >>> import maritalk
        >>> client = maritalk.MariTalkLocal()
        >>> messages = [
                {"role": "user", "content": "sugira três nomes para a minha cachorra"}
                {"role": "assistant", "content": "nina, bela e luna."}
                {"role": "user", "content": "e para o meu peixe?"}
        ]
        >>> client.generate_chat(messages)
        {'output': 'nani, bento e leo.', 'queue_time': 0, 'prompt_time': 185, 'generation_time': 127}

[2024-02-22 18:21:01.138028290 +00:00] Listening on http://0.0.0.0:9000
```

Você pode adquirir uma licença da MariTalk Local [neste link](https://maritaca.ai/#maritalk-local).

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
concurrenty                                                
1                    21.4   21.4  0.2      91.9   91.4  1.0
2                    15.0   15.2  0.5      64.3   64.5  0.5
4                     9.7   10.1  0.9      42.0   42.5  1.0
8                     5.8    5.9  0.6      24.8   24.9  0.6

System tokens
             median   std
concurrenty              
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
concurrenty                                                
1                    20.2   20.1  0.3      86.2   85.7  1.9
2                    18.5   18.6  1.1      78.0   77.8  2.1
4                    13.2   13.5  1.0      56.7   56.6  1.3
8                     8.5    8.7  1.0      36.5   36.7  1.1

System tokens
             median   std
concurrenty              
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
concurrenty                                                
1                    10.1   10.1  0.2      43.9   43.8  0.1
2                     7.2    7.2  0.2      31.5   31.5  0.2
4                     4.6    4.6  0.2      20.0   20.1  0.2
8                     2.7    2.7  0.2      11.6   11.7  0.2

System tokens
             median  std
concurrenty             
1              43.8  0.1
2              63.0  0.1
4              79.8  8.6
8              92.9  0.3
```

![benchmark-medium-2xa100](https://github.com/maritaca-ai/maritalk-api/assets/1206395/9bb16696-7d72-459b-b46f-1e45480ee6f2)
</details>
