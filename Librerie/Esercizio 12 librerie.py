from datetime import datetime, timedelta
import os
import logging
import time

logs_path = 'logs'
giorni_pulizia = 7
current_time = time.time()

if os.path.isdir('logs'):
    pass
else:
    print("La cartella non esiste, la creo...")
    os.makedirs('logs')
    print("Cartella 'logs' creata!")

tempo = os.path.getmtime(logs_path)
timestamp = datetime.fromtimestamp(tempo).strftime("%Y-%m-%d")

logging.basicConfig(format='%(asctime)s %(message)s', filename=f'logs/test-{timestamp}.log', encoding='utf-8', level=logging.INFO, datefmt='%H-%M-%S')
logging.info(f"INFO - Programma avviato")
logging.info(f"INFO - Utente 'Mario' ha fatto il login" )
logging.warning(f"WARNING - Memoria bassa (80%)")
logging.error(f"ERROR - Connessione al database fallita")
logging.info(f"INFO - Riprovando connessione")
logging.info(f"INFO - Conessione riuscita!")

print("Cancellazione log più vecchi di 7 giorni...")
for f in os.listdir(logs_path):
    data_creazione = os.path.getctime(f)
    if (current_time - data_creazione) // (24 * 3600) >= 7:
        os.unlink(f)
        print('{} removed'.format(f))
    else:
        print("(Nessun file da cancellare)")