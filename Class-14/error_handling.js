function check(a, b, c) {
  try {
    if (a + b !== c) throw "Not equal to 4";
    else console.log("Try: worked");
  } catch (error) {
    console.log("Catch---", error);
    if (error instanceof TypeError) {
    } else if (error instanceof RangeError) {
    }
  } finally {
    console.log("I don't care if 3 + 2 is not equal to 4");
    // check(4, 4, 8);
  }
}
check(3, 4, 5);
check(4, 4, 8);

// try {
//   if (3 + 2 !== 4) throw "Not equal to 4";
// } finally {
//   console.log("I don't care if 3 + 2 is not equal to 4");
// }
