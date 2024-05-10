// const radiuses = [1, 2, 3, 4];
// // area -> pi*r*r
// const calculateArea = function (radiuses) {
//   const out = [];
//   radiuses.forEach((radius, idx) => {
//     out.push(Math.round(Math.PI * radius * radius));
//   });
//   return out;
// };
// console.log(calculateArea(radiuses)); // [3, 13, 28, 50]

// // circumference - 2*pi*r
// const calculateCircumference = function (radiuses) {
//   const out = [];
//   radiuses.forEach((radius, idx) => {
//     out.push(Math.round(2 * Math.PI * radius));
//   });
//   return out;
// };

// console.log(calculateCircumference(radiuses)); // [6, 13, 19, 25]

// // ==========>>>>>>>>> optimsed code

const radiuses = [1, 2, 3, 4];

const area = function (radius) {
  return Math.round(Math.PI * radius * radius);
};

const circumference = function (radius) {
  return Math.round(2 * Math.PI * radius);
};

const calculate = function (radiuses, logic) {
  const out = [];
  radiuses.forEach((radius, idx) => {
    out.push(logic(radius));
  });
  return out;
};
console.log(calculate(radiuses, area)); // [3, 13, 28, 50]

console.log(calculate(radiuses, circumference)); // [6, 13, 19, 25]
