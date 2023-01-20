// Faça um programa onde colocamos dois numeros
// ímpares e o programa imprima o resto da divisão.
// Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.

const oddRandom1 = Math.floor(Math.random() * 10) * 2 + 1;
const oddRandom2 = Math.floor(Math.random() * 10) * 2 + 1;

const mod = oddRandom1 % oddRandom2;
console.log(`${oddRandom1} % ${oddRandom2} = ${mod}`);
