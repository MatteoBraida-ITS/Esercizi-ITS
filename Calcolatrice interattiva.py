numeroOperazioni = 0
valore = 0
numero = 0
operazione = 0
calcolo = 0

print("Valore iniziale:", valore)

valore = input("Inserisci un numero (o premi 'exit' per uscire dal programma):")

if valore == 'exit':
 print("Il risulato finale è:", calcolo)
 print("Il numero di operazioni eseguite è:", numeroOperazioni)
else:
 valore = int(valore)


while valore != str('exit') and numero != str('exit'):

    numero = input("Inserisci un numero (o premi 'exit' per uscire dal programma):")

    if numero == 'exit':
     print("Il risulato finale è:", calcolo)
     print("Il numero di operazioni eseguite è:", numeroOperazioni)
     break
    else:
     numero = int(numero)

    operazione = input("Inserisci un'operazione (+,-,*,/):")

    if operazione not in ['+','-','*','/']:
     print("Errore: operazione non valida.")

    elif operazione == '+':
     calcolo = valore + numero
     numeroOperazioni += 1
     print(valore, "+", numero, "=", calcolo)
     valore = calcolo
    
    elif operazione == '-':
     calcolo = valore - numero
     numeroOperazioni += 1
     print(valore, "-", numero, "=", calcolo)
     valore = calcolo
    
    elif operazione == '*':
     calcolo = valore * numero
     numeroOperazioni += 1
     print(valore, "*", numero, "=", calcolo)
     valore = calcolo

    elif operazione == '/' and numero != 0:
     calcolo = float (valore / numero)
     numeroOperazioni += 1
     print(valore, "/", numero, "=", calcolo)
     valore = calcolo
    else:
     print("Errore: divisione per zero!")






