const jsquiz =
  "/$$$$$  /$$$$$$         /$$$$$$  /$$   /$$ /$$$$$$ /$$$$$$$$ \n|__  $$ /$$__  $$       /$$__  $$| $$  | $$|_  $$_/|_____ $$ \n| $$| $$  __/      | $$   $$| $$  | $$  | $$       /$$/ \n   | $$|  $$$$$$       | $$  | $$| $$  | $$  | $$      /$$/  \n/$$  | $$ ____  $$      | $$  | $$| $$  | $$  | $$     /$$/   \n| $$  | $$ /$$   $$      | $$/$$ $$| $$  | $$  | $$    /$$/    \n|  $$$$$$/|  $$$$$$/      |  $$$$$$/|  $$$$$$/ /$$$$$$ /$$$$$$$$\n______/  ______/        ____ $$$ ______/ |______/|________/\n                             __/                            ";
console.log(jsquiz);

//fonction factorial
const factorial = (nbr) => {
  if (nbr === 0) {
    return 1;
  }
  console.log(nbr);
  return nbr * factorial(nbr - 1);
};
// console.log(factorial(3));

const convertToIntegers = (strings) => {
  Math.abs();
  return strings.map((str) => parseInt(str));
};

console.log(convertToIntegers(["1", "82", "-13"]));
console.log(convertToIntegers([]));
// console.log(convertToIntegers(null));

const closestToZero = (numbers) => {
  if (numbers == null || numbers.length < 1) {
    return 0;
  }
  let closest = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < closest && numbers[i] > 0) {
      closest = numbers[i];
    } else if (Math.abs(numbers[i]) < closest && numbers[i] < 0) {
      closest = numbers[i];
    }
  }
  return closest;
};
var testCTZ1 = closestToZero([5, 7, 20, 4, 3, 11, 8, 5]);
console.log("testCTZ1 : ", testCTZ1);
var testCTZ2 = closestToZero(null);
console.log("testCTZ2 : ", testCTZ2);
var testCTZ3 = closestToZero([5, -7, 20, 4, -3, 1, 11, -8, 5]);
console.log("testCTZ3 : ", testCTZ3);
// TO BE CONTINUED...
