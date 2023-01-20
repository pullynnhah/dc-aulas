const student = {
  name: "Paula",
  age: 26,
  gender: "female"
};

for (const prop in student) {
  console.log(`student[${prop}] ~> ${student[prop]}`);
}
