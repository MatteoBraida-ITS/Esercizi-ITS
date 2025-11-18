lista_spesa =[]
new_item = 0

while True:
 print("\n")
 print("=== LISTA DELLA SPESA ===")
 print("1- Aggiungi elementi alla lista")
 print("2- Stampa tutti gli elementi attuali della lista")
 
 scelta = input("Cosa vuoi fare?:")
 print("\n")
 
 if scelta == '1':
  with open("lista_spesa.txt", "w+") as file:
    new_item = input("Cosa vuoi aggiungere?:")
    lista_spesa.append(new_item)
    for items in lista_spesa:
      file.write('%s\n' %items)
    print(f"✅ {new_item} aggiunto alla lista!")
 
 if scelta == '2':
     if lista_spesa == []:
         print("📋 La lista è vuota!")
     else:
         print("🛒 Lista della spesa:")
         print("--------------------------")
         for item in lista_spesa:
          print(f"{item}")