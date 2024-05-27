// setTimeout(() => {
//   console.log("first callback");
//   setTimeout(() => {
//     console.log("second callback");
//     setTimeout(() => {
//       console.log("third callback");
//       setTimeout(() => {
//         console.log("fourth callback");
//         setTimeout(() => {
//           console.log("fifth callback");
//           setTimeout(() => {
//             console.log("sixth callback");
//             setTimeout(() => {
//               console.log("seventh callback");
//               setTimeout(() => {
//                 console.log("eight callback");
//               }, 2000);
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// scenario
// we have a function getUser() -> make a request to the server to fetch user data
// one we have the data, i want to use the userID to fetch user's orders using getOrders()

function getUser(callback) {
  setTimeout(() => {
    console.log("Fetching user data ...");
    // simulate user data
    const user = { id: 1, name: "Neeraj" };
    callback(user.id);
  }, 2000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log(`Fetching orders fro user ID : ${userId}`);
    const orders = ["order1", "order2", "order3"];
    console.log(orders);
    callback(orders);
  }, 1500);
}

// // getUser(getOrders);

getUser(function (user) {
  console.log("User data:", user);
  getOrders(user.id, function (orders) {
    console.log("orders:", orders);
  });
});

// scenario
// Steps to make a sandwich
// 1. Get Bread
// 2. Take the bread and add veggies
// 3. If cheese is requested, add cheese to bread and veggies
// 4. If toast is requested, toast the sandwich, if not serve it
// 5. Ask for toppings and then serve the sandwich

// step 1: Function to get bread
function fnc1(fnc2) {
  let sandwich = []; // empty sandwich
  sandwich.push("bread");
  console.log("Sandwich so far:", sandwich);
  // Proceed to the next step: add vegies
  fnc2(sandwich, fnc3);
}

// step 2: Function to take the bread and add vegies
function fnc2(sandwich, fnc3) {
  sandwich.push("veggies");
  console.log("Sandwich so far:", sandwich);
  // Prcoeed to the next step: optionally add cheese
  fnc3(sandwich, false, fnc4);
}

// step 3: Function to add cheeese if requested

function fnc3(sandwich, isCheeseNeeded, fnc4) {
  if (isCheeseNeeded) sandwich.push("cheese");
  console.log("Sandwich so far:", sandwich);

  // Proceed to the next step: optionally toast the sandwich
  fnc4(sandwich, false, fnc5);
}

// step 4: Function to toast the sandwich if requested otherwise serve it to customer
function fnc4(sandwich, isToasted, fnc5) {
  if (isToasted) sandwich.push("toasted");
  console.log("Sandwich so far:", sandwich);

  // Preceed to the final step: add toppings and serve
  fnc5(sandwich);
}

// step 5: Function to ask for the toppings and then serve the sandwich
function fnc5(sandwich) {
  const toppings = ["lettuce", "tomoto", "onion"];
  //   sandwich.push(toppings[1]);
  //   sandwich.push(toppings[0]);
  sandwich.push(...toppings);
  console.log("Sandich is ready to be served----", sandwich);
}

// start the process
fnc1(fnc2);
