---
id: google-cloud
title: Google Cloud
---

# Executando MariTalk Local na Google Cloud Platform (GCP)

Este tutorial mostra como executar a MariTalk Local Small na Google Cloud Platform (GCP). Para isso, utilizaremos uma instância com a GPU NVIDIA A100 40GB. Até o momento, o software também foi testado nas GPUs NVIDIA L4 e A10, mas é esperado que funcione em outras GPUs com [compute capability](https://developer.nvidia.com/cuda-gpus) 8.0+ (`nvidia-smi --query-gpu=compute_cap --format=csv`).

Para executar a versão Small, as máquinas precisam de pelo menos 32 GB de memória de CPU e uma GPU com 24 GB de memória. Para a versão Medium, é necessário um mínimo de 130 GB de memória de CPU e pelo menos 70 GB de memória de GPU, que podem ser distribuídos em mais de um dispositivo. Por exemplo, pode-se usar 2 GPUs A100 de 40 GB, 1 GPU A100 de 80 GB ou 4 GPUs A10 de 24 GB.

Você pode adquirir uma licença da MariTalk Local [neste link](https://maritaca.ai/#maritalk-local).

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

Para iniciar manualmente, primeiro faça download do executável que vai ser enviado por email após adquirir a licença. Em seguida, execute:

```console
$ ./maritalk-cuda11 --license <SUA LICENÇA AQUI> --max-batch-total-tokens 32768
Starting MariTalk Local API sabia-2-small-2024-03-13...
✓ Loaded in 11s
[2024-02-22 18:20:56 +0000] Warming up...
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
        {'output': 'azul, neon e dory.', 'queue_time': 0.224, 'generation_time': 0.407}

[2024-02-22 18:21:01 +0000] Listening on http://0.0.0.0:9000
```