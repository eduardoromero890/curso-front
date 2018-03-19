function calcularFactorial(n) {
    let r = 1
    for (let i = n; i >= 1; i--){
        r *= i;
    }
    return r
}
//test
console.log(calcularFactorial (1)) //1
console.log(calcularFactorial (2)) //2
console.log(calcularFactorial (3)) //6
console.log(calcularFactorial (4)) //24
console.log(calcularFactorial (5)) //120

function mostrarFactorial (n){
    let mensaje = `El factorial de ${n} es `
    mensaje += calcularFactorial (n)
    console.log(mensaje)
}

mostrarFactorial(170)