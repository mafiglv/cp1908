
const precoCombustivel = 5.79;
const combustivelLitrosKm = 9.8;
const distanciaKm =  752;

const qtdLitros = distanciaKm/combustivelLitrosKm;

const precoViagem = qtdLitros*precoCombustivel;

console.log(precoViagem.toFixed(2));