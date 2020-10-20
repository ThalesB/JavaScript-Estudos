const destinoPossiveis = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const cliente = {
  idade: 18,
  acompanhado: true,
  destino: destinoPossiveis[2],
  passagemComprada:true
};

if (cliente.idade >= 18 || cliente.acompanhado == true ) {
  console.log(
    "Comprador maior de idade ou esta acompanhado,seu destino escolhido foi ",
    cliente.destino
  );
  destinoPossiveis.splice(2, 1);
} else {
  console.log("Venda não permitida");
}

if(cliente.idade >= 18 && cliente.passagemComprada == true) {
    console.log("Pode embarcar e boa viagem!");
} else {
    consle.log("infelizmente não pode embarcar");
}