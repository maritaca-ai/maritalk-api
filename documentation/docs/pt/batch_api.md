---
id: batch-api
title: Batch API
---

# Vídeo explicativo
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/_olpSI9ZGK8"
  title="Explicação de como usar a Batch API"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

# O que é?
A Batch API é uma opção eficiente para enviar grupos de solicitações assíncronas, oferecendo redução de custos de até 50%. Nessa modalidade, os limites de taxa são calculados com base em caracteres por dia, embora a cobrança continue sendo feita por tokens. Para os tiers 1, 2, 3, 4 e 5, o limite diário é de 1,2 bilhões de caracteres (aproximadamente 300M de tokens), enquanto para o tier 0 o limite é de 4 milhões de caracteres (aproximadamente 1M de tokens) por dia. Apenas os tokens de entrada são contabilizados para fins de rate limit.

Além disso, há um prazo de até 24 horas para a conclusão das requisições, o que torna o serviço especialmente indicado para processos que não exigem respostas imediatas e para reduzir os custos operacionais. Como as requisições podem levar até 24 horas para serem processadas e os lotes expiram se não forem concluídos dentro desse prazo, a Batch API não é indicada para cenários críticos, nos quais há risco de falha na execução devido à expiração.

O processamento em lote costuma ser útil em casos como:

* Tradução ou verificação de texto em massa
* Execução de avaliações
* Classificação de grandes conjuntos de dados
* Resumo de múltiplos documentos
* Extração de entidades e palavras-chave em documentos

A Batch API é composta por um conjunto de endpoints que permitem:
1. Criar um novo lote (POST /batches): Inicia o processamento em lote enviando um conjunto de solicitações de uma só vez.
2. Consultar status do lote (GET /batches/\{id\}/status): Retorna o andamento do processamento, informando se ainda está em execução ou se já foi finalizado.
3. Recuperar resultados (GET /batches/\{id\}/results): Fornece as respostas de cada solicitação do lote assim que o processamento é concluído.

# Como usar
Você pode trabalhar com a Batch API de duas maneiras: pela interface visual ou programaticamente, via código.

## Interface visual
1. Na interface web, o fluxo para enviar seu arquivo .jsonl começa pelo menu lateral: selecione a opção Arquivos; em seguida, no canto superior-direito da tela, clique no botão + Upload. Será exibida uma janela modal onde você deve arrastar ou escolher o arquivo a partir do seu computador — basta soltar o .jsonl na área tracejada que aparece no centro do diálogo. Depois de selecionar o arquivo, pressione Upload para iniciar o envio. Quando o upload terminar, o documento aparecerá na lista de arquivos com o status processed e receberá um file_id; é esse identificador que você utilizará para criar o batch na etapa seguinte. Cada arquivo pode ter no máximo 200MB e até 50k requisições.

<img src="/img/Batch0_novo.png" alt="Sabia" style={{ width: '100rem', height: 'auto', marginRight: '15px' }} />

2. Para criar o lote na interface web, abra o menu lateral e selecione Batch API; a listagem de lotes é exibida no painel principal. No canto superior-direito clique em + Criar para abrir o diálogo Criar Batch. Nesse modal basta colar o File ID gerado na etapa anterior (o arquivo deve ter até 200 MB ou 50 mil requisições) e, em seguida, pressionar Criar Batch. O sistema passa a validar o arquivo e, assim que a execução se inicia, o novo lote aparece na lista com o respectivo identificador e o progresso em tempo real.
<img src="/img/Batch1_novo.png" alt="Sabia" style={{ width: '100rem', height: 'auto', marginRight: '15px' }} />


## Uso via código

### 1. Preparando seu arquivo de lote

Para cada lote use um único arquivo .jsonl: cada linha corresponde a uma solicitação da API (mesmos parâmetros do endpoint). Inclua em cada requisição um custom_id exclusivo para localizar o resultado depois. Cada arquivo pode ter no máximo 200MB e até 50k requisições. Exemplo (duas solicitações):
*Observação*: cada arquivo só pode conter solicitações para um único modelo. Por exemplo, não é possivel ter solicitações para o sabia-3.1 e sabiazinho-3 em um mesmo arquivo.
```json
{"custom_id": "request-1", "method": "POST", "url": "/v1/chat/completions", "body": {"model": "sabia-3.1", "messages": [{"role": "user", "content": "Escreva um lindo poema sobre a Serra do Mar"}],"max_tokens": 1000}}
{"custom_id": "request-2", "method": "POST", "url": "/v1/chat/completions","body": {"model": "sabia-3.1", "messages": [{"role": "user", "content": "O Brasil tem vulcão?"}],"max_tokens": 200}}
```

### 2. Enviando o arquivo de entrada para o lote

Envie seu arquivo .jsonl usando o endpoint abaixo. Os arquivos podem conter no máximo 50.000 requisições e não devem ultrapassar 200MB cada.

```python
from openai import OpenAI

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)


batch_input_file = client.files.create(
    file=open("batchinput.jsonl", "rb"),
    purpose="batch"
)

print(batch_input_file)

```

**Observação:** Atualmente, somente é suportado o propósito "batch" para upload de arquivos. Os outros propósitos (como "finetuning" e "assistant") não são suportados. 

### 3. Criando o lote

Use o ID do arquivo (por exemplo, file1) para criar o lote. O completion_window é fixo em 24h, e você pode fornecer metadados extras por meio do parâmetro metadata. Exemplo:

