function fibonacci(num) {
  // Base Case
  if (num === 0 || num === 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
// O(2^n)
// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// 0, 1, 1, 2, 3, 5, 8, 13, ...

// non -recursive
// O(n)
function fibonacci1(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
}

console.log(fibonacci1(0)); // 0
console.log(fibonacci1(1)); // 1
console.log(fibonacci1(2)); // 1
console.log(fibonacci1(3)); // 1
console.log(fibonacci1(4)); // 1
console.log(fibonacci1(50)); // 1
