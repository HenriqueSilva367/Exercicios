// Soma dos ângulos internos de um polígono

let Angulos;
const numeroDosLados = 20;
let valorDosAngulos;

Angulos = (numeroDosLados - 2) * 180;
valorDosAngulos = Angulos / numeroDosLados;

console.log (`Valor dos Angulos Internos ${Angulos}º`)
console.log(`Valor de cada Angulo ${valorDosAngulos.toFixed(2)}º`)