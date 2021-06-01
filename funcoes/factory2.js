function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}
const notebook = criarProduto('asus', 1500);

console.log(notebook);