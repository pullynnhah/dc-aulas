// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
// Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
// Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const winner = Math.floor(Math.random() * 9) + 1;
const guess = Math.floor(Math.random() * 9) + 1;

if (winner === guess) console.log("You WON!");
else console.log("You LOST!");
