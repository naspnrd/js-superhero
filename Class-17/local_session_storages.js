// Local Storage

/*
 * local storage -> apps -> store data -> without an expiration date.
max storage cap => 5-10 MB, depends on browser
 */

// store data -> setItem(key, value)
// localStorage.setItem("Name", "Neeraj");
// localStorage.setItem("age", 25);
// // // access
// console.log(localStorage.getItem("Name")); // Neeraj
// console.log(localStorage.getItem("Name2")); // null

// remove data

// localStorage.removeItem("Name");
// localStorage.removeItem("age");

// clear all data
// localStorage.clear();

// Session Storage
// max storage cap => 5-10 MB, depends on browser

// sessionStorage.setItem("LastName", "chaudhary");

// console.log(sessionStorage.getItem("LastName"));

// // sessionStorage.removeItem("LastName");
// sessionStorage.clear();

// How to store objects in local/session storage

// const user = {
//   name: "Neeraj",
//   age: 25,
//   profession: "Developer",
// };

// localStorage.setItem("user", JSON.stringify(user));

// console.log(JSON.parse(localStorage.getItem("user")));

let loggedInUser = localStorage.getItem("user");
if (loggedInUser) {
  document.body.innerHTML += `<h1>User is Logged In - ${loggedInUser}</h1>`;
} else {
  document.body.innerHTML += `<h1>User is not Logged In</h1>`;
}
document.getElementById("submit").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  localStorage.setItem("user", email);
  window.location.reload();
});

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.reload();
});
