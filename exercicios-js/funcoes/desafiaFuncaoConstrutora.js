const pessoa = function (nome){
   this.nome 
   this.falar = function (){
       console.log(`meu nome é ${nome}`)
   }
}

const p1 = new pessoa("Thales")
p1.falar()