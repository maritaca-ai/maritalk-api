import os
import maritalk

client = maritalk.MariTalkLocal()
client.start_server(license=os.environ["MARITALK_LICENSE"])

# Question selected from the FaQuAD dataset:
# https://huggingface.co/datasets/eraldoluis/faquad?row=32
result = client.generate([
    {
        "role": "user",
        "content": """Com base no texto abaixo, resposta a pergunta "Qual o objetivo do POSCOMP?"
Contexto: O Exame Nacional para Ingresso na Pós-Graduação em Computação (POSCOMP) é um exame aplicado em todas as regiões do País. Em parceria com a Sociedade Peruana de Computação, desde 2006 o Exame passou a ser realizado no Peru. O POSCOMP testa conhecimentos na área de Computação e tem como objetivo específico avaliar os conhecimentos de candidatos a Programas de Pós-Graduação em Computação oferecidos no Brasil. A grande maioria dos Programas de Pós-Graduação no País utiliza, de alguma forma, o resultado do POSCOMP em seu processo seletivo."""
    }
])
print(result["output"])
