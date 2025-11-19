import json
import os

file_path = "output.json"

cittadini = {
    "nome": "Mario",
    "età": 30,
    "città": "Milano"
}

with open('output.json', 'w', encoding='utf-8') as f:
    json.dump(cittadini, f, indent=4)


def lettura_json(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data
    except FileNotFoundError:
        print(f"Errore: il file {file_path} non è stato trovato.")
        return None
    except json.JSONDecodeError:
        print(f"Errore: il file {file_path} non è un file valido.")
        return None
    
if file_path == "output.json":
    risultato = lettura_json(file_path)
    if risultato:
        print("Dati letti con successo:")
        print(json.dumps(risultato, indent=2, ensure_ascii=False))