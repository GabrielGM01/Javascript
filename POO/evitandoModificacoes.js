const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 3.99,
  tag: 'Promocação'
});

console.log('Extensível : ', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha branca';
delete produto.tag;
console.log(produto);

