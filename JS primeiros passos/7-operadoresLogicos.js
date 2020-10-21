console.log(`Trabalhando com condicionai!`);

const destinoPossiveis = new Array("Salvador", "São Paulo", "Rio de Janeiro");




const cliente = {
  idade: 16,
  acompanhado: true,   
  destino: destinoPossiveis[2]
};

if(cliente.idade >= 18 || cliente.acompanhado == true){
console.log(`compra efetuada para o destino ${cliente.destino}, boa viagem !`);
destinoPossiveis.splice(2,1);
} else {
 console.log(`sua idade é inferior a 18 anos e não está acompanhado`)
}

console.log(destinoPossiveis);
