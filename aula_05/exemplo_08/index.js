const students = ["Paula", "Jane"];

console.log("STUDENTS:", students);

console.log("\nPUSH:");
students.push("Charles");
console.log(students);

students.push("Josh");
console.log(students);

console.log("\nLENGTH:");
console.log(`Number of students is: ${students.length}`);

console.log("\nSORT:");
console.log(students.sort());
console.log(students);

console.log("\nDELETE:");
delete students[0];
console.log(students);
console.log(students[0]);

const names = ["Anna", "Bea", "Charles", "Jane", "Josh", "Paula"];
console.log("\nNAMES:", names);

console.log("\nSPLICE:");
console.log(names.splice(1, 2));
console.log(names);
console.log();

console.log(names.splice(1, 0, "Bea"));
console.log(names);
console.log();

console.log(names.splice(2, 1, "Charles"));
console.log(names);
console.log();

console.log(names.splice(2, 3, "Gus"));
console.log(names);
console.log();

console.log(names.splice(2, 1, "Charles", "Jane", "Josh", "Paula"));
console.log(names);

console.log("\nNAMES:", names);
console.log("\nSLICE:");
console.log(names.slice(1));
console.log(names.slice(1, 2));
console.log(names.slice(1, 3));
console.log(names);

console.log("\nNAMES:", names);

console.log("\nPOP:");
console.log(names.pop());
console.log(names);

console.log("\nNAMES:", names);
console.log("\nSHIFT:");
console.log(names.shift());
console.log(names);
