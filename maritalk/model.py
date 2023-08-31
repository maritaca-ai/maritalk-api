import requests
from typing import List, Dict, Union


class MariTalk:
    def __init__(self, key: str, api_url: str = "https://chat.maritaca.ai/api"):
        self.key = key
        self.api_url = api_url

    def generate(
        self,
        messages: Union[str, List[Dict[str, str]]],
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stopping_tokens: List = [],
    ):
        """
        Generate a response from a list of messages.

        Args:
            messages (`Union[str, List[Dict[str, str]]]`, *optional*):
                A single message or a list of messages comprising a conversation. The expected format of messages is a dictionary containing a `role` and a `content` field. Example:
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
            stopping_tokens (`List`, *optional*):
                A list of tokens to use as a stop criteria.
        """
        if isinstance(messages, str):
            messages = [{"role": "user", "content": messages}]

        if not (
            isinstance(messages, list)
            and len(messages) > 0
            and isinstance(messages[0], dict)
        ):
            raise TypeError(
                "Invalid `messages` argument format. It's expected to contain a single `str` or a list of dictionaries containing `role` and `content` fields."
            )

        body = {
            "model": "MariTalk",
            "messages": messages,
            "do_sample": do_sample,
            "temperature": temperature,
            "top_p": top_p,
            "max_tokens": max_tokens,
            "stopping_tokens": stopping_tokens,
        }

        headers = {}

        if self.key is not None:
            headers["Authorization"] = "Key " + self.key

        response = requests.post(
            self.api_url + "/chat/inference", json=body, headers=headers
        )

        if response.ok:
            return response.json()["answer"]
        else:
            response.raise_for_status()
