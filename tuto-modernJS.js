const modernJS =
  " /$$      /$$  /$$$$$$  /$$$$$$$  /$$$$$$$$ /$$$$$$$  /$$   /$$          /$$$$$  /$$$$$$ \n | $$$    /$$$ /$$__  $$| $$__  $$| $$_____/| $$__  $$| $$$ | $$         |__  $$ /$$__  $$\n | $$$$  /$$$$| $$   $$| $$   $$| $$      | $$   $$| $$$$| $$            | $$| $$  __/\n | $$ $$/$$ $$| $$  | $$| $$  | $$| $$$$$   | $$$$$$$/| $$ $$ $$            | $$|  $$$$$$ \n | $$  $$$| $$| $$  | $$| $$  | $$| $$__/   | $$__  $$| $$  $$$$       /$$  | $$ ____  $$\n | $$  $ | $$| $$  | $$| $$  | $$| $$      | $$   $$| $$  $$$      | $$  | $$ /$$   $$\n | $$ /  | $$|  $$$$$$/| $$$$$$$/| $$$$$$$$| $$  | $$| $$   $$      |  $$$$$$/|  $$$$$$/\n |__/     |__/ ______/ |_______/ |________/|__/  |__/|__/  __/       ______/  ______/ \n";
console.log(modernJS);

// console.log('name : ',name[1]);
// console.log(array);

let number = 25;
// console.log(typeof number);
// console.log(number === 25); //true
// console.log(number === "25"); //false

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
// console.log(bill([10, 15, 30], 0.2));

//innerHTML FROM AN ARRAY
let array = ["marc", "luc", "jean"];
array.unshift("matthieu");

const name = document.querySelector("#name");
for (let i = 0; i < array.length; i++) {
  name.innerHTML += `<li>${array[i]}</li>`;
  // console.log(name);
}

console.log("TOP : ", array);
array.push("thomas");
array.unshift("jason");
array.unshift("andrew");
console.log(array);

const filtered_array = array.filter((item) => {
  return item !== "jason";
});
console.log(filtered_array);
array = filtered_array;

const body = document.querySelector("#name");
array.forEach((person) => {
  body.innerHTML += `<li class="border border-green-600">${person}</li>`;
});

const paras = document.querySelectorAll("#game p");

paras.forEach((p) => {
  // console.log(p);
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

let park = "Yellowstone";
let index = park.indexOf("stone");
// console.log("indexOf stone ", index); //position 6

let yell = "GO AWAY!!";
index = yell.indexOf("!");
// console.log("indexOf !  ", index); //position 7

// console.log("GARBAGE!".slice(3).replace("G", "T"));

setInterval(() => {
  // console.log(Math.floor(Math.random() * 10) + 1);
  let min = 0;
  let max = 11;
  // console.log(Math.floor(Math.random() * (max - min) + min)); //The maximum is exclusive and the minimum is inclusive
}, 2000);

/* 
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  for (let j = 0; j < row.length; j++) {
    console.log("row[j] ",row[j]);
  }
}
 */
// return sum of array include between [n1,n2]
const calc = (arrayR, n1, n2) => {
  return arrayR.slice(n1, n2 + 1).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};
var arrayR = [0, 1, 2, 3, 4, 5, 3]; // code de test
// console.log(calc(arrayR, 0, 1), "//1");
// console.log(calc(arrayR, 0, 5), "//15");
// console.log(calc(arrayR, 0, 0), "//0");
// console.log(calc(arrayR, 0, 6), "//18");

/* let greeter = "hey hi";
var times = 4;

if (times > 3) {
  let greeter = "say Hello instead";
  console.log(greeter); // "say Hello instead"
}

console.log(greeter); // */

// var mots = ["pour", "contre", "avec", "sans"];
// console.log(mots.map((i) => i.length));

// var tab = [1, 5, 2, 8, 5, 2, 6];
// console.log(tab.reduce((acc, value) => acc + value));

// var laba = (labb = 42);
// console.log(typeof labb);

// Promise
let prom = new Promise((resolve, reject) => {
  let RanVal = Math.round(Math.random());
  // console.log("RanVal ",RanVal);
  if (RanVal) {
    resolve("success");
  } else {
    reject("failed");
  }
});

prom.then((message) => {
  console.log("this is in the then " + message);
}).catch((message) => {
  console.log("this is in the catch " + message);
});

/* 
console.log("ENVENT LOOP");

function EventThree() {
  console.log("EventThree");
  const foo = "CONST FOO";
  return foo;
}

function EventTwo(emoji) {
  console.log("EventTwo", emoji);
  // return emoji;
}

function EventOne() {
  console.log("EventOne");
  return EventTwo(EventThree());
}

EventOne();
 */

let lapin = "rabbit";
let lapinRev = "";
// console.log(lapin.split("").reverse().join(""));
for (i = lapin.length - 1; i >= 0; i--) {
  lapinRev += lapin[i];
}
console.log(lapinRev);
