function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}
console.log(soma(8, 4, 9, 4, 5, 4, 8, 4, 94, 894, 8));



