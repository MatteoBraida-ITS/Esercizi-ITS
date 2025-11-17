import json
import os

def where_json(nome_file):
    return os.path.exists(nome_file)

if where_json('studenti.json'):
    pass
else:
    studenti = [
    {"nome": "Mario", "voto": 8},
    {"nome": "Luigi", "voto": 9},
    {"nome": "Anna", "voto": 7}
]
    
    with open('studenti.json', 'w') as file:
        json.dump(studenti, file, indent=4)