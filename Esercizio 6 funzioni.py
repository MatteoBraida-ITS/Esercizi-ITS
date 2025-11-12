lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def numeri_superiori(lista, n, i):
    lista_filtrata =  [n for n in lista if n > f"{i}"]
    return lista_filtrata
         

print(numeri_superiori(lista, 5))
print(numeri_superiori(lista, 8))
print(numeri_superiori(lista, 1))