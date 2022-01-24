/* 
/$$$$$$ /$$   /$$ /$$$$$$$  /$$$$$$$$ /$$   /$$        /$$$$$  /$$$$$$  
|_  $$_/| $$$ | $$| $$__  $$| $$_____/| $$  / $$       |__  $$ /$$__  $$
  | $$  | $$$$| $$| $$  \ $$| $$      |  $$/ $$/          | $$| $$  \__/
  | $$  | $$ $$ $$| $$  | $$| $$$$$    \  $$$$/           | $$|  $$$$$$ 
  | $$  | $$  $$$$| $$  | $$| $$__/     >$$  $$      /$$  | $$ \____  $$
  | $$  | $$\  $$$| $$  | $$| $$       /$$/\  $$    | $$  | $$ /$$  \ $$
 /$$$$$$| $$ \  $$| $$$$$$$/| $$$$$$$$| $$  \ $$ /$$|  $$$$$$/|  $$$$$$/
|______/|__/  \__/|_______/ |________/|__/  |__/|__/ \______/  \______/                                                                        
 */

//js code
const index_page =
  "/$$$$$$ /$$   /$$ /$$$$$$$  /$$$$$$$$ /$$   /$$        /$$$$$  /$$$$$$  \n|_  $$_/| $$$ | $$| $$__  $$| $$_____/| $$  / $$       |__  $$ /$$__  $$\n  | $$  | $$$$| $$| $$   $$| $$      |  $$/ $$/          | $$| $$  __/\n  | $$  | $$ $$ $$| $$  | $$| $$$$$      $$$$/           | $$|  $$$$$$ \n  | $$  | $$  $$$$| $$  | $$| $$__/     >$$  $$      /$$  | $$ ____  $$\n  | $$  | $$  $$$| $$  | $$| $$       /$$/  $$    | $$  | $$ /$$   $$\n /$$$$$$| $$   $$| $$$$$$$/| $$$$$$$$| $$   $$ /$$|  $$$$$$/|  $$$$$$/\n|______/|__/  __/|_______/ |________/|__/  |__/|__/ ______/  ______/ \n";
console.log(index_page);

//OBJECT SECTION
let person = {
  name: "Jeff",
  age: 30,
};

//Dot notation
// let person = {};
person.name = "John";

//Bracket Notation
let selection = "name";
person[selection] = "Mary";
// person["name"] = "Mary";
console.log(person.name, "<== person.name");

//ARRAY SECTION
let selectedColors = ["red", "blue"];
selectedColors[2] = "purple";
console.log(selectedColors.length, "<== selectedColors.length");

//FUNCTION SECTION
function greet(name) {
  console.log("Hello " + name);
}
greet("Mila");

function square(number = 4) {
  return number * number;
}
console.log(square(2));
console.log(square(2));
console.log(square());

//FUNCTION ARRAY LENGTH
let arrayLength = ["case0", "case1"];
arrayLength[101] = "case102";
console.log("//FUNCTION ARRAY LENGTH : " + arrayLength.length);
// console.log(arrayLength.length);

//RANDOM FUNCTION
let randNumbOne = Math.random();
console.log("randNumbOne ", randNumbOne);

let randNumbTwo = Math.floor(Math.random() * 10);
console.log("randNumbTwo ", randNumbTwo);

function add(x, y) {
  return x + y;
}
const adding = add(56, 3);
console.log(adding);

//FILTER METHODE
const words = ["train", "boat", "plan", "bike", "trucks"];
const short_words = words.filter((word) => word.length < 5);
console.log("words : ", words);
console.log("short_words : ", short_words);

const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 },
];

const family_list_filter = family
  .filter((item) => item.age > 18)
  .map((item) => item.name);
console.log("list : ", family_list_filter);

//SORTED TWINS
const sortMeOne = "Outlook";
const sortMeTwo = "Lookout";
const sortedOne = sortMeOne.toLowerCase().split("").sort().join("");
const sortedTwo = sortMeTwo.toLowerCase().split("").sort().join("");
console.log(sortedOne==sortedTwo ? true : false, "twins when sorted");
