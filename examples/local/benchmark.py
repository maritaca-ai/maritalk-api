import time
import string
import random
import argparse
import statistics
import pandas as pd
from tqdm import tqdm
import concurrent.futures
from collections import defaultdict
from transformers import AutoTokenizer
import maritalk


def request(client, prompt, max_tokens):
    '''
    Call MariTalk Local API
    '''
    start_time = time.time()
    result = client.generate_raw(
        prompt,
        max_tokens=max_tokens,
        temperature=3.0,
    )
    total_time = time.time() - start_time
    return {
        'output': result['output'],
        'queue_time': result['queue_time'] / 1_000,
        'prompt_time': result['prompt_time'] / 1_000,
        'generation_time': result['generation_time'] / 1_000,
        'total_time': total_time,
    }


parser = argparse.ArgumentParser()
parser.add_argument('--n-repeats', default=5, type=int)
parser.add_argument('--prompt-size', default=1_000, type=int)
parser.add_argument('--max-tokens', default=500, type=int)
parser.add_argument('--tokenizer', type=str, default='maritaca-ai/maritalk-tokenizer-small')
parser.add_argument('--concurrency', default='1,2', type=str)
parser.add_argument('--license', default=None, required=False, type=str)
args = parser.parse_args()
args.concurrency = [int(n) for n in args.concurrency.split(",")]

client = maritalk.MariTalkLocal()

# Start MariTalk Local server if a license is provided
# or use an already started server otherwise
if args.license:
    client.start_server(license=args.license)

tokenizer = AutoTokenizer.from_pretrained(args.tokenizer)
results = []

for num_workers in tqdm(args.concurrency):
    for i in range(args.n_repeats):
        prompt = ' '.join([str(i) for i in range(args.prompt_size)])
        prompt_size = len(tokenizer.tokenize(prompt))
        if prompt_size > args.prompt_size:
            prompt = tokenizer.decode(
                tokenizer.encode(prompt)[:args.prompt_size],
                skip_special_tokens=True,
            )
            prompt_size = len(tokenizer.tokenize(prompt))

        with concurrent.futures.ThreadPoolExecutor(max_workers=num_workers) as executor:
            futures = [
                executor.submit(request, client, prompt, args.max_tokens)
                for _ in range(num_workers)
            ]
            concurrent.futures.wait(futures)
            for future in futures:
                result = future.result()
                generated_tokens = len(tokenizer.tokenize(result['output']))
                results.append({
                    'num_workers': num_workers,
                    'i': i,
                    'prompt_size': prompt_size,
                    'generated_tokens': generated_tokens,
                    'generation_time': result['generation_time'],
                    'total_time': result['total_time'],
                    'queue_time': result['queue_time'],
                    'prompt_time': result['prompt_time'],
                })

df = pd.DataFrame(results)
df['generated_tps'] = df['generated_tokens'] / df['generation_time']
df['total_tps'] = (df['prompt_size'] + df['generated_tokens']) / df['total_time']
print(df.groupby('num_workers')[['generated_tps', 'total_tps', 'queue_time']].agg(['mean', 'std']))
