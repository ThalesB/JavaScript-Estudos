//função construtora

function Carro(velocidadeMaxima=200, delta=5){
// atributo privado
let velocidadeAtual = 0

// metodo publico

this.acelerar = function(){
  if (velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta
  } else {
      velocidadeAtual = velocidadeMaxima
  }
}

// outro método público quem torna isso possível é o this 
this.getVelocidadeAtual = function (){
    return velocidadeAtual
}

}


const uno = new Carro
console.log(uno)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
console.log(ferrari)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())