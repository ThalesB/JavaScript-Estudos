//comparando o this com o objeto global

let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) // chamando a função e utilizando o objeto global como parametro e comparando com o This
                        // resultado é verdadeiro

const obj = {} // criando o objeto vazio e amarrando o this ao objeto a comparação do this será falsa para o global
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // falsa 
comparaComThis(obj) // verdadeira

// tiramos o contexto léxico do this do objeto global.

// Agora usando a arrow function, o this estará no contexto do módulo do node 

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // falso
comparaComThisArrow(module.exports) // modulo do node onde o this vai ser comparado.

//arrow function é mais relevante que o bind ou um self.








