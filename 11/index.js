// Volume de uma esfera

let volumeEsfera;
const raioEsfera = 3;
const diametroEsfera = raioEsfera * 2;

volumeEsfera = 4 * Math.PI * raioEsfera * raioEsfera * raioEsfera / 3;
console.log (`O volume de uma esfera de raio ${raioEsfera} é de ${volumeEsfera.toFixed(2)}`);

