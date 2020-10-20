

// 1º a_
var a = 2
let b = 3
console.log(a,b)

/* _ a variável let é utilizada em casos mais dinânimcos, ela possui melhores maneiras de se trabalhar
os elementos são a e b> identificadores var ou let > palavras reservadas do js, "=" é o símbolo de atribução, e 2 e 3 são
os valores atribuídos. 
*/

//1º b_

const c = 4 
console.log(c)

/* constantes são valores fixos atribuídos aos identificadores, é importante manter o número máximo de constantes no código,
já as variáveis são utilizadas caso seja preciso alterar o valor do identificador*/

// 2_ a_ verificando o tipo da variável

console.log(typeof(c))

// 2_ b_
/* explicando a tipagem do JS, é um tipo de linguagem considerada fracamente tipada, por ter mais falicidades em alguns
procedimentos, ou conhecida como tipagem dinâmica, um exemplo seria, não há necessidade de ";" ou de declarar "var" novamente
para alterar o valor de uma variável.*/

// 3_ a_ declarando constantes numericas ponto flutuante.

const nota1 = 8.5
const nota2 = 7.8

// 3_b_ verificando numero inteiro

console.log(Number.isInteger(nota1))

//3_c_ cálculo da média de notas

const peso1 = 9.0

const peso2 = 8.2

const total = peso1 * nota1 + peso2 * nota2 

const media = total / (peso1+peso2)

console.log(media)

//3_d_ 2 casas decimais

console.log(media.toFixed(2))

//3_e_ resultado em binário

console.log(media.toString(2))

//3_f_ divisão por zero no js

/* o que acontece se dividirmos um numero por zero no js é que o resultado é infinito, como na matemática mesmo*/

console.log(19/0)

//3_g_ divisão de string 

/* se dividirmos uma string por um numero e essa string tem contúdo numérico, o Js intepreta como um numero e realiza
a operação, devido a tipagem dinâmica da linguagem */

console.log("10"/4)

//3_h_ operação entre string e numero 

/* o resultado de uma operação entre string e numero é " Not a Number" no caso o JS afirma que a operação não pode ser
realizada devido um dos elementos ser uma string de fato */

console.log("qualquer"*2)

//3_i_ pergunta sobre i3e

/* o Js possui um protocolo para operações matemáticas definidas pelo padrão ECMA Script que se chama I3E que para otimizar
as operações ele determina um valor muito aproximado do exato, é um exemplo de operações com pontos flutuantes. */

//3_j_ area da circunferência

const raio = 4

const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(2))
console.log(Number.isInteger(area))
console.log(area.toString(2))

//4_a_ declarar uma constante do tipo string

const nome = "Thales"

//4_b_ chamar o quarto caractere

console.log(nome.charAt(3))

//4_c_ retornar o unicode do segundo caractere

console.log(nome.charCodeAt(1))

//4_d_ retornar o indice do terceiro caractere

console.log(nome.indexOf('a'))

//4_e_ ler string a partir do 2 caractere

console.log(nome.substring(1))

//4_f_ ler a string entre o segundo e o quarto caractere

console.log(nome.substring(1, 5))

//4_g_ concatenação de string

console.log("meu nome é ".concat (nome))

console.log ("meu nome é "+ nome + " vlw !")

//4_h_ substituição de caractere

console.log(nome.replace('a', '4'))

//4_i_ transforme a string um array

console.log('Thales, Alves, Cirilo, Batista'.split(','))

//5_a_ o que é tamplate string ?

/* tamplate string é uma maneira mais organizada de declarar as strings, uma forma diferente de sintaxe, é possível
criar linhas e espaços pra organizar a string */

//5_b_ concatenando com tamplate

const nome2 = `

meu nome
e ${nome}

vlw ! `

console.log(nome2)

//5_c_ use tamplete string para expressões matemáticas

const somarNumero = `
1+1=${1+1}
resposta certa !   

`
console.log(somarNumero)

