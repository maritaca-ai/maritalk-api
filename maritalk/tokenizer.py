import base64
import tiktoken
from typing import Union, List
from transformers import AutoTokenizer, PreTrainedTokenizerFast
from .tokenizer_model import data as tokenizer_data

_encoder = None
_tokenizer_small = None
_tokenizer_medium = None


def _get_encoder() -> tiktoken.Encoding:
    global _encoder
    if _encoder is None:
        mergeable_ranks = {
            base64.b64decode(token): int(rank)
            for token, rank in (
                line.split() for line in tokenizer_data.splitlines() if line
            )
        }
        _encoder = tiktoken.Encoding(
            "sabia-3",
            pat_str=r"""(?i:'s|'t|'re|'ve|'m|'ll|'d)|[^\r\n\p{L}\p{N}]?\p{L}+|\p{N}| ?[^\s\p{L}\p{N}]+[\r\n]*|\s*[\r\n]+|\s+(?!\S)|\s+""",
            mergeable_ranks=mergeable_ranks,
            special_tokens={},
        )
    return _encoder


def _get_tokenizer(version: str = "medium") -> PreTrainedTokenizerFast:
    global _tokenizer_small, _tokenizer_medium
    if version == "small":
        if _tokenizer_small is None:
            _tokenizer_small = AutoTokenizer.from_pretrained(
                "maritaca-ai/sabia-2-tokenizer-small"
            )
        return _tokenizer_small
    elif version == "medium":
        if _tokenizer_medium is None:
            _tokenizer_medium = AutoTokenizer.from_pretrained(
                "maritaca-ai/sabia-2-tokenizer-medium"
            )
        return _tokenizer_medium
    else:
        raise ValueError("Version must be 'small' or 'medium'")


def count_tokens(
    text: Union[str, List[str]],
    model: str = "sabia-3",
) -> Union[int, List[int]]:
    """
    Counts the number of tokens in the given string or list of strings.

    Args:
    text (Union[str, List[str]]): The input text or a list of texts to be tokenized.

    Returns:
    Union[int, List[int]]: The number of tokens in the input text if a single string is provided,
                           or a list of token counts for each string in the input list if a list of strings is provided.

    Examples:
    >>> count_tokens("Olá, mundo!")
    5

    >>> count_tokens(["Olá, mundo!", "Como vai você?"])
    [5, 4]

    >>> count_tokens(["Olá, mundo!", "Como vai você?"], model='sabia-2-small')
    [6, 7]
    """

    if model.startswith("sabia-3"):
        encoder = _get_encoder()
        encode = encoder.encode
        encode_batch = encoder.encode_batch
    elif model.startswith("sabia-2-small"):
        tokenizer = _get_tokenizer("small")
        encode = tokenizer.encode
        encode_batch = lambda texts: tokenizer(texts)["input_ids"]
    elif model.startswith("sabia-2-medium"):
        tokenizer = _get_tokenizer("medium")
        encode = tokenizer.encode
        encode_batch = lambda texts: tokenizer(texts)["input_ids"]
    else:
        raise ValueError(
            "Model must be one of the following: sabia-3, sabia-2-medium, sabia-2-small"
        )

    if isinstance(text, str):
        return len(encode(text))
    elif isinstance(text, list):
        return [len(ids) for ids in encode_batch(text)]
    else:
        raise TypeError("Input must be either a string or a list of strings")


__all__ = ["count_tokens"]
