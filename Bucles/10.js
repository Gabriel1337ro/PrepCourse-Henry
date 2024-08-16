function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  return (num === 5 || num === 10 );
}
console.log(esDiezOCinco(5));
console.log(esDiezOCinco(10));
console.log(esDiezOCinco(12));
console.log(esDiezOCinco(1));

module.exports = esDiezOCinco;
