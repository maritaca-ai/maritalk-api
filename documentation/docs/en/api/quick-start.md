---
id: quick-start
title: Quick Start
---
import React from 'react';
import styles from './styles-maritalk-api.module.css';

# Quick Start
<!-- TODO: Add link to API Reference when it's ready 
<div className={styles['callout-box']}>
  <img src="/img/code-icon.png" alt="Code Icon" />
  <div>
    <strong>Want to go straight to the code?</strong><br />
    <span>Skip the quick start and navigate to <a href="/docs/api-reference">API reference</a>.</span>
  </div>
</div>

<br />
-->
Maritaca API enables developers to integrate Maritaca's state-of-the-art models into their applications. This document demonstrates how to use our API through HTTP requests. This guide is designed to help you set up your local development environment and send your first API request. If you encounter any difficulties or have additional questions, please access <a href="https://plataforma.maritaca.ai/" className={styles.customLink}>
  Platform
</a> and fill out a support request available through the Help button.
<!-- TODO: Add link to API Reference when it's ready 
If you are an experienced developer, you can go directly to the [API reference](/docs/api-reference"). 
-->


## Step 1: Account Setup

First, create an account on Maritaca or log in. Then, navigate to the [API key page](https://plataforma.maritaca.ai/chaves-de-api) and click on "Create new key," optionally naming the key. Make sure to save this in a secure location and do not share it with anyone.
<img src="/img/chave.png" alt="Setup" style={{ width: '1000px', height: 'auto',marginRight: '15px'}} />

<br/>
<br/>

Paste the created key into minha_chave.
```python
model = maritalk.MariTalk(
    key=f"{minha_chave}", #Paste the key here Ex: '100088...'
    model="sabia-3"  # Currently, we support models sabia-3, sabia-2-medium, and sabia-2-small
)
```
<details>
  <summary> **Set up your API key for all projects (recommended)** </summary>

  To set up your API key from the Maritaca AI platform for use in your projects, you'll need to define an environment variable that will store this key. The process is similar on both Linux and Windows systems, but there are differences in how you handle environment variables on each system. Here's a step-by-step guide for both operating systems. The main advantage of this approach is that the Python library will automatically detect and use the key without you needing to write any code.
  #### For Linux/macOS:

  1. **Open the Terminal:** Open the terminal on your Linux or macOS operating system.
  2. **Export the Environment Variable:** Write the line below, replacing minha_chave with your API key created in step 1:
  ```bash
  export MARITACA_API_KEY='minha_chave'
  ```
  3. **Add to Profile File:** For this setting to persist in all sessions, add the export command to your shell profile file. For Bash, it's usually .bashrc, .bash_profile, or .profile in your user folder. Open the appropriate file with a text editor:
  ```bash
  nano ~/.bashrc
  ```
  and add the line
  ```bash
  export MARITACA_API_KEY='minha_chave'
  ```
  4. **Load Profile File:** For the changes to take effect, you need to load the updated profile file:
  ```bash
  source ~/.bashrc
  ```
  5. **Verification:** Verify the setup by typing the following command in the terminal:
  ```bash
  echo $MARITACA_API_KEY
  ```
  If everything went correctly, your key should be displayed.

  #### Windows

  1. **Open Command Prompt or PowerShell:** Open the command prompt (CMD) or PowerShell on your Windows system.

  2. **Set Environment Variable:** In the command prompt, you can temporarily set the environment variable with the following command:
  ```bash
  set MARITACA_API_KEY='minha_chave'
  ```
  In PowerShell, the command would be:
  ```bash
  $env:MARITACA_API_KEY='minha_chave'
  ```
  This command will set the environment variable for the current session.

  3. **Permanent Configuration:** To make the environment variable persistent, you need to add the key to your user profile.
  Go to Control Panel > System > Advanced system settings > Environment Variables.
  In the "User Variables" section, click "New...".
  Set the variable name as MARITACA_API_KEY and the value as your API key.
  Click OK to close the dialog boxes.

  5. **Verification:** Verify the setup by typing the following command in the terminal:
  ```bash
  echo $MARITACA_API_KEY
  ```
  If everything went correctly, your key should be displayed.
</details>
<details>
  <summary> **Set up your API key for a single project** </summary>

  To ensure your API key is kept confidential and restricted to a specific project, you can implement a secure key management system. Firstly, set up an environment variables file named .env in the project directory.

  To protect your credentials and prevent them from being accidentally sent to a version control repository, it's essential to create a .gitignore file in the root directory of the project. In this file, enter the line .env to ensure that the .env file is not tracked by the version control system.

  After establishing the .gitignore file, you can proceed to create the .env file. Use the terminal or your preferred IDE to edit these files. Insert your secret API key into the .env file, setting it as MARITACA_API_KEY. If you don't yet have an API key, you need to generate one by accessing the API keys section on the relevant platform.

  Your .env file should be configured as follows:

  ```text
  MARITACA_API_KEY= 'minha_chave'
  ```
  Make sure to replace minha_chave with your actual API key. This file will now contain the key necessary for your Python code to access services associated with your API key, keeping credentials secure and private.

  The API key can be imported by running the following code:

  ```python
  import maritalk

  model = maritalk.MariTalk(
      key="minha_chave",
      model="sabia-3"  # Currently, we support models sabia-3, sabia-2-medium, and sabia-2-small
  )

  ```
</details>


## Step 2: Setting Up Python
<details>
  <summary>**Install Python**</summary>

    To use the Maritaca Python library, you will need to ensure that you have Python installed. Some computers come with Python pre-installed, while others require you to set it up yourself.

    1. Go to the official Python website: [https://www.python.org/](https://www.python.org/)
    2. In the top menu, click on "Downloads".
    3. Choose the latest version of Python that is compatible with your operating system (Windows, macOS, or Linux).
    4. Click to download the installer.
    5. After downloading, open the installation file.
    6. If you are on a Windows system, click "Run" or "Executar".
    7. Follow the steps of the installation wizard.
      - **For Windows and macOS:** The default installation usually suffices. Make sure to check the option to add Python to the system PATH.
      - **For Linux:** On many distributions, Python is already pre-installed. If you need to install or update it, you can use your distribution's package manager (like `apt` for Ubuntu, `yum` for Fedora, etc.).
    8. To verify if Python was installed correctly, open the terminal (or command prompt on Windows) and type:
    ```bash
    python --version
    ```
</details>

<details>
  <summary>**Set up a virtual environment (optional)**</summary>

A virtual environment is a directory that contains an independent Python environment with its own package installation. This allows you to easily manage dependencies for different projects. To create a virtual environment, Python provides an embedded module called `venv` that offers the basic functionality needed for the virtual environment. Open the terminal or command prompt and execute the following commands:

```bash
python -m venv meu_ambiente
```

To work with the virtual environment, you need to activate it:

On Unix-based systems (Linux/macOS) execute:
```bash
source meu_ambiente/bin/activate
```

On Windows, execute:

```bash
meu_ambiente\Scripts\activate
```
After activation, the name of your environment will appear in the prompt, indicating that you are working within it.
</details>

<details>
  <summary>**Install the Package Manager PIP**</summary>

Python already comes with PIP, which is a package manager, but you should check if you are using the latest version:
```bash
pip install --upgrade pip
```
</details>

## Step 3: Install the Maritalk Python Library
After installing Python and optionally with the virtual environment activated and pip updated, you can install the maritalk library. In the terminal/command line, run:

```bash
pip install maritalk
```

With the virtual environment activated, you can list all the installed Python libraries in that environment with the pip list command. Open the terminal or command prompt and type:

```bash
pip list
```
If the installation was successful, you will see something like this:
```bash
maritalk X.X.X
```
where X.X.X is the version number of the maritalk library you installed.

## Step 4: Sending Your First API Request

After setting up Python and configuring an API key, the final step is to send a request to the Maritalk API using the Python library. To do this, create a file called maritalk.py using the terminal or an IDE.
Within the file, copy and paste one of the examples below:

```python
import maritalk

model = maritalk.MariTalk(
    key="insert your key here. Ex: '100088...'",
    model="sabia-3"  # Currently, we support models sabia-3, sabia-2-medium, and sabia-2-small
)

response = model.generate("What is 25 + 27?", max_tokens=200)
answer = response["answer"]

print(f"Answer: {answer}")   # Should print something like "25 + 27 equals 52."
```

Note that the response dictionary contains the usage key, which informs the amount of input and output tokens that will be charged.
To run the code, type python maritalk.py in the terminal/command line.
