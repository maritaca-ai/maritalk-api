import base64
import tiktoken
import unicodedata
from typing import Union, List
from transformers import AutoTokenizer, PreTrainedTokenizerFast
from .tokenizer_model import data as tokenizer_data
from .tokenizer_model_v4 import data as tokenizer_data_v4

_PAT_STR = r"""(?i:'s|'t|'re|'ve|'m|'ll|'d)|[^\r\n\p{L}\p{N}]?\p{L}+|\p{N}| ?[^\s\p{L}\p{N}]+[\r\n]*|\s*[\r\n]+|\s+(?!\S)|\s+"""

_encoder = None
_encoder_v4 = None
_tokenizer_small = None
_tokenizer_medium = None


def _build_encoder(name: str, data: str) -> tiktoken.Encoding:
    mergeable_ranks = {
        base64.b64decode(token): int(rank)
        for token, rank in (
            line.split() for line in data.splitlines() if line
        )
    }
    return tiktoken.Encoding(
        name,
        pat_str=_PAT_STR,
        mergeable_ranks=mergeable_ranks,
        special_tokens={},
    )


def _get_encoder() -> tiktoken.Encoding:
    global _encoder
    if _encoder is None:
        _encoder = _build_encoder("sabia-3", tokenizer_data)
    return _encoder


def _get_encoder_v4() -> tiktoken.Encoding:
    global _encoder_v4
    if _encoder_v4 is None:
        _encoder_v4 = _build_encoder("sabia-4", tokenizer_data_v4)
    return _encoder_v4


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

    _norm = lambda text: unicodedata.normalize("NFC", text)

    if model.startswith("sabia-4") or model.startswith("sabiazinho-4") or model.startswith("sabiazim-4"):
        encoder = _get_encoder_v4()
        encode = lambda text: encoder.encode(_norm(text))
        encode_batch = lambda texts: encoder.encode_batch([_norm(t) for t in texts])
    elif model.startswith("sabia-3") or model.startswith("sabiazinho-3"):
        encoder = _get_encoder()
        encode = lambda text: encoder.encode(_norm(text))
        encode_batch = lambda texts: encoder.encode_batch([_norm(t) for t in texts])
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
            "Model must be one of the following: sabia-4, sabiazinho-4, sabia-3, sabiazinho-3, sabia-2-medium, sabia-2-small"
        )

    if isinstance(text, str):
        return len(encode(text))
    elif isinstance(text, list):
        return [len(ids) for ids in encode_batch(text)]
    else:
        raise TypeError("Input must be either a string or a list of strings")


__all__ = ["count_tokens"]
