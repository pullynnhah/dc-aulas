// Faça um programa que receba 3 números inteiros,
// e deve imprimir, qual é o maior, qual é o menor.

const num1 = Math.floor(Math.random() * 9) + 1;
const num2 = Math.floor(Math.random() * 9) + 1;
const num3 = Math.floor(Math.random() * 9) + 1;

console.log(num1, num2, num3);
console.log(`LARGEST: ${Math.max(num1, num2, num3)}`);
console.log(`SMALLEST: ${Math.min(num1, num2, num3)}`);
