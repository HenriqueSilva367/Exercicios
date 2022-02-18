// Casos de COVID-19

const populacao = 1000;
const x = 4;
const tempo = 100; 

const infectatos = populacao * Math.pow(x, tempo / 7);

console.log(`A quantidade de pessoas Infectadas é de ${infectatos}`)