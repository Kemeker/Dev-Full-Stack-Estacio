import { NextApiRequest, NextApiResponse } from 'next'
import controleEditoras from '../../../classes/controle/ControleEditoras'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const editoras = controleEditoras.getEditoras()
      res.status(200).json(editoras)
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).json({ error: 'Método não permitido' })
  }
}