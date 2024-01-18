# Executando MariTalk Local na Oracle Cloud Infrastructure (OCI)

Este tutorial mostra como executar a MariTalk Local na Oracle Cloud Infrastructure (OCI). Para isso, utilizaremos Docker em uma instância com a GPU Nvidia A10 (`VM.GPU.A10.1`).

Para adquirir uma licença da MariTalk Local [clique aqui](https://maritaca.ai/#maritalk-local).

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
/root/bin/maritalk: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████| 4.12G/4.12G [04:48<00:00, 14.3MB/s]
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

## Observações

- Se você estiver executando uma instância com um HDD em vez de um SSD, o carregamento inicial pode levar algum tempo para ser concluído, então o processo pode demorar alguns minutos para começar a responder às requisições.

- Executando em uma GPU Nvidia A10 e considerando uma entrada de ~1.000 tokens e uma saída de ~500 tokens, espera-se um throughput de aproximadamente 17 tokens/s (ou 46 tokens/s processados no total).