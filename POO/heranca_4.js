function MeuObjeto() { };

const ob1 = new MeuObjeto;
const ob2 = new MeuObjeto;

console.log(ob1.__proto___ === ob2.__proto___);

MeuObjeto.prototype.nome = 'Anonimo';
console.log(ob2.nome);