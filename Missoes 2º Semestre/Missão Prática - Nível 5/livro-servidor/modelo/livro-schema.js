const banco = require('./conexao');
const Schema = banco.Schema;

const LivroSchema = new Schema({
  titulo: String,
  autor: String,
  genero: String
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;



