console.log({ var1 });

// ReferenceError
// console.log({ let1, const1 });

var var1 = "I'm a var!";
let let1 = "I'm a let!";
const const1 = "I'm a const!";

console.log({ var1, let1, const1 });
if (true) {
  var var1 = "I'm a VAR!!!";
  let let1 = "I'm a LET!!!";
  console.log({ var1, let1 });
}

console.log({ var1, let1 });
