// let e const

{
  var a = 2;
  let b = 3;
  console.log(b);
}
console.log(a);


// template String 
const produto = 'iPad';
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = 'Cod3r';
console.log(l, e, tras);

const { idade: i, nome } = { nome: 'ana', idade: 9 };
console.log(i, nome);