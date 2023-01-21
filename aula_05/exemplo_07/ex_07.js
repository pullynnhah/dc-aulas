// Faça um programa onde, você chame uma função que calcule a taxa mensal
// de juros de um investimento. Você deve enviar como argumentos da função:
// - Valor inicial investido
// - Valor atual do investimento
// - Tempo em meses, que o valor está investido
// A função deve RETORNAR a taxa de juros, já formatada.
// Ex: 2.5%.
// Cálculo taxa = (Valor atual do investimento - Valor inicial investido) / (Valor inicial investido * tempo)

function calcRate(initialValue, currentValue, months) {
  const rate = (100 * (currentValue - initialValue)) / (initialValue * months);
  return `${rate.toFixed(1)}%`;
}

console.log(calcRate(1000, 1200, 10));
