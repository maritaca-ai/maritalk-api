import json
import requests
from typing import AsyncGenerator, Generator, List, Dict, Union, Optional
from requests.exceptions import HTTPError
from http import HTTPStatus

import httpx


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
        except:
            api_message = request_obj.text

        self.message = api_message
        self.status_code = request_obj.status_code

    def __str__(self):
        status_code_meaning = HTTPStatus(self.status_code).phrase
        formatted_message = f"HTTP Error: {self.status_code} - {status_code_meaning}\nDetail: {self.message}"
        return formatted_message


class MariTalk:
    def __init__(self, key: str, api_url: str = "https://chat.maritaca.ai/api", model: Optional[str] = None):
        if model is None:
            raise ValueError("You must set one of the available models: sabia-2-medium, sabia-2-small, sabia-2-medium-2024-03-13, sabia-2-small-2024-03-13 and maritalk-2024-01-08 (deprecated)")
        self.key = key
        """@private"""
        self.api_url = api_url
        """@private"""
        self.model = model
        """@private"""

    @staticmethod
    async def _async_generate(url: str, headers: dict, data: dict) -> AsyncGenerator:
        """
        Returns an async generator that yields the response from the server.
        Args:
            url (`str`): 
                The URL to connect to.
            headers (`dict`):
                The headers to be sent with the request.
            data (`dict`):
                The data to be sent with the request.
        """
        try:
            async with httpx.AsyncClient() as client:
                async with client.stream("POST", url, data=json.dumps(data), headers=headers) as response:
                    response.raise_for_status()
                    async for line in response.aiter_lines():
                        if line == "":
                            continue
                        if line.startswith("data: "):
                            data = line.replace("data: ", "")
                            if data:
                                yield json.loads(data)
        except Exception as e:
            raise Exception(f"An error occurred while trying to connect to the server: {str(e)}")

    @staticmethod
    def _generate_streaming(response: requests.Response) -> Generator:
        """
        Returns a generator that yields the response from the server.
        Args:
            response (`requests.Response`):
                The response object returned from the server.
        """
        try:
            for contents in response.iter_lines():
                payload = contents.decode("utf-8")
                if payload == "":
                    continue
                if payload.startswith("data: "):
                    data = payload.replace("data: ", "")
                    if data:
                        yield json.loads(data)
        except Exception as e:
            raise Exception(f"An error occurred while trying to connect to the server: {str(e)}") 
        

    def generate(
        self,
        messages: Union[str, List[Dict[str, str]]],
        chat_mode: bool = True,
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stopping_tokens: List = [],
        stream: bool = False,
        return_async_generator: bool = False,
        num_tokens_per_message: int = 4
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
            stream (`bool`, *optional*, defaults to `False`):
                If True, the function will stream the response from the server. This is useful when generating a large amount of tokens, as it will allow you to consume the response as it is being generated. If False, the function will return the entire response at once.
            return_async_generator (`bool`, *optional*, defaults to `False`):
                If True, the function will return an async generator that yields the response from the server. If False, the function will return a generator. This argument is only used when `stream=True`.
            num_tokens_per_message (`int`, *optional*, defaults to `4`):
                The number of tokens to yield per message when using the async generator. This argument is only used when `stream=True`.
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
            "model": self.model,
            "messages": messages,
            "chat_mode": chat_mode,
            "do_sample": do_sample,
            "temperature": temperature,
            "top_p": top_p,
            "max_tokens": max_tokens,
            "stopping_tokens": stopping_tokens,
            "stream": stream,
            "num_tokens_per_message": num_tokens_per_message
        }

        headers = {}

        if self.key is not None:
            headers["Authorization"] = "Key " + self.key
    
        if stream:
            if return_async_generator:
                return self._async_generate(self.api_url + "/chat/inference", headers, body)
            else:
                response = requests.post(
                    self.api_url + "/chat/inference", json=body, headers=headers, stream=True
                )
                if not response.ok:
                    raise MaritalkHTTPError(response)
                return self._generate_streaming(response)
        else:
            response = requests.post(
                self.api_url + "/chat/inference", json=body, headers=headers
            )

            if response.ok:
                return response.json()
            else:
                raise MaritalkHTTPError(response)
