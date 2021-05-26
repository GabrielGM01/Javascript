function fun1() { }

const fun2 = function () { }

const array = [function (a, b) { return a + b }, fun1, fun2];

console.log(array[0](2, 3));
console.log(array[1]);

function run(fun) {
  fun();
}
run(function () { console.log('executando...'); });

function soma(a, b) {
  return function (c) {
    return function (d) {
      return function (e) {
        return console.log(a + b + c + d + e);
      }
    }
  }
}
soma(10, 20)(30)(40)(50);