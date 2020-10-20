// Classe vs Factory

class Pessoa {
 constructor(nome){
    this.nome = nome

 } 
 falar(){
     console.log(`Meu nome é ${this.nome}`)
 }

}

const p1 = new Pessoa("joão")
p1.falar()

//Agora usando o Factory


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa ('João')
p2.falar()