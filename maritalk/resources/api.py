import json
from http import HTTPStatus
from typing import AsyncGenerator, Dict, List, Union

import httpx
import requests
from requests.exceptions import HTTPError


class MaritalkHTTPError(HTTPError):
    def __init__(self, request_obj):
        self.request_obj = request_obj
        try:
            response_json = request_obj.json()
            if "detail" in response_json:
                api_message = response_json["detail"]
            elif "message" in response_json:
                api_message = response_json["message"]
            else:
                api_message = response_json
        except Exception:
            api_message = request_obj.text

        self.message = api_message
        self.status_code = request_obj.status_code

    def __str__(self):
        status_code_meaning = HTTPStatus(self.status_code).phrase
        formatted_message = f"HTTP Error: {self.status_code} - {status_code_meaning}\nDetail: {self.message}"
        return formatted_message


class MariTalk:
    def __init__(
        self, key: str, api_url: str = "https://chat.maritaca.ai/api", model="maritalk"
    ):
        self.key = key
        """@private"""
        self.api_url = api_url
        """@private"""
        self.model = model
        """@private"""

    @staticmethod
    async def _async_generate(url: str, headers: dict, data: dict) -> AsyncGenerator:
        try:
            async with httpx.AsyncClient() as client:
                async with client.stream(
                    "POST", url, data=json.dumps(data), headers=headers
                ) as response:
                    response.raise_for_status()  # Raises an exception for 4xx/5xx responses
                    async for line in response.aiter_lines():
                        if line.startswith("data: "):
                            data = line.replace("data: ", "")
                            if data:
                                yield json.loads(data)
        except Exception as e:
            raise Exception(
                "An error occurred while trying to connect to the server: "
            ) from e

    def generate(
        self,
        messages: Union[str, List[Dict[str, str]]],
        chat_mode: bool = True,
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stopping_tokens: List = None,
        stream: bool = False,
        num_tokens_per_message: int = 4,
    ):
        """
        Generate a response from a list of messages.

        Args:
            messages (`Union[str, List[Dict[str, str]]]`, *optional*):
                If chat_mode=True, messages should be a string representing a single user message or
                a list of messages comprising a conversation between the user and the assistant.
                If messages is a list, each item of the list should be a dictionary containing the keys
                `role` and `content`. For example:
                ```
                messages = [
                    {"role": "user", "content": "bom dia, esta é a mensagem do usuario"},
                    {"role": "assistant", "content": "bom dia, esta é a resposta do assistente"},
                    {"role": "user", "content": "Você pode me falar quanto é 25 + 27?"},
                ]
                ```
                If chat_mode=False, messages should be a string representing a prompt.
            chat_mode (`bool`, *optional*, defaults to True):
                If True, the model will run in chat mode, in which messages is either a string representing a single
                user message or a list of messages representing the conversation between the user and the assistant.
                If False, messages should be a string representing the prompt. chat_mode=False is recommended when
                using few-shot examples.
            temperature (`float`, *optional*, defaults to `0.7`):
                The sampling temperature for the next token probability. Higher values generate more random texts,
                while lower values will make it more deterministic.
            top_p (`float`, *optional*, defaults to `0.95`):
                The top probability mass to use on nucleus sampling. Read more at: https://arxiv.org/abs/1904.09751.
            max_tokens (`int`, *optional*, defaults to `512`):
                Maximum number of tokens to generate.
            do_sample (`bool`, *optional*, defaults to `True`):
                Whether to use sampling or not. `True` value means non-deterministic generations using
                sampling parameters and `False` value means deterministic generation using greedy decoding.
            stopping_tokens (`List`, *optional*):
                A list of tokens to use as a stop criteria.
            stream (`bool`, *optional*, defaults to `False`):
                If True, the method will return an async generator that yields the response as it comes from the server.
                If False, the method will return the full response as a dictionary.
            num_tokens_per_message (`int`, *optional*, defaults to `4`):
                The number of tokens to yield per message when using the async generator.
                This argument is only used when `stream=True`.
        """
        if stopping_tokens is None:
            stopping_tokens = []

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
                    "Invalid `messages` argument format. It's expected to be a `str` or a list "
                    "of dictionaries containing `role` and `content` keys."
                )
        else:
            if not isinstance(messages, str):
                raise TypeError(
                    "Invalid `messages` argument format. It's expected to be a `str` when chat_mode=False."
                )

        body = {
            "model": self.model,
            "messages": messages,
            "chat_mode": chat_mode,
            "do_sample": do_sample,
            "temperature": temperature,
            "top_p": top_p,
            "max_tokens": max_tokens,
            "stopping_tokens": stopping_tokens,
            "stream": stream,
            "num_tokens_per_message": num_tokens_per_message,
        }

        headers = {}

        if self.key is not None:
            headers["Authorization"] = "Key " + self.key

        if stream:
            return self._async_generate(self.api_url + "/chat/inference", headers, body)
        else:
            response = requests.post(
                self.api_url + "/chat/inference", json=body, headers=headers
            )

            if response.ok:
                return response.json()
            else:
                raise MaritalkHTTPError(response)
