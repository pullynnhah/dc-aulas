// Escreva um programa onde, você chame uma função enviando um número (aceitar
// somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

function logMultiplicationTable(num) {
  if (num < 1 || num > 10) console.log(`Out of RANGE!`);
  else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} × ${i} ~> ${num * i}`);
    }
  }
}

logMultiplicationTable(-1);
logMultiplicationTable(11);
logMultiplicationTable(6);
