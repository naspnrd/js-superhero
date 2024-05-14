const student = {
  name: "Neeraj",
};

function printName(lastName) {
  console.log(this.name + " " + lastName);
}
const student2 = {
  name: "Rohan",
};

const student3 = {
  name: "Arjun",
};

// printName.call(student, "chaudhary");
// printName.call(student2, "sharma");
// printName.call(student3, "munjal");

// printName.apply(student, ["chaudhary"]);
// printName.apply(student2, ["sharma"]);
// printName.apply(student3, ["munjal"]);

const printMyName = printName.bind(student, "Chaudhary");
printMyName();
printMyName();
printMyName();
printMyName();
printMyName();
