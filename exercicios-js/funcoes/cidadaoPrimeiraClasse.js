//Funcao em JS é First-Class Object (Citizens)
//Higher-order function

// criar forma literal

function fun1 () { }

// Armazenar em uma variável 

const fun2 = function () { }

//Armazenar em um array 

const array = [function (a,b) { return a + b}, fun1, fun2]
console.log (array[0](2,3))

//Armazenar em um atributo de objeto

const obj = {}
obj.nome = function () {
    return "Thales !"
}

console.log(obj.nome())