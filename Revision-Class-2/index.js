// 17. What's the output?

// const set = new Set([1, 1, 2, 3, 4]);
// console.log(set);
// console.log(set);
// A: [1, 1, 2, 3, 4];
// B: [1, 2, 3, 4];
// C: {
//   1, 1, 2, 3, 4;
// }
// D: {
//   1, 2, 3, 4;
// }

// Answer -> D

// 18. What's the output?

// const settings = {
//   username: "Neeraj Chaudhary",
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// const dataFunc = JSON.stringify(settings, function (key, value) {
//   return value;
// });

// console.log(data);
// console.log(dataFunc);

// A: "{"level":19, "health":90}"
// B: "{"username": "Neeraj Chaudhary"}"
// C: "["level", "health"]"
// D: "{"username": "Neeraj Chaudhary", "level":19, "health":90}"

// Answer -> A

// 19. What's the output?

// const box = {
//   x: 10, // level 1
//   y: 20, // level 1
//   //   z: {
//   //     a: 30, // level 2
//   //   },
// };

// Object.freeze(box);

// const shape = box; // passing the reference
// shape.x = 100;
// shape.z.a = 150;
// console.log(shape);

// A: { x: 100, y: 20 }
// B: { x: 10, y: 20 }
// C: { x: 100 }
// D: ReferenceError

// Answer - B
// 20. What is the output?

// const add = () => {
//   const cache = {};
//   return (num) => {
//     // console.log({ cache });
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
// console.log(addFunction(15));

//    A: Calculated! 20 Calculated! 20 Calculated! 20
//    B: Calculated! 20 From cache! 20 Calculated! 20
//    C: Calculated! 20 From cache! 20 From cache! 20 Calculated! 25
//    D: Calculated! 20 From cache! 20 Error

// Answer -> C

// 21. What is the output?

// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

// for (let item in myLifeSummedUp) {
//   console.log(item);
// }

// for (let item of myLifeSummedUp) {
//   console.log(item);
// }

// let a = {
//   O: "☕",
//   1: "💻",
//   2: "🍷",
//   3: "🍫",
// };

// A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"
// B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"
// C: "☕" "💻" "🍷" "🍫" and 0 1 2 3
// D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

// Answer -> A

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

// Answer -> B

// 23. What will happen?

// let config = {
//   //   alert: setInterval,
//   alert: setInterval(() => {
//     console.log("Alert!");
//   }, 1000),
// };
// // console.log(
// //   config.alert(
// //     setInterval(() => {
// //       console.log("Alert!");
// //     }, 1000)
// //   )
// // );
// // clearInterval(config.alert);
// config = null;
//    A: The setInterval callback won't be invoked
//    B: The setInterval callback gets invoked once
//    C: The setInterval callback will still be called every second
//    D: We never invoked config.alert(), config is null

// Answer -> C

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

// // post hoisting
// var a;
// a = 1;
// {
//   a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Answer
// Inside, 2;
// Outside, 2;

// 27. What's the output?

// let a = 1;
// {
//   let a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Inside, 2
// Outside, 1

// 28. What's the output?

// const a = 1;
// {
//   const a = 2;
//   console.log("Inside", a);
// }
// console.log("Outside", a);

// Inside, 2
// Outside, 1

// 29.

// var a = 1;

// function x() {
//   var a = 2;
//   console.log("Inside Function ", a);
// }

// x();
// console.log("Outside Function ", a);

// Inside Function 2
// Outside Function 1

// 30.

// let a = 1;

// function x() {
//   let a = 2;
//   console.log("Inside Function", a);
// }
// x();
// console.log("Outside Function", a);

// Inside Function 2
// Outside Function 1

// 31 output

// console.log("5" - -"3");

// Answer -> 8
// 32. output

// (function () {
//   var a = b = 5;
// })();
// console.log(b);

// 33. output
// console.log(1 + "2" + "2"); // "122"
// console.log(1 + +"2" + "2"); // "32" //  +"2" or -"2" => try to convert to a number
// console.log(1 + -"1" + "2"); // "02" // 1 + -"1" + "2" => 1 - 1 + "2" => 0 + "2" => "02"
// console.log(+"1" + "1" + "2"); // "112" => +"1" + "1" + "2" => 1 + "1" + "2" => "11" + "2" => "112"
// console.log("A" - "B" + "2"); // NaN2 =>  "A" - "B" + "2" => "NaN" + "2" => "NaN2"
// console.log("A" - "B" + 2); // "NaN" => "A" - "B" + 2 => NaN + 2 => NaN
// console.log(typeof +"2"); // number
// console.log(1 + "2" * 3); // 7 =>  BODMAS => (1 + ("2" * 3)) => (1 + 6) => 7
// console.log(1 + "2" * "3"); // 7
// console.log("1" + "2" * "3"); // "16" => ("1" + ("2" * 3)) => ("1" + 6) => "16"

// ---------------------EnD of Class Revision2 -------------------

// HW try for yourself

// 34. Implement this
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// 35. output
// const createPromise = () => Promise.resolve(1)
// function func1() {
//   createPromise().then(console.log);
//   console.log(2);
// }

// async function func2() {
//   await createPromise();
//   console.log(3);
// }

// console.log(4);
// func1();
// func2();

// 36. output
// Promise.resolve(1)
//   .then((val) => {
//     console.log(val);
//     return val + 1;
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .then((val) => {
//     console.log(val);
//     return Promise.resolve(3).then((val) => {
//       console.log(val);
//     });
//   })
//   .then((val) => {
//     console.log(val);
//     return Promise.reject(4);
//   })
//   .catch((val) => {
//     console.log(val);
//   })
//   .finally((val) => {
//     console.log(val);
//     return 10;
//   })
//   .then((val) => {
//     console.log(val);
//   });
