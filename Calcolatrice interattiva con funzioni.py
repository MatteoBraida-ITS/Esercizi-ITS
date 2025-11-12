numero1 = 0
numero2 = 0
calcolo = 0

def somma(a, b):
    calcolo = a + b
    return calcolo

def sottrazione(a, b):
    calcolo = a - b
    return calcolo

def moltiplicazione(a, b):
    calcolo = a * b
    return calcolo

def divisione(a, b):
    if b == 0:
        return "Errore, divisione per zero!"
    calcolo = a / b
    return calcolo

while True:
 
    numero1 = int(input("Inserisci un valore:")) 
    numero2 = int(input("Inserisci un valore:"))

    operazione = input("Inserisci un'operazione (+,-,*,/):")

    if operazione == '+':
        calcolo = somma(numero1, numero2)
        print(calcolo)

    elif operazione == '-':
        calcolo = sottrazione(numero1, numero2)
        print(calcolo)

    elif operazione == '*':
        calcolo = moltiplicazione(numero1, numero2)
        print(calcolo)

    elif operazione == '/':
        calcolo = divisione(numero1, numero2)
        print(calcolo)