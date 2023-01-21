// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
// - Todos os números são impares => ALL ODD
// - Todos os números são pares => ALL EVEN
// Em caso negativo dos casos a cima, colocar uma mensagem => MIXED

const numbers = [
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 2)
];

let hasOdd = false;
let hasEven = false;

for (const number of numbers) {
  if (number % 2 === 0) hasEven = true;
  else hasOdd = true;
}

console.log(numbers);
if (hasEven && hasOdd) console.log("MIXED");
else if (hasEven) console.log("ALL EVEN");
else console.log("ALL ODD");
