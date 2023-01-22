// Crie um array apartir do array abaixo apenas
// com os números pares e divisíveis por 5

const numbers = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const nums = numbers.filter(num => num % 2 === 0 && num % 5 === 0);
console.log(nums);
