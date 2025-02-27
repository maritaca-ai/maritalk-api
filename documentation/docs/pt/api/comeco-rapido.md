---
id: comeco-rapido
title: Começo Rápido
---
import React from 'react';
import styles from './styles-api.module.css';

# Começo Rápido
<a href="/api/pt/completion" className={styles['callout-box']} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', color: 'black', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textDecoration: 'none' }}>
  <img src="/img/code-icon.png" alt="Code Icon" style={{ width: '50px', marginRight: '15px' }} />
  <div>
    <strong>Quer ir direto para o código?</strong><br />
    <span>Pule o começo rápido e navegue para API reference.</span>
  </div>
</a>


<br />

Nossa API possibilita que desenvolvedores integrem os modelos de última geração da Maritaca às suas aplicações. Esse documento demonstra como usar a nossa API através de requisições HTTP. Este guia foi criado para ajudar a configurar seu ambiente de desenvolvimento local e enviar sua primeira solicitação de API. Se você encontrar qualquer dificuldade ou tiver qualquer pergunta adicional, por favor, acesse a <a href="https://plataforma.maritaca.ai/" className={styles.customLink}>
  Plataforma
</a> e preencha uma solicitação de suporte disponível através do botão de Ajuda.
 
Se você é um desenvolvedor experiente, pode ir diretamente para a [referência da API](/api/pt/completion). 


## Passo 1: Configuração da Conta

