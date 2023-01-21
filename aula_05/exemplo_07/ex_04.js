// Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

function logYear() {
  const year = new Date().getFullYear();
  console.log(`The year is: ${year}`);
}

logYear();
