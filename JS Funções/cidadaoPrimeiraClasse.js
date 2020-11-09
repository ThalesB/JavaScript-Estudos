//Função Literal(padrão)

function fun1(){};

//função na variável

const fun2 = function (){}

// Função Array 

const array = [function(a,b){return a+b },fun1, fun2];

console.log(array[0](2,3));

//função em atributos de obj

const obj = {}
obj.falar = function(){return "opa!"};
console.log(obj.falar());

//Função como parâmetro para outra função

function run(fun){
    return fun();
}

run(function(){console.log("executando")});

//Função que retorna outra função

function soma(a,b){
    return function(c){return console.log(a+b+c)}
}

soma(2,3)(3);

//Podemos armazenar dentro de uma variável e chamar a segunda função.

const cincoMais = soma(2,3);


