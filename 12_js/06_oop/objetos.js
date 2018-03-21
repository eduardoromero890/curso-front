//let oDatos = new Object() = {}

let libro1 = {
    titulo: 'El señor de los anillos',
    autor: 'J. R. R. Tolkien',
    editorial: 'Minotauro',
    fecha: new Date(1954),
    generos: ['Fantasía'],
    mostrarReferencia : function (){
        let ref = this.autor + '. '
        ref += '"' + this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha.getUTCFullYear() + '. '
        console.log(ref)
    }
}



libro1.mostrarReferencia()

let miFuncion = function(){
    console.log('Soy una funcion')
    console.log(this)
}

miFuncion()//Patron de invocacion Function
let o = {head: 'Soy un objeto',
        metodo:miFuncion
}
//o.metodo()

//let oNuevoObjeto = new miFuncion()

let obj = {head: 'Soy un objeto'}
miFuncion.call(obj)