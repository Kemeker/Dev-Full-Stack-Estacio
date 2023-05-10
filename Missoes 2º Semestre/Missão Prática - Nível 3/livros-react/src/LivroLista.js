import React, { useState, useEffect } from 'react';
import ControleLivros from '../controle/ControleLivros';
import ControleEditoras from '../controle/ControleEditoras';
import LinhaLivro from './LinhaLivro';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditoras();

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const handleExcluirLivro = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false); // Força o redesenho da página após a exclusão
  };

  useEffect(() => {
    const carregarLivros = () => {
      const livros = controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    };

    carregarLivros();
  }, []);

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
                    <LinhaLivro
                        key={livro.codigo}
                        livro={livro}
                        excluir={excluir}
                    />
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



