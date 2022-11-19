import matplotlib.pyplot as plt
from faker import Faker
from wordcloud import WordCloud
from num2words import num2words
from datetime import datetime
import numpy as np
import pandas as pd


'''--------Global-----'''

dados_aleatorios = Faker('pt_BR')
lista_dados = []
lista_notas = []
lista_nomes = []



'''-------------------------Gravando e Criando Arquivo-------------------------------------------'''
for i in range(20):

    
    dados = ('Aluno: ' + dados_aleatorios.name() + ' - ' + 'Nota: '  + str(dados_aleatorios.random_int(1,10)))
    lista_dados.append(dados)

with open('Dados.txt', 'w', encoding='utf-8') as arquivo:
  for valor in lista_dados:
    arquivo.write(valor +  '\n')



'''----------------------------Lendo arquivo e recuperando---------------------------------------------------------'''
with open('Dados.txt', 'r', encoding='utf-8') as arquivo_recuperar:
    for i in range (len(lista_dados)):
        ler = arquivo_recuperar.readline() # lendo as linhas do arquivo
        separar_notas = ler.split(' ')# separado nomes das notas
        nota = int(separar_notas[-1])# Convertendo as notas em numeros inteiros
        lista_notas.append(nota) # Colocando as notas em uma lista 
        lista_nomes_2 = num2words(nota, lang= 'pt_BR') # Passando os numeros por extenso
        lista_nomes.append(lista_nomes_2) #passando as notas por extenso para uma lista
        lista_nome_str = (' ').join(lista_nomes) # colocando todas notas em uma string




'''-----------------------Histograma--------------------------------------'''
plt.title('Histograma das Pontuações')
plt.xlabel('Pontuações')
plt.ylabel('Probabilidade')
plt.xlim(-0.5,10.5) 
plt.hist(lista_notas, bins=np.arange(-0.5,11), density=True, rwidth=0.75) 
plt.show()


'''----------------------------------Nuvem de Palavras--------------------------------------------'''

nuvem_palavras = WordCloud(background_color='Black', width=600,height=400).generate(lista_nome_str)
plt.imshow(nuvem_palavras, interpolation='bilinear')
plt.axis("off")
plt.show()
nuvem_palavras.to_file("Nuvem de palavras.png")
nuvem_palavras.to_file("Nuvem de palavras.png")

