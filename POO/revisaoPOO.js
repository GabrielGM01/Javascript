const produto = new Object;
produto.nome = 'cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;
delete produto['marca do produto']
console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 50000,
  proprietario: {
    nome: 'gabriel',
    cpf: '0774548456',
    idade: 48,
    endereco: {
      rua: 422,
      lote: 1,
      casa: 1,
      cidade: 'luziânia'
    }
  }
};

console.log(carro.proprietario.endereco.cidade);