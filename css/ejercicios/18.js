function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
    // Verifica si el argumento es una sola letra
    if (typeof letra === 'string' && letra.length === 1) {
      // Convierte la letra a minúscula para hacer la comparación más fácil
      letra = letra.toLowerCase();
      
      // Verifica si la letra es una vocal
      if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
        return "Es vocal";
      }
    }
    
    // Si no es una vocal o el argumento no es válido, retorna "Dato incorrecto"
    return "Dato incorrecto";
  }
  





module.exports = esVocal;
