//Operadores lógicos 

// Operador E 
// v e v -> v
//v e f -> f
// f e ? -> f
// o resultado só será verdadeiro se todos forem verdadeiros ou vice-versa

//Operador Ou 

/* v ou ? -> V
   f ou v -> V
   f ou f -> f 
   basta apenas um verdadeiro para ser verdadeiro */

//Operador Ou excluviso (XOR)

/* v xor v -> f
   v xor f -> v
   f xor v -> v
   f xor f -> f */ 

function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2 // "Ou" em Java script e representado por "||"
  const comprarTv50 = trabalho1 && trabalho2 // "&&" Operador que representa o "E"
  // const comprarTv32 = !! (trabalho1 ^ trabalho2 ) // bitwise xor , operador "ou" exclusivo bit a bit 
  const comprarTv32 = trabalho1 != trabalho2 // segunda opcao para determinar o xor esclusivo
  const manterSaudavel = !comprarSorvete // se comprar sorvete for falso, vai ser igual a manter saudavel 

return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}// criar um objeto como retorno para ter multiplas chamadas


}

console.log(compras(true, true))




