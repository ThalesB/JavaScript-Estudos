const valores = [7.7, 8.9, 6.3, 9.2] // array de indice 3 (0,1,2,3) 4 elementos
console.log(valores[1], valores [3]) // segundo e quarto indice

valores[4] = 10 // adicionando um novo indice ao array

console.log(valores)

console.log(valores.length) // contagem dos elementos do array

valores.push({id: 3}, false, null, 'teste')// dados heterogeneos adicionados ao array
console.log(valores)
console.log(valores.length) 
console.log(valores.pop()) // retira o ultimo valor do array e exibe no console.

delete valores[0]
console.log(valores)