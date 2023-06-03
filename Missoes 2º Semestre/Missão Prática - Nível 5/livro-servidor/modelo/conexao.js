const mongoose = require('mongoose');

const banco = mongoose.createConnection('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

module.exports = banco;

