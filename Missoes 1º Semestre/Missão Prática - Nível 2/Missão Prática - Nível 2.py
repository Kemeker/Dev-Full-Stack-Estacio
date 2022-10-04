#converter um nummero da base decial para  a base binaria

#ATIVIDADE VALIDA PARA MISSAO NIVEL 2

n = int(input("Digite um numero da base decimal: "))
numero_digitado = n
quociente = 1
lista = []

while quociente >= 1:
  resto = n%2
  lista.insert(0,resto)
  quociente = n // 2
  n = quociente

binario = ''.join([str(item) for item in lista])
print(f"O número {numero_digitado}, quando convertido em binário vale: {binario}")





# OUTRA MANEIRAS MAIS SIMPLES 
#n = int(input("Entre com um numero: "))
#n = bin(n)
#print("O numero convertido em binario é: ",n[2::])



#OUTRA MANEIRA DE FAZER A CONVERSAO
""""
decimal = int(input("Digite um numero decimmal: "))
binaria = "{0:b}" .format(decimal)
print(f"Numero convertido para base binária: {binaria}")

"""





