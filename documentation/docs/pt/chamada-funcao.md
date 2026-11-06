---
id: chamada-funcao
title: Chamada de funções
---

# Chamada de funções
A chamada de função permite a conexão de modelos como o S5 a ferramentas e sistemas externos do lado do cliente. Com essa funcionalidade, é possível criar agentes que executam tarefas autônomas, interagindo com APIs e sistemas externos para realizar ações específicas, como consultar dados, automatizar processos ou tomar decisões.

Aqui está um exemplo de como fornecer ferramentas para o S5 usando a Responses API:

## Como usar a chamada de funções

### Exemplo 1: Previsão do tempo

Neste tutorial, vamos criar um assistente de conversação que pode fornecer previsões do tempo em tempo real para o usuário. O assistente usará a biblioteca OpenAI para interagir com o usuário, identificar as coordenadas geográficas necessárias e, em seguida, fará chamadas à API da Open-Meteo para obter os dados meteorológicos. Vamos abordar cada etapa e detalhar o código.

#### Passo 1: Definindo a Função para Consulta da Previsão do Tempo
Primeiro, criamos uma função que fará a consulta da previsão do tempo utilizando a API da [Open-Meteo](https://open-meteo.com/). Essa função será chamada pelo assistente assim que ele identificar as coordenadas do local desejado.
```python
import requests

def consultar_previsao_tempo(latitude, longitude):
    BASE_URL = "https://api.open-meteo.com/v1/forecast"

    # Parâmetros para a chamada da API, incluindo a latitude, longitude e o fuso horário
    params = {
        'latitude': latitude,
        'longitude': longitude,
        'current_weather': True,
        'timezone': 'America/Sao_Paulo'
    }

    response = requests.get(BASE_URL, params=params)

    # Se a resposta for bem-sucedida (código 200), extraímos os dados necessários
    if response.status_code == 200:
        dados = response.json()
        temperatura = dados['current_weather']['temperature']
        condicao = dados['current_weather']['weathercode']

        return {
            "temperatura": temperatura,
            "condicao": condicao
        }
    else:
        # Caso haja algum erro, retornamos uma mensagem de erro
        return {"erro": "Erro ao obter a previsão do tempo."}
```

#### Passo 2: Configurando a Chamada de Funções no Modelo
Agora, criamos a estrutura para registrar a função consultar_previsao_tempo como uma ferramenta que pode ser chamada automaticamente pelo assistente com base nas necessidades da conversa.
```python
tools = [
    {
        "type": "function",
        "name": "consultar_previsao_tempo",
        "description": "Obtém a previsão do tempo para uma localização com base em coordenadas.",
        "parameters": {
            "type": "object",
            "properties": {
                "latitude": {
                    "type": "number",
                    "description": "Latitude da cidade."
                },
                "longitude": {
                    "type": "number",
                    "description": "Longitude da cidade."
                }
            },
            "required": ["latitude", "longitude"]
        }
    }
]
```
Aqui, registramos a função consultar_previsao_tempo, especificando os parâmetros que ela espera (latitude e longitude), para que o assistente possa utilizá-la. O modelo saberá chamar essa função quando perceber que a pergunta do usuário está relacionada ao clima.

#### Passo 3:  Interagindo com o Assistente e Chamando a Função
Agora, configuramos o cliente para interagir com o usuário e determinar quando a função de previsão do tempo deve ser chamada. O assistente será configurado para entender a conversa e identificar quando deve buscar dados da previsão do tempo.
```python
import openai
import os

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),  # Insira sua chave de API aqui
    base_url="https://chat.maritaca.ai/api",
)

response = client.responses.create(
  model="S5",
  instructions="Você é um assistente que fornece previsão do tempo.",
  input="Qual é a previsão do tempo para o Rio de Janeiro?",
  tools=tools,  # Aqui registramos as ferramentas que o assistente pode chamar
)
```

#### Passo 4: Extraindo e Utilizando os Argumentos da Função
Após a interação com o assistente, ele pode determinar que a função consultar_previsao_tempo deve ser chamada. A resposta do assistente incluirá itens de chamada de função na saída com os argumentos necessários (como a latitude e longitude) para fazer a consulta.

No código abaixo, mostramos como extrair os argumentos, transformar o formato (se necessário) e fazer a consulta da previsão do tempo:

```python
import json

for item in response.output:
    if item.type == "function_call":
        function_call_json = json.loads(item.arguments)

        # Extraímos latitude e longitude dos argumentos retornados
        latitude = function_call_json['latitude']
        longitude = function_call_json['longitude']

        # Fazemos a chamada à API de previsão do tempo com os dados retornados
        previsao = consultar_previsao_tempo(latitude, longitude)

        print(previsao)
```
Finalmente, o resultado da previsão do tempo (temperatura e condições climáticas) é exibido.


### Exemplo 2: Usuários e Respostas Personalizadas

Neste exemplo, vamos criar um assistente de conversação que interage com o usuário para fornecer os IDs de clientes com base em seus nomes. Usaremos a função get_user_id para gerar IDs fictícios para os nomes fornecidos. Em seguida, calcularemos a soma dos dois IDs e responderemos ao usuário com o resultado.

#### Passo 1: Definindo a Função get_user_id
A função get_user_id é responsável por retornar um ID aleatório para cada nome de usuário passado. Neste caso, simulamos a geração de IDs usando a função random.randint().
```python
import random

# Função que retorna um ID aleatório para o nome fornecido
def get_user_id(name):
    return random.randint(1, 100)

```

#### Passo 2: Configurando a Chamada de Funções no Modelo

A seguir, configuramos o assistente para registrar a função get_user_id, permitindo que ela seja chamada sempre que o assistente detectar a necessidade de obter um ID com base no nome do cliente.

```python
tools = [
    {
        "type": "function",
        "name": "get_user_id",
        "description": "Get the id of an user given the user name",
        "parameters": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the user"
                }
            },
            "required": ["name"],
            "additionalProperties": False
        }
    }
]

```

#### Passo 3:  Interagindo com o Assistente e Chamando a Função
Agora, configuramos o cliente para que o assistente interaja com o usuário. O assistente receberá uma mensagem do usuário, que pede os IDs de dois clientes e deseja saber a soma desses dois IDs.

```python
import openai
import json

client = openai.OpenAI(
    api_key=os.environ.get("MARITACA_API_KEY"),  # Insira sua chave de API aqui
    base_url="https://chat.maritaca.ai/api",
)

response = client.responses.create(
  model="S5",
  input="What is the id for the clients alexandre and helena? what is the sum of both of them",
  tools=tools,  # Passamos as ferramentas registradas
)
```

Aqui, o assistente recebe a mensagem do usuário perguntando sobre os IDs de dois clientes e a soma desses IDs. O assistente saberá que deve chamar a função get_user_id para obter esses dados.

#### Passo 4: Executando as Chamadas de Função

Depois que o assistente identifica que precisa chamar a função get_user_id, processamos todas as chamadas de função e geramos respostas. O código a seguir lida com a execução dessas chamadas:

```python
all_tool_outputs = []

for item in response.output:
    if item.type == "function_call":
        arguments = json.loads(item.arguments)
        function_name = item.name

        # Chamamos a função 'get_user_id' para cada nome fornecido
        if function_name == "get_user_id":
            get_user_id_response = get_user_id(arguments['name'])

            # Criamos um item de saída de chamada de função com o resultado
            all_tool_outputs.append({
                "type": "function_call_output",
                "call_id": item.call_id,
                "output": json.dumps({
                    "name": arguments['name'],
                    "id": get_user_id_response
                })
            })

```

Nesta parte, processamos todas as chamadas de função:

* Carregamos os argumentos necessários (o nome do cliente).
* Executamos a função get_user_id para gerar um ID fictício para cada nome.
* Criamos uma resposta no formato adequado, associando cada nome ao seu ID correspondente.

#### Passo 5: Preparando e Enviando a Resposta Final

Depois de gerar os IDs para os clientes, preparamos a resposta final, que inclui a soma dos IDs. Enviamos isso de volta ao assistente para que ele possa informar o usuário.

```python
final_response = client.responses.create(
    model="S5",
    input=[
        {"role": "user", "content": "What is the id for the clients alexandre and helena? what is the sum of both of them"},
        *response.output,  # Devolvemos o raciocínio e as chamadas de função da resposta anterior
        *all_tool_outputs  # Incluímos os itens de saída das chamadas de função
    ],
)

# Imprimimos a resposta final do assistente
print(final_response.output_text)

```
<br/>
<div className="custom-box" style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--ifm-table-stripe-background)',
    padding: '12px',
    border: '1px solid var(--cta-chat-border)',
    borderRadius: '8px',
    margin: '12px 0',
    color: 'var(--ifm-font-color-base)'
    }}>
    <span style={{ fontSize: '1.5em', marginRight: '10px', color: 'var(--color-tangerine)' }}>💡</span>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>O modelo possui capacidade de executar funções de forma independente?</strong>
        <p style={{ fontSize: '0.9em' }}>Não, o modelo apenas propõe chamadas de função e cria argumentos. O seu aplicativo é quem deve gerenciar a execução dessas funções com base nessas propostas (e informar ao modelo os resultados dessa execução).</p>
    </div>
</div>
<br/>
<div className="custom-box" style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--cta-chat-bg)',
    padding: '12px',
    border: '1px solid var(--cta-chat-border)',
    borderRadius: '8px',
    margin: '12px 0',
    color: 'var(--ifm-font-color-base)'
    }}>
    <span style={{ fontSize: '1.5em', marginRight: '10px', color: 'var(--color-forest)' }}>🎯</span>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}>O modelo tem acesso a ferramentas internas?</strong>
        <p style={{ fontSize: '0.9em' }}>Não, o modelo não tem acesso a nenhuma ferramenta interna do lado do servidor. Todas as ferramentas devem ser explicitamente fornecidas por você, o usuário, em cada solicitação de API. Isso lhe dá controle total e flexibilidade sobre as ferramentas que o modelo pode usar.</p>
    </div>
</div>
