const notas = [1, 2, 3, 5, 7, 9, 4];

for (let i in notas) {
  console.log(notas[i]);
}

const pessoa = {
  nome: 'ana',
  sobrenome: 'Silva'
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}