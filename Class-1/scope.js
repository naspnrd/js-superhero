// function abc() {
//   function bce() {
//     console.log("print b---", b);
//   }
//   bce();
// }

// var b = 5; // global variable
// abc(); //

// local scope
// function fun() {
//   let localScope = "I'm local";
//   console.log(localScope); // I'm local
// }
// fun();
// console.log(localScope); // reference error

// block scope -> es6
// let and const
// {
//   // block scope
//   let a = 6;
//   const b = 6;
//   var c = 6; // function or local scope
// }
// console.log(c);

// function fun() {
//   var a = 6;
// }
// console.log(a);

// var, let and const
// console.log(x);
// console.log(y);
// var x = 6;
// let y = 5;

// output
// undefined
// Reference Error : can't access y before initialization

// Temporal Dead Zone

console.log(x);
let x = 6;
