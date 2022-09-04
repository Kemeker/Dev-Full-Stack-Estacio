# ATIVIDADE CORRESPONDE AO TEMA PYTHON BASICO DO NIVEL 2 - PRIMEIRO SEMESTRE (1ª MUNDO)
def taximetro(distancia, multiplicador=1):
    largada = 3
    km_rodado = 6
    valor = (largada + distancia * 
    km_rodado) * multiplicador
    return valor


pagamento = taximetro(3.5)
print(pagamento)