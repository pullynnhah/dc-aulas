// Escreva um programa onde, você chame uma função mandando dois
//  argumentos, 2 números, e a função responde qual número é maior

function getMax(num1, num2) {
  if (num1 > num2) return num1;
  else if (num1 < num2) return num2;
  else return "Numbers are the same!";
}

console.log(getMax(3, 7));
console.log(getMax(13, 7));
console.log(getMax(21, 21));
