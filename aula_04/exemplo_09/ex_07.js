// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"].
// João e João, imprime true. João e Maria, imprime false.

const names = ["Paula", "Paula", "Wagner"];

const isEqual1 = names[0] === names[1];
const isEqual2 = names[0] === names[2];

console.log(isEqual1);
console.log(isEqual2);
