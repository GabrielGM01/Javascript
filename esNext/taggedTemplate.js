function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'outra String';
}

const aluno = 'Gabriel';
const situacao = 'Aprovado';
console.log(tag`${aluno} está ${situacao}`);