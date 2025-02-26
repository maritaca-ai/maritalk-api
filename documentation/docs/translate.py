import os
import sys
from openai import OpenAI
from pathlib import Path

pathMap = {
    'visao-geral': 'overview',
    'introducao': 'introduction',
    'modelos': 'models',
    'api/comeco-rapido': 'api/quick-start',
    'api/openai-compatibilidade': 'api/openai-compatibility',
    'casos-de-uso': 'use-cases',
    'glossario': 'glossary',
    'status': 'status',
    'chamada-funcoes': 'function-calling',
}

def translate_text(text):
    try:
        client = OpenAI(
            api_key=os.environ.get("MARITACA_API_SECRET_KEY"),
            base_url="https://chat.maritaca.ai/api",
        )
        response = client.chat.completions.create(
            model="sabia-3",
            messages=[
                {"role": "system", "content": "Traduza este documento do português para o inglês."},
                {"role": "user", "content": text},
            ],
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Erro ao chamar a API de tradução: {e}")
        return None

def map_pt_to_en_path(pt_file_path):
    pt_path = Path(pt_file_path)
    
    pt_relative_path = str(pt_path.with_suffix('')).replace('pt/', '')
    
    for pt_prefix, en_prefix in pathMap.items():
        if pt_relative_path == pt_prefix:
            en_file_path = pt_path.with_name(pt_path.name.replace(pt_prefix, en_prefix)).with_suffix('.md')
            en_file_path = str(en_file_path).replace('pt/', 'en/')
            return en_file_path
    
    print(f"Caminho {pt_file_path} não encontrado no mapeamento.")
    return None

def translate_file(pt_file_path):
    en_file_path = map_pt_to_en_path(pt_file_path)
    
    if en_file_path is None:
        return

    with open(pt_file_path, 'r', encoding='utf-8') as file:
        pt_content = file.read()

    translated_content = translate_text(pt_content)

    if translated_content is None:
        print(f"Falha ao traduzir o arquivo: {pt_file_path}")
        return

    en_dir = os.path.dirname(en_file_path)
    Path(en_dir).mkdir(parents=True, exist_ok=True)

    with open(en_file_path, 'w', encoding='utf-8') as file:
        file.write(translated_content)

    print(f"Tradução concluída para: {en_file_path}")

if __name__ == "__main__":
    pt_file_path = sys.argv[1]
    translate_file(pt_file_path)
