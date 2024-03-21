# Executando MariTalk Local no Docker

Este tutorial mostra como executar a MariTalk Local em um container Docker. Para isso, é necessária uma máquina com pelo menos uma GPU Nvidia com *compute capability* >= 8.0 (`nvidia-smi --query-gpu=compute_cap --format=csv`). Alguns exemplos de GPUs testadas e suportadas são: A100, A10 e L4.

Além da instalação dos drivers da GPU, também é necessário instalar o [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) para ter acesso às GPUs a partir do container Docker.

Para iniciar o servidor da MariTalk Local, execute o seguinte commando:

```console
$ docker run -it -v ~/:/root/bin --gpus all -p 9000:9000 \
    ghcr.io/maritaca-ai/maritalk-local:latest \
    --license <SUA LICENÇA>
```

Quando o servidor estiver disponível para receber requisições (aparecerá `Listening on http://0.0.0.0:9000` nos logs), você pode fazer inferências.

```python
>>> import maritalk
>>> client = maritalk.MariTalkLocal()
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
