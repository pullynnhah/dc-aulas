const people = [
  { name: "Anna", age: 37 },
  { name: "Bea", age: 27 },
  { name: "Charles", age: 47 },
  { name: "Drake", age: 17 },
  { name: "Ella", age: 7 }
];

people.forEach(person => console.log(person));
console.log();

people.forEach((person, index) => {
  console.log(`${person.name} is ${person.age} years old and it's at ${index}`);
});
console.log();

people.forEach((person, index, array) => console.log(array));
console.log();

let sumAges = 0;
people.forEach(person => (sumAges += person.age));
const avgAge = sumAges / people.length;
console.log(avgAge.toFixed(0));
console.log(avgAge.toFixed(2));
console.log();

people.forEach(function (person, index) {
  console.log(`${person.name} is ${person.age} years old and it's at ${index}`);
});
