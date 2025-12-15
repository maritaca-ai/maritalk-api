---
id: structured-outputs
title: Saídas Estruturadas
---

# Saídas estruturadas

Saídas Estruturadas garantem que os dados gerados pelos modelos sigam esquemas predefinidos fornecidos pelo usuário, como JSON, simplificando integrações em aplicações. Quando o formato da resposta é crítico, estratégias como expressões regulares (regex) podem ser usadas, mas essas abordagens são frequentemente frágeis, complexas e incapazes de garantir que todos os campos sejam extraídos de forma precisa e consistente. Por outro lado, Saídas Estruturadas oferecem uma solução mais confiável, reduzindo erros e facilitando a integração direta. Contudo, para casos em que respostas narrativas ou flexibilidade são prioritárias, seu uso não é necessário.

## Exemplos de Uso

### 1. Extração de Dados

Extraia informações estruturadas de textos não estruturados:

```python
from pydantic import BaseModel
import openai

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

class DetalhesEvento(BaseModel):
    nome_evento: str
    data: str
    participantes: list[str]
    traje: list[str]

completion = client.beta.chat.completions.parse(
    model="sabia-3",
    messages=[
        {"role": "system", "content": "Extraia detalhes do evento."},
        {"role": "user", "content": "João e Maria vão a uma festa junina no sábado, às 18h, em Campina Grande. Eles vão vestidos a caráter: Maria com um vestido florido e João com camisa xadrez e chapéu de palha."},
    ],
    response_format=DetalhesEvento,
)

evento = completion.choices[0].message.parsed

print(evento)
```

### 2. Análise de Sentimentos

Identifique sentimentos em textos:

```python
import openai

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

sentimento_schema = {
    "type": "object",
    "schema":{
        "properties": {
            "texto": {"type": "string"},
            "sentimento": {"type": "string", "enum": ["positivo", "negativo", "neutro"]},
        },
        "required": ["texto", "sentimento"],
    }
}

completion = client.beta.chat.completions.parse(
    model="sabia-3",
    messages=[
        {"role": "system", "content": "Classifique o sentimento do texto em positivo, negativo ou neutro."},
        {"role": "user", "content": "Odiei o trabalho oferecido!"},
    ],
    response_format={"type": "json_schema", "json_schema": sentimento_schema}
)

resultado = completion.choices[0].message.content

print(resultado)
```

### 3. Plano de Leitura

Gere um plano de leitura estruturado com base na solicitação do usuário, validando os dados com um esquema JSON e exibindo os livros com seus detalhes.

```python
from enum import Enum
from typing import List, Optional
from pydantic import BaseModel
import openai
import json

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

class TipoLeitura(str, Enum):
    classico = "clássico"
    contemporaneo = "contemporâneo"

class Livro(BaseModel):
    tipo: TipoLeitura
    titulo: str
    autor: str
    descricao: str

Livro.model_rebuild() 

class PlanoLeitura(BaseModel):
    nome_plano: str
    livros: List[Livro]


schema = {
    "type": "object",
    "schema": {
        "properties": {
            "nome_plano": {"type": "string"},
            "livros": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "tipo": {"type": "string", "enum": ["clássico", "contemporâneo"]},
                        "titulo": {"type": "string"},
                        "autor": {"type": "string"},
                        "descricao": {"type": "string"},
                        "subitens": {"type": ["array", "null"]}
                    },
                    "required": ["tipo", "titulo", "autor", "descricao"]
                }
            }
        },
        "required": ["nome_plano", "livros"]
    }
}

completion = client.beta.chat.completions.parse(
    model="sabia-3",
    messages=[
        {"role": "system", "content": "Você é um gerador de planos de leitura. Converta a solicitação do usuário em um plano de leitura estruturado."},
        {"role": "user", "content": "Crie um plano de leitura para explorar a literatura brasileira, incluindo clássicos e literatura contemporânea."}
    ],
    response_format={"type": "json_schema", "json_schema": schema}
)

plano_leitura = PlanoLeitura.model_validate(json.loads(completion.choices[0].message.content))

print("Nome do Plano:", plano_leitura.nome_plano)
print("Livros:")
for livro in plano_leitura.livros:
    print(f" - {livro.titulo} por {livro.autor}: {livro.descricao}")

```

## 4. Uso com stream

No caso de uso com stream, as saídas estruturadas podem ser processadas em tempo real, conforme são geradas, proporcionando uma experiência mais interativa. Esse método é particularmente vantajoso para lidar com tarefas que envolvem a geração de grandes volumes de dados ou respostas extensas. A seguir, apresentamos um exemplo:

