// Operadores Relacionais 

// simbolo de igualdade por si só é apenas atribuição, ja 2 vezes é comparação.

console.log('01)', '1' == 1 ) // true 
console.log('02)', '1' === 1) // o 1 é extritamente igual a 1, a resposta é false, um é string e o outro é number.
console.log('03)', '3'!= 3) // é diferente de 3 ? false, pois levou em consideração apenas o valor.
console.log('04)', '3' !== 3)// nesse caso é true, devido o 3 ser string e o outro ser number .
console.log('05)', 3 < 2 )// 3 é menor que 2 ?
console.log('06)', 3 > 2)// 3 é maior que 2 ?
console.log('07)', 3 <= 2 )// 3 é menor igual a 2 ?
console.log('08)', 3 >= 2) // 3 é maior igual a 2 ?

const d1 = new Date(0) // no JS a data zero é a partir de meados de 1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // nesse caso ele irá comparar endereços de memória e não o valor, então é falso
console.log('10)',d1 == d2 )
console.log('11)', d1.getTime() === d2.getTime())// nesse caso estamos comparando o number do d1 e d2 e será true 

console.log('12)', undefined == null) // true 
console.log('13)', undefined === null ) // false 

