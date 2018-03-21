function analizarPalindromo(texto =''){

    let textoArray = texto.split(' ')

    let textoJo = textoArray.join('')

    let eArray = textoJo.split('')

    console.log('new array',eArray)

    let textoRev = eArray.reverse()

    console.log('reverse',textoRev)

    /* texto = texto.toLowerCase().split(" ").join("")

    console.log(texto) */

    let verificar = true

    for (let i = 0; i < eArray.length; i++) {
        if(eArray[i] == textoRev[i]){
            verificar = false
        }
    }
        if(verificar = false){
            console.log("El texto no es un palindromo")
        } else {
            console.log("El texto es un palindromo")
        }
        
    }

analizarPalindromo('Eduardo Romero')