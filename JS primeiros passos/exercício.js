//verifique se o destino é válido, se for válido exiba no console uma mensagem


const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

let destino = "Rio de Janeiro";
let comprarPassagem = false;

if(destino==listaDeDestinos[0]||listaDeDestinos[1]||listaDeDestinos[2]){
    console.log("Destino Válido");
}else {
    console.log("Destino Inválido");
}