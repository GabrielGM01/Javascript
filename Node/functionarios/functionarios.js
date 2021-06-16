const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');
axios.get(url).then(response => {
  const funcionarios = response.data;

  function menorSalario(pais, genero, array) {
    let arrayFiltrado = array.filter(
      x => x.pais == pais && x.genero == genero);
    let salario = arrayFiltrado.map(x => x.salario);
    let menorValor = x => x.reduce((a, b) => Math.min(a, b));
    return arrayFiltrado.filter(x => x.salario == menorValor(salario));

  }
  console.log(menorSalario('China', 'F', funcionarios));
});
