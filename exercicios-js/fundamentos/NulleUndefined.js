const a = {nome:"teste"}
const b = a 
b.nome = 'opa'
console.log(b) // a constante apenas aponta onde está o endereço do objeto na memória. atribuição por referência.

let c = 3 // atribuição foi feita por valor e não por endereço de memório como em um objeto.
let d = c
d++
console.log(d)
console.log(c)

let valor // undefined, valor nem definido
console.log(valor)

valor = null // ausência de valor

console.log(valor)
