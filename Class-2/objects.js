// object literal
const person = {
  name: "Neeraj",
  age: 25,
  0: 444,
  greet: function () {
    console.log(`Hello My name is ${this.name}`);
  },
  for: 1,
  let: 2,
  return: 3,
  test: undefined,
};

// console.log(person.neeraj);
// how to access key-value from object

// .dot notation
// key -> contains no spaces
// doesn't start with digit
// doesn't include special character(except $, &, _ are allowed)

// console.log(person.name);

// bracket notation

// console.log(person["name"]);
// console.log(person["0"]);
// console.log(person[0]);
// console.log(person["for"]);
// person.greet();

// in operator
// key in object

// console.log("age" in person);
// console.log("neeraj" in person);
// console.log(person.test);
// console.log("test" in person);

// hasOwnProperty Method

if (person.hasOwnProperty("neeraj")) {
  console.log(true);
}
// optional chaining(?.)

let data = undefined;
if (data?.name) {
} else {
}
