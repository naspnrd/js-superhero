const person = {
  name: "Neeraj",
  age: 30,
  isStudent: false,
  address: {
    city: "Bengaluru",
    code: "455566",
  },
  hasPets: null,
  hobbies: ["rider", "provider"],
  jobRole: "Frontend developer",
  skill: "javascript",
  greet: function () {
    console.log("hello ", this.name);
  },
  undefinedValue: undefined,
};

// const stringifiedJSON = JSON.stringify(person);
// console.log(stringifiedJSON);
// const parsedJSOn = JSON.parse(stringifiedJSON);
// console.log(parsedJSOn);

// const jsonString = '{name: "Neeraj", "age" : "30"}';
// console.log(JSON.parse(jsonString));

// how to handle invalid JSON gracefully

try {
  const jsonString = '{name: "Neeraj", "age" : "30"}';
  console.log(JSON.parse(jsonString));
} catch (error) {
  console.log(error);
} finally {
}

console.log("hi");
console.log("hello");
