def somma_numeri(*numeri):
    totale = 0
    for num in numeri:
        totale += num
    return totale
    
print(somma_numeri(1, 2, 3))
print(somma_numeri(20, 30, 40))

