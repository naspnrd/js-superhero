function deepClone(input) {
  var res = Array.isArray(input) ? [] : {};
  // Base Case
  if (typeof input !== "object") {
    return input;
  }
  for (let key in input) {
    res[key] = deepClone(input[key]);
  }
  return res;
}

const person = {
  name: "Neeraj",
  size: {
    height: 175,
    weight: 80,
  },
  nums: [1, 2, 3, 4],
};

console.log(person);
let personCloned = deepClone(person);
person.size.weight += 5;
console.log(personCloned);
