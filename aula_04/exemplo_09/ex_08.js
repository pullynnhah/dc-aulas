// Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
// Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"].
// João e João, imprime false. João e Maria, imprime true.

const names = ["Paula", "Paula", "Wagner"];

const isNotEqual1 = names[0] !== names[1];
const isNotEqual2 = names[0] !== names[2];

console.log(isNotEqual1);
console.log(isNotEqual2);
