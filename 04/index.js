// Calcular juros compostos

const capital = 1000;
const taxaJuros = 12.5;
const tempo = 5;

taxaJuros = taxaJuros / 100;

let montate = capital * Math.pow((1 + taxaJuros), tempo)

console.log(`O momentate total é de R$ ${Math.round(montate)}`)