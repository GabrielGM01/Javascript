console.log(typeof String);

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

console.log('Gabriel'.reverse());