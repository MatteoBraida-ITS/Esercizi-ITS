lista = []

print("=== GESTIONE LISTA ===")
print("Scegli un'operazione:")
print("A - aggiungere un numero")
print("R - Rimuovere un numero")
print("V - Visualizzare lista")
print("C - Cercare un numero")
print("S - Statistiche")
print("E - Uscire")


while True:
 
 scelta = input("Scegli:")

 if scelta == 'A' or scelta == 'a':
  numero = int(input("Inserisci un numero:"))
  lista.append(numero)
  print(f"Numero {numero} aggiunto!") 
  print(lista)
 
 elif scelta == 'R' or scelta == 'r':
  numero = int(input("Inserisci un numero:"))
  lista.remove(numero)
  print(f"Numero {numero} rimosso!")
 
 elif scelta == 'V' or scelta == 'v':
  print(f"Lista attuale:{lista}")

 elif scelta == 'C' or scelta == 'c':
  numero = int(input("Inserisci il numero da cercare:"))
  if numero in lista:
    print(f"Il numero {numero} si trova nella lista!")

 elif scelta == 'S' or scelta == 's':
  print("Statistiche:")
  print(f"Max:{max(lista)}")
  print(f"Min:{min(lista)}")
  media = sum(lista) / len(lista)
  print(f"Media:{media}")

 elif scelta == 'E' or scelta == 'e':
  print("=== RIASSUNTO FINALE ===")
  print(f"Lista finale:{lista}")
  print("Grazie per aver usato il programma")
  break