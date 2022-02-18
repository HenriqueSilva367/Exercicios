// Calculo do perímetro e área de um círculo

let comprimentoCirculo;
const raioCirculo = 4;
let areaCirculo;

comprimentoCirculo = 2 * Math.PI * raioCirculo;
areaCirculo = Math.PI * Math.pow (raioCirculo, 2)

console.log (`O comprimento do círculo é de ${comprimentoCirculo.toFixed(2)}`)
console.log(`Area do circulo é de ${areaCirculo.toFixed(2)}`);
