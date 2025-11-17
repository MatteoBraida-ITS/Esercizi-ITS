from datetime import datetime

ora_attuale = datetime.now()

data_formattata = ora_attuale.strftime("%Y %m %d  %H:%M:%S")

with open("log.txt", "a") as file:
    file.write(f"[{data_formattata}] programma avviato\n")
    file.write(f"[{data_formattata}] utente ha inserito il nome: Mario\n")
    file.write(f"[{data_formattata}] programma terminato\n")

with open("log.txt", "r") as file:
    contenuto = file.read()
    print(contenuto)