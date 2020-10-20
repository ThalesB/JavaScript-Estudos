/*é o escopo criado onde a função é declarada, tem a ver com o contexto léxico .

> Esse escopo vai permitir que seja acessado as variáveis que foram declarada externas a função

>Closure = Fechamento.*/


//EX:

const x = 'Global'

function fora() {
 const x = 'Local'
 function dentro () {
     return x 
 }
 return dentro
}

const chamarFuncaoFora = fora ()
console.log(chamarFuncaoFora())