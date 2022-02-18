// Taxa de Juros

const montate = 90000;
const capital = 60000;
const meses = 24;
let taxa;

taxa = montate / capital;
taxa = Math.pow (taxa, 1 / meses) -1;
taxa = taxa * 100

console.log (`O seu financiamento de R$${capital.toLocaleString('pt-br',{style:'currency',currency:'brl'})} reais teve uma taxa de juros de ${taxa.toFixed(2)}%, pois após ${meses} meses você teve que pagar R$${montate.toLocaleString('pt-br',{style:'currency',currency:'brl'})} reais`);