function Personne(prenom, nom, age, genre, interets) {
  console.log(...arguments);
}
var personne1 = new Personne("Bob", "Lewis", 32, "human", ["game", "gym"]);
var personne2 = new Personne("Anna", "Rey", 26, "woman", ["ski", "music"]);

console.log(personne2.constructor);

///////////////////////////////////////////////:

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  } else {
    console.log(width * height);
  }
}

try {
  getRectArea(10, "20");
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
} finally {
  console.log("finally");
}
