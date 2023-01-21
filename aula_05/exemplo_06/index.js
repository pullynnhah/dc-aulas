const calc = (num1, num2, operator) => {
  switch (operator) {
    case "sum":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mul":
      return num1 * num2;
    case "div":
      return num1 / num2;
    default:
      return "Invalid OPERATOR";
  }
};

console.log(calc(7, 3, "sum"));
console.log(calc(7, 3, "sub"));
console.log(calc(7, 3, "mul"));
console.log(calc(7, 3, "div"));
console.log(calc(7, 3));
