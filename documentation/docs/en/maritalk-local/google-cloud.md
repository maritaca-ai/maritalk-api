---
id: google-cloud
title: Google Cloud
---

# Running MariTalk Local on Google Cloud Platform (GCP)

This tutorial shows how to run MariTalk Local Small on Google Cloud Platform (GCP). We will use an instance with an NVIDIA A100 40GB GPU. As of now, the software has also been tested on NVIDIA L4 and A10 GPUs, but it's expected to work on other GPUs with [compute capability](https://developer.nvidia.com/cuda-gpus) 8.0+ (`nvidia-smi --query-gpu=compute_cap --format=csv`).

To run the Small version, machines need at least 32 GB of CPU memory and a GPU with 24 GB of memory. For the Medium version, a minimum of 130 GB of CPU memory and at least 70 GB of GPU memory is required, which can be distributed across multiple devices. For example, you could use 2 A100 GPUs of 40 GB, 1 A100 GPU of 80 GB, or 4 A10 GPUs of 24 GB.

You can obtain a license for MariTalk Local [here](https://maritaca.ai/#maritalk-local).

1. Create an instance on GCP selecting NVIDIA A100 as the GPU using the Debian 11 image with CUDA 11.3 to get the necessary libraries. Below is the command to create the instance using `gcloud`.

```console
$ gcloud compute instances create maritalk-1 \
  --machine-type=a2-highgpu-1g \
  --zone=us-central1-c \
  --boot-disk-size=500G \
  --image=common-cu113-v20240128-debian-11 \
  --image-project=deeplearning-platform-release \
  --maintenance-policy=TERMINATE --restart-on-failure
```

2. Upon connecting to the machine, you will be prompted whether you want to install the libraries to prepare the environment. Respond with `y` and wait for the installation. After the installation process, check if the GPU has been successfully detected.

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

3. Install the Python library to interact with the MariTalk Local server.

```
$ python3 -m pip install maritalk
```

4. You can start the MariTalk Local server manually or use the `start_server` method to download and start the server automatically. Open a Python console (`$ python3`) to start the server and begin testing!

```python
>>> import maritalk
>>> client = maritalk.MariTalkLocal()
>>> client.start_server(license='<YOUR LICENSE HERE>')
Downloading MariTalk-small (path: /root/bin/maritalk)...
/root/bin/maritalk: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████| 14.6G/14.6G [09:42<00:00, 25.1MB/s]
Starting MariTalk Local API at http://localhost:9000
>>> client.status()
{'status': 'idle'}
>>> messages = [
...     {"role": "user", "content": "suggest three names for my dog"},
...     {"role": "assistant", "content": "nina, bela and luna."},
...     {"role": "user", "content": "and for my fish?"},
... ]
>>> client.generate(messages)
{'output': 'blue, ocean and pepita.', 'queue_time': 0.224, 'generation_time': 0.407}
```

To start manually, first download the executable that will be emailed to you after purchasing the license. Then execute:

```console
$ ./maritalk-cuda11 --license <YOUR LICENSE HERE> --max-batch-total-tokens 32768
Starting MariTalk Local API sabia-2-small-2024-03-13...
✓ Loaded in 11s
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
