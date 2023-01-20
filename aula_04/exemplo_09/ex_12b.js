// Faça um programa onde entramos com dois números, e ele imprime se o
//  primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.

const random1 = Math.floor(Math.random() * 10);
const random2 = Math.floor(Math.random() * 10);

const isGreater = random1 > random2;
console.log(`${random1} > ${random2}? ${isGreater}`);
