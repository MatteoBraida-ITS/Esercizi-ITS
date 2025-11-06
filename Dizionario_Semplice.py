persona = {"nome": "Matteo",
           "età": "28",
           "città": "San Michele",
           "professione": "disoccupato"}

scelta = input ("Quale informazione vuoi? (nome/età/città/professione):")

print(f"Dizionario persona:\n {persona}")

if scelta == 'nome':
 print(f"Risultato:{persona.get("nome")}")

if scelta == 'età':
 print(f"Risultato:{persona.get("età")}")

if scelta == 'città':
 print(f"Risultato:{persona.get("città")}")

if scelta == 'professione':
 print(f"Risultato:{persona.get("professione")}")