dizionario = {"mela": "1.50",
              "arancia": "2.00",
              "kiwi": "3.50"}

print(dizionario)

while True:

 gestione = input("Cosa vuoi fare? (aggiungi/modifica/rimuovi/esci):")
 
 if gestione == 'aggiungi':
     nome_frutto = input(f"Nome del frutto:")
     prezzo_frutto = input(f"Prezzo del frutto:")
     dizionario.update({nome_frutto : prezzo_frutto})
     print("Frutto aggiunto!")
 
 if gestione == 'modifica':
     print(dizionario)
     change = input("Cosa vuoi modificare? (Nome frutto):")
     dizionario.pop(change)
     nome_frutto = input(f"Nome del frutto:")    
     prezzo_frutto = input(f"Prezzo del frutto:")    
     dizionario.update({nome_frutto : prezzo_frutto})
     print("Frutto modificato!")
 
 if gestione == 'rimuovi':
     print(dizionario)
     change = input ("Seleziona il frutto da eliminare:")
     dizionario.pop(change)
     print("Frutto rimosso!\n")

 if gestione == 'esci':
    break

print(f"Dizionario finale: {dizionario}")