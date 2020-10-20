const valor = "Global" 

function minhaFuncao () {
 
console.log (valor)

}

function exec () {
 const valor = "Local"     // foi chamada a função a cima dentro da exec, o valor da constante será do contexto léxico global.

 minhaFuncao()

}

exec()  