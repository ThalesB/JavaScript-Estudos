const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // não é boa prática nomes de atributos com espaço.

console.log(prod1)

const prod2= { // forma 2 de declarar um objeto
nome:'Cirilã0',
preco: 79.90

}

console.log(prod2)

// declarando objeto textual como json

'{"nome": "camisa polo", "preco":79.90}'
