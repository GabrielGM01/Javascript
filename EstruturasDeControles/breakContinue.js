let num = [4, 8, 7, 41, 5, 6, 4, 12];
for (x in num) {
  if (x == 41) {
    break;
  }
  console.log(`${x} = ${num[x]}`);
}