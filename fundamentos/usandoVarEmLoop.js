/* for (var i = 0; i <= 10; i++) {
  console.log(i)
} */

const funcs = []


for (var i = 0; i <= 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]()
//usando Let retorna 2
//usando Var retorna 11