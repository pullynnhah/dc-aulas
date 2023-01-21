// Faça um programa onde leia um número e diga se ele é:
// - ímpar,
// - par,
// - é um número primo e impar,
// - é par e divisível por 5

const num = Math.floor(Math.random() * 100);

console.log({ num });
if (num % 2 === 0) {
  if (num % 5 === 0) console.log("Even and divisible by 5");
  else console.log("Even");
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log("Prime and odd");
  else console.log("Odd");
}
