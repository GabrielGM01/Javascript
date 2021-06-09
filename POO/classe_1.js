class Lancamento {
  constructor(nome = 'GENERICO', valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamento = [];
  }
  addLancamento(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidade = 0;
    this.lancamentos.forEach(l => {
      valorConsolidade += l.valor;
    })
    return valorConsolidade;
  }
}

