// Faça um programa onde os jurados vão dar a explicação para cada nota dada.
// São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = Math.floor(Math.random() * 11);

console.log(score);
switch (score) {
  case 0:
    console.log("You are the supreme, absolute worst!");
    break;
  case 1:
    console.log("You are the absolute worst!");
    break;
  case 2:
    console.log("You are the worst!");
    break;
  case 3:
    console.log("You are really bad!");
    break;
  case 4:
    console.log("You are bad!");
    break;

  case 5:
    console.log("Blah!");
    break;
  case 6:
    console.log("Average!");
    break;
  case 7:
    console.log("Above average!");
    break;
  case 8:
    console.log("Almost nice!");
    break;
  case 9:
    console.log("Good!");
    break;
  case 10:
    console.log("Brilliant!");
    break;
  default:
    console.log("Invalid score.");
    break;
}
