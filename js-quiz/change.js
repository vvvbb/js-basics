console.log("change cahsh of :");

const change = (cash) => {
  if (isNaN(cash) || cash <= 1) {
    return null;
  }

  const banknote = [10, 5, 2];
  let bill = new Array(3).fill(0);

  for (let i = 0; i < banknote.length; i++) {
    if (cash >= banknote[i]) {
      bill[i] = Math.floor(cash / banknote[i]);
      cash = cash - banknote[i] * bill[i];
    }
  }

  return {
    two: bill[2],
    five: bill[1],
    ten: bill[0],
  };
};

// console.log(change(4));
// console.log(change(11));
// console.log(change(13));
console.log(change(84));
// console.log(change(84).ten);
// console.log(change(84).five);
// console.log(change(84).two);
