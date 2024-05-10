function outerFunction() {
  const outerFuncVariable = "I'm outer fun variable";
  function innerFunction() {
    console.log(outerFuncVariable);
  }
  return innerFunction;
}

const invokedFunc = outerFunction();
console.log(invokedFunc);
invokedFunc();
console.log(outerFuncVariable);
