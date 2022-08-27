num1 = float(input('Digite um numero: '))
num2 = float(input('Digite um numero: '))
soma = (num1 + num2)

print('A soma dos numeros é: ', soma)

if soma <= 25:
    print('O numero ', soma, " é menor ou igual a 25")
    if soma > 25:
        print('O numero ', soma, " é maior que 25")