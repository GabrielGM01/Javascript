function somar(n1, n2) {
  const soma = this + n1 + n2;
  console.log(soma);
}

somar.apply(1, [1, 1])
// o primeiro parêmetro ele ainda continua recebendo o valor que vai setar para o this que é 1 e o segundo recebe um array dos parâmetros da função.