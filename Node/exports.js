this.a = 1;
exports.b = 2;
module.exports.c = 3;
exports = null;
console.log(module.exports);
/*exports = {
  nome: 'teste'
}*/
module.exports = { publico: true };
console.log(module.exports);