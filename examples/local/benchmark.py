"""
Benchmark tool for MariTalk Local server.

Usage example:

$ python benchmark.py \
    --concurrency 1,2,4,8 \
    --n-repeats 3 \
    --prompt-size 1_000 \
    --max-tokens 500 \
    --tokenizer maritaca-ai/maritalk-tokenizer-small

Install required dependencies:
$ pip install maritalk transformers pandas matplotlib tqdm
"""

import time
import string
import random
import argparse
import statistics
import pandas as pd
pd.set_option("display.precision", 1)
from tqdm import tqdm
import concurrent.futures
import matplotlib.pyplot as plt
from collections import defaultdict
from transformers import AutoTokenizer
import maritalk


def request(client, prompt, max_tokens):
    """
    Call MariTalk Local API
    """
    start_time = time.time()
    result = client.generate_raw(
        prompt,
        max_tokens=max_tokens,
        temperature=3.0,  # to force longer generations
    )
    total_time = time.time() - start_time
    return {
        "output": result["output"],
        "generation_time": result["generation_time"],
        "total_time": total_time,
    }


parser = argparse.ArgumentParser()
parser.add_argument(
    "--n-repeats",
    default=5,
    type=int,
    help="Number of times to repeat the request to obtain an average",
)
parser.add_argument(
    "--prompt-size", default=550, type=int, help="Input prompt size in tokens"
)
parser.add_argument(
    "--max-tokens", default=150, type=int, help="Maximum tokens to be generated"
)
parser.add_argument(
    "--tokenizer",
    type=str,
    default="maritaca-ai/maritalk-tokenizer-small",
    help="Tokenizer to be used to count tokens",
)
parser.add_argument(
    "--concurrency",
    default="1,2",
    type=str,
    help="A list of concurrent requests to perform",
)
parser.add_argument(
    "--license",
    default=None,
    required=False,
    type=str,
    help="Your MariTalk Local license to call `start_server` method. Ignore it if already started a server.",
)
args = parser.parse_args()
args.concurrency = [int(n) for n in args.concurrency.split(",")]

client = maritalk.MariTalkLocal()

# Start MariTalk Local server if a license is provided
# or use an already started server otherwise
if args.license:
    client.start_server(license=args.license)

tokenizer = AutoTokenizer.from_pretrained(args.tokenizer)
results = []

for concurrency in tqdm(args.concurrency):
    for i in range(args.n_repeats):
        prompt = " ".join([str(i) for i in range(args.prompt_size)])
        prompt_size = len(tokenizer.tokenize(prompt))
        if prompt_size > args.prompt_size:
            prompt = tokenizer.decode(
                tokenizer.encode(prompt)[: args.prompt_size],
                skip_special_tokens=True,
            )
            prompt_size = len(tokenizer.tokenize(prompt))

        with concurrent.futures.ThreadPoolExecutor(max_workers=concurrency) as executor:
            futures = [
                executor.submit(request, client, prompt, args.max_tokens)
                for _ in range(concurrency)
            ]
            concurrent.futures.wait(futures)
            for future in futures:
                result = future.result()
                generated_tokens = len(tokenizer.tokenize(result["output"]))
                results.append(
                    {
                        "concurrency": concurrency,
                        "i": i,
                        "prompt_size": prompt_size,
                        "generated_tokens": generated_tokens,
                        "generation_time": result["generation_time"],
                        "total_time": result["total_time"],
                    }
                )

df = pd.DataFrame(results)
df.drop(labels=df.query("generated_tokens < 100").index, inplace=True)
df["generated_tps"] = df["generated_tokens"] / df["generation_time"]
df["total_tps"] = (df["prompt_size"] + df["generated_tokens"]) / df["total_time"]
df_results = df.groupby("concurrency")[["generated_tps", "total_tps"]].agg(
    ["mean", "median", "std"]
)
print(df_results)

df_grouped = df.groupby(["concurrency", "i"])[["prompt_size", "generated_tokens"]].sum()
df_grouped["system_tokens"] = df_grouped["prompt_size"] + df_grouped["generated_tokens"]
total_times = df.groupby(["concurrency", "i"])["total_time"].median()
system_tokens = df_grouped["system_tokens"] / total_times
print()
print("System tokens")
print(system_tokens.groupby("concurrency").agg(["median", "std"]))
df.to_csv(f"benchmark.csv", index=False)

fig, ax = plt.subplots()
ax.set_title(
    f"MariTalk Local (prompt_size={args.prompt_size}, max_tokens={args.max_tokens})"
)

ax.errorbar(
    df_results.index,
    df_results["generated_tps"]["median"],
    yerr=df_results["generated_tps"]["std"],
    label="generated_tps",
    color="blue",
)
ax.errorbar(
    df_results.index,
    df_results["total_tps"]["median"],
    yerr=df_results["total_tps"]["std"],
    label="total_tps",
    color="green",
)
ax.errorbar(
    system_tokens.groupby("concurrency").median().index,
    system_tokens.groupby("concurrency").median(),
    yerr=system_tokens.groupby("concurrency").std(),
    label="system_tps",
    color="red",
)

ax.legend(loc="lower right")
ax.set_xticks(system_tokens.groupby("concurrency").median().index)
ax.set_xlabel("Concurrency")
ax.set_ylabel("Tokens/s")

plt.tight_layout()
plt.show()
plt.savefig(f"benchmark.png", bbox_inches="tight")
