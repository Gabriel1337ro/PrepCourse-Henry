function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return(num < 50 && num > 20); 

}

console.log(estaEnRango(33));
console.log(estaEnRango(55));
console.log(estaEnRango(19));

module.exports = estaEnRango;
