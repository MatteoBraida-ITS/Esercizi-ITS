numero1 = 0
numero2 = 0
operazione = 0
risultato = 0 

def calcolatrice(numero1, numero2, operazione):
    if operazione == '+':
        risultato = numero1 + numero2
        return risultato
    elif operazione == '-':
        risultato = numero1 - numero2
        return risultato     
    elif operazione == '*':
        risultato = numero1 * numero2
        return risultato
    elif operazione == '/':
        if numero2 == 0:
            print("Errore divisione per 0!")
        else:
            risultato = numero1 / numero2
            return risultato

print(calcolatrice(10, 5, '+'))
print(calcolatrice(10, 5, '-'))
print(calcolatrice(10, 5, '*'))
print(calcolatrice(10, 5, '/'))
print(calcolatrice(10, 0, '/'))