// resultado de divisão com resto

const getRestoDivisao = function (dividendo, divisor){
   const divisao = dividendo / divisor
   const restoDivisao = dividendo % divisor
   return console.log(`O resultado da divisão é ${divisao} e o resto dela é ${restoDivisao}`)

}

getRestoDivisao(10, 2)