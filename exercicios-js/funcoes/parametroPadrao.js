// Parâmetro Padrão antes e com ECMA SCRIPT 2015

function soma1(a, b, c){
a = a || 1
b = b || 1
c = c || 1
return a + b + c

}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) // com o zero retorna falso e ele acaba assumindo o valor 1 

// estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c){
  a = a !== undefined ? a : 1 // o valor é undefined ? se sim, a assume valor de 1, se não a tem o valor do parâmetro passado
  b = 1 in arguments ? b : 1 // dentro de arguments existe o valor de 1 ? se existir pegue o valor de b se não pegue o valor 1
  c = isNaN(c) ? 1 : c // a variável c é not a number, se sim c = 1 se não retorne o valor de c.
  return a + b + b
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//valor padrao ES2015

function soma3(a=1, b=2, c=3){
    return a + b + c 
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))
