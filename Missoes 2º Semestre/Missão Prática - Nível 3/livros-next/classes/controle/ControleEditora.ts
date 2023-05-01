import Editora from "../modelo/Editora"


const editoras: Array<Editora> = [
    {codEditora: 1, nome: "Editora 1"},
    {codEditora: 2, nome: "Editora 2"},
    {codEditora: 3, nome: "Editora 3"},
]


// Implementa o método getEditoras, com o retorno do vetor editoras
class ControleEditora{
    getEditoras(): Array<Editora> {
        return editoras
    }


    // Implementa o método getNomeEditora, recebendo codEditora e retornando o nome da editora
    getNomeEditora(codEditora: number): string{
        const editora = editoras.filter((e) => e.codEditora === codEditora)[0]
        return editoras ? editora.nome : ""
        
    }
 
}

export default ControleEditora





