media_Matteo = 0
media_Marco = 0
media_Giuseppe = 0
media_migliore = 0

dizionario = {
    "Matteo": {
        "nome": "Matteo",
        "età": "28",
        "voto matematica": 8,
        "voto italiano": 10,
        "media": media_Matteo
    },

    "Marco": {
        "nome": "Marco",
        "età": "24",
        "voto matematica": 6,
        "voto italiano": 7,
        "media": media_Marco
    },

    "Giuseppe": {
        "nome": "Giuseppe",
        "età": "26",
        "voto matematica": 4,
        "voto italiano": 10,
        "media": media_Giuseppe
    }
}

dizionario["Matteo"]["media"] = media_Matteo = (dizionario["Matteo"]["voto matematica"] + dizionario["Matteo"]["voto italiano"]) / 2 
dizionario["Marco"]["media"] = media_Marco = (dizionario["Marco"]["voto matematica"] + dizionario["Marco"]["voto italiano"]) / 2 
dizionario["Giuseppe"]["media"] = media_Giuseppe = (dizionario["Giuseppe"]["voto matematica"] + dizionario["Giuseppe"]["voto italiano"]) / 2 

studente = input("Quale studente vuoi visualizzare? (Matteo,Marco,Giuseppe):")

if studente == 'Matteo':
    print()
    print("Informazioni Matteo:")
    print(f"età: {dizionario["Matteo"]["età"]}")
    print(f"Voto matematica: {dizionario["Matteo"]["voto matematica"]}")
    print(f"Voto italiano: {dizionario["Matteo"]["voto italiano"]}")
    print(f"Media: {dizionario["Matteo"]["media"]}")

if studente == 'Marco':
    print()
    print("Informazioni Marco:")
    print(f"età: {dizionario["Marco"]["età"]}")
    print(f"Voto matematica: {dizionario["Marco"]["voto matematica"]}")
    print(f"Voto italiano: {dizionario["Marco"]["voto italiano"]}")
    print(f"Media: {dizionario["Marco"]["media"]}")


if studente == 'Giuseppe':
    print()
    print("Informazioni Giuseppe:")
    print(f"età: {dizionario["Giuseppe"]["età"]}")
    print(f"Voto matematica: {dizionario["Giuseppe"]["voto matematica"]}")
    print(f"Voto italiano: {dizionario["Giuseppe"]["voto italiano"]}")
    print(f"Media: {dizionario["Giuseppe"]["media"]}")

result = max(dizionario.keys(), key=lambda x: dizionario[x]['media'])
print(result)