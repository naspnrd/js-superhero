console.log("hello");
function getFormvalue(e) {
  console.log(e);
  e.preventDefault();
  //Write your code here
  let inputs = document.querySelectorAll("input");
  console.log(inputs);
  let first_name = inputs[0].value;
  let last_name = inputs[1].value;
  let fullName = first_name + " " + last_name;
  alert(fullName);
}

const form = document.getElementById("form1");
form.addEventListener("onsubmit", getFormvalue);
