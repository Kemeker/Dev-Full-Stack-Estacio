import Editora from "../modelo/Editora"

class Livro {
    codEditora: number
    codigo: number
    titulo: string
    resumo: string
    autores: string

    constructor(codEditora: number, codigo: number, titulo: string, resumo: string, autores: string ){
        this.codEditora  = codEditora
        this.codigo = codigo
        this.titulo = titulo
        this.resumo = resumo
        this.autores = autores

    }
}

export default Livro