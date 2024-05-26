// 1. What is the event.target when clicking the button?

{
  /* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>; */
}

// A: Outer div
// B: Inner div
// C: button
// D: An array of all nested elements.

// Answer
// C ->
// Follow up Question is -> How you can stop the event propagation? -> stopPropagation()

// 2. What's the output?

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Neeraj";
//   let age = 21;
// }

// sayHi();

// A: Neeraj and undefined
// B: Neeraj and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Answer -> D

// 3. What's the output?

// let a = 3; // number - primitive
// let b = new Number(3); // an object, why? new Number() it's an built in function contructor
// let c = 3;

// console.log(a == b); // true
// console.log(a === b); // false
// console.log(b === c); // false

// A: true false true
// B: false false true
// C: true false false
// D: false true true

// Answer -> C
// console.log(a == c); // true
// console.log(a === c); // true

// 4.What's the output?

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, "2")); // '1' + '2' => '12'

// A: NaN;
// B: TypeError;
// C: "12";
// D: 3;

// Answer -> C

// 5. What's the output?

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }

// getAge();

// A: 21;
// B: undefined;
// C: ReferenceError;
// D: TypeError;

// Answer -> C

// 6. What's the output?

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// A: 1 2
// B: 1 2 3
// C: 1 2 4
// D: 1 3 4

// Answer -> C

// 7. What's the output?

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// A: First Second Third
// B: First Third Second
// C: Second First Third
// D: Second Third First

// Answer -> B

// 8. When you click the paragraph, what's the logged output?

{
  /* <div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>; */
}

// A: p div
// B: div p
// C: p
// D: div

// Answer -> A

// 9. What's the output?

// const person = { name: "Neeraj" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// // console.log(sayHi(22));
// console.log(sayHi.call(person, 21)); // first argument -> this, second argument -> comma separated
// console.log(sayHi.bind(person, 21)());
// const bindedFunc = sayHi.bind(person, 21);
// console.log(bindedFunc());

// A: undefined is 21 Neeraj is 21
// B: function function
// C: Neeraj is 21 Neeraj is 21
// D: Neeraj is 21 function

// Answer -> D

// 10. What's the output?

// const person = {
//   name: "Neeraj",
//   age: 21,
// };

// const arr = [1, 2];

// for (const item in arr) {
//   console.log(item);
// }

// A: { name: "Neeraj" }, { age: 21 }
// B: "name", "age"
// C: "Neeraj", 21
// D: ["name", "Neeraj"], ["age", 21]

// Answer -> B

// 11. this keyword

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo); // bar
//     console.log("outer func:  self.foo = " + self.foo); // bar
//     (function() {
//       console.log("inner func:  this.foo = " + this.foo); // undefined
//       console.log("inner func:  self.foo = " + self.foo); // bar
//     })();
//   },
// };
// myObject.func();

// function abc() {
//   //   "use strict";
//   console.log(this); //
// }

// abc(); // global object

// (function () {
//   console.log("called immediately");
// })();

//12. this keyword

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo); // bar
//     console.log("outer func:  self.foo = " + self.foo); // bar
//     const doo = () => {
//       console.log("inner func:  this.foo = " + this.foo); // bar
//       console.log("inner func:  self.foo = " + self.foo); // bar
//     };
//     doo();
//   },
// };
// myObject.func();

// 13. this keyword

// const person = {
//   name: "Neeraj",
//   getName: function () {
//     return `${this.name} is my name`;
//   },
// };
// console.log(person.getName());

// Answer -> Neeraj is my name

// 14. this keyword

// const person = {
//   abc: "Neeraj",
//   getName: () => {
//     return `${this.abc} is my name`;
//   },
// };
// console.log(person.getName());

// const abcd = () => {
//   console.log(this);
// };
// abcd();

// Answer -> undefined is my name

// 15. this keyword

// function User() {
//   this.firstName = "Neeraj Chaudhary";
//   this.score = 20;
//   this.sayUser = function () {
//     console.log(this.firstName);

