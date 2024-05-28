// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 10);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// new Promise((_, reject) => {
//   console.log(4);
//   reject(5);
//   console.log(6);
// })
//   .then(() => console.log(7))
//   .catch(() => console.log(8))
//   .then(() => console.log(9))
//   .catch(() => console.log(10))
//   .then(() => console.log(11))
//   .then(console.log)
//   .finally(() => console.log(12));

// console.log(13);

// Answer -> 1 4 6 13 8 9 11 undefined 12 3 2

// Question - 2

// new Promise((resolve, reject) => {
//   reject("error1");
//   resolve(1);
//   resolve(2);
//   reject("error");
//   console.log(5);
//   console.log(6);
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
//   .catch((error) => {
//     console.log(error);
//   });

// Answer -> 5 6 1

function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}
let promise = job();
promise
  .then(() => {
    console.log("Success 1");
  })
  .then(() => {
    console.log("Success 2");
  })
  .then(() => {
    console.log("Success 3");
  })
  .catch(() => {
    console.log("Error 1");
    // throw "Error";
  })
  .then(() => {
    console.log("Success 4");
  })
  .catch(() => {
    console.log("Error 2");
  });
