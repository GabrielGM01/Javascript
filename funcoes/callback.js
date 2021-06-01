const fabricantes = ['mercedes', 'audi']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function (value, index) {
  console.log(`${index}. ${value}`);
});