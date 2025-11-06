dizionario = {}

nome = input("Nome:")

dizionario.update({"Nome" : nome})

colore = input("Colore preferito:")

dizionario.update({"Colore": colore})

animale = input("Animale preferito:")

dizionario.update({"Animale": animale})

sport = input("Sport preferito:")

dizionario.update({"Sport": sport})

print(f"Dizionario creato:\n {dizionario}\n")

print("Riassunto:")
print(f"Nome: {nome}")
print(f"Colore preferito: {colore}")
print(f"Animale preferito: {animale}")
print(f"Sport preferito: {sport}")