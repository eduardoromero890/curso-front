function main() {

    let num1 = 23
    let num2 = '20'

    let r = num1 - num2
    console.log(r)
    console.log(typeof r)
    console.log(typeof num2)

    let x = 'Hola'
    let y = 'Pepe'
    console.log(x + y)
    r = num1 + +num2//43

    r = r - 1//42
    console.log(r)
    console.log(typeof r)

    
    r = num1 - x

    console.log(r)
    console.log(typeof r)
    //console.log(isNaN(r))
    if (isNaN(r)){
        console.log('Ole, as conseguido un NAN')
    }
}
main()