
'''---------------------------Funçao para calcular os Subconjuntos---------------------------'''
def subconjutos(numeros):
       
    return subconjutos_recursivo([], sorted(numeros))

def subconjutos_recursivo(atual, conjunto):
    if conjunto:
        return subconjutos_recursivo(atual, conjunto[1:]) + subconjutos_recursivo(atual + [conjunto[0]], conjunto[1:])
    return [atual]  

'''----------------------------------Entrada de dados-----------------------------'''
numeros = [1,2,3]
resultado = subconjutos(numeros)

print(f"O numero de elementos do conjunto {numeros} é: {len(resultado)}")
print(f"As partes do conjunto {numeros} são: {resultado}")

