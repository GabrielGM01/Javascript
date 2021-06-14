const nums = [1, 2, 3, 4, 5, 6];
let resultado = nums.map(x => x * 2);
console.log(resultado);

let transformarDinheiro = nums.map(x =>
  `R$${parseFloat(x).toFixed(2).replace('.', ',')}`);

console.log(transformarDinheiro);