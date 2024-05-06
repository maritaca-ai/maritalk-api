# Executando MariTalk Local na Oracle Cloud Infrastructure (OCI)

Este tutorial mostra como executar a MariTalk Local na Oracle Cloud Infrastructure (OCI). Para isso, utilizaremos uma instância com a GPU NVIDIA A10 24GB (`VM.GPU.A10.1`). Até o momento, o software também foi testado nas GPUs NVIDIA L4 e A100, mas é esperado que funcione em outras GPUs com [compute capability](https://developer.nvidia.com/cuda-gpus) 8.0+ (`nvidia-smi --query-gpu=compute_cap --format=csv`).

Para executar a versão Small, as máquinas precisam de pelo menos 32 GB de memória de CPU e uma GPU com 24 GB de memória. Para a versão Medium, é necessário um mínimo de 130 GB de memória de CPU e pelo menos 70 GB de memória de GPU, que podem ser distribuídos em mais de um dispositivo. Por exemplo, pode-se usar 2 GPUs A100 de 40 GB, 1 GPU A100 de 80 GB ou 4 GPUs A10 de 24 GB.

Você pode adquirir uma licença da MariTalk Local [neste link](https://maritaca.ai/#maritalk-local).

1. Crie uma instância na OCI selecionando `NVIDIA GPU Cloud Machine Image` como imagem e `VM.GPU.A10.1` como shape.

![](/.github/imgs/oracle-screenshot.png)

2. Verifique se a GPU foi detectada com sucesso.

```
$ nvidia-smi
+---------------------------------------------------------------------------------------+
| NVIDIA-SMI 530.30.02              Driver Version: 530.30.02    CUDA Version: 12.1     |
|-----------------------------------------+----------------------+----------------------+
| GPU  Name                  Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf            Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                                         |                      |               MIG M. |
|=========================================+======================+======================|
|   0  NVIDIA A10                      On | 00000000:00:04.0 Off |                    0 |
|  0%   38C    P8               21W / 150W|      0MiB / 23028MiB |      0%      Default |
|                                         |                      |                  N/A |
+-----------------------------------------+----------------------+----------------------+
                                                                                         
+---------------------------------------------------------------------------------------+
| Processes:                                                                            |
|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |
|        ID   ID                                                             Usage      |
|=======================================================================================|
|  No running processes found                                                           |
+---------------------------------------------------------------------------------------+
```

Alternativamente, você pode usar um [container Docker](./docker.md) para configurar a aplicação.

3. Instale as dependências necessárias utilizando o gerenciador de pacotes `apt`. São necessários os pacotes `cuda-toolkit-12` e `libnccl2`.

```bash
sudo apt update
sudo apt-get install -y libnccl2 cuda-toolkit-12
```

4. Instale a biblioteca Python para interagir com o servidor da MariTalk Local.

```bash
python3 -m pip install maritalk
```

5. Você pode iniciar o servidor da MariTalk Local manualmente ou utilizar o método `start_server` para fazer o download e iniciar o servidor automaticamente. Abra um console Python (`$ python3`) para iniciar o servidor e comece a testar!

```python
>>> import maritalk
>>> client = maritalk.MariTalkLocal()
>>> client.start_server(license='<SUA LICENÇA AQUI>')
Downloading MariTalk-small (path: /root/bin/maritalk)...
/home/ubuntu/bin/maritalk: 100%|████████████████████████████████████████████████████████████████████████████████████████████████| 14.5G/14.5G [15:39<00:00, 15.4MB/s]
Starting MariTalk Local API at http://localhost:9000
>>> client.status()
{'status': 'idle'}
>>> messages = [
...     {"role": "user", "content": "sugira três nomes para a minha cachorra"},
...     {"role": "assistant", "content": "nina, bela e luna."},
...     {"role": "user", "content": "e para o meu peixe?"},
... ]
>>> client.generate(messages)
{'output': 'nadador, marinho e azul.', 'queue_time': 0, 'prompt_time': 270, 'generation_time': 143}
```

Para iniciar manualmente, primeiro faça download do executável que vai ser enviado por email após a adquirir a licença. Em seguida, execute:

```console
$ ./maritalk-cuda120 --license <SUA LICENÇA AQUI> --max-batch-total-tokens 32768
Starting MariTalk Local API sabia-2-small-2024-03-13...
✓ Loaded in 25s
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
