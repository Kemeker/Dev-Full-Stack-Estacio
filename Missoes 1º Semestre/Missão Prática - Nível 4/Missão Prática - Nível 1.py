from numpy import array

def main():
    idades = array([10, 30, 45, 62, 74], dtype=int)
    print(f"vetor antes da insercao: {idades}")
    indice = eval(input()) # recebe o índice
    elemento = eval(input()) # recebe o novo elemento
    # inserindo o novo elemento escolhido
    idades[indice] = elemento
    print(f"vetor depois da insercao: {idades}")

    if __name__ == "__main__":
        main()