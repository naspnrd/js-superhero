// console.log("one!");

// console.log("Two!");

// function logThree() {
//   console.log("three!");
// }

// function logThreeAndFour() {
//   logThree();
//   console.log("Four!");
// }

// logThreeAndFour();

// function longRunningTask() {
//   let count = 0;
//   for (let i = 0; i < 1e9; i++) {
//     count++;
//   }
//   console.log("Long task done!!");
// }

// function importantTask() {
//   console.log("Important@!!!!!");
// }

// longRunningTask();
// importantTask();

// function longRunningTask(callbackFn) {
//   let count = 0;
//   for (let i = 0; i < 1e9; i++) {
//     count++;
//   }
//   callbackFn();
//   console.log("Long task done!!");
// }

// function importantTask() {
//   console.log("Important@!!!!!");
// }

// longRunningTask(importantTask);

// debugger;
// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (error) => console.log(error)
// );

// setTimeout

// console.log("Start");

// setTimeout(function callbackFn() {
//   console.log("callback fn called");
// }, 5000);

// console.log("End");

// console.log("Start");
// function greet(name, message) {
//   console.log(`Hello ${name}, ${message}`);
// }

// const timeoutId = setTimeout(greet, 10000, "Neeraj", "How's u doing?"); // 10 seconds

// console.log("End--", timeoutId);

// setTimeout(() => {
//   console.log("Timer cleared");
//   clearTimeout(timeoutId);
// }, 3000);

// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Interval count: ${count}`);
//   if (count === 15) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// let start = 1;

// function countUp(name) {
//   console.log(`${name} says the count is ${start}`);
//   start++;
//   if (start === 10) {
//     clearInterval(intervalId);
//   }
// }

// const intervalId = setInterval(countUp, 1000, "Neeraj");

// debugger;
// console.log("start");

// document.getElementById("btn").addEventListener("click", function cb() {
//   console.log("callback fn called");
// });

// console.log("end");

// console.log("start");

// setTimeout(function cb() {
//   console.log("callback called");
// }); // 0

// console.log("End");
// // 1 million lines of code needs to be executed
// // and these executions takes 15 seconds to get executed
// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 15000) {
//   endDate = new Date().getTime();
// }
// console.log("while loop expires");

// question -1
// function x() {
//   var i = 2;
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
//   console.log("Js Classes going on!!!");
//   //   i = 3;
// }
// x();

// O/P
// Js Classes going on!!!
// 2

// Explanation

// function x() {
//   //   var i; // function scope
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("JS Classes going on!!");
// }
// x();

// O/P

// Explanation

// what has block scope? -> let

// function x() {
//   //   var i; // function scope
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("JS Classes going on!!");
// }
// x();

// use var only and fix it??
function x() {
  //   var i; // function scope
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i); // 0 // 1 // 2 // 3 // 4 // 5
  }
  console.log("JS Classes going on!!");
}
x();
