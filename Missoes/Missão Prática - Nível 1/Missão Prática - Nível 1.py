# Atividade realizada em python porem nao ficou 100%

primos=[]
n = int(input("Digite um valor: "))

for x in range (1,n):
    cont=0
    
    for y in range(1, x+1):
        if x%y==0:
            cont+=1
    if cont<=2:
        primos.append(x)  

print("Os numeros ", primos, " sao primos")