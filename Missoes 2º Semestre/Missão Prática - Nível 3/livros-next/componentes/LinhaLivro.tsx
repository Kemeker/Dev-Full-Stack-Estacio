import React, { useState, useEffect } from 'react';
import ControleEditoras from '../classes/controle/ControleEditoras';
import Livro from '../classes/modelo/Livro';
import styles from '../styles.module.css';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';

const controleEditoras = new ControleEditoras();
const baseURL = 'http://localhost:3000/api/livros';

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const editora = controleEditoras.obterEditoraPorCodigo(livro.codEditora);

  return (
    <tr className={styles.container}>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>{editora?.nome}</td>
      <td>
        <button onClick={excluir} className="btn btn-danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    await fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setLivros(data))
      .catch((error) => console.log(error));
    setCarregado(true);
  };

  const excluirLivro = async (codigo: number) => {
    await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    })
      .then((response) => response.ok)
      .then(() => setCarregado(false))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    obterLivros();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>LivroLista</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluirLivro(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;