// function innerFunction() {
//   console.log(this.firstName);
// }

// innerFunction();
//   };
// }
// let name = new User(); // what kind of function this is? -> constructor function
// name.sayUser();

// Answer ->
// Neeraj Chaudhary
// undefined

// 16. this keyword

// function User() {
//   this.firstName = "Neeraj Chaudhary";
//   this.score = 20;
//   this.sayUser = function () {
//     // when `this` is accessible
//     console.log(this.firstName);

//     const innerFunction = () => {
//       // when `this` refers to the global scope/object
//       console.log(this.firstName);
//     };

//     innerFunction();
//   };
// }
// let name = new User();
// name.sayUser();

// Answer ->
// Neeraj Chaudhary
// Neeraj Chaudhary

// --------------------- Till 16 covered in class ------------------------------------

// 17. What's the output?

// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);
// A: [1, 1, 2, 3, 4];
// B: [1, 2, 3, 4];
// C: {
//   1, 1, 2, 3, 4;
// }
// D: {
//   1, 2, 3, 4;
// }

// 18. What's the output?

// const settings = {
//   username: "Neeraj Chaudhary",
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// A: "{"level":19, "health":90}"
// B: "{"username": "Neeraj Chaudhary"}"
// C: "["level", "health"]"
// D: "{"username": "Neeraj Chaudhary", "level":19, "health":90}"

// 19. What's the output?

// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);

// A: { x: 100, y: 20 }
// B: { x: 10, y: 20 }
// C: { x: 100 }
// D: ReferenceError

// 20. What is the output?

// const add = () => {
//   const cache = {};
//   return (num) => {
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     } else {
//       const result = num + 10;
//       cache[num] = result;
//       return `Calculated! ${result}`;
//     }
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));

//    A: Calculated! 20 Calculated! 20 Calculated! 20
//    B: Calculated! 20 From cache! 20 Calculated! 20
//    C: Calculated! 20 From cache! 20 From cache! 20
//    D: Calculated! 20 From cache! 20 Error

// 21. What is the output?

// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

// for (let item in myLifeSummedUp) {
//   console.log(item);
// }

// for (let item of myLifeSummedUp) {
//   console.log(item);
// }

// A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"
// B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"
// C: "☕" "💻" "🍷" "🍫" and 0 1 2 3
// D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

// 22. What is the output?

// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

// A: "🥑" and "😍"
// B: "🥑" and "😎"
// C: "😍" and "😎"
// D: "😎" and "😎"

// 23. What will happen?

// let config = {
//   alert: setInterval(() => {
//     console.log("Alert!");
//   }, 1000),
// };

// config = null;

//    A: The setInterval callback won't be invoked
//    B: The setInterval callback gets invoked once
//    C: The setInterval callback will still be called every second
//    D: We never invoked config.alert(), config is null

// 24. What's the output?

// const fruit = ["🍌", "🍊", "🍎"];

// fruit.slice(0, 1);
// fruit.splice(0, 1);
// fruit.unshift("🍇");

// console.log(fruit);

// A: ["🍌", "🍊", "🍎"];
// B: ["🍊", "🍎"];
// C: ["🍇", "🍊", "🍎"];
// D: ["🍇", "🍌", "🍊", "🍎"];

// 25. Question: Using setTimeout, print the string 'Hello!' after 1000ms.

// 26. What's the output?

// var a = 1;
// {
//   var a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// 27. What's the output?

// let a = 1;
// {
//   let a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// 28. What's the output?

// const a = 1;
// {
//   const a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// 29. var a = 1;

// function x() {
//   var a = 2;
//   console.log("Inside Function", a);
// }
// x();
// console.log("Outside Function", a);

// 30. let a = 1;

// function x() {
//   let a = 2;
//   console.log("Inside Function", a);
// }
// x();
// console.log("Outside Function", a);

//
