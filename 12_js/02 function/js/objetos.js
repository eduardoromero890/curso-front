//objeto literal
let user = {
    nombre: 'pepe',
    apellido: 'perez',
    dirección: {
        calle: '',
        ciudad: '',
        c_postal: ''
    },
    edad: 23,
    iscasado: true
}


console.log(typeof user)

user.cargo = "CEO"
console.log(user)

//Otros tipos de objetos

//Array

let aDatos = [12, 34, 45, 45, 87]
let aDatosChungo = [12, 'Pepe', true, null, undefined]
console.log(aDatos)
console.log(aDatos[1])
aDatos[15] = 30

console.log(aDatos)

aUsuarios = [{
    nombre: 'pepe',
    apellido: 'perez',
    dirección: {
        calle: '',
        ciudad: '',
        c_postal: ''
    },
    edad: 23,
    iscasado: false,
    nombre: 'pepe',
    apellido: 'perez',
    dirección: {
        calle: '',
        ciudad: '',
        c_postal: ''
    },
    edad: 23,
    aficiones: ['deporte', 'papiroflexia'],
    iscasado: false}
]

console.log(typeof aUsuarios)
console.log(Array.isArray(aUsuarios))

//String
//Number
// Boolen

//Function, Method, Constructor

let fecha = new Date()
let exp = new RegExp()
let error = new Error()


//Math.cos(90)
//JSON.parse()