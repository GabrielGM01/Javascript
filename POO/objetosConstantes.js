// pessoa -> 123 -> {...}
const pessoa = { nome: 'gabriel' };
pessoa.nome = 'Pedro';
console.log(pessoa);

Object.freeze(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'ana' };


