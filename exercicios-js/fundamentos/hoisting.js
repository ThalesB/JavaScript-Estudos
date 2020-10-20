//efeito de jogar a declaração de uma variável, função ou objeto pra cima do código, possibilitando a interpretação.

console.log('a=',a)
var a = 'olá'
console.log('a=',a)

/*ao realizar o procedimento de hoisting, a interpolação do código é dita como se a variável, função ou objeto não tiverem
sido declaradas, o mesmo é dado como não definido, porém é interpretado normalmente sem erro. */

// lembrando que isso ocorre apenas como variáveis do tipo VAR 