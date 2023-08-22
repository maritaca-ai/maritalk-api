import requests
from typing import List


class MariTalk:
    def __init__(self, key: str, api_url: str = "https://chat.maritaca.ai/api"):
        self.key = key
        self.api_url = api_url

    def generate(
        self,
        messages: str,
        temperature: float = 0.7,
        top_p: float = 0.95,
        max_tokens: int = 512,
        do_sample: bool = True,
        stopping_tokens: List = [],
    ):
        """
        Generate a response from a list of messages.
        """
        body = {
            "model": "MariTalk",
            "messages": messages,
            "do_sample": do_sample,
            "use_chat_template": True,
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
