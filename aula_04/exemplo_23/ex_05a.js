// Crie 5 objetos nesse formato { name: "", age:"", gender:"", occupation: "", nacionalility:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve
// ser maior de idade e brasileira para ser aprovada.

const people = [
  {
    name: "Aurora",
    age: "18",
    gender: "female",
    occupation: "student",
    nacionalility: "brazilian"
  },
  { name: "Bea", age: "10", gender: "female", occupation: "student", nacionalility: "american" },
  {
    name: "Claire",
    age: "17",
    gender: "female",
    occupation: "student",
    nacionalility: "brazilian"
  },
  { name: "Donna", age: "37", gender: "female", occupation: "student", nacionalility: "brazilian" },
  { name: "Ella", age: "23", gender: "female", occupation: "student", nacionalility: "american" }
];

for (const person of people) {
  if (person.age >= 18 && person.nacionalility === "brazilian")
    console.log(`${person.name} was APPROVED`);
  else console.log(`${person.name} was NOT approved`);
}
