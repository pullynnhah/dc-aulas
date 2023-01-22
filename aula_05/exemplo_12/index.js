const people = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "Jon", vip: true },
  { name: "Bea", vip: true },
  { name: "Carl", vip: false },
  { name: "Anna", vip: true },
  { name: "June", vip: false }
];

const vips = people.filter(person => person.vip);
console.log(vips);
console.log();

const students = [
  { name: "Rodolfo", score: 7 },
  { name: "Maria", score: 5 },
  { name: "Jon", score: 8 },
  { name: "Bea", score: 9 },
  { name: "Carl", score: 3 },
  { name: "Anna", score: 2 },
  { name: "June", score: 10 }
];

const passStudents = students.filter(student => student.score >= 7);
const failStudents = students.filter(student => student.score < 7);
console.log("PASS:", passStudents);
console.log("FAIL:", failStudents);
