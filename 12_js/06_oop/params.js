function Point(param){
    this.x = param.x || 0
    this.y = param.y || 0
    this.r = param.r || 1
    this.CalculaCircunf = function(){},
    this.CalculaCirculo = function(){},
    this.CalculaOtro = function(){},
    this.CalculaOtroMas = function(){}
}
p1= new Point({y:2, x:3})
p1.CalculaOtro()
p1.CalculaCirculo()

function app(param){}

app = new app({user: 'Pepe'})