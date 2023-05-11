import React from 'react';
import ControleEditora from '../classes/controle/ControleEditoras';
import { Livro } from '../types/Livro';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro }) => {
  const editora = controleEditora.obterEditoraPorCodigo(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>{editora?.nome}</td>
    </tr>
  );
}

export default LinhaLivro;



