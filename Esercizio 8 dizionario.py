meteo = [("Milano", 12),("Roma", 15),("Napoli", 18),("Venezia", 10)]

diz = dict((città,temperatura) for città,temperatura in meteo)

operazioni = 0

while True:

 print("=== METEO CITTÀ ===\n")
 print("1 - Visualizzare tutte le temperature")
 print("2 - Cercare una città e mostrare temperatura")
 print("3 - Città più fredda e più calda")
 print("4 - Media delle temperature")
 print("5 - Filtrare città con temperatura > 10 gradi")
 print("6 - Aggiungere una nuova città")
 print("7 - Uscire\n")

 scelta = str(input("Cosa vuoi fare?:"))

 if scelta == '1':
    operazioni += 1
    for key, value in diz.items():
     print(f"{key}: {value}")
 
 elif scelta == '2':
    operazioni += 1
    città = input("Di quale città vuoi sapere la temperatura?:").capitalize()
    if città in diz:
     print(f"La temperatura a {città} è di {diz[città]} gradi\n")

 elif scelta == '3':
    operazioni += 1
    fredda = min(diz.values())
    calda = max(diz.values())
    print(f"La città con la temperatura più bassa è {min(diz, key=diz.get)} ({fredda}) e quella con la più alta è {max(diz, key=diz.get)} ({calda})\n")

 elif scelta == '4':
    operazioni += 1
    somma_temp = sum(diz.values())
    media_temp = somma_temp / len(diz)
    print(f"La temperatura media di queste città italiane è: {media_temp}\n")

 elif scelta == '5':
    operazioni += 1
    for key, value in diz.items():
        if value > 10:
            print(f"{key}: {value}")

 elif scelta == '6':
    operazioni += 1
    new_città = input("Inserisci una nuova città:").capitalize()
    new_temperatura = int(input("Inesrisci la sua temperatura:"))
    diz.update({new_città: new_temperatura})
    print("Città aggiunta!")

 elif scelta == '7':
    print("=== Riassunto finale ===\n")
    print("Dizionario finale:")
    print(f"{diz}\n")
    print(f"Operazioni eseguite: {operazioni}")
    break