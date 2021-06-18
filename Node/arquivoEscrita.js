const fs = require('fs');
const { lowerFirst } = require('lodash');

const produto = {
  nome: 'Celular',
  preco: 1249,
  desconto: 0.15
};
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),
  err => {
    console.log(err || 'Arquivo salvo!');
  })