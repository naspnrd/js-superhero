function Person(name, age) {
  console.log(name, age);
  this.name = name;
  this.age = age;
}

const person1 = new Person("Neeraj", 26);
