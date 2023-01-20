const name = "Paula";
const name1 = "Paula";
const name2 = "Marie";

console.log({ name, name1, name2 });
console.log(`name == name1 is ${name == name1}`);
console.log(`name == name2 is ${name == name2}`);
console.log(`name === name1 is ${name === name1}`);
console.log(`name === name2 is ${name === name2}`);
console.log();

const num = 7;
const num1 = 7;
const num2 = "7";
const num3 = 3;

console.log({ num, num1, num2, num3 });
console.log(`num == num1 is ${num == num1}`);
console.log(`num == num2 is ${num == num2}`);
console.log(`num == num3 is ${num == num3}`);
console.log();

console.log(`num === num1 is ${num === num1}`);
console.log(`num === num2 is ${num === num2}`);
console.log(`num === num3 is ${num === num3}`);
console.log();

console.log(`num != num1 is ${num != num1}`);
console.log(`num != num2 is ${num != num2}`);
console.log(`num != num3 is ${num != num3}`);
console.log();

console.log(`num !== num1 is ${num !== num1}`);
console.log(`num !== num2 is ${num !== num2}`);
console.log(`num !== num3 is ${num !== num3}`);

console.log();

const random1 = Math.floor(Math.random() * 10);
const random2 = Math.floor(Math.random() * 10);

console.log(`${random1} > ${random2} is ${random1 > random2}`);
console.log(`${random1} >= ${random2} is ${random1 >= random2}`);
console.log(`${random1} < ${random2} is ${random1 < random2}`);
console.log(`${random1} <= ${random2} is ${random1 <= random2}`);
