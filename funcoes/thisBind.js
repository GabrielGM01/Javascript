const pessoa = {
  saudacao: 'bom dia',
  fala() {
    console.log(this.saudacao);
  }
}

pessoa.fala();

const falar = pessoa.fala;
falar();

const falarDePessoa = pessoa.fala.bind(pessoa);

falarDePessoa();