Primeiro, crie uma conta ou faça login na [plataforma da Maritaca](https://plataforma.maritaca.ai/). Em seguida, navegue até a [página de chave da API](https://plataforma.maritaca.ai/chaves-de-api) e clique em "Criar nova chave", nomeando a chave opcionalmente. Certifique-se de salvar a chave em um local seguro e não compartilhar com ninguém.
<img src="/img/chave.png" alt="Configuracao" style={{ width: '1000px', height: 'auto',marginRight: '15px'}} />

<br/>
<br/>

Cole a chave criada em minha_chave.
```python
model = maritalk.MariTalk(
    key=f"{minha_chave}", #Cole a chave aqui Ex: '100088...'
    model="sabia-3"  # No momento, suportamos os modelos sabia-3 e sabia-2-small
)
```
<details>
  <summary> **Configurar sua chave API para todos os projetos (recomendado)** </summary>

  Para configurar sua chave de API da plataforma Maritaca AI para uso em seus projetos, você precisará definir uma variável de ambiente que armazenará essa chave. O processo é semelhante tanto em sistemas Linux quanto em Windows, mas há diferenças na forma como você manipula variáveis de ambiente em cada sistema. Aqui está um guia passo a passo para ambos os sistemas operacionais. A principal vantagem dessa abordagem é que a biblioteca Python detectará automaticamente e usará a chave sem precisar escrever qualquer código.
  #### Para Linux/macOS:

  1. **Abra o Terminal:** Abra o terminal no seu sistema operacional Linux ou macOS.
  2. **Exportar a Variável de Ambiente:** Escreva a linha abaixo, substituindo minha_chave pela sua chave API criada no passo 1:
  ```bash
  export MARITACA_API_KEY='minha_chave'
  ```
  3. **Adicionar ao Arquivo de Perfil:** Para que essa configuração persista em todas as sessões, adicione o comando export ao arquivo de perfil do seu shell. Para o Bash, geralmente é o .bashrc, .bash_profile ou .profile na sua pasta de usuário. Abra o arquivo apropriado com um editor de texto:
  ```bash
  nano ~/.bashrc
  ```
  e adicione a linha
  ```bash
  export MARITACA_API_KEY='minha_chave'
  ```
  4. **Carregar o Arquivo de Perfil:** Para que as alterações tenham efeito, você precisa carregar o arquivo de perfil atualizado:
  ```bash
  source ~/.bashrc
  ```
  5. **Verificação:** Verifique a configuração digitando no terminal o seguinte comando:
  ```bash
  echo $MARITACA_API_KEY
  ```
  Se tudo ocorreu de forma correta, sua chave deverá ser exibida.

  #### Windows

  1. **Abrir o Prompt de Comando ou PowerShell:** Abra o prompt de comando (CMD) ou o PowerShell no seu sistema Windows.

  2. **Definir a Variável de Ambiente:** No prompt de comando, você pode definir a variável de ambiente temporariamente com o seguinte comando:
  ```bash
  set MARITACA_API_KEY='minha_chave'
  ```
  No PowerShell, o comando seria:
  ```bash
  $env:MARITACA_API_KEY='minha_chave'
  ```
  Este comando definirá a variável de ambiente para a sessão atual.

  3. **Configuração permanente:** Para tornar a variável de ambiente persistente, você precisa adicionar a chave ao seu perfil de usuário.
  Vá para o Painel de Controle > Sistema > Configurações avançadas do sistema > Variáveis de ambiente.
  Na seção "Variáveis do usuário", clique em "Novo...".
  Defina o nome da variável como MARITACA_API_KEY e o valor como sua chave de API.
  Clique em OK para fechar as caixas de diálogo.

  5. **Verificação:** Verifique a configuração digitando no terminal o seguinte comando:
  ```bash
  echo $MARITACA_API_KEY
  ```
  Se tudo ocorreu de forma correta, sua chave deverá ser exibida.
</details>
<details>
  <summary> **Configurar sua chave API para um único projeto** </summary>

  Para garantir que sua chave API seja mantida em sigilo e restrita a um projeto específico, você pode implementar um sistema de gerenciamento de chaves seguro. Primeiramente, configure um arquivo de variáveis de ambiente chamado .env no diretório do seu projeto.

  Para proteger suas credenciais e evitar que sejam enviadas acidentalmente para um repositório de controle de versão, é essencial criar um arquivo .gitignore na raiz do diretório do projeto. Neste arquivo, insira a linha .env para assegurar que o arquivo .env não seja rastreado pelo sistema de controle de versão.

  Após ter estabelecido o arquivo .gitignore, você pode prosseguir para a criação do arquivo .env. Utilize o terminal ou o seu IDE (Ambiente de Desenvolvimento Integrado) preferido para editar estes arquivos. Insira sua chave API secreta no arquivo .env, definindo-a como MARITACA_API_KEY. Caso ainda não possua uma chave API, é necessário gerá-la acessando a seção de chaves da API na plataforma relevante.

  Seu arquivo .env deve ser configurado da seguinte maneira:

  ```text
  MARITACA_API_KEY= 'minha_chave'
  ```
  Certifique-se de substituir minha_chave pela sua chave API real. Este arquivo agora conterá a chave necessária para que seu código Python possa acessar os serviços associados à sua chave API, mantendo as credenciais seguras e privadas.

  A chave API pode ser importada executando o código abaixo:

  ```python
  import openai

  model = openai.OpenAI(
    api_key="minha_chave",,
    base_url="https://chat.maritaca.ai/api",
  )

  ```
</details>


## Passo 2: Configurando o Python
<details>
  <summary>**Instalar Python**</summary>

    Para usar a biblioteca Python da Maritaca, você precisará garantir que tem o Python instalado. Alguns computadores vêm com Python pré-instalado, enquanto outros requerem que você configure por conta própria. 

    1. Vá até o site oficial do Python: [https://www.python.org/](https://www.python.org/)
    2. No menu superior, clique em "Downloads".
    3. Escolha a versão mais recente do Python que é compatível com o seu sistema operacional (Windows, macOS ou Linux).
    4. Clique para baixar o instalador.
    5. Após o download, abra o arquivo de instalação.
    6. Se você estiver em um sistema Windows, clique em "Run" ou "Executar".
    7. Siga os passos do assistente de instalação.
      - **Para Windows e macOS:** A instalação padrão geralmente é suficiente. Certifique-se de marcar a opção para adicionar o Python ao PATH do sistema.
      - **Para Linux:** Em muitas distribuições, o Python já vem pré-instalado. Se precisar instalar ou atualizar, você pode usar o gerenciador de pacotes da sua distribuição (como `apt` para Ubuntu, `yum` para Fedora, etc.).
    8. Para verificar se o Python foi instalado corretamente, abra o terminal (ou prompt de comando no Windows) e digite:
    ```bash
    python --version
    ```
</details>

<details>
  <summary>**Configurar um ambiente virtual (opcional)**</summary>

Um ambiente virtual é um diretório que contém um ambiente Python independente, com sua própria instalação de pacotes. Isso permite que você gerencie facilmente as dependências de diferentes projetos. Para criar um ambiente virtual, o Python fornece um módulo embutido chamado `venv` que oferece a funcionalidade básica necessária para o ambiente virtual. Abra o terminal ou prompt de comando e execute os seguintes comandos:

```bash
python -m venv meu_ambiente
```

Para trabalhar com o ambiente virtual, você precisa ativá-lo:

Em sistemas baseados em Unix (Linux/macOS) execute:
```bash
source meu_ambiente/bin/activate
```

No Windows, execute:

```bash
meu_ambiente\Scripts\activate
```
Depois de ativado, o nome do seu ambiente aparecerá no prompt, indicando que você está trabalhando dentro dele.
</details>

<details>
  <summary>**Instalar o Gerenciador de Pacotes PIP**</summary>

O Python já vem com o PIP, que é um gerenciador de pacotes, mas você deve verificar se está usando a versão mais recente:
```bash
pip install --upgrade pip
```
</details>

## Passo 3: Instalar a biblioteca
Nossa API pode ser usada de duas formas: Através da nossa biblioteca, ou através da compatibilidade com a OpenAI. Nesse tutorial, ensinaremos como enviar a primeira requisição usando a compatibilidade com a OpenAI. Depois de instalar o Python e opcionalmente com o ambiente virtual ativado e o pip atualizado, você pode instalar a biblioteca openai. No terminal/linha de comando, execute:

```bash
pip install openai
```

Com o ambiente virtual ativado, você pode listar todas as bibliotecas Python instaladas nesse ambiente com o comando pip list. Abra o terminal ou prompt de comando e digite:

```bash
pip list
```
Se a instalação foi bem-sucedida, você verá algo parecido com isto:
```bash
openai X.XX.X
```
onde X.XX.X é o número da versão da biblioteca openai que você instalou.


## Passo 4: Enviando sua primeira solicitação de API

Depois de configurar o Python e configurar uma chave API, o passo final é enviar uma solicitação à API da OpenAI usando a biblioteca Python. Para fazer isso, crie um arquivo chamado maritaca.py usando o terminal ou um IDE.
Dentro do arquivo, copie e cole um dos exemplos abaixo:

```python
import openai

client = openai.OpenAI(
    api_key="insira sua chave aqui. Ex: '100088...'",
    base_url="https://chat.maritaca.ai/api",
)

response = client.chat.completions.create(
  model="sabia-3",
  messages=[
    {"role": "user", "content": "Quanto é 25 + 27?"},
  ],
  max_tokens=8000
)
answer = response.choices[0].message.content

print(f"Resposta: {answer}")   # Deve imprimir algo como "25 + 27 é igual a 52."
```
Para executar o código, digite python maritaca.py no terminal/linha de comando.
