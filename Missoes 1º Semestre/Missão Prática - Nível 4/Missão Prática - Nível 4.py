'''---------------------------------------------------------------------BIBLIOTECAS------------------------------------------------------------------------'''
import pandas as pd
from numpy.core.numeric import indices
from sklearn.linear_model import LinearRegression
from matplotlib.legend_handler import Line2D
import matplotlib.pyplot as plt
import numpy as np
import pandas as oPandas





'''--------------------------------------------------------------------LISTA DESPESAS-----------------------------------------------------------------------------'''
despesa_vestuario = []
despesa_transporte = []
despesa_alimentacao = []
lista_dias = []
geral = [despesa_vestuario, despesa_alimentacao, despesa_transporte]
dicionario = {'Dias' : [lista_dias], 'Despesa Alimentaçao' :[despesa_alimentacao], 'Despesas Vestuarios' :[despesa_vestuario], 'Despesa Transporte' :[despesa_transporte]}
dados = []

'''-------------------------------------------------------------------CLASSE DESPESAS-----------------------------------------------------------------------------'''
class despesas:


    def vestuario():
        '''-----FUNÇAO VESTUARIO------'''
        global vestuario, dados
        for i in range(0, dias):
            dia = (input(f'Despesa com vestuario no {i + 1} º dia: '))
            while dia.isnumeric() == False:
                print("Digite um numero")
                dia = (input(f'Despesa com vestuario no {i + 1} º dia: '))
            i+= 1
            dia = eval(dia)
            despesa_vestuario.append(dia)    


    def alimentacao():
        '''--- FUNÇAO ALIMENTAÇAO----'''
        global alimentacoa, dados
        for i in range(0, dias):
            dia = (input(f"Despesas com alimentaçao no {i + 1} ª dia: "))
            while dia.isnumeric() == False:
                print("Digite um numero")
                dia = (input(f"Despesas com vestuario no {i + 1} ª dai: "))
            i+= 1
            dia = eval(dia)
            despesa_alimentacao.append(dia)    

    def trasnporte():
        '''-----FUNÇAO TRANSPORTE-----'''
        global tranporte, dados
        for i in range(0, dias):
            dia = (input(f"Despesas com transporte no {i + 1} ª dia: "))
            while dia.isnumeric() == False:
                print("Digite um numero")
                dia = (input(f"Despesas com transporte no {i +1} º dia: "))
            i += 1
            dia = eval(dia)
            despesa_transporte.append(dia)    




'''---------------------------------------------------------------------ENTRADA DE DADOS----------------------------------------------------------------------------'''
lista = []
dias = int(input("Digite o numero de dias que deseja conslutar: "))
for i in range(0, dias):
    lista.append(i)


despesas.vestuario()
print(despesa_vestuario)

despesas.alimentacao()
print(despesa_alimentacao)

despesas.trasnporte()
print(despesa_transporte)

tabela_gastos = pd.DataFrame(zip(lista, despesa_alimentacao, despesa_transporte, despesa_vestuario),
                  columns= ["Dias", 'Despesa Alimentacao', 'Despesa Transporte', 'Despesa Vestuário'])

print("A Tabela de gastos foi a seguinte: ")
print(tabela_gastos)
print(lista)




