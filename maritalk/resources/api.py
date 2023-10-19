import requests
from typing import List, Dict, Union


class MariTalk:
    def __init__(self, key: str, api_url: str = "https://chat.maritaca.ai/api"):
        self.key = key
        self.api_url = api_url

    def generate(
        self,
        messages: Union[str, List[Dict[str, str]]],
        chat_mode: bool = True,
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
                If chat_mode=True, messages should be a string representing a single user message or a list of messages comprising a conversation between the user and the assistant.
                If messages is a list, each item of the list should be a dictionary containing the keys `role` and `content`. For example:
                ```
                messages = [
                    {"role": "user", "content": "bom dia, esta é a mensagem do usuario"},
                    {"role": "assistant", "content": "bom dia, esta é a resposta do assistente"},
                    {"role": "user", "content": "Você pode me falar quanto é 25 + 27?"},
                ]
                ```
                If chat_mode=False, messages should be a string representing a prompt.
            chat_mode (`bool`, *optional*, defaults to True):
                If True, the model will run in chat mode, in which messages is either a string representing a single user message or a list of messages representing the conversation between the user and the assistant.
                If False, messages should be a string representing the prompt. chat_mode=False is recommended when using few-shot examples.
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

        if chat_mode:
            if not (
                isinstance(messages, str)
                or (
                    isinstance(messages, list)
                    and len(messages) > 0
                    and isinstance(messages[0], dict)
                )
            ):
                raise TypeError(
                    "Invalid `messages` argument format. It's expected to be a `str` or a list of dictionaries containing `role` and `content` keys."
                )
        else:
            if not isinstance(messages, str):
                raise TypeError(
                    "Invalid `messages` argument format. It's expected to be a `str` when chat_mode=False."
                )

        body = {
            "model": "MariTalk",
            "messages": messages,
            "chat_mode": chat_mode,
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
