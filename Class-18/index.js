// const img = new Image();
// img.onload = function () {
//   console.log("Image loaded successfully");
// };

// img.onerror = function () {
//   console.log("Failed to load image");
// };

// img.src = "explores.PNG";

// Question
// var a = "a";
// try {
//   throw new Error("BFE.dev");
// } catch {
//   var a = "a1";
// }
// console.log(a);

// var b = "b";
// try {
//   throw new Error("BFE.dev");
// } catch (b) {
//   var b = "b1";
// }
// console.log(b);

// var c = "c";
// try {
//   throw new Error("BFE.dev");
// } catch (error) {
//   var c = "c1";
// }
// console.log(c);

// post hoisting

// var a;
// var b;
// var c;

// a = "a";
// try {
//   throw new Error("BFE.dev");
// } catch {
//   a = "a1";
// }
// console.log(a); // 'a1'

// b = "b";
// try {
//   throw new Error("BFE.dev");
// } catch (b) {
//   b = "b1";
// }
// console.log(b); // 'b'

// c = "c";
// try {
//   throw new Error("BFE.dev");
// } catch (error) {
//   c = "c1";
// }
// console.log(c); // 'c1'

// Example
// console.log(a);
// let a = 4;
// {
//   let a = 5;
//   //   let a = 6; // Syntax Error
//   var b = 6;
//   var b = 8;
//   console.log("Inside---", a);
// }

// // post hoisting
// var b;

// {
//   b = 6;
//   b = 8;
// }
// console.log("outside---", a);
