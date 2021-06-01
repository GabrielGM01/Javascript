class Pessoa {
  constructor(nome, cpf, idade) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
  }
  dados() {
    console.log(`${this.nome}, ${this.cpf}, ${this.idade}`);
  }
}
const p1 = new Pessoa('Gabriel', '07745848156', 20);
p1.dados();
//-----------------------------------------------------------------

const pessoa = nome => {
  return {
    falar: () => console.log(`${nome}`)
  }
};
const p2 = pessoa('Gabriel');
p2.falar();