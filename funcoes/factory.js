function criarPessoa(nome, cpf) {
  return {
    nome: nome,
    cpf: cpf
  }
}

pessoa1 = criarPessoa('gabriel', '07745848156')
console.log(pessoa1);