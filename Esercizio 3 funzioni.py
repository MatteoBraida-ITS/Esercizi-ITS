numero = 0
divisione = 0

def è_pari(a):
    divisione = a % 2
    if divisione == 0:
        return True
    else:
        return False
    
print(è_pari(25))
