import base64
import tiktoken
from .tokenizer_model import data as tokenizer_data

mergeable_ranks = {
    base64.b64decode(token): int(rank)
    for token, rank in (line.split() for line in tokenizer_data.splitlines() if line)
}
encoder = tiktoken.Encoding(
    "sabia-3",
    pat_str=r"""(?i:'s|'t|'re|'ve|'m|'ll|'d)|[^\r\n\p{L}\p{N}]?\p{L}+|\p{N}| ?[^\s\p{L}\p{N}]+[\r\n]*|\s*[\r\n]+|\s+(?!\S)|\s+""",
    mergeable_ranks=mergeable_ranks,
    special_tokens={},
)


def count_tokens(text):
    return len(encoder.encode(text))


__all__ = ["count_tokens"]
