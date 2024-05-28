// function asyncOp(isSuccessful) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccessful) resolve("Operation was successful");
//       else reject("Operation failed");
//     }, 1000);
//   });
// }

// asyncOp(true)
//   .then((message) => {
//     console.log("Then: ---", message);
//   })
//   .catch((error) => {
//     console.log("Catch: ---", error);
//   })
//   .finally(() => {
//     console.log("Finally: This run regardless");
//   });

// asyncOp(false)
//   .then((message) => {
//     console.log("Then: ---", message);
//     // return a promise
//   })
//   //   .then(() => {})
//   //   .then(() => {})
//   //   .then(() => {})
//   //   .then(() => {})
//   .catch((error) => {
//     console.log("Catch: ---", error);
//   })
//   .finally(() => {
//     console.log("Finally: This run regardless");
//   });

// const p1 = Promise.resolve(2);
// p1.then((res) => console.log(res));

// const p2 = Promise.reject(3);
// p2.catch((err) => console.log(err));

// // Promification
// function fncCallback(fnc2) {
//   let sandwich = []; // empty sandwich
//   sandwich.push("bread");
//   console.log("Sandwich so far:", sandwich);
//   // Proceed to the next step: add vegies
//   fnc2(sandwich, fnc3);
// }

// function fncPromise() {
//   return new Promise((resolve, reject) => {
//     let sandwich = []; // empty sandwich
//     sandwich.push("bread");
//     console.log("Sandwich so far:", sandwich);
//     // Proceed to the next step: add vegies
//     resolve(sandwich);
//   });
// }

// fncPromise().then(addVeggies)

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`script load error for ${src}`));
//   document.body.append(script);
// }

// function loadScriptPromise(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`script load error for ${src}`));
//     document.body.append(script);
//   });
// }

// loadScriptPromise("/path")
//   .then((script) => {
//     console.log("---", script);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log("First then -->>", result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log("Second then -->>", result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log("Third then -->>", result);
//     return result * 2;
//   });

// classic newbie error: technically we can also add many .then to a single promise.
// But this is not chaining

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then((result) => {
//   console.log("First then -->>", result);
//   return result * 2;
// });

// promise.then((result) => {
//   console.log("Second then -->>", result);
//   return result * 2;
// });

// promise.then((result) => {
//   console.log("Third then -->>", result);
//   return result * 2;
// });

// debugger;
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 5000);
// })
//   .then(function (result) {
//     console.log("First then -->>", result); // 1
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 5000);
//     });
//   })
//   .then(function (result) {
//     console.log("Second then -->>", result); // 2
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 5000);
//     });
//   })
//   .then(function (result) {
//     console.log("Third then -->>", result); // 4
//   });

// const prom1 = new Promise((resolve) => {
//   resolve(1);
// });
// const prom2 = new Promise((resolve) => {
//   resolve(2);
// });
// const prom3 = new Promise((resolve) => {
//   resolve(3);
// });
// const prom4 = new Promise((resolve) => {
//   resolve(4);
//   prom2
//     .then((res) => console.log(res))
//     .then(() => {
//       prom3.then((res) => console.log(res));
//     });
// });
// prom1.then((res) => console.log(res));
// prom4.then((res) => console.log(res));

// Answer -> 2 1 4 3

// new Promise((resolve) => {
//   resolve(1);
// })
//   .then((res) => {
//     console.log("First Then: ", res);
//     // return 2;
//   }) // 1
//   .then((res1) => console.log("Second Then: ", res1)); // undefined

// Answer ->
