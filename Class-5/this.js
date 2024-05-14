// functions

// console.log(this);
// function x() {
//   console.log(this);
// }
// x();
// window.x();

// "use strict";
// console.log("in strict mode execution");
// console.log(this);
// function x() {
//   console.log("function", this);
// }
// x();

// object
// "use strict";
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };
// video.play();
// this inside an inner function

// const numbers = {
//   numberA: 5,
//   numberB: 10,
//   sum: function () {
//     console.log(this);
//     console.log(this === numbers);
//     function calculate() {
//       console.log(this);
//       console.log(this === numbers);
//       return this.numberA + this.numberB;
//     }
//     return calculate();
//   },
// };

// console.log(numbers.sum());

// solution-1

// const numbers = {
//   numberA: 5,
//   numberB: 10,
//   sum: function () {
//     console.log(this);
//     console.log(this === numbers);
//     // if i can preserve the context
//     const that = this;
//     function calculate() {
//       console.log(that);
//       console.log(that === numbers);
//       return that.numberA + that.numberB;
//     }
//     return calculate();
//   },
// };

// console.log(numbers.sum());

// solution - 2 - arrow function

const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this);
    console.log(this === numbers);
    const calculate = () => {
      console.log(this);
      console.log(this === numbers);
      return this.numberA + this.numberB;
    };
    return calculate();
  },
};

// console.log(numbers.sum());

// solution - 3 call, apply, bind
// const numbers = {
//   numberA: 5,
//   numberB: 10,
//   sum: function () {
//     console.log(this);
//     console.log(this === numbers);
//     function calculate() {
//       console.log(this);
//       console.log(this === numbers);
//       return this.numberA + this.numberB;
//     }
//     return calculate.call(this);
//   },
// };

// console.log(numbers.sum());

// const calc = {
//   num: 0,
//   increment() {
//     console.log(this); // calc object
//     console.log(this === calc); // true
//     this.num += 1;
//     return this.num;
//   },
// };

// console.log(calc.increment()); // 1
// console.log(calc.increment()); // 2
// console.log(calc.increment()); // 3

// const func = calc.increment;
// console.log(func());
// console.log(func());

// this inside arrow function

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
//   y: () => {
//     console.log(this);
//   },
// };

// obj.x();
// obj.y();

// const z = () => {
//   console.log(this);
// };

// z();
