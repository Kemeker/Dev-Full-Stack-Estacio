import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditoras from '../../../classes/controle/ControleEditoras';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const codEditora = Number(req.query.codEditora);
      const controle = new ControleEditoras();
      const nomeEditora = controle.getNomeEditora(codEditora);

      if (nomeEditora) {
        const response = { nomeEditora };
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: 'Editora não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}