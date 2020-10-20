const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
let destino = "Rio de Janeiro";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

 const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

 let contador = 0;

 while(contador<3){
     if(listaDeDestinos[contador] == destino){
      console.log("Destino Existe");
      contador ++
     }else
     console.log("Destino não existe");
 
     
    }




