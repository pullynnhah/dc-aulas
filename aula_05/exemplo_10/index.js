const numbers = [1, 2, 3, 4];
const evens = numbers.map(num => num * 2);
console.log(numbers);
console.log(evens);
console.log();

const people = [
  { name: "Anna", age: 37 },
  { name: "Bea", age: 27 },
  { name: "Charles", age: 47 },
  { name: "Drake", age: 17 },
  { name: "Ella", age: 7 }
];
const updatedPeople = people.map(({ name, age }) => ({ name: `${name} Smith`, age: age + 1 }));
console.log(people);
console.log(updatedPeople);
