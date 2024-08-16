function productoEntreNumeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    // Si a es mayor que b, intercambiamos los valores
    [a, b] = [b, a];
  }

  // Inicializamos el resultado en 1 (el neutro de la multiplicación)
  let producto = 1;

  // Multiplicamos todos los números desde a hasta b
  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  return producto === -0 ? 0 : producto;
  
}

console.log(productoEntreNumeros(-5, 5));

module.exports = productoEntreNumeros;