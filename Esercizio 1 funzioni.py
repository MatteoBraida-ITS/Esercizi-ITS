nome = 0

def saluto(a):
    print(f"Ciao {nome}!")

while True:

   nome = input("Inserisci il tuo nome:\n").capitalize()
   nome = saluto(nome)