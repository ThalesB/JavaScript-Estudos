 //Utilizando arguments de uma função para

 function soma (){
     let soma= 0;
     for(i in arguments){
         soma += arguments[i];
     }
     return soma;
 }

 console.log(soma(1,2,3,4));
