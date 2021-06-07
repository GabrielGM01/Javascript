function mJurosSimples(capitalI, TaxaJuros, tempo) {
  return (capitalI + (capitalI * TaxaJuros * tempo));
}

function mJurosComposto(capitalI, TaxaJuros, tempo) {
  return capitalI + (capitalI * (1 + TaxaJuros) ** tempo)
}
console.log(mJurosComposto(10.000, 0.05, 18));
console.log(mJurosSimples(1200, 0.02, 10));
