const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'b' };
const filho = { __proto__: pai, attr3: 'c' };

console.log(filho.attr1);

