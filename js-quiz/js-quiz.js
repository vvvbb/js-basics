const jsquiz =
  "/$$$$$  /$$$$$$         /$$$$$$  /$$   /$$ /$$$$$$ /$$$$$$$$ \n|__  $$ /$$__  $$       /$$__  $$| $$  | $$|_  $$_/|_____ $$ \n| $$| $$  __/      | $$   $$| $$  | $$  | $$       /$$/ \n   | $$|  $$$$$$       | $$  | $$| $$  | $$  | $$      /$$/  \n/$$  | $$ ____  $$      | $$  | $$| $$  | $$  | $$     /$$/   \n| $$  | $$ /$$   $$      | $$/$$ $$| $$  | $$  | $$    /$$/    \n|  $$$$$$/|  $$$$$$/      |  $$$$$$/|  $$$$$$/ /$$$$$$ /$$$$$$$$\n______/  ______/        ____ $$$ ______/ |______/|________/\n                             __/                            ";
console.log(jsquiz);

/*  */
/*  */
/*  */
console.log("aaa");

var i = 3;
function miss(j) {
  return (j = 4);
}
miss(i);
console.log(miss(3));
console.log(i);

//

function filterDuplicates(data) {
  var filteredData = data.filter(
    (value, index) => data.indexOf(value) === index
  );
  let newTab = [...new Set(data)]; 

  return newTab;
}

console.log(filterDuplicates([7, 3, 6, 4, 3, 3, 4, 9]));
