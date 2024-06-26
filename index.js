const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarios = require('./usuarios');

app.use(bodyParser.json());

app.use('/api/usuarios', usuarios);

// Rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

module.exports = app;
