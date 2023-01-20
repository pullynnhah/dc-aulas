const person = {
  name: "Paula",
  age: 26,
  speaksEnglish: true,
  favoriteNumbers: [3, Math.PI, 7, 21]
};

console.log(typeof person);
console.log(typeof person.name);
console.log(typeof person.age);
console.log(typeof person.speaksEnglish);
console.log(typeof person.favoriteNumbers);
console.log();

console.log(person);
delete person.favoriteNumbers;
console.log(person);
