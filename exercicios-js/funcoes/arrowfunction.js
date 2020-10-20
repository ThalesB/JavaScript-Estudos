//arrow function serve para ter um this associado a sua utilização e também uma forma reduzida de escrever função

// função arrow sempre é uma função anonima se quiser chamar ela tem que armazenar em variável ou constante.

//ex 1 função comum

let dobro = function (a){

    return 2 * a
}

//ex 2 função arrow comum

dobro = (a) => {
    return 2 * a
}

//ex 3 função arrow de uma sentença

dobro = a => 2 * a // note a ausência de parentese, return, e chaves

console.log(dobro(Math.PI))

// ex 4 função arrow sem parâmetro

let ola = () => 'olá'
ola = _ => 'Olá'//no caso o underline substitui o parentese em uma função sem parâmetros.


