'use strict'

//a y b son argumentos
function sumar(a, b) {
    var c = a + b
    return c
}
function restar(a, b) {
    var c = a - b
    return c
}
function mostrar(r){
    console.log("El resultado es", r)
}
//paso 2 Parámetros
var x=123
var y=34
var r = sumar(x, y)
mostrar(r);
mostrar(sumar(23, 45));
mostrar(sumar(2, 2));

var a=123
var b=34
r=restar(a ,b)
mostrar(r);






/* console.log("El resultado es", sumar(123, 34));

console.log("El resultado es", sumar(23, 45));

console.log("El resultado es", sumar(2, 5));
 */