console.log(Math.ceil(6.1))

const objet = []

objet.nome = 'bola'

console.log(objet.nome)

function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log('iniciando')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())

