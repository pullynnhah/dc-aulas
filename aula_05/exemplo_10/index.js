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
console.log();

const tripler = num => 3 * num;
const add10 = num => num + 10;
const sub3 = num => num - 3;

const triple = numbers.map(tripler);
const tripleSum = numbers.map(tripler).map(add10);
const tripleSumSub = numbers.map(tripler).map(add10).map(sub3);
console.log(numbers);
console.log(triple);
console.log(tripleSum);
console.log(tripleSumSub);
console.log();

prices = [15, 20, 25, 50];
const toDollars = price => `$ ${price.toFixed(2)}`;
console.log(prices.map(tripler).map(toDollars));
