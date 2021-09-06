const isOnEvenPosition = (table, value) => {
  /*  const position = table.indexOf(value);
  if (position % 2 == 1) {
    return false;
  } else {
    return true;
  } */
  return table.findIndex(x=>x==value)%2 == 0;
};

var t = [4, 23, 36, 7, 40, 8, 3, 2, 101, 0];
// console.log(isOnEvenPosition(t, 36));
console.log(isOnEvenPosition(t, 7));
console.log(isOnEvenPosition(t, 3));
