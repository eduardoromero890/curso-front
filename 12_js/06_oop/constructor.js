function Libro (autor, titulo, editorial, fecha, generos) {
    
    this.autor= autor,
    this.titulo= titulo,
    this.editorial= editorial,
    this.fecha= fecha,
    this.generos= generos
}

let libro1 = new Libro(
    'J. R. R. Tolkien',
    'El señor de los anillos',
    'Minotauro',
    new Date('1954'),
    ['Fantasía'])

    console.log(libro1)

    let libro2 = new Libro('William Gibson', 'Neuromante', 'Minotauro', new Date('1954'), ['SciFi'])
    //siempre se puede modificar cualquier objeto
    libro2.propietario='pepe'
    

    console.log(libro2)

    console.log(typeof libro1)
    console.log(libro2.constructor.name)