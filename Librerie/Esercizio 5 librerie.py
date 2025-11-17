import json

studenti = [
    {"nome": "Mario", "voto": 8},
    {"nome": "Luigi", "voto": 9},
    {"nome": "Anna", "voto": 7}
]

with open("studenti.json", "w") as file:
    json.dump(studenti, file, indent=4)
    print("File json salvato!\n")

json_file = open('studenti.json')

print("Studenti letti dal file:\n")

for studente in studenti:
    print(f"- {studente["nome"]}: {studente["voto"]}/10")