import os
import re
import csv
import time
import shutil
import atexit
import subprocess
from tqdm import tqdm
from pathlib import Path
from typing import List, Dict, Optional, Union, Optional
from ctypes.util import find_library
import requests
from requests.exceptions import ConnectionError


def check_gpu():
    try:
        result = subprocess.run(
            [
                'nvidia-smi',
                '--query-gpu=name,compute_cap',
                '--format=csv',
            ],
            capture_output=True,
            text=True,
            check=True,
        )

        reader = csv.reader(result.stdout.strip().split('\n'))

        headers = next(reader)
        rows = list(reader)

        for row in rows:
            gpu_name, compute_cap = row
            if float(compute_cap) >= 8.0:
                return True

        raise Exception(
            f"The detected device is not supported: {gpu_name}. We currently support Nvidia Ampere GPUs with compute capability >=8.0."
        )
    except subprocess.CalledProcessError as e:
        raise Exception(f"Error executing command: {e}")
    except FileNotFoundError as e:
        raise Exception(
            "Nvidia-smi is not installed. Please install the Nvidia driver and the CUDA toolkit."
        )


def find_libs():
    versions = {
        "cuda_version": None,
    }

    cublas_lib = find_library("cublas")
    if cublas_lib and ".11" in cublas_lib:
        versions["cuda_version"] = 11
    if cublas_lib and ".12" in cublas_lib:
        versions["cuda_version"] = 12

    return versions


def download(license: str, bin_path: str, dependencies: Dict[str, int]):
    download_url = (
        "https://m64xplb35dhr3se7ipvtmbdnk40ahktr.lambda-url.us-east-1.on.aws/"
    )
    response = requests.post(
        download_url,
        json={
            "license": license,
            "cuda_version": dependencies["cuda_version"],
        },
    )
    if not response.ok:
        raise Exception(response.text)

    result = response.json()

    if "presigned_url" not in result:
        raise ValueError(f"Failed to validate license ({license}): {result}")

    file_url = result["presigned_url"]
    model_size = result["model_size"]

    print(f"Downloading MariTalk-{model_size} (path: {bin_path})...")

    try:
        with requests.get(file_url, stream=True) as response:
            response.raise_for_status()
            file_size = int(response.headers.get("content-length", 0))
            if file_size > 0:
                progress_bar = tqdm(
                    total=file_size,
                    unit="B",
                    unit_scale=True,
                    desc=bin_path,
                )
                with open(bin_path, "wb") as out:
                    for chunk in response.iter_content(chunk_size=16384):
                        out.write(chunk)
                        progress_bar.update(len(chunk))

                os.chmod(bin_path, 0o744)
            else:
                raise Exception(
                    f"Invalid response from the server while downloading: {response.text}"
                )
    except requests.exceptions.RequestException as e:
        raise Exception(f"Error downloading MariTalk binary: {e}")


def start_server(
    license: str,
    bin_path: str = "~/bin/maritalk",
    cuda_version: Optional[int] = None,
    port: int = 9000,
):
    bin_path = os.path.expanduser(bin_path)
    if not os.path.exists(bin_path):
        if not cuda_version:
            check_gpu()
        detected_versions = find_libs()

        dependencies = {
            "cuda_version": cuda_version or detected_versions["cuda_version"]
        }

        if dependencies["cuda_version"] is None:
            raise Exception(
                "No libcublas.so found. cuBLAS v11 or v12 is required to run MariTalk. You can manually set the version using the `cuda_version` argument."
            )

        bin_folder = os.path.dirname(bin_path)
        if bin_folder:
            os.makedirs(bin_folder, exist_ok=True)
        download(license, bin_path, dependencies)

    args = [bin_path, "--license", license, "--port", str(port)]
    return subprocess.Popen(
        args,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )


