// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Porém, os dois nomes devem estar em dois objetos separados.
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}.
// João e João, imprime true. João e Maria, imprime false.Faça

const name = { name: "Paula" };
const name1 = { name: "Paula" };
const name2 = { name: "Wagner" };

const isEqual1 = name.name === name1.name;
const isEqual2 = name.name === name2.name;

console.log(isEqual1);
console.log(isEqual2);
