const alunos = [
  { nome: 'Gabriel', nota: 7.3, bolsista: false },
  { nome: 'Luana', nota: 8.0, bolsista: false },
  { nome: 'Thiago', nota: 9.0, bolsista: true },
  { nome: 'louis', nota: 10.0, bolsista: true }
];

const resultado = alunos.map(a =>
  a.nota).reduce((ac, at) => ac + at);

console.log(resultado);