```python
from openai import OpenAI
client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

batch_input_file_id = batch_input_file.id
client.batches.create(
    input_file_id=batch_input_file_id,
    endpoint="/v1/chat/completions",
    completion_window="24h",
    metadata={
        "description": "job for marketing data",
        "owner": "marketing team"
    }
)
```

Essa requisição retornará um objeto Batch com as informações sobre o lote:

```python
{
  "id": "batch1",
  "object": "batch",
  "endpoint": "/v1/chat/completions",
  "errors": null,
  "input_file_id": "file1",
  "completion_window": "24h",
  "status": "validating",
  "output_file_id": null,
  "error_file_id": null,
  "created_at": 1744838747,
  "in_progress_at": null,
  "expires_at": 1744838747,
  "completed_at": null,
  "failed_at": null,
  "expired_at": null,
  "request_counts": {
    "total": 0,
    "completed": 0,
    "failed": 0
  },
  "metadata": null
}
```
### 4. Verificando o status do lote

É possível consultar o status de um lote a qualquer momento, recebendo também o objeto Batch correspondente no processo:


```python
from openai import OpenAI
from openai import OpenAI
client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

batch = client.batches.retrieve("batch1")
print(batch)
```

#### Status do batch
Cada objeto Batch pode ter um dos seguintes status:


| **Status**              | **Descrição**                              | 
|-------------------------|--------------------------------------------|
|validating | o arquivo de entrada está sendo validado antes de o lote iniciar |
|failed | A validação do arquivo de entrada não obteve sucesso. |
|in\_progress | O arquivo de entrada foi validado com sucesso e o lote está em execução. |
|finalizing | O lote foi concluído e os resultados estão sendo preparados. |
|completed | O lote foi concluído e os resultados estão prontos. |
|expired | O lote não foi concluído dentro da janela de 24 horas e expirou. |
|cancelling | O lote está sendo cancelado, podendo levar até 10 minutos para finalizar. |
|cancelled | O lote foi cancelado e não continuará sendo processado. |

### 5. Obtendo os resultados do lote
Quando o lote tiver sido processado, você pode obter o arquivo de saída enviando uma requisição para a API utilizando o output_file_id do objeto Batch. Depois de receber o arquivo, salve-o localmente (por exemplo, como batch_output.jsonl).

```python
from openai import OpenAI
client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)
file_response = client.files.content("file1")
print(file_response.text)
```
#### Manipulando o Arquivo JSONL
O arquivo de saída JSONL conterá uma linha de resposta para cada requisição bem-sucedida do seu arquivo de entrada. Quaisquer requisições com falha terão seus detalhes de erro registrados em um arquivo de erro separado, cujo ID pode ser encontrado em error_file_id no objeto Batch.

Observe que a ordem das linhas de saída pode não corresponder à ordem das linhas de entrada. Para correlacionar cada saída com sua requisição de entrada, utilize o campo custom_id, presente em cada linha do arquivo de saída.

```jsonl
{"id": "batch_req_1", "custom_id": "request1", "response": {"status_code": 200, "request_id": "req_1", "body": {"id": "chat1", "object": "chat.completion", "created": 1744838747, "model": "sabia-3", "choices": [{"index": 0, "message": {"role": "assistant", "content": "Olá mundo."}, "logprobs": null, "finish_reason": "stop"}], "usage": {"prompt_tokens": 5, "completion_tokens": 14, "total_tokens": 19}, "system_fingerprint": "abc123"}}, "error": null}
{"id": "batch_req_1", "custom_id": "request2", "response": {"status_code": 200, "request_id": "req_2", "body": {"id": "chat2", "object": "chat.completion", "created": 1744838747, "model": "sabia-3", "choices": [{"index": 0, "message": {"role": "assistant", "content": "Hello World."}, "logprobs": null, "finish_reason": "stop"}], "usage": {"prompt_tokens": 4, "completion_tokens": 26, "total_tokens": 30}, "system_fingerprint": "abc123"}}, "error": null}
```
Após a conclusão do lote, o arquivo de saída permanece disponível por 30 dias e é excluído automaticamente depois disso.

### 6. Cancelando um Lote
Se necessário, é possível cancelar um lote que esteja em execução. Durante o cancelamento, o status do lote muda para canceling enquanto as requisições em andamento continuam (podendo levar até 10 minutos). Assim que essas requisições forem finalizadas, o status muda para cancelled.

Cancelando um lote:

```python
from openai import OpenAI
client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

client.batches.cancel("batch1")
```
### 7.  Listando Todos os Lotes
Você pode visualizar todos os seus lotes a qualquer momento. Se possuir muitos lotes, utilize os parâmetros limit e after para paginar os resultados.

```python
from openai import OpenAI
client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

client.batches.list(limit=10)
```

#### Entendendo a expiração de lotes

Se um lote não for concluído dentro do tempo previsto, ele passará para o estado expired. Quaisquer requisições incompletas serão canceladas, enquanto as requisições concluídas continuam disponíveis por meio do arquivo de saída do lote. Você ainda será cobrado pelos tokens consumidos nas requisições que foram concluídas com sucesso.

As requisições que expirarem serão adicionadas ao seu arquivo de erro com uma mensagem semelhante à exibida abaixo. Você pode usar o custom_id para recuperar detalhes das requisições que expiraram.

```jsonl
{"id": "batch_req_1", "custom_id": "request-1", "response": null, "error": {"code": "batch_expired", "message": "This request could not be executed before the completion window expired."}}
{"id": "batch_req_1", "custom_id": "request-2", "response": null, "error": {"code": "batch_expired", "message": "This request could not be executed before the completion window expired."}}
```





