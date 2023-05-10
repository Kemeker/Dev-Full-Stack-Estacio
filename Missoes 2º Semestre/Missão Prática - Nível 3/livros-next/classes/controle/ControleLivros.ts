import Livro from "../modelo/Livro"

const livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: "Livro 1",
        resumo: "Resumo do Livro 1",
        autores: ["Autor 1", "Autor 2"],

    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: "Livro 2",
        resumo: "Resumo do Livro 2",
        autores: ["Autor 3"],
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: "Livro 3",
        resumo: "Resumo do Livro 3",
        autores: ["Autor 4", "Autor 5", "Autor 6"],
    },
]

class ControleLivros {
  // Implementa o método obterLivros, com o retorno do vetor livros
  obterLivros(): Array<Livro> {
    return livros
  }
  
  // Implementa o método incluir, recebendo um objeto do tipo Livro e adicionando-o ao vetor de livros
  incluir(livro: Livro): void {
    const novoCodigo = livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    livros.push({ ...livro, codigo: novoCodigo });
  }

  // Implementa o método excluir, removendo o livro com o código fornecido do vetor de livros
  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros



    