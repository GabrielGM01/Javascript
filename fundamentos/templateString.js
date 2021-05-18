const nome = 'Gabriel'
const concatenacao = 'olá ' + nome + '!!'
const template =
  `\nOlá
${nome}!`
console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)