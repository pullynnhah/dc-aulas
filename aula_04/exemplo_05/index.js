const person = {
  name: "Paula Rodrigues",
  age: 26,
  height: 1.62,
  address: {
    street: "505Pondella Rd",
    city: "Fort Myers",
    state: "Florida",
    country: "US"
  }
};

console.log(person);
console.log();

console.log(person.name);
console.log(person.age);
console.log(person.height);
console.log(person.address);
console.log();

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.country);
console.log();

console.log(person.doesNotExist);
