const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarios = require('./usuarios');

app.use(bodyParser.json());

app.use('/api/usuarios', usuarios);

module.exports = app;
