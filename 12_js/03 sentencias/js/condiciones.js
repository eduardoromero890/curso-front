const userPepe = {
    nombre: 'Pepe',
    apellido: 'perez',
    edad: 17,
    aficiones: ['deporte', 'papiroflexia'],
    iscasado: false,
    genero: 'M'
}

const userMaria = {
    nombre: 'Maria',
    apellido: 'perez',
    edad: 53,
    aficiones: ['papiroflexia', 'lectura'],
    iscasado: true,
    genero: 'F'
}

const MAYOREDAD = 18

function crearsaludo(user) {
    let mensaje = 'Hola'

    if (user.edad >= MAYOREDAD && user.genero == 'M') {
        mensaje += 'D.'
    } else if (user.edad >= MAYOREDAD && user.genero == 'F') {
        mensaje += 'Dña.'
    }

    mensaje += user.nombre

    if (user.iscasado) {
        if (userMaria.genero == 'M') {
            mensaje += '. Saludos a tu mujer'
        } else {
            mensaje += '. Saludos a tu marido'
        }
    }
    return mensaje
}

function saludar(usuario){
    console.log(crearsaludo(usuario))
}

function saludarHTML(usuario){
    document.write(crearsaludo(usuario)+'<br>')
}

saludar(userMaria)
saludar(userPepe)
saludarHTML(userMaria)
saludarHTML(userPepe)

if (1) { }

if (1) { }
else { }
if (1) { }
else if (2) { }
else if (3) { }
else { }