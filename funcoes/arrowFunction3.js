let comparaComThis = function (p) {
  console.log(this === p);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);