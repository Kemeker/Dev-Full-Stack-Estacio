
'''---------------------------Funçao para calcular os Subconjuntos---------------------------'''
def subconjutos(numeros):
       
    return subconjutos_recursivo([], sorted(numeros))

def subconjutos_recursivo(atual, conjunto):
    if conjunto:
        return subconjutos_recursivo(atual, conjunto[1:]) + subconjutos_recursivo(atual + [conjunto[0]], conjunto[1:])
    return [atual]  

'''----------------------------------Entrada de dados-----------------------------'''
item = 'digite o numero ou string que deseja calcular'
lista = []
lista_falsa = []
contador = 0
while True:
    escreva = input(f'digite o item da posição {contador+1}: ')
    if escreva == '': break # quando nao digitar um item que deseja adicionar ao seu conjuto ele para e calcula 
    try:
        item = int(escreva)
    except ValueError:
        item = escreva
    lista.append(item)
    lista_falsa.append(contador)
    contador +=1

resultado = subconjutos(lista_falsa)

'''----------------------troca dos valores da lista com lista falsa----------------'''
for posicao_lista in range(len(resultado)):
    for posicao_numero in range(len(resultado[posicao_lista])):
        resultado[posicao_lista][posicao_numero] = lista[posicao_numero]

print(f"O numero de elementos do conjunto {lista} é: {len(resultado)}")
print(f"As partes do conjunto {lista} são: {resultado}")