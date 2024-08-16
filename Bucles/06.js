function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
return (num >= 100 && num <= 999) || (num <= -100 && num >= -999)
}

console.log(tieneTresDigitos(432));
console.log(tieneTresDigitos(23));

module.exports = tieneTresDigitos;
