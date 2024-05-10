// function statement vs function expression

// a(); // a is called
// console.log(b); // undefined
// b(); // Uncaught TypeError: b is not a function
// c(); // reference Error  -> can't access c before initialisation
function a() {
  console.log("a is called");
}

var b = function () {
  console.log("b is called");
};

let c = function () {
  console.log("c is called");
};

var d = function xyz() {
  console.log("d is called");
};

// d(); // d is called
// xyz(); // reference error

// diff between arguments and parameters

// first class citizen

// var b = function (params) {
//   xyz();
// };
// function xyz() {
//   console.log("xyz is called");
// }

// b(xyz);

// arrow functions

function sum(a, b) {
  return a + b;
}

var sum1 = (a, b) => {
  return a + b;
};
var sum2 = (a, b) => a + b;

console.log("func statement --- ", sum(1, 2)); // 3
console.log("arrow func --- ", sum1(1, 2)); // 3
console.log("arrow func --- ", sum2(1, 2)); // 3
