// const person = {
//   name: "Neeraj",
//   age: 30,
// };

// let clone = Object.assign({}, person);
// let cloneSpread = { ...person };

// person.age = 31;

// console.log(person, clone, cloneSpread);

// both to the shallow cloning

const person = {
  name: "Neeraj",
  size: {
    height: 175,
    weight: 80,
  },
};

let clone = Object.assign({}, person);

console.log(clone.size === person.size); // true
person.size.weight += 5;
console.log(person, clone);
