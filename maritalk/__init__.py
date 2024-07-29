"""
.. include:: ../README.md
"""

from .resources.api import MariTalk
from .resources.local import MariTalkLocal
from .tokenizer import count_tokens

__all__ = ["MariTalk",  "MariTalkLocal", "count_tokens"]
