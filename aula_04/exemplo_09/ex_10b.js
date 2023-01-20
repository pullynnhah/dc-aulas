// Faça um programa que imprima na tela se um nome é igual ao outro
// nome digitado. Porém, os dois nomes devem estar em um objeto.
// Ex: const object1 = {firstName:"João", secondName:"Maria"}.
// João e João, imprime true. João e Maria, imprime false.

const names = { name: "Paula", firstName: "Paula", secondName: "Wagner" };

const isEqual1 = names.name === names.firstName;
const isEqual2 = names.name === names.secondName;

console.log(isEqual1);
console.log(isEqual2);
