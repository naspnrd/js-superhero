// const user = {
//   name: "neeraj",
// };

// Object.prototype.age = 25;

// for (let key in user) {
//   //   if (user.hasOwnProperty(key)) {
//   console.log(key);
//   //   }
// }

// console.log(Object.keys(user));

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// defineProperty

let user = {
  name: "Neeraj",
};
Object.defineProperty(user, "name", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
