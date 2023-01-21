// Faça um programa que verifica se uma pessoa é brasileira ou não.
// DEVE SER UM OBJETO

const people = [
  {
    name: "Paula",
    nacionality: "brazilian"
  },
  {
    name: "Parker",
    nacionality: "american"
  }
];

for (const person of people) {
  if (person.nacionality === "brazilian") console.log(`${person.name} IS brazilian`);
  else console.log(`${person.name} is NOT brazilian`);
}
