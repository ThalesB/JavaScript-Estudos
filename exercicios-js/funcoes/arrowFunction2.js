// o this dentro do arrow function,o this não varia dentro de uma função arrow mesmo que a função seja instanciada

// pelo fato de o parâmetro da minha função setInterval ser uma arrow function, não é necessário amarrar o this com um self
// ou amarrar o this com um bind para que ele faça sentido após intanciar a função pessoa.

const pessoa = function(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}




