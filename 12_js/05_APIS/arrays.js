//aDatos es una INSTANCIA de Array
let aDatos = [1, 12, 67]

let aDatos2 = new Array(5)
console.log(aDatos2.length)
console.log(aDatos2)

let aDatos3 = Array(5, 23, 21, 5)
console.log(aDatos3)
let oDatos = {}
//new Object()

let dni

let code = dni%23
let aLetras = ['A','B','C','D','F']

console.log(aLetras.length)

//Metodos de Arrays
//Inmutables
//Mutables

//console.log(aLetras.join(''))
//console.log(aLetras)
//aLetrasOriginal = aLetras.slice(0, aLetras.length-1)
//aLetras.sort()
//console.log(aLetrasOriginal)

//Mutable
//let aNuevo =
let aNuevo = aLetras.splice(0, 3, "A", "B")
console.log(aNuevo)
console.log(aLetras)

//Mutables
aLetras.push("")//añadir al final
aLetras.unshift("")//añadir al principio
aLetras.pop()//quitar último
aLetras.shift()//quitar primero