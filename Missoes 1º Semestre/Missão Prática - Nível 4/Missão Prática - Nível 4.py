from sklearn.linear_model import LinearRegression
import numpy as np
import matplotlib.pyplot as plt


'''------------------------Classe Grafico--------------------------------------------'''
class Grafico:  
  def __init__(self, lista_despesas):
    self.lista_despesas=lista_despesas
    self.imprimir_graficos()

  def padrao_do_grafico(self):
    plt.xlabel('Dias')
    plt.ylabel('Gasto em R$')
    plt.title('Gráficos de Despesas')    

  def imprimir_graficos(self):
    self.padrao_do_grafico()
    for gastos in self.lista_despesas:
      mLista = gastos.dicionario.items()
      cor = gastos.cor
      nome = gastos.nome
      x, y = zip(*mLista)
      plt.plot(x, y, label = nome, marker='o', 
               markerfacecolor='blue', 
               markersize=12, 
               color=cor, 
               linewidth=4)
    plt.legend()
    plt.show()

  def regressao_linear(self, id_grafico):
    gastos = self.lista_despesas[id_grafico]
    mLista = gastos.dicionario.items()    
    cor = gastos.cor
    nome = gastos.nome
    dias, valores = zip(*mLista)
    dias = np.array(dias)
    valores = np.array(valores)
    dias = dias.reshape(-1, 1)
    valores = valores.reshape(-1, 1)
    regressao = LinearRegression()
    regressao.fit(X=dias, y=valores)
    plt.plot(dias, regressao.predict(dias), 
             color='blue',
             label = "Regressão Linear")

    x, y = zip(*mLista)
    plt.plot(x, y, label = nome+str(" - original"), 
             marker='o', 
             markerfacecolor='olive', 
             markersize=12, 
             color=cor, 
             linewidth=4)

    plt.legend()
    plt.show()



'''------------------------Classe Dicionario-----------------------------------------'''
class Dicionario:

    def __init__(self, dicionario, cor, nome):
        self.dicionario = dicionario
        self.cor=cor
        self.nome = nome



'''----------------------------Dados dos gastos---------------------------------------'''

'''ID  0'''
despesa_alimentacao = Dicionario({1:50,2:30,3:70,4:100,5:200},'skyblue','Alimentaçao')

'''ID 1'''
despesa_transporte = Dicionario({1:50,2:75,3:90,4:100,5:400},'red','Transporte')

'''ID 2'''
despesa_vestuario = Dicionario({1:100,2:50,3:45,4:90,5:150},'olive','Vestuario')


lista_despesas = [despesa_alimentacao,despesa_transporte,despesa_vestuario]

'''Grafico de Desempenho'''
grafico = Grafico(lista_despesas)



'''Regressao Linear'''
id_despesa = 0 # ID da despesa
grafico.regressao_linear(id_despesa)
=======
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

plt.plot(despesa_alimentacao, label='Despesa Alimenteçao')
plt.plot(despesa_transporte, label= 'Despesas Trabsporte')
plt.plot(despesa_vestuario, label='Despesas Vestuario')

plt.title('Grafico de Despesas')
plt.ylabel("Despesas em R$")
plt.xlabel("Dias")
plt.legend()
plt.show()


>>>>>>> 831d235d36a9500e5e741c77fa58211118a5bbac
