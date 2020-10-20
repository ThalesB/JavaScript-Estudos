// vamos usar uma função que será detalhada nas aulas que vem, chamada prototype
// utilizar a variável this, para acessar o number

Number.prototype.entre = function (inicio, fim) {
 

}

const imprimirResultado = function (nota) {
     if(nota.entre(9, 10)){
         console.log ('Quadro de honra, nota: '+nota)
     } else if(nota.entre(7, 8.99)){
          console.log("Aprovado!, nota: "+ nota)
        } else if(nota.entre(4, 6.99)){
            console.log("Recuperação!, nota: "+ nota)
        }else if(nota.entre(0, 3.99)){
            console.log("Reprovado!, nota: "+ nota)
        } else {
            console.log("Nota Invalida!, nota: "+ nota)
        }
      console.log("fim !")

}

imprimirResultado(9)