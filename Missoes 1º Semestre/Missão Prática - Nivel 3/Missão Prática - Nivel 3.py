# CONJUNTO A = {0,1,2,3,4,5} FORMULA 2 elevaado a n.
#n é o numero de elementos de  um  conjunto


#A soma dos elementos de um conjunto sempre vai ser
# 2 elevado a n ( numero de elementos)
conjunto_A = {0,1,2,3,4,5}

# Estrutura de loop, vai percorer a range de 0 ate o numero maximo de elementos 
# dentro do conjunto.
#Variavel soma vai fazer 2 elevado ao numero total de elementos dos conjunto
for conjunto in range(0, len(conjunto_A)):
    soma = 2 ** len(conjunto_A)

print(f"Este conjunto tem {len(conjunto_A)} elementos")
print(f"E as partes deste conjunto é igual a {soma}")


