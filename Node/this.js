console.log(this === global);
console.log(this === exports);
function logThis() {
  console.log('dentro função');
  console.log(this === exports);
}
logThis();