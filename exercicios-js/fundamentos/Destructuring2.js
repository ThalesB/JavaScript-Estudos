// o operador destructuing usa o mesmo token de um array que é a chave, tomar cuidado, se não esta criando um array em vez de usalo

const [a] = [10]
console.log(a)

// desestruturando um array com vários elementos e ignorando alguns .

const[n1, , n3, , n5, n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

// podemos fazer um array dentro de um array

/* ignorou o primeiro elemento, considerou o segundo que é um array, ignorou o primeiro elemento nesse array e considerou
o segundo elemento */
const [,[, nota]] = [[,8,8], [9,6,8]]
console.log(nota)