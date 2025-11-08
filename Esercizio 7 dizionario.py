magazzino = {
    'biscotti': 3,
    'pane': 12,
    'computer': 6,
    'sottaceti': 4,
    'pasta': 10
}

while True:

 print("=== GESTIONE INVENTARIO ===\n")
 print("1 - Visualizza inventario")
 print("2 - Aggiungere quantità prodotto")
 print("3 - Riumovere quantità di un prodotto")
 print("4 - Aggiungere un nuovo prodotto")
 print("5 - Eliminare un prodotto")
 print("6 - Totale prodotti in magazzino")
 print("7 - Uscire\n")

 scelta = str(input("Cosa vuoi fare?:"))

 if scelta == '1':
     for key, value in magazzino.items():
      print(f"{key}: {value}")
 
 elif scelta == '2':
     prodotto = input("A Quale prodotto vuoi aggiungere quantità?:")
     if prodotto in magazzino:
        aggiunta = int(input("Quanto vuoi aggiungere?:"))
        somma = magazzino[prodotto] + aggiunta
        print(f"{prodotto} aggiornato: {magazzino[prodotto]} + {aggiunta} = {somma}")

 elif scelta == '3':
     prodotto = input("A Quale prodotto vuoi sottrarre quantità?:")
     if prodotto in magazzino:
        sottrazione = int(input("Quanto vuoi sottrarre?:"))
        somma = magazzino[prodotto] - sottrazione
        print(f"{prodotto} aggiornato: {magazzino[prodotto]} - {sottrazione} = {somma}")

 elif scelta == '4':
    prodotto = input("Seleziona il prodotto da aggiungere:")
    quantità = input("Immetti la quantià del prodotto:")
    magazzino.update({prodotto: quantità})
    print("Inventario agiornato!")

 elif scelta == '5':
    prodotto = input("Scegli il prodotto da eliminare:")
    magazzino.pop(prodotto)
    print("Prodotto rimosso!")
 
 elif scelta == '6':
    print(f"Il magazzino contiente {len(magazzino)} prodotti.")

 elif scelta == '7':
    break



