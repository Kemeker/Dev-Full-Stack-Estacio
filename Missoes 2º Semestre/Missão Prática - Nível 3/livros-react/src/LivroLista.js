import React, { useState, useEffect } from "react";
import { ControleLivros } from "../controle/ControleLivros";
import { ControleEditora } from "../controle/ControleEditora";
import { Livro } from "../modelo/Livro";

export const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
  }, []);

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
            <tr key={livro.codigo}>
              <td>{livro.codigo}</td>
              <td>{livro.titulo}</td>
              <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
              <td>{livro.autores.join(", ")}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    controleLivro.excluir(livro.codigo);
                    setLivros(controleLivro.obterLivros());
                  }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};