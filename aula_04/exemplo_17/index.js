const index = Math.floor(Math.random() * 5);
const grade = "ABCDF"[index];

console.log(grade);

switch (grade) {
  case "A":
    console.log("score >= 90");
    break;
  case "B":
    console.log("score >= 80");
    break;
  case "C":
    console.log("score >= 70");
    break;
  case "D":
    console.log("score >= 60");
    break;
  default:
    console.log("score < 60");
    break;
}