//6_a_ declarar uma variável booleana

let booleana = 1

console.log(!!booleana)
console.log(!booleana)

//6_b_ citar exemplos que dupla negação retorne verdadeiro e falso

console.log(!!3) // verdadeiro
console.log(!!-1) // verdadeiro
console.log(!!(booleana=true)) // verdadeiro

console.log(!!NaN) // falso
console.log(!!null) // falso
console.log(!!(booleana = false)) //falso

//6_c_ estrutura de decisão booleana

console.log(!!(null|| undefined || NaN || " "))

//7_a_ criar uma array numérica

const vetorNumerico = [0, 1, 2, 3, 4, 5]
console.log(vetorNumerico)
console.log(typeof(vetorNumerico))

//7_b_ mostrar 2 valores do array

console.log(vetorNumerico[1], vetorNumerico[4])

//7_c_ adicinando valor

vetorNumerico [6] = 'thales'

console.log(vetorNumerico)

//7_d_ quantos elementos tem no array

console.log(vetorNumerico.length)

//7_e_ adicionando multiplos elementos ao array

vetorNumerico.push('sou', 'eu', {id:4}, 7.5)

console.log(vetorNumerico)

//7_f retirando o ultimo elemento do array

console.log(vetorNumerico.pop())

//7_g_ excluindo elemento do array

delete vetorNumerico[5]

console.log(vetorNumerico)

//8_a_ criar um objeto vazio e adicionar atributos

const objetoVazio = {}
    objetoVazio.nome = 'thales'
    objetoVazio.idade = '23 anos'
    objetoVazio.peso = '87 kg'

    console.log(objetoVazio) 

//8_b_ criando objetos com atributos declarados

const objetoConteudo ={
   nome : 'Thales',
   idade :'23 anos',
   peso : '87 kg'

}

console.log(objetoConteudo)

//8_c_ criar um obejto dentro do outro

     const objeto1 = {
        nome : "objeto do objeto", 
        objeto2:{
             nome: 'objeto do objeto do objeto'

         }

     }
    
     console.log(objeto1)
     console.log(typeof(objeto1))

//8_d_ objeto no formato json

const objetoJson = '{"nome":"cirila0", "idade": "23 anos", "peso": 87.5}'

console.log(objetoJson)

//9_a_ atribuições.

/* a atribuição por referência se trata de informar o endereço do dado na memória e não o dado em si, como em um objeto. 
a atribuição da constante para o objeto criado é só uma referência da memória. Já atribuição por valor, se trata de uma
constante normal, ou uma varivál numérica por exemplo que possui o valor atribuido e não a referencia dele */

const objetoA= {nome:"teste"} //atribuição por referência, o atributo mudou de valor pra ambos os objetos pois ele é referência
const objetoB = objetoA
objetoB.nome = 'opa'
console.log(objetoB)
console.log(objetoA)

let C = 3 // como a atribuição de variável é por valor, então o C permanece o mesmo.
let D = C
D++
console.log(D)
console.log(C)

//9_b_ undefined
// undefinde não declaramos nem um valor ao identificador.

let indefinida

console.log(indefinida)

//9_c_ exemplo de null

// o null informamos que o identificador é vazio 

let nuloA = null

console.log(nuloA)

//10_a_

/* função é uma ação criada que pode ser executada quantas vezes for chamada do código, ela é delimitada por 
chaves e possui parâmetros que são alterados de acordo com a chamada. */

//10_b_ função sem retorno

function funcaoSemRetorno(a,b){
   console.log(a+b)

}

funcaoSemRetorno(2,3)

//10_c_ função com retorno

function funcaoComRetorno(c,d){

    return c+d

}

console.log(funcaoSemRetorno(2,3))

//10_d_ funcao com valores pre definidos

function funcaoComvalores(e=2,f=4){

    return e/f
}

console.log(funcaoComvalores())

