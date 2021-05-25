function tratarErroELanca(erro) {
  throw 'Erro';
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!');
  } catch (e) {
    tratarErroELanca(e);
  } finally {
    console.log('final');
  }
}
const obj = { nome: 'roberto' };
imprimirNomeGritado(obj);