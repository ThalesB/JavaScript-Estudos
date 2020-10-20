let isAtivo = false
console.log(isAtivo)

//negação 2 vezes

isAtivo = 1
console.log(!!isAtivo)

// mostrando mais exemplos de negação 2 vezes com retorno true

console.log('Os verdadeiros')
console.log(!!3) // dupla negação pra numero inteiro.
console.log(!!'texto') // pra string vazia com espaço
console.log(!!-1) // numero real
console.log(!!{}) // objetos
console.log(!![]) // arrays
console.log(!!Infinity) // resultados infinitos
console.log(!!(isAtivo = true)) // para atribuição de variável, será exibido o valor verdadeiro da variável.


//mostrando negação dupla que retornam resultados falsos.

console.log('Os falsos')
console.log(!!0) // ao negar duplamente o zero se tonar uma falso
console.log(!!'') // string sem conteúdo ou vazia
console.log(!!null) // negação dupla pra nulo
console.log(!!NaN) // para not a number é falso
console.log(!!undefined) // pra resultado indefinido também é falso
console.log(!!(isAtivo = false)) // negação dupla pra atribuição verdadeira.

console.log(!!(''|| null || 0 || ' ' )) // um unico valor verdadeiro na estrutura de decisáo, retorna um resultado verdadeiro.