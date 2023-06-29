# Introduction
MariTalk is a chatbot specially trained to understand well Portuguese. This repository contains the code and documentation explaining how to use the MariTalk API.

# Usage Example
This Google Colab contains an example showing how to use the API, which is similar to ChatGPT's API:

[Google Colab Example](https://colab.research.google.com/drive/13tieiQdQqYDQGHI8aLtlqoBWMpJ2elyo?usp=sharing)

# API docs
You can find more details about the API at https://chat.maritaca.ai/docs

# Technical Aspects

MariTalk is based on a Large Language Model specially trained for Portuguese.
It is able to follow instructions in a zero-shot manner, like ChatGPT. 

## Maximum sequence length 
Currently, we support a maximum sequence length of 2048 tokens, which is equivalent to approximately 1000 words in Portuguese. We will soon support 8196 tokens.

## Throughput
It takes about 1 to 2 seconds to generate the first token given a sequence of 1000 tokens as input.
After that, MariTalk generates 10 to 15 tokens/sec.

# Web Interface
Try the Web interface at:
[chat.maritaca.ai](chat.maritaca.ai)

<img src="imgs/web_interface.png" width="600">
