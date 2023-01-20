// Faça um programa onde entramos com dois números, e ele imprime se o
// primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.

const random1 = Math.floor(Math.random() * 10);
const random2 = Math.floor(Math.random() * 10);

const isLess = random1 < random2;
console.log(`${random1} < ${random2}? ${isLess}`);
