#Creo il dizionario con all'interno altri 3 diversi dizionari con i dati degli studenti

dizionario = {
    "Matteo": {
        "nome": "Matteo",
        "età": "28",
        "voto matematica": 8,
        "voto italiano": 7
    },

    "Marco": {
        "nome": "Marco",
        "età": "24",
        "voto matematica": 10,
        "voto italiano": 7
    },

    "Giuseppe": {
        "nome": "Giuseppe",
        "età": "26",
        "voto matematica": 4,
        "voto italiano": 10
    }
}

#uso un ciclo FOR per calcolare la media dei voti degli studenti

for studente in dizionario:
    voto_mat = dizionario[studente]["voto matematica"]
    voto_ita = dizionario[studente]["voto italiano"]
    dizionario[studente]["media"] = (voto_mat + voto_ita) / 2

#Chiedo all'utente quale allievo vuole visualizzare
studente = input("quale studente vuoi visualizzare?: ").strip()

#formatto l'input che ricevo dall'utente in modo che arrivi sempre con iniziale Maiuscola
studente_formattato = studente.capitalize()

#Una volta ricevuto l'input se viene trovato nel dizionario stamperà le relative informazioni
if studente_formattato in dizionario:
    print()
    print(f"Informazioni {studente_formattato}:")
    print(f"età: {dizionario[studente_formattato]["età"]}")
    print(f"Voto matematica: {dizionario[studente_formattato]["voto matematica"]}")
    print(f"Voto italiano: {dizionario[studente_formattato]["voto italiano"]}")
    print(f"Media: {dizionario[studente_formattato]["media"]}")

#Qui calcolo la media dei voti di ogni studente e la inserisco in una variabile che poi useremo 
#per visualizzare lo studente con la media migliore
studente_migliore = max(dizionario.keys(), key=lambda x: dizionario[x]['media'])
media_migliore = dizionario[studente_migliore]["media"]

print()
print(f"Lo studente con la media più alta è {studente_migliore} con la media di {media_migliore}")