// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando
// dados sobre o salário e número de filhos. A prefeitura deseja saber:
// - média do salário da população;
// - média do número de filhos;
// - maior salário;
// - O final da leitura de dados se dará com a entrada de um salário negativo.
// - Faça isso usando uma função!

function logPopInfo(pop) {
  let count = 0;
  let sumSalary = 0;
  let sumNumChildren = 0;
  let largestSalary = 0;

  for (const person of pop) {
    if (person.salary < 0) break;
    count++;
    sumSalary += person.salary;
    sumNumChildren += person.numChildren;
    if (person.salary > largestSalary) largestSalary = person.salary;
  }
  const avgSalary = sumSalary / count;
  const avgNumChildren = sumNumChildren / count;

  console.log(`Average salary: $${avgSalary.toFixed(2)}`);
  console.log(`Average number of children: ${avgNumChildren.toFixed(1)}`);
  console.log(`Largest salary: $${largestSalary.toFixed(2)}`);
}

const population = [
  { salary: 10000, numChildren: 2 },
  { salary: 8000, numChildren: 4 },
  { salary: 23000, numChildren: 3 },
  { salary: 11000, numChildren: 0 },
  { salary: 3500, numChildren: 0 },
  { salary: 14000, numChildren: 1 },
  { salary: -7000, numChildren: 1 }
];

logPopInfo(population);
