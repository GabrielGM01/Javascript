const saudacao = 'Opa'

function exec() {
  const saudacao = 'Falaaa'
  return saudacao
}

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua jabuticabal',
    numero: 12
  }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)