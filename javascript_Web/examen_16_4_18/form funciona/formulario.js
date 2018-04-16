import { CURSOS } from './cursos.js'

export class Formulario {
    constructor() {
        this.datos = {
            nombre: '',
            apellido: '', 
            apellido2: '',
            nacimiento: '',
            email: '',
            passwd: '', 
            passwdR: '', 
            datos: '',
            isOk: false,
            isOk2: false,
            turno: '',
            curso: {},
            asignaturas: []
        }
        this.isLeido = false
        this.accederDom()   
        this.definirManejadores()
    }

    accederDom() {
        this.domFormulario = document.querySelector('#form1')
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpApellido2 = document.querySelector('#apellido2')
        this.domInpFecha = document.querySelector('#fecha')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domInpPasswdR = document.querySelector('#passwdR')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioTurno = document.querySelectorAll('[name="turno"]') 
        // this.domRadioTurno = document.getElementsByName(turno)
        this.domCbxisOk = document.querySelector('#isOk')
        this.domCbxisOk2 = document.querySelector('#isOk2')
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')
        this.domFieldAcedemic = document.querySelector('#acedemic')
    }

    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        this.domCbxisOk.addEventListener('change', this.completar.bind(this))
        this.domSelectCurso.addEventListener('change', this.presentarAsignaturas.bind(this))
    }

    saludar() {
        console.log('Hola amigos')
    }

    

    enviar(ev) {
        console.log(ev)
        this.recogerDatos()
        this.presentarDatos()
        this.comprobar()
        if (!this.isLeido) {
            ev.preventDefault()
        }
    }
    comprobar(){
        let mensaje=""
        if(this.passwd.value != this.passwdR.value){
            mensaje='No coinciden las contraseñas'
        }
        this.passwdR.setCustomValidity(mensaje)
    }


    /* borrar () {
    } */

    completar() {
        // this.domFieldAcedemic.disabled = !this.domFieldAcedemic.disabled
        this.domFieldAcedemic.classList.toggle('ocultar')
        if (this.domFieldAcedemic.classList.contains('ocultar')) {
            this.domRadioTurno[0].checked = true
            this.domSelectCurso.selectedIndex=0 
        }
    }

    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.apellido2 = this.domInpApellido2.value
        this.datos.nacimiento = new Date(this.domInpFecha.value)
        this.datos.email = this.domInpEmail.value
        this.datos.passwd =  this.domInpPasswd.value
        this.datos.passwdR =  this.domInpPasswdR.value
        this.datos.datos =  this.domAreaDatos.value
        this.datos.turno = this.procesarRadio(this.domRadioTurno)  
        this.datos.isOk = this.domCbxisOk.checked
        this.datos.isOk2 = this.domCbxisOk2.checked
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
    }

    procesarRadio(nodo) {
        let value
        nodo.forEach( (item ) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value //"mañana" "tarde"  "noche"
    }

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value, 
            text: nodo.options[index].textContent
        }    
    }

    presentarAsignaturas(ev) {
        ev.target.firstElementChild.classList.add('ocultar')
        let topics = CURSOS[ev.target.selectedIndex-1].asignaturas
        let HTMLResult = ''
        topics.forEach( elem => HTMLResult +=`<option>${elem}</option>` )
        this.domDivTopics.classList.remove('ocultar')
        this.domSelectTopics.innerHTML = HTMLResult
    }

    presentarDatos() {
        let resultadoHTML = 
        `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Apellido2: ${this.datos.apellido2}</li>
            <li>Fecha nacimiento: ${this.datos.nacimiento}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Contraseña Repetida: ${this.datos.passwdR}</li>
            <li>Datos extra: ${this.datos.datos}</li>
            <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si' : 'No'}</li>
            <li>Aceptadas condiciones 2 ${this.datos.isOk2 ? 'Si' : 'No'}</li>
            <li>Turno: ${this.datos.turno}</li>
            <li>Curso: ${this.datos.curso.text}</li>
        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)

    }

   
}