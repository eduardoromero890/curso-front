$(document).ready(
    function(){

    }
)

$(function (){
    let oDom = {
        eBottonSaludar: $('#btnSaludar'),
        eBottonBorrar: $('#btnBorrar'),
        eInputName: $('#inpName'),
        eOutSaludo: $('#outSaludo')
    }
    function saludar(){
        let user = oDom.eInputName.val()
            console.log(user)
            oDom.eOutSaludo.html ( `<p>Hola ${user}</p>`)
    }
    function borrar(){
        oDom.eInputName.val ( '' )
        oDom.eOutSaludo.html()
    }
    oDom.eBottonSaludar.on('click', saludar)
    oDom.eBottonBorrar.on('click', borrar)
})