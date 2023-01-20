const num = 314 / 2;
const str = "314 / 2";

console.log(num);
console.log(str);
console.log();

const num1 = 3.14;
const num2 = 7;
const num3 = 216;

let result = num1 + num2;
console.log(`${num1} + ${num2} = ${result}`);

result = num1 - num2;
console.log(`${num1} - ${num2} = ${result}`);

result = num1 * num2;
console.log(`${num1} * ${num2} = ${result}`);

result = num2 / num1;
console.log(`${num2} / ${num1} = ${result}`);

result = num3 % num2;
console.log(`${num3} % ${num2} = ${result}`);

result = num2 ** num3;
console.log(`${num2} ** ${num3} = ${result}`);
console.log();

const nan = num / str;
console.log(nan);
