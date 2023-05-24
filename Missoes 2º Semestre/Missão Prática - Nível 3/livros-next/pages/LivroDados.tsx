import type { NextPage } from 'next';
import React, { useState } from 'react';
import styles from '../styles.module.css';
import ControleEditora from '../classes/controle/ControleEditoras';
import { useRouter } from 'next/router';
import Head from 'next/head';

const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros';

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
}

const LivroDados: NextPage = () => {
  const router = useRouter();

  const incluirLivro = async (livro: Livro) => {
    await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    })
      .then((response) => response.ok)
      .catch((error) => console.log(error));
  };

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const livro: Livro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora,
    };

    incluirLivro(livro).then(() => {
      router.push('/LivroLista');
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LivroDados</title>
      </Head>
      <header>
        <nav>Menu</nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Inclusão de Livro</h1>
        <form onSubmit={incluir}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />
          </div>
          <div>
            <label>Resumo:</label>
            <textarea
              value={resumo}
              onChange={(event) => setResumo(event.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Autores:</label>
            <textarea
              value={autores}
              onChange={(event) => setAutores(event.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Editora:</label>
            <select value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;