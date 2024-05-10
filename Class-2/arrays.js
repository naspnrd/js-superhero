// let arr = new Array();
// // or
// let arr1 = [];

let arr = [
  "Neeraj",
  "Aman",
  "Rohan",
  1,
  2,
  3,
  false,
  { name: "Neeraj", age: 25 },
  function () {
    console.log("hello");
  },
];

let obj = {
  key: "value",
};
// console.log(arr[8]());
// console.log(arr);
// console.log(typeof arr);

arr.forEach(function (item, idx, arr) {
  console.log(item, idx);
});

// object are object, array are object, typeof object
// Array.isArray() -> true/false

console.log(typeof arr);
console.log(typeof obj);
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
