const arr = ["Neeraj", "Chaudhary"];

// destructure

const [firstName, lastName] = arr;
console.log({ firstName, lastName, arr });

// nested array
const nestedArray = [1, [2, 3], 4];

const [a, [b, c], d] = nestedArray;
console.log({ a, b, c, d });
