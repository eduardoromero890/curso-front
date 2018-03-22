function Libro (autor, titulo, editorial, fecha, generos) {
    
    this.autor= autor,
    this.titulo= titulo,
    this.editorial= editorial,
    this.fecha= fecha,
    this.generos= generos
    this.mostrarReferencia = function (){
        let ref = this.autor + '. '
        ref += '"' + this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha.getUTCFullYear() + '. '
        return ref
    }
}

let libro1 = new Libro(
    'J. R. R. Tolkien',
    'El señor de los anillos',
    'Minotauro',
    new Date('1954'),
    ['Fantasía'])

    console.log(libro1)

    let libro2 = new Libro('William Gibson', 'Neuromante', 'Minotauro', new Date('1954'), ['SciFi'])
    
    
    console.log(libro2.mostrarReferencia())


        