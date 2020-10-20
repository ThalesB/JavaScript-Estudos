
const getFormatarDinheiro = function (valor){
 const valorEmReais = `O valor é R$ ${valor.toFixed(2).replace(".", ",")}`
 return console.log(valorEmReais)
}

getFormatarDinheiro(0.3+0.4)