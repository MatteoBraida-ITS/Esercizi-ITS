import os
import json

if os.path.isdir('miei_dati') == True:
    pass
else:
    print("Cartella miei dati non esiste, la creo...")
    os.makedirs('miei_dati')
    print("Cartella 'miei_dati' creata!")

dati = [
    {"nome": "Mario", "voto": 8},
    {"nome": "Luigi", "voto": 9},
    {"nome": "Anna", "voto": 7}
]

with open('dati.json', 'w') as file:
 json.dump(dati, file, indent=4)
 percorso = os.path.join("miei_dati", "dati.json")

print(f"File salvato in {percorso}")