```python
from typing import List, Dict
from pydantic import BaseModel
import openai

class PratosTipicosModel(BaseModel):
    pratos: List[str]

client = openai.OpenAI(
    api_key="", #Sua API_KEY
    base_url="https://chat.maritaca.ai/api",
)

with client.beta.chat.completions.stream(
    model="sabia-3",
    messages=[
        {"role": "system", "content": "Identifique os pratos típicos brasileiros no texto fornecido."},
        {
            "role": "user",
            "content": "Na festa junina, temos canjica, pamonha, curau e quentão, além de muita música e dança.",
        },
    ],
    response_format=PratosTipicosModel,
) as stream:
    for event in stream:
        if event.type == "content.delta":
            if event.parsed is not None:
                print("content.delta parsed:", event.parsed)
        elif event.type == "content.done":
            print("content.done")
        elif event.type == "error":
            print("Error in stream:", event.error)

final_completion = stream.get_final_completion()
print("Final completion:", final_completion)


```

## Como usar o parâmetro response_format
O parâmetro `response_format` é usado para instruir que as respostas geradas pelo modelo sigam um formato estruturado predefinido. Os valores para o response_format são:
1. Schema JSON (json_schema): Defina um esquema JSON para validar a estrutura e os tipos de dados da resposta.
```python
response_format={ type: "json_schema", json_schema: {"strict": true, "schema": ...} }
ou
response_format={ type: "json_schema", schema: {...} }
```
2. Modelos Pydantic: Utilize classes Pydantic para mapear e validar os dados retornados.
```python
response_format=ModelPydantic
```
3. Objeto JSON simples também conhecido por modo json onde é solicitado um objeto json sem validações adicionais: 
```python
response_format={"type": "json_object"}
```

## Boas Práticas

* Defina Esquemas Claros: Use ferramentas como JSON Schema ou Pydantic para projetar esquemas adequados.
* Valide a Entrada: Certifique-se de que as entradas dos usuários sejam compatíveis com o esquema.
* Manuseio de Erros: Inclua lógica para tratar recusas ou respostas malformadas programaticamente.

<br/>
<div className="custom-box" style={{
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: 'var(--ifm-table-stripe-background)', 
    padding: '12px', 
    border: '1px solid var(--navbar-border)', 
    borderRadius: '8px', 
    margin: '12px 0',
    color: 'var(--ifm-font-color-base)'
    }}>
    <span style={{ fontSize: '1.5em', marginRight: '10px', color: 'var(--color-tangerine)' }}>💡</span>
    <div>
        <strong style={{ display: 'block', fontSize: '1em', marginBottom: '5px' }}> MODO JSON </strong>
        <p style={{ fontSize: '0.9em' }}> O modo JSON apenas garante que a saída do modelo seja JSON válido. Já o Structured Outputs corresponde de forma confiável à saída do modelo ao esquema que você especificar. Recomendamos que você use o Structured Outputs se ele for suportado para o seu caso de uso. Ao usar o modo JSON, caso a instrução de produzir um JSON não seja explicitamente passada para o modelo, este pode gerar um fluxo interminável de espaços em branco, e a solicitação pode ser executada continuamente até atingir o limite de tokens. </p>
    </div>
</div>
<br/>

## Schemas suportados

O Structured Outputs é compatível com um subconjunto do JSON Schema, permitindo que você utilize os seguintes tipos: String, Number, Boolean, Integer, Object, Array, Enum, anyOf e oneOf. Para manter a estabilidade e o bom funcionamento do recurso, algumas funcionalidades de JSON Schema não são suportadas — por exemplo, minLength, maxLength, pattern, format, minimum, maximum, multipleOf, minItems, maxItems, uniqueItems, minProperties, maxProperties, allOf, patternProperties, unevaluatedProperties, propertyNames, unevaluatedItems e contains.

Ao trabalhar com objetos, você pode utilizar até 100 propriedades, com um máximo de 5 níveis de aninhamento. Para otimizar a estrutura do seu esquema, a soma dos comprimentos de todos os nomes de propriedade, definições (definitions), valores de enum e valores de const deve permanecer abaixo de 15.000 caracteres. Nos campos de tipo enum, é possível incluir até 500 valores no total. Caso um único enum ultrapasse 250 valores (todos do tipo string), a soma dos comprimentos desses valores deve ficar abaixo de 7.500 caracteres. Se qualquer limite for excedido ou se for encontrada alguma funcionalidade não suportada, ocorre um erro.
