const numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce((ac, num) => ac + num, 0));
console.log(numbers.reduce((ac, num) => ac + num));
console.log(numbers.reduce((ac, num) => ac * num, 1));
console.log(
  numbers.reduce((ac, num) => {
    console.log({ ac, num });
    return ac * num;
  })
);
