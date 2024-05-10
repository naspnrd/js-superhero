// const arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);

// concatenate two array

// const first = [1, 2];
// const second = [3, 4];
// const third = [...first, ...second];
// console.log(third);

// concatenate two object

// const first = { name: "Neeraj" };
// const second = { age: 25 };
// const third = {
//   ...first,
//   ...second,
// };
// console.log(third);

// // functions
// function sum(a, b, c) {
//   console.log({ a, b, c });
//   return a + b + c;
// }
// console.log(sum(...[1, 2, 3])); // 6 ??? yes

// rest

// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...rem] = arr;
// console.log({ a, b, rem });

// functions

function sum(a, b, c) {
  return a + b + c;
}

// console.log(sum(1, 2, 3));

function sum1(a, b, ...rem) {
  console.log(arguments);
  console.log(rem);
  return a + b;
}

console.log(sum1(1, 2, 3, 4, 5, 6));
