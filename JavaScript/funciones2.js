function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "el nombre retornado por la funcion 'cuidadoConElConsoleLog' es : " +
        cuidadoConElConsoleLog('Camilo')
    );
}

function cuidadoConElConsoleLog(nombre) {
    return nombre;
    console.log(nombre);
    return nombre;
}