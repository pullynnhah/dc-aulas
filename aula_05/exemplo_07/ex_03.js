// Escreva um programa onde, você chame uma função, e ela diga a hora exata!

function logTime() {
  const time = new Date().toLocaleTimeString();
  console.log(`Now is: ${time}`);
}

logTime();
