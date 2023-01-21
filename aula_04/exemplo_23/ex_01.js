// Faça um programa que compare um número com 10 e imprime na tela:
// - (number) is LARGER
// - (number) is SMALLER
// - (number) is EQUAL

const number = Math.floor(Math.random() * 3) + 9;

if (number > 10) console.log(`${number} is LARGER`);
else if (number < 10) console.log(`${number} is SMALLER`);
else console.log(`${number} is EQUAL`);
