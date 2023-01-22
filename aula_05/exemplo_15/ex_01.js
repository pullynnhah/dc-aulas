// Descubra qual o valor de mercado de todas as companias em conjunto

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", founded: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Natella", founded: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", founded: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", founded: 2004 },
  { name: "spotify", marketValue: 30, CEO: "Daniel Ek", founded: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", founded: 1976 }
];

const marketValue = companies.reduce((ac, { marketValue }) => ac + marketValue, 0);
console.log(marketValue);
