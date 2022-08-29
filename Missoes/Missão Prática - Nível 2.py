#converter um nummero da base decial para  a base binaria

decimal = int(input("Digite um numero decimmal: "))
binaria = "{0:b}" .format(decimal)
print(f"Numero convertido para base binária: {binaria}")