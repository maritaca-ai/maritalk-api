---
id: docker
title: Docker
---

# Running MariTalk Local in Docker

This tutorial shows how to run MariTalk Local in a Docker container. You will need a machine with at least one Nvidia GPU with *compute capability* 8.0+ (`nvidia-smi --query-gpu=compute_cap --format=csv`). Some examples of tested and supported GPUs are: A100, A10, and L4.

In addition to installing the GPU drivers, you also need to install the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) to access GPUs from within the Docker container.

To start the MariTalk Local server, execute the following command:

```console
$ docker run -it -v ~/:/root/bin --gpus all -p 9000:9000 \
    ghcr.io/maritaca-ai/maritalk-local:latest \
    --license <YOUR LICENSE>
```

Once the server is available to receive requests (you'll see `Listening on http://0.0.0.0:9000` in the logs), you can perform inferences.

```python
>>> import maritalk
>>> client = maritalk.MariTalkLocal()
>>> client.status()
{'status': 'idle'}
>>> messages = [
...     {"role": "user", "content": "suggest three names for my dog"},
...     {"role": "assistant", "content": "nina, bela, and luna."},
...     {"role": "user", "content": "and for my fish?"},
... ]
>>> client.generate(messages)
{'output': 'blue, ocean, and pepita.', 'queue_time': 0.224, 'generation_time': 0.407}
```
