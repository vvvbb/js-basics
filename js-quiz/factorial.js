//fonction factorial
const factorial = (nbr) => {
  if (nbr === 0) {
    return 1;
  }
  console.log(nbr);
  return nbr * factorial(nbr - 1);
};
// console.log(factorial(3));
