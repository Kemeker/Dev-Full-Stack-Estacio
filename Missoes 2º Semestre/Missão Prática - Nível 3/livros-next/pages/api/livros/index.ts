import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const livro = req.body;
      controleLivro.incluir(livro);
      res.status(200).json({ message: 'Livro adicionado com sucesso.' });
    } else if (req.method === 'DELETE') {
      const codigo = Number(req.query.codigo);
      controleLivro.excluir(codigo);
      res.status(200).json({ message: 'Livro excluído com sucesso.' });
    } else {
      res.status(405).json({ error: 'Método não permitido.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
  }
}

