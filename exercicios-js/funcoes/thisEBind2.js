//utilizando a função Set interval, dispara função no tempo em milesegundos


function Pessoa(){
    this.idade = 0

     const self = this // amarrando o this a constante, não importa quem chame ele sempre será o mesmo.
    setInterval(function(){ // adicionar no final da função, a função bind para amarrar o this a função
        self.idade++ 
        console.log(self.idade)
    }/*bind(this)*/, 1000) // 1000 mile segundos = 1 segundo

} // Ou podemos utilizar o self para armazenar o this em uma constante ou amarrar o this com o bind.

// vamos instanciar a função pessoa e criar um objeto, pra saber se o This vai identificar o objeto pessoa

new Pessoa 