import json
import csv

with open('studenti.csv', 'w+', newline='') as csvfile:
    writer = csv.writer(csvfile)
    field = ["nome", "cognome", "voto"]

    writer.writerow(field)
    writer.writerow(["Mario", "Rossi", "8"])
    writer.writerow(["Luigi", "Bianchi", "8"])
    writer.writerow(["Anna", "Verdi", "8"])
    print("✅ File CSV creato!")

with open('studenti.csv', 'r') as csvfile:
    file = csv.reader(csvfile)
    for lines in csvfile:
        print(lines)


