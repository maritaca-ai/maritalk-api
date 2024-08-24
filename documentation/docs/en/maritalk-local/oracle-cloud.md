---
id: oracle-cloud
title: Oracle Cloud
---

# Running MariTalk Local on Oracle Cloud Infrastructure (OCI)

This tutorial shows how to run MariTalk Local on Oracle Cloud Infrastructure (OCI). We will use an instance with the NVIDIA A10 24GB GPU (`VM.GPU.A10.1`). As of now, the software has also been tested on NVIDIA L4 and A100 GPUs, but it is expected to work on other GPUs with [compute capability](https://developer.nvidia.com/cuda-gpus) 8.0+ (`nvidia-smi --query-gpu=compute_cap --format=csv`).

To run the Small version, machines need at least 32 GB of CPU memory and a GPU with 24 GB of memory. For the Medium version, a minimum of 130 GB of CPU memory and at least 70 GB of GPU memory is required, which can be distributed across more than one device. For example, you can use 2 A100 40 GB GPUs, 1 A100 80 GB GPU, or 4 A10 24 GB GPUs.

You can purchase a license for MariTalk Local [here](https://maritaca.ai/#maritalk-local).

1. Create an instance in OCI selecting `NVIDIA GPU Cloud Machine Image` as the image and `VM.GPU.A10.1` as the shape.

<img src="/img/oracle-screenshot.png" alt="oracle"/>

2. Check that the GPU has been successfully detected.

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

Alternatively, you can use a [Docker container](./docker.md) to set up the application.

3. Install the necessary dependencies using the package manager `apt`. The `cuda-toolkit-12` and `libnccl2` packages are required.

```bash
sudo apt update
sudo apt-get install -y libnccl2 cuda-toolkit-12
```

4. Install the Python library to interact with the MariTalk Local server.

```bash
python3 -m pip install maritalk
```

5. You can start the MariTalk Local server manually or use the `start_server` method to download and start the server automatically. Open a Python console (`$ python3`) to start the server and begin testing!

```python
>>> import maritalk
>>> client = maritalk.MariTalkLocal()
>>> client.start_server(license='<YOUR LICENSE HERE>')
Downloading MariTalk-small (path: /root/bin/maritalk)...
/home/ubuntu/bin/maritalk: 100%|████████████████████████████████████████████████████████████████████████████████████████████████| 14.5G/14.5G [15:39<00:00, 15.4MB/s]
Starting MariTalk Local API at http://localhost:9000
>>> client.status()
{'status': 'idle'}
>>> messages = [
...     {"role": "user", "content": "suggest three names for my dog"},
...     {"role": "assistant", "content": "nina, bela and luna."},
...     {"role": "user", "content": "and for my fish?"}
... ]
>>> client.generate(messages)
{'output': 'swimmer, marine and blue.', 'queue_time': 0, 'prompt_time': 270, 'generation_time': 143}
```

To start manually, first download the executable that will be emailed to you after purchasing the license. Then execute:

```console
$ ./maritalk-cuda120 --license <YOUR LICENSE HERE> --max-batch-total-tokens 32768
Starting MariTalk Local API sabia-2-small-2024-03-13...
✓ Loaded in 25s
[2024-02-22 18:20:56 +0000] Warming up...
Start using MariTalk Local API:

        $ python
        >>> import maritalk
        >>> client = maritalk.MariTalkLocal()
        >>> messages = [
                {"role": "user", "content": "suggest three names for my dog"}
                {"role": "assistant", "content": "nina, bela and luna."}
                {"role": "user", "content": "and for my fish?"}
        ]
        >>> client.generate_chat(messages)
        {'output': 'blue, neon and dory.', 'queue_time': 0.224, 'generation_time': 0.407}

[2024-02-22 18:21:01 +0000] Listening on http://0.0.0.0:9000
```
