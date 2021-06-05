function tiposTriangulo(a, b, c) {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  if (a == b && b == c) {
    console.log('Triângulo Equilátero');
  }
  else if (a == b || b == c || a == c) {
    console.log('Triângulo Isósceles');
  }
  else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Digite um valor numérico');
  }
  else {
    console.log('Triângulo Escaleno');
  }
}

tiposTriangulo(74, 74, 74);