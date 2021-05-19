const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    rua: 422,
    numero: 1000
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa

console.log(n, i)