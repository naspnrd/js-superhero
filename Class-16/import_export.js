export let months = ["jan", "feb", "mar"];

export function getMonth(month) {
  console.log(months[month]);
}

export const YEAR = 2024;

export class User {
  constructor(name) {
    this.name = name;
  }
}

let day = 30;
let age = 25;

export { day, age };

// Export Variations:
// 1. default export
// 2. single export
// 3. Names(multiple) export
