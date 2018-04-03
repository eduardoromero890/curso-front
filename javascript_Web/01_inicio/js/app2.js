(function () {

    function app() {

        let oDom = {
            eBottonSaludar: document.querySelector('#btnSaludar'),
            eBottonBorrar: document.querySelector('#btnBorrar'),
            eInputName: document.querySelector('#inpName'),
            eOutSaludo: document.querySelector('#outSaludo')
        }

        let saludar = () => {
            let user = oDom.eInputName.value
            console.log(user)
            oDom.eOutSaludo.innerHTML = `<p>Hola ${user}</p>`
        }
        let borrar = () => {
            oDom.eInputName.value = ''
            oDom.eOutSaludo.innerHTML = ''
        }
        oDom.eBottonSaludar.addEventListener('click', saludar)
        oDom.eBottonBorrar.addEventListener('click', borrar)

    }
    
    window.addEventListener('load', app)

})()