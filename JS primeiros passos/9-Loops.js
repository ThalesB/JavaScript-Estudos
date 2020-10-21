const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
let destino = "Curitiba";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

 const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

 let contador = 0;
 destinoExiste = false;

 while(contador<3){
     if(listaDeDestinos[contador] == destino){
       destinoExiste = true;
      break;
    }
     contador +=1 ;
    }

    console.log ("Destino existe: ", destinoExiste);



