dizionario = {}

conto = 0

while conto < 3:
    
 materia = input ("Inserisci una materia:")
 voto = int (input("Inserisci il voto della materia:"))

 dizionario.update({materia: voto})
 conto += +1

for key, value in dizionario.items():
    print(f"{key}: {value}")

media = sum(dizionario.values()) / len(dizionario.values())
print(f"La media dei voti è: {media}")

max_voto = max(dizionario.values())
print(f"La materia con il voto più alto è: {max(dizionario, key=dizionario.get)} ({max_voto})")