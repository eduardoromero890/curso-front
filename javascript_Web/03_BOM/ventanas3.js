function app () {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnGoogle = document.querySelector('#btnGoogle')
    let eBtnImagen = document.querySelector('#btnImagen')
    let eBtnCerrar=document.querySelector('#btnCerrar')
    let ventana
    let aVentanas = []
    
    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnGoogle.addEventListener('click', btnGoogle)
    eBtnImagen.addEventListener('click', btnImagen)
    eBtnCerrar.addEventListener('click', btnCerrar)

    function btnGoogle(){
        ventana= window.open("http://www.google.es","")
        togleButtons()
        aVentanas.push(ventana)
   }

    function btnAbrir(){
         ventana= window.open()
         aVentanas.push(ventana)
         ventana.document.write('<p>Documento recien creado </p>')
    }
    function btnCerrar(){
        aVentanas.forEach( (v)=>{v.close()} )
        togleButtons()
        aVentanas = []
    }
    function togleButtons(){
        /* eBtnAbrir.disabled= !eBtnAbrir.disabled
         eBtnCerrar.disabled= !eBtnCerrar.disabled */
    }
    function btnImagen(){
        ventana= window.open('AnakinsEta2.png')
        aVentanas.push(ventana)
   }
}

window.addEventListener('load', app)