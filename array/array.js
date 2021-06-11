console.log(typeof Array, typeof [], typeof new Array);
let aprovados = new Array('Gabriel', 'Joao');
console.log(aprovados);
aprovados = ['Gabriel', 'João', 'Gabriela'];
console.log(aprovados[0]);

aprovados[3] = 'Euler';
aprovados.push('Biel');
console.log(aprovados.length);
aprovados.sort();
console.log(aprovados);
delete aprovados[1];
console.log(aprovados);
aprovados = ['Gabriel', 'Luan'];
aprovados.splice(2, 0, "João", "Bel", "Luana");
console.log(aprovados);