
parole = input("Inserisci delle parole (ognuna divisa da uno spazio):\n")

values = parole.split()

values.sort()

diz = {}

for parola in values:
 diz[parola] = diz.get(parola, 0) + 1
        
print ("Conteggio parole:")

for key, value in diz.items():
    print(f"-{key}: {value}")

freq_parola = max(diz.values())
print(f"La parola più frequente è: {max(diz, key=diz.get)} ({freq_parola})")

