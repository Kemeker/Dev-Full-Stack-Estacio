import {Livro} from "../modelo/Livro"

let livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: "O sennhor dos Aneis",
        resumo: "Uma grande aventura em busca do Anel",
        autores: ["J.R.R. Tolkien"],

    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: "O Pequeno Príncipe",
        resumo: "Um livro sobre a amizade e a busca pelo sentido da vida",
        autores: ["Antoine de Saint-Exupéry"], 
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: "Harry Potter e a Pedra Filosofal",
        resumo: "As aventuras de um jovem bruxo em Hogwarts",
        autores: ["J.K. Rowling"],
    },
]

//retorna todos os livros
export class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros

    }

    //incluir um livro
    incluir(Livro: Livro): void {

        //encontra o maior codigo 
        const ultimoCodigo = livros.reduce(
            (max, livro) =>(livro.codigo > max ? livro.codigo : max), 0
        )
        
        //atribui o proximo codigo ao novo livro
        livros.codigo = ultimoCodigo + 1;

        // adiciona o novo livro
        livros.push(livro)
    }

    //exclui um livro 
    excluir(codigo: number): void {
        
        //encontra o indice do livro a ser removido
        const indiceLivro = livros.findIndex((livro)=> livro.codigo === codigo)

        // remove o livro do vetor
        if (indiceLivro !== -1){
            livros.splice(indiceLivro, 1)
        }
    }

}