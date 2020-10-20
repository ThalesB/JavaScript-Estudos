//mesmo exemplo do arquivo anterior
/* pelo fato de let ser uma variável de escopo de bloco, ao chamar a função no array foi possível identificar o valor que i
assumiu dentro da condição do for, e não o valor que o i assumi após terminar a condição que seria 10 */

const funcs = []

for(let i=2 ; i<20 ; i++){
     funcs.push(function(){

         console.log(i)
     })

}

funcs[4]()
funcs[5]()



