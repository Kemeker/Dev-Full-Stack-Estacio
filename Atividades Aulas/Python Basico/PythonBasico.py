# ATIVIDADE CORRESPONDE AO TEMA PYTHON BASICO DO NIVEL 2 - PRIMEIRO SEMESTRE (1ª MUNDO)

from decimal import Decimal


def decimal_para_binario(decimal):
    binario = ''	
3	while Decimal > 0:
4		binario+= str(decimal%2)
5		decimal//= 2
6	return binario[::-1]	

