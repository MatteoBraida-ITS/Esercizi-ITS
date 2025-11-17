from datetime import datetime

ora_attuale = datetime.now()

data_formattata = ora_attuale.strftime("%A %d %B %Y alle %H:%M:%S")
print(f"Oggi è {data_formattata}")