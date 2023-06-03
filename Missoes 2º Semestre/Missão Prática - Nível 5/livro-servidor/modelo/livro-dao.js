const Livro = require('./livro-schema');

const obterLivros = async () => {
  return await Livro.find();
};

const incluir = async (livro) => {
  return await Livro.create(livro);
};

const excluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo });
};

module.exports = {
  obterLivros,
  incluir,
  excluir
};
