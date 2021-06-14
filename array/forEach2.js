const aprovados = ['Gabriel', 'João', 'Daniel'];

Array.prototype.forEach2 = callback => {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

aprovados.forEach2((nome, indice) =>
  console.log(`${indice + 1} ${nome}`));