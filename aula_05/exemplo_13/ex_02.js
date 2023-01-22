// Crie um array apartir do array abaixo apenas com as
// empresas com mais de 200 de mercado e fundadas depois de 1975

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", founded: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Natella", founded: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", founded: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", founded: 2004 },
  { name: "spotify", marketValue: 30, CEO: "Daniel Ek", founded: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", founded: 1976 }
];

const filteredCompanies = companies.filter(
  company => company.marketValue > 200 && company.founded > 1975
);

console.log(filteredCompanies);
