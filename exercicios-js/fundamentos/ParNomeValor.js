//par nome/valor

const saudacao = 'Opaa' // contexto léxico 1

function exec() {
 const saudacao = 'Falaa' // contexto léxico 2
 return saudacao
}
// o contexto léxico é a declaração física do nome/valor, onde o local em que foi declarado define o seu contexto.

// Objetos são grupos aninhados de pares nome/valor , que podem ter cotexto léxico com um objeto dentro de outro objeto

const cliente = {
   nome: 'Thales',
   idade: 23,
   peso: 85,
   endereco: {
       logradouro: 'Rua Muito Legal',
       numero: 123
   }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)