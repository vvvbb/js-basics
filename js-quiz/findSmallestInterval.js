const findSmallestInterval = (numbers) => {
  // const numbersSorted = numbers.sort();
  const numbersSorted = numbers.sort((a, b) => a - b);
  // console.log("numbersSorted ", numbersSorted);
  let int = numbersSorted[1] - numbersSorted[0];
  for (i = 0; i < numbersSorted.length; i++) {
    diff = numbersSorted[i + 1] - numbersSorted[i];
    if (diff < int) {
      int = diff;
    }
  }
  return int;
};

console.log("findSmallestInterval : ", findSmallestInterval([1, 6, 4, 8, 11]));
console.log("findSmallestInterval : ", findSmallestInterval([10, 20, 30, 24]));
