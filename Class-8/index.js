// // extract the button or i need to access the button

// const button = document.querySelector("button");
// console.log(button);

// button.addEventListener("click", function () {
//   alert("button clicked");
// });

// function callMe(button) {
//   //   debugger;
//   console.log("button clicked", button);
//   //   button.classList.toggle("secondary");
//   //   button.disabled = true;
//   button.draggable = true;
// }

// function createBoldElement() {
//   // create the element -> createElement -> present on document object
//   let b = document.createElement("b");
//   b.innerText = "Neeraj Chaudhary";
//   // insert the b tag into the DOM
//   let container = document.querySelector("#container");
//   container.appendChild(b);
// }

// const students = [
//   {
//     name: "Neeraj",
//     age: 23,
//   },
//   {
//     name: "Rohan",
//     age: 22,
//   },
//   {
//     name: "Virat Kohli",
//     age: 35,
//   },
//   {
//     name: "Dhoni",
//     age: 40,
//   },
// ];

// const container = document.getElementById("container");
// const button = document.querySelector("button");
// function createStudents() {
//   //   const card = document.createElement("div");
//   //   card.classList.add("card");
//   //   const name = document.createElement("span");
//   //   const age = document.createElement("span");
//   //   name.innerText = "Neeraj";
//   //   age.innerText = 23;
//   //   // now i need to append
//   //   card.append(name, age);

//   //   container.appendChild(card);
//   students.forEach((student) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     const name = document.createElement("span");
//     const age = document.createElement("span");
//     name.innerText = student.name;
//     age.innerText = student.age;
//     // now i need to append
//     card.append(name, age);

//     container.appendChild(card);
//     button.disabled = true;
//   });
// }

// extract/access the button
// const btn = document.getElementById("myButton");

// function handleClick() {
//   console.log("button clicked");
// }

// function handleChange() {
//   console.log("change event button clicked");
// }
// // btn.addEventListener("click", function () {
// //   console.log("button clicked");
// // });

// btn.addEventListener("click", handleClick);

// btn.removeEventListener("click", handleClick);

// const span = document.getElementsByTagName("span")[0];

// or

// const [span] = document.getElementsByTagName("span");

// function listener1() {
//   console.log("span clicked 1");
// }
// function listener2() {
//   console.log("span clicked 2");
// }
// span.addEventListener("click", listener1);

// span.addEventListener("click", listener2);

// span.removeEventListener("click", listener1);

// const button = document.querySelector("button");

// count how many times a button is clicked??

// let count = 0;
// button.addEventListener("click", () => {
//   console.log("button is clicked ", ++count);
// });

// function attachEventListeners() {
//   const button = document.querySelector("button");
//   let count = 0;
//   button.addEventListener("click", () => {
//     console.log("button is clicked ", ++count);
//   });
// }

// attachEventListeners();
// // console.log(count); // Error: Reference error

// button.addEventListener("click", function (event) {
//   console.log(event);
//   console.log(event.preventDefault());
// });

// const input = document.querySelector("input");

// input.addEventListener("focus", (e) => {
//   console.log("focused");
// });

// input.addEventListener("blur", (e) => {
//   console.log("blurred");
// });

// input.addEventListener("input", (e) => {
//   console.log("input event triggered");
// });

// input.addEventListener("change", (e) => {
//   console.log("change event triggered");
// });

const students = [
  "Neeraj",
  "Aman",
  "Radhika",
  "Mahesh",
  "Akshay",
  "Virat",
  "Rohan",
  "Mukul",
];

const input = document.querySelector("input");
const namesContainer = document.querySelector("#names-container");

// input.addEventListener("input", function (event) {
//   //   console.log(event);
//   const target = event.target;
//   const value = target.value;
//   console.log(value);
//   // or
//   //   const value = event.target.value;
//   //   const { value } = event.target;

//   const filteredStudents = students.filter((student) => {
//     let studentLoweredValue = student.toLowerCase();
//     return studentLoweredValue.includes(value.toLowerCase());
//   });
//   console.log(filteredStudents);
//   const ul = document.createElement("ul");
//   ul.innerText = "";
//   namesContainer.innerText = "";
//   filteredStudents.forEach((student) => {
//     let li = document.createElement("li");
//     li.innerText = student;
//     ul.appendChild(li);
//   });
//   namesContainer.appendChild(ul);
// });

input.addEventListener("change", function (event) {
  //   console.log(event);
  const target = event.target;
  const value = target.value;
  console.log(value);
  // or
  //   const value = event.target.value;
  //   const { value } = event.target;

  const filteredStudents = students.filter((student) => {
    let studentLoweredValue = student.toLowerCase();
    return studentLoweredValue.includes(value.toLowerCase());
  });
  console.log(filteredStudents);
  const ul = document.createElement("ul");
  ul.innerText = "";
  namesContainer.innerText = "";
  filteredStudents.forEach((student) => {
    let li = document.createElement("li");
    li.innerText = student;
    ul.appendChild(li);
  });
  namesContainer.appendChild(ul);
});
