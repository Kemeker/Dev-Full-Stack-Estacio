import React, { useState, useEffect } from "react";
import { ControleLivros } from "../controle/ControleLivros";
import { ControleEditora } from "../controle/ControleEditora";
import { Livro } from "../modelo/Livro"

function LivroLista() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  export const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();
  
  useEffect(() => {
    setLivros(controleLivro.obterLivros());
  }, []);
}
  const excluirLivro = (codigo: number) => {
    controleLivro.excluir(codigo);
    setLivros(controleLivro.obterLivros());
  };
  
  return (
    <div>
      <h1>Livros</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
          ))}
        </tbody>
      </table>
    </div>
  );
}