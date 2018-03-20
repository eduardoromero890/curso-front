//funcion "clasica" asignada a variable

let calcularCubo = function (a) {
    return a * a * a
}

//En E6 funcion "arrow" asignada a variable
//=>
//Formato extenso
let calcularCuboES6Ext =   (a) => {return a * a * a}

//Abreviado en parte
let calcularCuboES6Semi = a => {
    return a * a * a
}

//Abreviado
let calcularCuboES6 = a => a * a * a
let a =12

setTimeout(function(){
    a= a * a * a
    console.log(a)
    return a
},2000)


setTimeout(()=>{
    a = 12
console.log(a * a * a)
}, 3000)