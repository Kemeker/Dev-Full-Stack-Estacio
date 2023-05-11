import React, { useState, useEffect } from "react";
import { ControleLivros } from "../controle/ControleLivros";
import { ControleEditora } from "../controle/ControleEditora";

function LinhaLivro(props) {
  const { livro, excluir } = props;
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  function handleExcluir() {
    excluir(livro.codigo);
  }

  return (
    <tr>
      <td>
        <button onClick={handleExcluir}>Excluir</button>
      </td>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivro();

  useEffect(() => {
    async function carregarLivros() {
      const livros = await controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    }

    if (!carregado) {
      carregarLivros();
    }
  }, [carregado]);

  function handleExcluirLivro(codigo) {
    controleLivro.excluir(codigo);
    setCarregado(false);
  }

  return (
    <main>
      <h1>Lista de Livros</h1>
      <button className="btn btn-danger mb-4" onClick={() => handleExcluirLivro()}>
        Excluir Livro
      </button>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={handleExcluirLivro} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
