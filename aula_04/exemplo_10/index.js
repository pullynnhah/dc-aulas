const num1 = 218;
const num2 = 11;

let result = num1 + num2;
console.log(`${num1} + ${num2} = ${result}`);

result = num1 - num2;
console.log(`${num1} - ${num2} = ${result}`);

result = num1 * num2;
console.log(`${num1} * ${num2} = ${result}`);

result = num1 / num2;
console.log(`${num1} / ${num2} = ${result}`);

result = num1 % num2;
console.log(`${num1} % ${num2} = ${result}`);

result = num1 ** num2;
console.log(`${num1} ** ${num2} = ${result}`);
console.log();

let num3 = 0;
let num4 = num3++;
console.log({ num3, num4 });

num4 = ++num3;
console.log({ num3, num4 });

num4 = num3--;
console.log({ num3, num4 });

num4 = --num3;
console.log({ num3, num4 });
