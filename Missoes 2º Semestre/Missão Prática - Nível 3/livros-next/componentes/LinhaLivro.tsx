import React from 'react';
import ControleEditoras from '../classes/controle/ControleEditoras';
import Livro from '../classes/modelo/Livro';

const controleEditoras = new ControleEditoras();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const editora = controleEditoras.obterEditoraPorCodigo(livro.codEditora);

  return (
    <tr>
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


