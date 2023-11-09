import os
import re
import time
import shutil
import atexit
import subprocess
from tqdm import tqdm
from pathlib import Path
from typing import List, Dict
from ctypes.util import find_library
import requests
from requests.exceptions import ConnectionError


def check_gpu():
    output = subprocess.check_output(
        ["nvidia-smi", "--query-gpu=gpu_name", "--format=csv"]
    )
    gpu_name = output.decode("utf-8").splitlines()[1]
    valid_gpus = ["NVIDIA A100", "NVIDIA A10", "NVIDIA A6000"]
    for name in valid_gpus:
        if name in gpu_name:
            return True
    raise Exception(
        f"The detected device is not supported: {gpu_name}. We currently support only NVIDIA Ampere GPUs"
    )


def get_cuda_version():
    try:
        output = subprocess.check_output("which nvcc", shell=True, text=True)
        if output == "":
            raise Exception("CUDA not found")

        nvcc_path = output.strip()

        version_info = subprocess.check_output([nvcc_path, "--version"], text=True)

        version_number_match = re.search(r"release (\d+.\d+)", version_info)
        if version_number_match:
            version_number = version_number_match.group(1)
            major_version = version_number.split(".")[0]
            return major_version
        else:
            raise Exception("Could not parse CUDA version from nvcc output.")

    except subprocess.CalledProcessError:
        raise Exception("Failed to retrieve CUDA version from nvcc")


def find_libs():
    versions = {
        "cuda_version": None,
        "openssl_version": None,
    }

    ssl_lib = find_library("ssl")
    if "libssl.so.1" in ssl_lib:
        versions["openssl_version"] = 1
    if "libssl.so.3" in ssl_lib:
        versions["openssl_version"] = 3

    cublas_lib = find_library("cublas")
    if ".11" in cublas_lib:
        versions["cuda_version"] = 11
    if ".12" in cublas_lib:
        versions["cuda_version"] = 12

    return versions


class MariTalkLocal:
    def __init__(self, host: str = "localhost", port: int = 9000):
        self.api_url = f"http://{host}:{port}"
        self.port = port
        self.process = None

    def start_server(
        self,
        license: str,
        bin_path: str = f"{Path.home()}/bin/maritalk",
    ):
        if not os.path.exists(bin_path):
            check_gpu()
            dependencies = self.check_versions()
            os.makedirs(os.path.dirname(bin_path), exist_ok=True)
            self.download(license, bin_path, dependencies)

        print(f"Starting MariTalk Local API at http://localhost:{self.port}")
        args = [bin_path, "--license", license, "--port", str(self.port)]
        self.process = subprocess.Popen(
            args,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.STDOUT,
        )
        while True:
            try:
                if self.process.poll() is not None:
                    raise Exception(
                        f'Failed to start process. Try to run it manually: `{" ".join(args)}`'
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

    def check_versions(self):
        versions = find_libs()
        if versions["openssl_version"] is None:
            raise Exception(
                "No libssl.so found! OpenSSL v1 or v3 is required to run MariTalk."
            )
        if versions["cuda_version"] is None:
            raise Exception(
                "No libcublas.so found! cuBLAS v11 or v12 is required to run MariTalk."
            )
        return versions

    def download(cls, license: str, bin_path: str, dependencies: Dict[str, int]):
        download_url = (
            "https://m64xplb35dhr3se7ipvtmbdnk40ahktr.lambda-url.us-east-1.on.aws/"
        )
        result = requests.post(
            download_url,
            json={
                "license": license,
                "openssl_version": dependencies["openssl_version"],
                "cuda_version": dependencies["cuda_version"],
            },
        ).json()
        if "presigned_url" not in result:
            raise ValueError(f"Invalid license: {license}")
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
                        for chunk in response.iter_content(chunk_size=8192):
                            out.write(chunk)
                            progress_bar.update(len(chunk))

                    os.chmod(bin_path, 0o744)
                else:
                    raise Exception(
                        "Invalid response from the server while downloading"
                    )
        except requests.exceptions.RequestException as e:
            raise Exception(f"Error downloading MariTalk binary: {e}")

    def status(self):
        response = requests.get(self.api_url)
        return response.json()

    def generate(
        self,
        prompt: str,
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stop_sequences: List[str] = [],
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
        """

        body = {
            "prompt": prompt,
            "do_sample": do_sample,
            "temperature": temperature,
            "top_p": top_p,
            "max_tokens": max_tokens,
            "stop_sequences": stop_sequences,
        }

        response = requests.post(f"{self.api_url}/generate", json=body)

        if response.ok:
            return response.json()
        else:
            response.raise_for_status()

    def generate_chat(
        self,
        messages: List[Dict[str, str]],
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stop_sequences: List[str] = [],
    ):
        """
        Generate a completion for a given prompt.

        Args:
            messages (`List[Dict[str, str]]`):
                A list where each item should be a dictionary containing the keys `role` and `content`. For example:
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
        """

        if not isinstance(messages, list):
            raise TypeError(
                "You should pass a list of messages on `messages`. For raw string prompts use `generate` method instead."
            )

        body = {
            "messages": messages,
            "do_sample": do_sample,
            "temperature": temperature,
            "top_p": top_p,
            "max_tokens": max_tokens,
            "stop_sequences": stop_sequences,
        }

        response = requests.post(f"{self.api_url}/chat/generate", json=body)

        if response.ok:
            return response.json()
        else:
            response.raise_for_status()
