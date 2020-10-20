// Parametros Variaveis .
// apesar da função não receber parâmetros, podemos passar parâmetros normalmente na chamada.

 function soma(){
     let soma = 0
     for(let i in arguments){ // vamos recuperar os parametros utilizando o arguments, que é um array
      soma += arguments[i] // arguments é um array interno de uma função utilizado para operar quando não há parâmetros
     }
     return soma   


 }

 /* basicamente o meu for é uma repetição utilizando o in, para percorrer um array do tipo arguments e pra cada indice do meu
 arguments eu irei utilizar a variavel soma para incrementar mais um elemento.*/

 console.log(soma())
 console.log(soma(1))
 console.log(soma(1.1, 2.2, "Teste")) // se passar uma string como parametro será concatenado com o number.
