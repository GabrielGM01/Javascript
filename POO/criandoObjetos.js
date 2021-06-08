const obj1 = {};
const obj2 = new Object;
console.log(typeof obj2);
//--------------------------------------------------
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  }
}
const p1 = new Produto('caneta', 7.99, 0.15);
console.log(p1.getPrecoComDesconto());
//---------------------------------------------------
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  };
}
const p4 = criarFuncionario('gabriel', 7980, 4);
console.log(p4.getSalario());