// async function a() {
//   return 1;
//   //   return Promise.resolve(1);
// }
// a().then((res) => console.log(res));

// let value = await promise; // can't use it like this

// async function a() {
//   //   console.log("Start");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 5000);
//   });
//   //   let promise1 = new Promise((resolve, reject) => {
//   //     setTimeout(() => resolve("done 2"), 7000);
//   //   });
//   let result = await promise; // wait until the promise resolves
//   //   let result1 = await promise1; // wait until the promise resolves
//   console.log(2);
//   console.log(result);
// }
// a();
// console.log("End");

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status === 200) {
//       response.json().then((result) => {
//         //
//         console.log(result);
//       });
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status === 200) {
//     let result = await response.json();
//     console.log(result);
//   } else {
//     throw new Error(response.status);
//   }
// }

// loadJson(url).then(() => {});

// debugger;
// async function withAsyncAwait() {
//   console.log("Start");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 60000);
//   });
//   const data = await promise;
//   console.log(data);
//   console.log("Some Sync code");
// }

// withAsyncAwait(); //

// async function a() {
//   try {
//     return await Promise.reject(1);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function b() {
//   try {
//     return Promise.reject(2);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function start() {
//   await a().catch((res) => console.log("a----", res));
//   //   console.log(res1);
//   await b();
//   //   .catch((res) => console.log("b----", res));
// }

// start();

// const promise = Promise.resolve(1);
// function f() {
//   return promise;
// }

// async function a() {
//   return f();
// }

// async function b() {
//   return await f();
// }

// function c() {
//   return f();
// }

// console.log(a() === b());
// console.log(b() === c());
// console.log(a() === c());

// console.log(a());
// console.log(b());
// console.log(c());

// console.log({} == {});
// console.log({} === {});

// (async () => {})();

// (async function () {})();

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value!");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello World");
//   const val = await p;
//   console.log("Hello Javascript");
//   console.log(val);
//   const val2 = await p;
//   console.log("Hello Javascript 2");
//   console.log(val2);
// }

// handlePromise();

// output
// Hello World
// Hello Javascript
//  Promise resolved value!
//  Hello Javascript 2
//  Promise resolved value!

// debugger;
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 1!");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 2!");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello World");
//   const val = await p1; // it will be resolved in 5 sec?
//   console.log("Hello Javascript");
//   console.log(val);
//   const val2 = await p2; // it will wait for 5 more seconds or not?
//   console.log("Hello Javascript 2");
//   console.log(val2);
// }

// handlePromise();

// async function getUserDetails() {
//   let url = "https://api.github.com/users/naspnrd";
//   const data = await fetch(url);
//   const jsonValue = await data.json();
//   console.log(jsonValue);
// }

// async function getUserDetails() {
//   try {
//     let url = "https://api.github.com/user/naspnrd";
//     const data = await fetch(url);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (error) {
//     console.log("catch error---", error);
//   }
// }
// getUserDetails();

// fetch("https://api.github.com/users/naspnrd")
//   .then((res) => res.json)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async function abc() {
//   await Promise.race([]);
// }

async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}

async function async2() {
  console.log(3);
}

console.log(4);

setTimeout(function () {
  console.log(5);
}, 0);

async1();

new Promise(function (resolve) {
  console.log(6);
  resolve();
}).then(function () {
  console.log(7);
});

console.log(8);
