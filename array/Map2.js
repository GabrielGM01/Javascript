const carrinho = [
  '{"nome":"Borracha", "preco": 3.45}',
  '{"nome":"Caderno", "preco": 13.90}',
  '{"nome":"lapis", "preco": 5.90}',
  '{"nome":"caneta", "preco": 7.50}'
];

let paraObjeto = json => JSON.parse(json);
const resultado = carrinho.map(paraObjeto).map(produto =>
  produto.preco);

console.log(resultado);