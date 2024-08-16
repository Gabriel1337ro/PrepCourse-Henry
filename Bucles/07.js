function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  return a % 2 ===0 && a % 3 === 0;
}

console.log(esParYDivisiblePorTres(12));
console.log(esParYDivisiblePorTres(66));
console.log(esParYDivisiblePorTres(25));

module.exports = esParYDivisiblePorTres;