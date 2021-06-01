const valor = 'Global';

function fora() {
  const valor = 'local';
  function dentro() {
    return valor;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());