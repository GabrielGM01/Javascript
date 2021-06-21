// Arrow Function
const soma = (a, b) => a + b;
console.log(2, 3);

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico2();

//parametro default
function log(texto = 'Node') {
  console.log(texto);
}
log();

// operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n)
  return total;
}
console.log(total(20, 30, 4, 475, 8, 4));