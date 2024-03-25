FROM nvidia/cuda:11.3.1-devel-ubuntu20.04

RUN apt-get update && \
    apt-get install -y python3 python3-pip git && \
    rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install maritalk

ENTRYPOINT ["python3", "-m", "maritalk.start"]
