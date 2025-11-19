import json
import csv
import glob, os

with open('studenti.csv', 'w+', newline='') as csvfile:
    writer = csv.writer(csvfile)
    field = ["nome", "cognome", "voto"]

    writer.writerow(field)
    writer.writerow(["Mario", "Rossi", "8"])
    writer.writerow(["Luigi", "Bianchi", "8"])
    writer.writerow(["Anna", "Verdi", "8"])
    print("✅ File CSV creato!\n")

with open('studenti.csv', 'r') as csvfile:
    file = csv.reader(csvfile)
    print("📊 Dati letti dal CSV:\n")
    for lines in csvfile:
        print(lines)
        
with open('studenti.csv', mode='r', newline='', encoding='utf-8') as csvfile:
    data = list(csv.DictReader(csvfile))

with open('studenti.json', mode='w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, indent=4)
    file_name = os.path.basename("C:/Users/Matteo/Documents/GitHub/Esercizi-ITS/studenti.json")
    print(f"✅ Dati salvati in {file_name}\n")

with open("studenti.json", mode='r', encoding='utf-8') as jsonfile:
    json_data = json.load(jsonfile)    

pretty_json = json.dumps(json_data, indent= 4)
print(f"📄 Contenuto di {file_name}:")
print("-" * 50)
print(pretty_json)