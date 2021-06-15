
const computeMultiplesSum = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
      console.log(number, sum, i);
    }
  }
  return sum;
};

console.log("computeMultiplesSum", computeMultiplesSum(11));
/* console.log( computeMultiplesSum(12) );
console.log( computeMultiplesSum(10) );
console.log( computeMultiplesSum(5) );
console.log( computeMultiplesSum(6) ); */
