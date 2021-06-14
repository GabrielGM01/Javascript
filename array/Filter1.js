const produtos = [
  { nome: 'notebook', preco: 2490, fragil: true },
  { nome: 'celular', preco: 2000, fragil: true },
  { nome: 'mesa', preco: 950, fragil: false },
  { nome: 'cadeira', preco: 1456, fragil: false },
]

let nomeP = produtos.filter(x => x.fragil && x.preco > 2000);
console.log(nomeP);