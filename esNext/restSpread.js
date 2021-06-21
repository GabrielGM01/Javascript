// operador ...rest(juntar)/spread(espalhar)

const funcionario = { nome: 'Maria', salario: 1235 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array

const grupoA = ['João', 'Pedro', 'gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal);