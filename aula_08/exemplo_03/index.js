const { person } = require("./person");

console.log(this === module.exports);
console.log(person);
person.logInfo();
