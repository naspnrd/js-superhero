// let animal = {
//   eats: true,
// };
// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   },
// });

const tail = { hasTail: true };
const pet = { legs: 4, __proto__: tail };
const cat = { sound: "Meow!", __proto__: pet };
console.log(cat.hasTail); // true
