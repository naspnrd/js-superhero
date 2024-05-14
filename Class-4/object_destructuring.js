const person = {
  name: "Neeraj",
  age: 25,
  address: {
    city: "Bengaluru",
    country: "India",
  },
};
// []
// const { name: personName, age: personAge, city: personCity } = person;
// console.log(personName, personAge, personCity);

// default value
// const { age = 26 } = person;

// console.log(age);

// const {
//   name,
//   address: { city, country },
// } = person;

// console.log(name, city, country);

// rest operator

const { name, ...rest } = person;
console.log(name, rest);
