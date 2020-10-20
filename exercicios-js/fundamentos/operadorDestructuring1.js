// novo recurso do ES 2015

const pessoa = {
  nome:'Ana',
  idade: 5,
  endereco: {
         logradouro: 'Rua ABC',
         numero: 1000                               

  }

}

const {nome, idade} = pessoa // tire de dentro do objeto "pessoa" os atributos "nome" e "idade" e cria uma constante fora do objeto
console.log(nome, idade)
console.log(pessoa)

// retirar do objeto os atributos e criar uma variável no lugar 

const{nome: a, idade: b} = pessoa

console.log(a, b)
console.log(nome, idade)

// retirando atribudos do objeto endereço dentro do objeto pessoa 

const{endereco: {logradouro, numero}} = pessoa 
console.log(logradouro, numero)





