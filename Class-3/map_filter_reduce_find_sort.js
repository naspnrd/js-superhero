// // map

// const arr = [5, 1, 3, 2];

// function double(x) {
//   return 2 * x;
// }
// function triple(x) {
//   return 3 * x;
// }
// // const output = arr.map(double);
// // or

// // const output = arr.map(function (x) {
// //   return 2 * x;
// // });

// // or

// // const output = arr.map((val, idx, arr) => {
// //   console.log({ val, idx, arr });
// //   return val * 2;
// // });

// // or
// const output = arr.map((val, idx, arr) => val * 2);
// // const output1 = arr.map(triple);
// console.log(arr);
// console.log(output);
// // console.log(output1);

// Filter

// const arr = [5, 1, 3, 4, 6];
// function isOdd(x) {
//   return x % 2;
// }

// function greaterThan4(x) {
//   return x > 4;
// }
// // console.log(output);
// const output1 = arr.filter(greaterThan4);
// console.log(output1);

// reduce

// const arr = [5, 1, 3, 2];
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// with reduce
const sum = arr.reduce(function (accumulator, currentValue) {
  accumulator += currentValue;
  return accumulator;
}, 0);

// const sum = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(sum);

// chaining with map , filter and reduce
// const arr = [1, 2, 3, 4];
// const output = arr.map((val) => val * 2).filter((val) => val > 3); // [2, 4, 6, 8] // [4, 6, 8]

// console.log(output);

// forEach

// const arr = [1, 2, 3];
// arr.forEach((currValue, idx) => {
//   console.log({ currValue, idx });
// });

//find method

// const arr = [1, 2, 3, 4, 5];
// const found = arr.find((val) => val > 3);
// console.log(found);

// findIndex

// const arr = [1, 2, 3, 4, 5];
// const found = arr.findIndex((val) => val > 3);
// console.log(found);

// sort method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// Numbers

const arr = [31, 10, 5, 2, 4];
// arr.sort();
// console.log(arr);

// function compare(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }

// function compare(a, b) {
//   return a - b;
// }

// function compare(a, b) {
//   return b - a;
// }

arr.sort((a, b) => b - a);
console.log(arr);
