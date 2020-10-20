// função bind 

const pessoa = {
    saudacao: 'Bom dia',
    falar(){
      console.log(this.saudacao) // acessar o atributo saudacao do objeto pessoa utilizando o this
    }
}

pessoa.falar()

/* o bind amarra o this ao objeto onde ele foi chamado, para que não altere o seu sentido fora da estrutura do objeto */

const falar = pessoa.falar
falar()// conflito entre paradigmas : funcional e OO 

// usar o bind para recuperaro sentido do this que foi tirado fora de contexto
// no bind passamos um objeto que precisamos resolver o this

const falarDePessoa = pessoa.falar.bind(pessoa) /* criamos uma variável que no objeto pessoa e no atributo/função pessoa
queremos que o this sempre faça sentido para o obejto pessoa mesmo que seja tirado de contexto léxico */

// bind é um método responsável por amarrar o this ao objeto em que usamos a função .

