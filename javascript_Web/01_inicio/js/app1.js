(function () {

    function app() {



        let oDom = {
            eBottonSaludar: document.querySelector('#btnSaludar')
        }

        let saludo = (oE, user = 'amigo') => {
            console.log(`Hola ${user}`)
            console.log(oE)
        }

        //document.getElementById('btnSaludar')
        //oDom.eBottonSaludar.onclick = ()=>saludo(event,"Pepe")
        oDom.eBottonSaludar.addEventListener(
            'click',
            () => saludo(event, "Pepe"))
        //oDom.eBottonSaludar.removeEventListener('click')
    }
    window.addEventListener('load',app)
    //window.addEventListener('DOMContentLoaded', app)
    
})()