'''--------------Atividade entregue em VISUALG------------'''

Algoritmo "Missão Prática - Nível 1"

Var
   n : inteiro
   contadorUm: inteiro
   contadorDois: inteiro
   primo: inteiro
      

Inicio

     escreva("Digite um valor: ")
     leia(n)
     para contadorUm de 1 ate n faca
         primo<-0
         para contadorDois de 1 ate contadorUm faca
            se(contadorUm mod contadorDois=0)entao
                          primo<- primo+1
            fimse
         fimpara
         se(primo=2)entao
          escreval("O numero:", contadorUm, " é primo ")

         fimse

     fimpara
     

Fimalgoritmo



