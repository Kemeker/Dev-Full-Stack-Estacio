import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditoras';

<<<<<<< HEAD
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
=======



const controleLivro = new ControleLivros();
const controleEditora = new ControleEditoras();
>>>>>>> 61fe3233b320b76b6fc48ac5620119f8ad29511c

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const excluirLivro = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false); // Força o redesenho da página após a exclusão
  };

  useEffect(() => {
    const obterLivros = () => {
      const livros = controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
<<<<<<< HEAD
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
=======
    };

    obterLivros();
  }, []);

  const LinhaLivro = ({ livro }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
      <tr>
        <td>
          <button onClick={() => excluirLivro(livro.codigo)}>Excluir</button>
        </td>
        <td>{livro.codigo}</td>
        <td>{livro.titulo}</td>
        <td>{livro.resumo}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
        <td>{nomeEditora}</td>
      </tr>
    );
  };

  return (
    <div>
      <main>
        <h1>Livros</h1>
        {carregado ? (
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Código</th>
                <th>Título</th>
                <th>Resumo</th>
                <th>Autores</th>
                <th>Editora</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <LinhaLivro key={livro.codigo} livro={livro} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Carregando livros...</p>
        )}
      </main>
    </div>
  );
};

export default LivroLista;




>>>>>>> 61fe3233b320b76b6fc48ac5620119f8ad29511c
