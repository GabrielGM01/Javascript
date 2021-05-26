function area(largura, altura) {
  const area = largura * altura;
  if (area >= 20) { console.log(area); }
  else { return area; }
}

console.log(area());
console.log(area(5, 6, 7, 9));