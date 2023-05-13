import React, { useState, useEffect, useMemo } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditoras';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivro = useMemo(() => new ControleLivros(), []); // Utilize useMemo para memorizar o objeto controleLivro
  const controleEditora = useMemo(() => new ControleEditoras(), []); // Utilize useMemo para memorizar o objeto controleEditora

  useEffect(() => {
    const carregarLivros = async () => {
      const livros = await controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    };

    if (!carregado) {
      carregarLivros();
    }
  }, [carregado, controleLivro]);

  const excluirLivro = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false); // Força o redesenho da página após a exclusão
  };

  const LinhaLivro = ({ livro }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    const handleExcluirLivro = () => {
      excluirLivro(livro.codigo);
    };

    return (
      <tr>
        <td>
          <button onClick={handleExcluirLivro}>Excluir</button>
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
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;






