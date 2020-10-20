// entendendo a estrutura de controle if

function soBoaNoticia(nota){
    if(nota>= 7) {   // se a nota for igual ou maior que 7 a função será executada
      console.log('Aprovado com '+ nota)

    }
}

soBoaNoticia(8.9)
soBoaNoticia(6.1)

function seForVerdade(valor){
    if(valor) {
        console.log("É vedade..."+valor)
    }
}

seForVerdade(1)