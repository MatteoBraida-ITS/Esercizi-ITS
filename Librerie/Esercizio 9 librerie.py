from datetime import datetime
import os
import shutil

with open("dati_importanti.txt", "w") as file:
    print(f"✍️ File creato: {file}")

if os.path.isdir('backup') == True:
    pass
else:
    print("📦 Cartella backup non esiste, la creo...")
    os.makedirs('backup')
    print("📁 Cartella 'backup' creata!")

source = file
percorso_file = f"backup/{file}"

destinazione = shutil.copy(source, percorso_file)

tempo = os.path.getmtime(percorso_file)
timestamp = datetime.fromtimestamp(tempo).strftime("_%Y-%m-%d_%H-%M-%S")

os.rename(percorso_file,'backup/dati_importanti'+ timestamp + '.txt')
percorso_file = 'backup/dati_importanti'+ timestamp + '.txt'

print(f"Backup creato: {percorso_file}\n")

if os.path.isfile('backup/dati_importanti'+ timestamp + '.txt') == True:
    print(f"📂 File nella cartella backup:\n {'dati_importanti' + timestamp + '.txt'}")
else:
    print("File non trovato!")