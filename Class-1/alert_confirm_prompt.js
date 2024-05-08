// alert

// alert("You are here!!!!");

// confirm

// var res = confirm("Are you sure?");
// if (res) {
//   // do something
//   alert("----- in Ok response");
// } else {
//   alert("-----in cancel response");
// }

// prompt

// var userInp = prompt("Please enter your name!");
// alert(userInp);

// ask user to input two number and display the sum as alert

let firstNumber = prompt("Please enter the first number");
firstNumber = parseInt(firstNumber);
let secondNumber = prompt("Please enter the second number");
secondNumber = parseInt(secondNumber);
const sum = firstNumber + secondNumber;
alert("sum is --- " + sum);
