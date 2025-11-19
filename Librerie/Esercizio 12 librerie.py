from datetime import datetime, timedelta
import os
import logging
import time

logs_path = 'logs'
giorni_pulizia = 7
current_time = time.time()

data_odierna = datetime.now().strftime("%Y-%m-%d")
log_filename = os.path.join(logs_path, f'{data_odierna}.log')

logging.basicConfig(
    format='%(levelname)s - %(asctime)s - %(message)s',
    filename=log_filename,
    encoding='utf-8',
    level=logging.INFO,
    datefmt='%H:%M:%S'
)

if os.path.isdir('logs'):
    pass
else:
    print("La cartella non esiste, la creo...")
    os.makedirs('logs')
    print("Cartella 'logs' creata!")

logging.info(f"INFO - Programma avviato")
logging.info(f"INFO - Utente 'Mario' ha fatto il login" )
logging.warning(f"WARNING - Memoria bassa (80%)")
logging.error(f"ERROR - Connessione al database fallita")
logging.info(f"INFO - Riprovando connessione")
logging.info(f"INFO - Conessione riuscita!")

print(F"Log scritti in: {log_filename}")

print(f"\nCancellazione log più vecchi di {giorni_pulizia} giorni...")
file_rimossi = 0

for filename in os.listdir(logs_path):
    filepath = os.path.join(logs_path, filename)

data_creazione = os.path.getctime(filepath)
giorni_trascorsi = (current_time - data_creazione) / (24 * 3600)

if giorni_trascorsi >= giorni_pulizia:
    os.unlink(filepath)
    print(f"Rimosso {filename} perchè piu vecchio di 7 giorni.")
    file_rimossi += 1

if file_rimossi == 0:
    print("Nessun file da cancellare")
else:
    print(f"\nFile totali rimossi: {file_rimossi}")