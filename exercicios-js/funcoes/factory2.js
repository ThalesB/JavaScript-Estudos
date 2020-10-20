// Factory 2


function criarProduto (nomeProduto, precoProduto) {
   return  {
    nome : nomeProduto,
    preco : precoProduto,
    desconto: 0.05 

   }

}

console.log(criarProduto("sapato", 120))