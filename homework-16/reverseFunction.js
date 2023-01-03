function reversedNumber(num) {
  let result = 0;
  if (!(typeof num === "number")) {
    console.log(`аргумент не цифра ${typeof num}`);
    return (0);
  }
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
console.log(reversedNumber(12345));