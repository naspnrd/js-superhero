// CommonJS modules are used in server-side javascript -> Node.js file
// This is the default way to import modules in Node.js
// Warning -> CommonJS modules don't work in browser.
// 3 Keywords
// 1. require
// 2. exports
// 3. module-exports

// 1. Require ->global namespace used for importing a module inside your file
const file = require("path/to/file");
// lets you import JS and JSON files

const { sum } = require("./math");

// require imports are sync

// 2. Exports -> when you want to export a single value either varible, object, function or class

// abc.js
// function sum(a, b) {
//   return a + b;
// }

// const language = "Javascript";

// exports.sum = sum;
// exports.language = language;

// // import
// // cd.js
// const { sum, language } = require("./abc");

// 3. Module Exports -> is used when using default exports or exports multiple values at once

// Named exports -> can be any number

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  sum,
  subtract,
};

// import
const { sum, subtract } = require("./path");

// Default export -> you can only have one default export per module

const getUser = () => "Neeraj";

module.exports = getUser;

// import

const getUserExport = require("./path");
