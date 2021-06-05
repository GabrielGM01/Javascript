let notacaoPonto = valor =>
  `R$${valor.toFixed(2).toString().replace('.', ',')}`;

console.log(notacaoPonto(0.30000000000000004));
