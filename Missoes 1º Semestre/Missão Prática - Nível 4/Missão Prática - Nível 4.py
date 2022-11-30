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
id_despesa = 1 # ID da despesa
grafico.regressao_linear(id_despesa)


