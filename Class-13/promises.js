// const promise = new Promise((resolve, reject) => {
//   // TODO: do any async/sync task
//   // resolve("Done!");
//   reject("Fail!");
// });

// new Promise((resolve, reject) => {
//   // TODO: do any async/sync task
//   resolve("Done! I am Neeraj");
//   //   reject("Fail!");
// }).then((result) => console.log("then handler---", result));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//   }, 5000);
//   //   reject("Fail!");
// }).then((result) => console.log("then handler---", result));

// new Promise((resolve, reject) => {
//   fs.readFile("/path", "utf-8", (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });

// Output question
// new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// }).then((result) => console.log(result));

// console.log(3);

// Output
// 1 3 2

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });
// promise.then((result) => console.log(result));

// console.log(3);

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching user data....");
//       const userData = { id: userId, name: "Neeraj" };
//       if (userData) {
//         resolve(userData);
//       } else reject("User not found");
//     }, 1000);
//   });
// }

// function getOrders(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Fetching orders for user id ${userId}`);
//       const ordersData = ["order1", "order2", "order3"];
//       if (ordersData) resolve(ordersData);
//       else reject("Order data not found");
//     }, 1500);
//   });
// }

// getUser(12)
//   .then((userData) => {
//     console.log("User data---", userData);
//     return getOrders(userData.id);
//   })
//   .then(function (orders) {
//     console.log("order:", orders);
//   });

// QUESTIONS
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });
// console.log("end");

// Answer -> start, 1, end

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

// Answer -> start 1 end 2

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

// Answer -> start 1 3 end 2

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

// Answer -> start 1 end

// console.log("start");
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");

console.log("start");
setTimeout(() => {
  console.log("setTImeout");
});
Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");
