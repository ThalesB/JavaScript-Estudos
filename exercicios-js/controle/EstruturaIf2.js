// estrutura if parte 2 

/*é importante delimitar o bloco if com chaves para que le execute a sentença correta associada ao if */

function teste2(num){  // executo 6 e 8 porque o console.log está fora do bloco do if
  if(num > 7);
  {
      console.log(num)
  }

}

teste2(6)
teste2(8)

// não use ponto e vírgula na construção do if


function teste1(num){
   if(num>7){
   console.log(num)}
console.log('final')   

}

teste1(3)
teste1(8)
