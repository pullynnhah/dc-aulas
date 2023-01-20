const condition = Math.random() < 0.5;

if (condition) console.log("I'm here!");

console.log("Bye!");
console.log();

const number = Math.floor(Math.random() * 2);

if (number % 2 === 0) {
  console.log(`${number} is EVEN`);
} else {
  console.log(`${number} is ODD`);
}
