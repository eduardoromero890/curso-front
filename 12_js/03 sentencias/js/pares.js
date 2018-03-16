function comprobarnumero(numero) {
    let cadena = ''
    if (Number(numero)) {
        if (numero % 2 === 0) {
            cadena += 'es par'
        } else {
            cadena += 'es impar'
        }
    } else {
        cadena += 'Esto no es numero';
    }
    console.log(cadena)
}

comprobarnumero(4)
comprobarnumero('c')
comprobarnumero(50)

/*función que comprueba si el argumento es par o impar
devolviendo 0, 1, o -1 si el argumento no es un numero*/
function calcularPar(n) {
    return isNaN(n / 2) ? -1 : n % 2
}

function calcularPar(n) {
    let r = 0
    if (isNaN(n/2)) {
        r = -1
    } else if (parseInt(n) != parseFloat(n)) {
        r = -3
    } else {
        r = n%2
    }
    return r
}

function mostrarEsPar(n) {
    const aMensajes = [
        `El número ${n} es PAR`,
        `El número ${n} es IMPAR`,
        `El dato ${n} no es numero`,
        `El número ${n} es decimal`];
    // r puede valer 0, 1, -1
    let r = calcularPar(n)
    if (r > 0) { r = -r }

    //r = (r === -1) ? 2 : r;
    // si r = -1 lo convierto en 2
    if (r === -1) { r = 2 }
    if (r === -2) { r = 3 }
    console.log(aMensajes[r])
}


/* calcularPar(6)
mostrarEsPar(113)
mostrarEsPar('edu') */

function mostrarEsParCasos(n){
    //r puede valer 0, 1, -2, -3
    let r = calcularPar(n)
    let mensaje
    switch (r){
        case 0:
        mensaje =`El número ${n} es PAR`
        break
        case 1:
        mensaje =`El número ${n} es IMPAR`
        break
        case -2:
        mensaje =`El dato ${n} no es un numero`
        break
        case -3:
        mensaje =`El número ${n} es decimal`
        
    }
    console.log(mensaje)
}

mostrarEsParCasos('edu')
mostrarEsParCasos(14)
mostrarEsParCasos(113)
mostrarEsParCasos(14.5)