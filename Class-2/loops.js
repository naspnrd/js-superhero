// for loop
// print 5 numbers from 0 to 4;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// while loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do-while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// for in loop

// let obj = {
//   name: "Neeraj",
//   city: "Mathura",
//   age: 26,
// };

// for (let key in obj) {
//   console.log(key, ": ", obj[key]);
// }

// for of loop
let arr = [1, 2, 3, 4, 5];
//     0  1  2  3  4
// for (let val of arr) {
//   console.log(val); // values of arr -1, 2, 3, 4, 5...
// }

for (let val in arr) {
  console.log(val, arr[val]); // indeces - > 0, 1, 2, 3, 4
}
