//js code
console.log("Wello World!");

let person = {
  name: "Jeff",
  age: 30,
};

//OBJECT SECTION

//Dot notation
// let person = {};
person.name = "John";

//Bracket Notation
let selection = "name";
person[selection] = "Mary";
// person["name"] = "Mary";
console.log(person.name);

//ARRAY SECTION
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

//FUNCTION SECTION
function greet(name) {
  console.log("Hello " + name);
}
greet("Mila");

function square(number) {
  return number * number;
}
console.log(square(2));

//FUNCTION ARRAY LENGTH
let arrayLength = ["case0", "case1"];
arrayLength[101] = "case102";
console.log("//FUNCTION ARRAY LENGTH : " + arrayLength.length);
// console.log(arrayLength.length);
