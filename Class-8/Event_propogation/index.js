document.querySelector("#grandParent").addEventListener(
  "click",
  (event) => {
    console.log("GrandParent clicked!");
    event.stopPropagation();
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    console.log("Parent clicked!");
    // event.stopPropagation();
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    console.log("Child clicked!");
    // event.stopPropagation();
  },
  true
);

// document.querySelector("body").addEventListener(
//   "click",
//   () => {
//     console.log("body clicked!");
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   () => {
//     console.log("document clicked!");
//   },
//   true
// );

// window.addEventListener(
//   "click",
//   () => {
//     console.log("window clicked!");
//   },
//   true
// );
