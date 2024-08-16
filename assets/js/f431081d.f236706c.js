"use strict";(self.webpackChunkmaritaca=self.webpackChunkmaritaca||[]).push([[302],{5961:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(4848),i=o(8453);const r={id:"google-cloud",title:"Google Cloud"},t="Executando MariTalk Local na Google Cloud Platform (GCP)",s={id:"pt/maritalk-local/google-cloud",title:"Google Cloud",description:"Este tutorial mostra como executar a MariTalk Local Small na Google Cloud Platform (GCP). Para isso, utilizaremos uma inst\xe2ncia com a GPU NVIDIA A100 40GB. At\xe9 o momento, o software tamb\xe9m foi testado nas GPUs NVIDIA L4 e A10, mas \xe9 esperado que funcione em outras GPUs com compute capability 8.0+ (nvidia-smi --query-gpu=compute_cap --format=csv).",source:"@site/docs/pt/maritalk-local/google-cloud.md",sourceDirName:"pt/maritalk-local",slug:"/pt/maritalk-local/google-cloud",permalink:"/pt/maritalk-local/google-cloud",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"google-cloud",title:"Google Cloud"},sidebar:"sidebarPt",previous:{title:"Introducao",permalink:"/pt/maritalk-local/maritalk-local-introducao"},next:{title:"Oracle Cloud",permalink:"/pt/maritalk-local/oracle-cloud"}},l={},c=[];function m(e){const a={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"executando-maritalk-local-na-google-cloud-platform-gcp",children:"Executando MariTalk Local na Google Cloud Platform (GCP)"})}),"\n",(0,n.jsxs)(a.p,{children:["Este tutorial mostra como executar a MariTalk Local Small na Google Cloud Platform (GCP). Para isso, utilizaremos uma inst\xe2ncia com a GPU NVIDIA A100 40GB. At\xe9 o momento, o software tamb\xe9m foi testado nas GPUs NVIDIA L4 e A10, mas \xe9 esperado que funcione em outras GPUs com ",(0,n.jsx)(a.a,{href:"https://developer.nvidia.com/cuda-gpus",children:"compute capability"})," 8.0+ (",(0,n.jsx)(a.code,{children:"nvidia-smi --query-gpu=compute_cap --format=csv"}),")."]}),"\n",(0,n.jsx)(a.p,{children:"Para executar a vers\xe3o Small, as m\xe1quinas precisam de pelo menos 32 GB de mem\xf3ria de CPU e uma GPU com 24 GB de mem\xf3ria. Para a vers\xe3o Medium, \xe9 necess\xe1rio um m\xednimo de 130 GB de mem\xf3ria de CPU e pelo menos 70 GB de mem\xf3ria de GPU, que podem ser distribu\xeddos em mais de um dispositivo. Por exemplo, pode-se usar 2 GPUs A100 de 40 GB, 1 GPU A100 de 80 GB ou 4 GPUs A10 de 24 GB."}),"\n",(0,n.jsxs)(a.p,{children:["Voc\xea pode adquirir uma licen\xe7a da MariTalk Local ",(0,n.jsx)(a.a,{href:"https://maritaca.ai/#maritalk-local",children:"neste link"}),"."]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Crie uma inst\xe2ncia na GCP selecionando NVIDIA A100 como GPU utilizando a imagem Debian 11 com CUDA 11.3 para obter as biblitoecas necess\xe1rias. Abaixo est\xe1 o comando para criar a inst\xe2ncia usando ",(0,n.jsx)(a.code,{children:"gcloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"$ gcloud compute instances create maritalk-1 \\\n  --machine-type=a2-highgpu-1g \\\n  --zone=us-central1-c \\\n  --boot-disk-size=500G \\\n  --image=common-cu113-v20240128-debian-11 \\\n  --image-project=deeplearning-platform-release \\\n  --maintenance-policy=TERMINATE --restart-on-failure\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsxs)(a.li,{children:["Ao se conectar \xe0 m\xe1quina, voc\xea ser\xe1 questionado se deseja instalar as bibliotecas para preparar o ambiente. Responda com ",(0,n.jsx)(a.code,{children:"y"})," e aguarde a insta\xe7\xe3o. Ap\xf3s o processo de instala\xe7\xe3o, verifique se a GPU foi detectada com sucesso."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"$ nvidia-smi\n+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 510.47.03    Driver Version: 510.47.03    CUDA Version: 11.6     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA A100-SXM...  On   | 00000000:00:04.0 Off |                    0 |\n| N/A   29C    P0    45W / 400W |      0MiB / 40960MiB |      0%      Default |\n|                               |                      |             Disabled |\n+-------------------------------+----------------------+----------------------+\n\n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n|  No running processes found                                                 |\n+-----------------------------------------------------------------------------+\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"3",children:["\n",(0,n.jsx)(a.li,{children:"Instale a biblioteca Python para interagir com o servidor da MariTalk Local."}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"$ python3 -m pip install maritalk\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsxs)(a.li,{children:["Voc\xea pode iniciar o servidor da MariTalk Local manualmente ou utilizar o m\xe9todo ",(0,n.jsx)(a.code,{children:"start_server"})," para fazer o download e iniciar o servidor automaticamente. Abra um console Python (",(0,n.jsx)(a.code,{children:"$ python3"}),") para iniciar o servidor e comece a testar!"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'>>> import maritalk\n>>> client = maritalk.MariTalkLocal()\n>>> client.start_server(license=\'<SUA LICEN\xc7A AQUI>\')\nDownloading MariTalk-small (path: /root/bin/maritalk)...\n/root/bin/maritalk: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 14.6G/14.6G [09:42<00:00, 25.1MB/s]\nStarting MariTalk Local API at http://localhost:9000\n>>> client.status()\n{\'status\': \'idle\'}\n>>> messages = [\n...     {"role": "user", "content": "sugira tr\xeas nomes para a minha cachorra"},\n...     {"role": "assistant", "content": "nina, bela e luna."},\n...     {"role": "user", "content": "e para o meu peixe?"},\n... ]\n>>> client.generate(messages)\n{\'output\': \'azul, oceano e pepita.\', \'queue_time\': 0.224, \'generation_time\': 0.407}\n'})}),"\n",(0,n.jsx)(a.p,{children:"Para iniciar manualmente, primeiro fa\xe7a download do execut\xe1vel que vai ser enviado por email ap\xf3s adquirir a licen\xe7a. Em seguida, execute:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:'$ ./maritalk-cuda11 --license <SUA LICEN\xc7A AQUI> --max-batch-total-tokens 32768\nStarting MariTalk Local API sabia-2-small-2024-03-13...\n\u2713 Loaded in 11s\n[2024-02-22 18:20:56 +0000] Warming up...\nStart using MariTalk Local API:\n\n        $ python\n        >>> import maritalk\n        >>> client = maritalk.MariTalkLocal()\n        >>> messages = [\n                {"role": "user", "content": "sugira tr\xeas nomes para a minha cachorra"}\n                {"role": "assistant", "content": "nina, bela e luna."}\n                {"role": "user", "content": "e para o meu peixe?"}\n        ]\n        >>> client.generate_chat(messages)\n        {\'output\': \'azul, neon e dory.\', \'queue_time\': 0.224, \'generation_time\': 0.407}\n\n[2024-02-22 18:21:01 +0000] Listening on http://0.0.0.0:9000\n'})})]})}function d(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,a,o)=>{o.d(a,{R:()=>t,x:()=>s});var n=o(6540);const i={},r=n.createContext(i);function t(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);