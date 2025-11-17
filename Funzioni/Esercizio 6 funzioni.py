lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def numeri_superiori(lista, minimo):
    risultato = []
    for numero in lista:
        if numero > minimo:
            risultato.append(numero)
    return risultato
         
print(numeri_superiori(lista, 5))
print(numeri_superiori(lista, 8))
print(numeri_superiori(lista, 1))