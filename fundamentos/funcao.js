console.log(typeof Object)
class Produto { }
console.log(typeof Produto)

function imprimirSoma(a, b) {
  console.log(a + b)
}
imprimirSoma(10, 20)
imprimirSoma(20, 20, 20, 20, 20)

function soma(a, b = 1) {
  return a + b
}
console.log('-----------')
console.log(soma(40, 70))
console.log(soma(20))
