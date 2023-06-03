const mongoose = require('mongoose');
const { Schema } = mongoose;

const LivroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true }
});

module.exports = mongoose.model('Livro', LivroSchema);





