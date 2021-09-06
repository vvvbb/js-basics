MyClass = function () {
  console.log("MyClass \n //////////////////////");
  this.a = "hello";
  this.b = "world";
};

MyClass.prototype.a = "Hey you";
MyClass.prototype.c = "H8888Y";

obj = new MyClass();


console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj.d);


console.log("\n //////////////////////");


var a = {};
var b = a;

a.v = 1;
b.v = 2;

console.log(a.v);

