function Factura(nombreEmpresa,cliente,producto,total){
    this.cliente = 'pepe'
    this.producto = 'frigorifico'
    this.total=''
    this.tipoIVA=''
    this.formaPago=''
    this.nombreEmpresa='Tecnocom'
    this.direccionEmpresa='calle'
    this.teléfonoEmpresa='99999999999'
    this.NIFEmpresa='n2356767'
    this.nombreCliente='pepe'
    this.direccionCliente='calle'
    this.teléfonoCliente='678342548'
    this.NIFCliente='b2758741'
    this.descripcion=''
    this.precio='200'
    this.cantidad='1'   
}
let Factura1 = new Factura(
'empresa2',
'calle anonima',
'675602374',
'k3040564'
)
console.log(Factura1)