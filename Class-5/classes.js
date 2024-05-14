class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(this.name);
  }
}

const person1 = new Person("Neeraj", 26);
person1.getInfo();
