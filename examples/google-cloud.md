# Executando MariTalk Local na Google Cloud Platform (GCP)

Este tutorial mostra como executar a MariTalk Local Small na Google Cloud Platform (GCP). Para isso, utilizaremos uma instância com a GPU NVIDIA L4 24GB.

1. Crie uma instância na GCP selecionando NVIDIA L4 como __GPU type__ em __Machine configuration__ e Ubuntu 22.04 LTS como imagem.

![](/.github/imgs/gcp-screenshot.png)

2. Verifique se a GPU foi detectada com sucesso.

```
$ nvidia-smi
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.105.17   Driver Version: 525.105.17   CUDA Version: 12.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA L4           On   | 00000000:00:03.0 Off |                    0 |
| N/A   44C    P8    16W /  72W |      0MiB / 23034MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

Você pode instalar as dependências necessárias diretamente no Sistema Operacional da instância ou usar Docker. Selecione abaixo uma das duas opções:

<details>
<summary>Sistema Operacional</summary>

3. Você pode instalar as dependências necessárias manualmente através do gerenciador de pacotes `apt`. O pacote necessário é o `cuda-toolkit-12`, que irá instalar as bibliotecas (*.so) necessárias para executar o binário da MariTalk Local.

```
$ sudo apt update
$ sudo apt install cuda-toolkit-12
```

4. Instale a biblioteca Python para interagir com o servidor da MariTalk Local.

```
$ python3 -m pip install maritalk
```
</details>

<details>
<summary>Docker</summary>

3. Você pode instalar as dependências necessárias manualmente, mas nesta seção vamos usar a imagem Docker da Nvidia com CUDA v12 para iniciar a MariTalk Local. O comando abaixo vai iniciar um terminal interativo para instalarmos as ferramentas necessárias. Em caso de deploy em produção, é recomendado criar um container a partir da imagem `nvidia/cuda:12.1.1-cudnn8-runtime-ubuntu22.04` com os comandos necessários.

```
$ sudo docker run -it --gpus all nvidia/cuda:12.1.1-cudnn8-runtime-ubuntu22.04 /bin/bash
```

4. Instale as dependências.

```
$ apt update
$ apt install python3 python3-pip
$ python3 -m pip install maritalk
```
</details>

5. Inicie um console Python (`$ python3`) para iniciar o servidor da MariTalk Local e comece a testar!

```python
>>> import maritalk
>>> client = maritalk.MariTalkLocal()
>>> client.start_server(license='<SUA LICENÇA AQUI>')
Downloading MariTalk-small (path: /root/bin/maritalk)...
/root/bin/maritalk: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████| 4.12G/4.12G [03:10<00:00, 21.6MB/s]
Starting MariTalk Local API at http://localhost:9000
>>> client.status()
{'status': 'idle'}
>>> messages = [
...     {"role": "user", "content": "sugira três nomes para a minha cachorra"},
...     {"role": "assistant", "content": "nina, bela e luna."},
...     {"role": "user", "content": "e para o meu peixe?"},
... ]
>>> client.generate(messages)
{'output': 'azul, oceano e pepita.', 'queue_time': 0, 'prompt_time': 381, 'generation_time': 264}
```

Para adquirir uma licença da MariTalk Local [clique aqui](https://maritaca.ai/#maritalk-local).

## Observações

- Para cada GPU NVIDIA L4, considerando uma entrada de ~1.000 tokens e uma saída de ~500 tokens, espera-se um throughput de aproximadamente 12 tokens/s (ou 40 tokens/s processados no total).