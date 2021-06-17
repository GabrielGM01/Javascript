const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaNova');

const contadorC = require('./instanciaNova')();
contadorC.inc();
contadorC.inc();
console.log(contadorA);