class MariTalkLocal:
    def __init__(self, host: str = "localhost", port: int = 9000):
        self.api_url = f"http://{host}:{port}"
        """@private"""
        self.port = port
        """@private"""
        self.process = None
        """@private"""

    def start_server(
        self,
        license: str,
        bin_path: str = "~/bin/maritalk",
        cuda_version: Optional[int] = None,
    ):
        print(f"Starting MariTalk Local API at http://localhost:{self.port}")
        self.process = start_server(license, bin_path, cuda_version, self.port)
        while True:
            try:
                if self.process.poll() is not None:
                    output, _ = self.process.communicate()
                    output = output.decode('utf-8')
                    raise Exception(
                        f"Failed to start process.\nOutput: {output}\nTry to run it manually: `{' '.join(args)}`"
                    )

                self.status()
                break
            except ConnectionError as ex:
                time.sleep(1)

        def terminate():
            print("Stopping MariTalk...")
            self.stop_server()

        atexit.register(terminate)

    def stop_server(self):
        if not self.process:
            print("No process attached to this client!")
            return
        self.process.terminate()
        self.process = None

    def status(self):
        response = requests.get(self.api_url)
        return response.json()

    def generate_raw(
        self,
        prompt: str,
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stop_sequences: List[str] = [],
        seed: Optional[int] = None,
    ):
        """
        Generate a completion for a given prompt.

        Args:
            prompt (`str`):
                The initial prompt to generate completions for. It can be the beginning of a text to be completed or an instruction for performing a task.
            temperature (`float`, *optional*, defaults to `0.7`):
                The sampling temperature for the next token probability. Higher values generate more random texts, while lower values will make it more deterministic.
            top_p (`float`, *optional*, defaults to `0.95`):
                The top probability mass to use on nucleus sampling. Read more at: https://arxiv.org/abs/1904.09751.
            max_tokens (`int`, *optional*, defaults to `512`):
                Maximum number of tokens to generate.
            do_sample (`bool`, *optional*, defaults to `True`):
                Whether to use sampling or not. `True` value means non-deterministic generations using sampling parameters and `False` value means deterministic generation using greedy decoding.
            stop_sequences (`List[str]`, *optional*):
                A list of sequences to stop the generation process.
            seed (`int`, *optional*, defaults to `None`):
                Seed to use during the random sampling process to make it reproducible.
        """

        body = {
            "prompt": prompt,
            "do_sample": do_sample,
            "temperature": temperature,
            "top_p": top_p,
            "max_tokens": max_tokens,
            "stop_sequences": stop_sequences,
            "seed": seed,
        }

        response = requests.post(f"{self.api_url}/generate", json=body)

        if response.ok:
            return response.json()

        # Return the error message in case of a failed request
        if response.headers.get("content-type") == "application/json":
            return response.json()

        # Raise for any other failed responses
        response.raise_for_status()

    def generate(
        self,
        messages: Union[str, List[Dict[str, str]]],
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stop_sequences: List[str] = [],
        seed: Optional[int] = None,
    ):
        """
        Generate a completion for a given prompt.

        Args:
            messages (`Union[str, List[Dict[str, str]]]`):
                A string with one message or a list where each item should be a dictionary containing the keys `role` and `content`. For example:
                ```
                messages = [
                    {"role": "user", "content": "bom dia, esta é a mensagem do usuario"},
                    {"role": "assistant", "content": "bom dia, esta é a resposta do assistente"},
                    {"role": "user", "content": "Você pode me falar quanto é 25 + 27?"},
                ]
                ```
            temperature (`float`, *optional*, defaults to `0.7`):
                The sampling temperature for the next token probability. Higher values generate more random texts, while lower values will make it more deterministic.
            top_p (`float`, *optional*, defaults to `0.95`):
                The top probability mass to use on nucleus sampling. Read more at: https://arxiv.org/abs/1904.09751.
            max_tokens (`int`, *optional*, defaults to `512`):
                Maximum number of tokens to generate.
            do_sample (`bool`, *optional*, defaults to `True`):
                Whether to use sampling or not. `True` value means non-deterministic generations using sampling parameters and `False` value means deterministic generation using greedy decoding.
            stop_sequences (`List[str]`, *optional*):
                A list of sequences to stop the generation process.
            seed (`int`, *optional*, defaults to `None`):
                Seed to use during the random sampling process to make it reproducible.
        """

        if not isinstance(messages, str) and not isinstance(messages, list):
            raise TypeError(
                "You should pass a string or a list of messages as argument."
            )

        if isinstance(messages, str):
            messages = [{"role": "user", "content": messages}]

        body = {
            "messages": messages,
            "do_sample": do_sample,
            "temperature": temperature,
            "top_p": top_p,
            "max_tokens": max_tokens,
            "stop_sequences": stop_sequences,
            "seed": seed,
        }

        response = requests.post(f"{self.api_url}/chat/generate", json=body)

        if response.ok:
            return response.json()

        # Return the error message in case of a failed request
        if response.headers.get("content-type") == "application/json":
            return response.json()

        # Raise for any other failed responses
        response.raise_for_status()

    def generate_chat(self, *args, **kwargs):
        raise Exception('This method was changed, please use `generate` for chat messages or `generate_raw` for raw few-shot examples instead.')
