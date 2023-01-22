// Transforme o array abaixo em um novo array com {name, vip, section}
// section deve ser "Black" se vip for True senão "Green"

const people = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "Jon", vip: true },
  { name: "Bea", vip: true },
  { name: "Carl", vip: false },
  { name: "Anna", vip: true },
  { name: "June", vip: false }
];

const updatedPeople = people.map(person => ({ ...person, sector: person.vip ? "Black" : "Green" }));
console.log(updatedPeople);
