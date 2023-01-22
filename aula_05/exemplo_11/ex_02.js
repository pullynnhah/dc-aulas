// Transforme o array abaixo em um novo array com {name, finalResult}.
// finalResult é "Pass" se a nota >= 7 senão "Fail"

const students = [
  { name: "Rodolfo", score: 7 },
  { name: "Maria", score: 5 },
  { name: "Jon", score: 8 },
  { name: "Bea", score: 9 },
  { name: "Carl", score: 3 },
  { name: "Anna", score: 2 },
  { name: "June", score: 10 }
];

const finals = students.map(({ name, score }) => ({
  name,
  finalResult: score >= 7 ? "Pass" : "Fail"
}));
