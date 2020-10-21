const destinoPossiveis = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const cliente = {
  idade: 16,
  acompanhado: true,
  destino: destinoPossiveis[2],
};

if (cliente.idade >= 18) {
  console.log(
    "Comprador maior de idade,seu destino escolhido foi ",
    cliente.destino
  );
  destinoPossiveis.splice(2, 1);
} else if (cliente.acompanhado == true) {
  console.log(
    "Comprador acompanhado, seu destino escolhido foi",
    cliente.destino
  );
  destinoPossiveis.splice(2, 1);
} else {
  console.log("Venda não permitida");
}
