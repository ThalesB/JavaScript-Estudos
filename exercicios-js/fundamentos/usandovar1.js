//leitura do var dentro e fora do bloco declarado
{
    {
    {
    {
      var letra = "a"
}
}
}
}
console.log(letra)


// var declarada dentro de uma função só pode ser lida dentro da função.

function semParametro() {
     var a = 'dentro do bloco'
     console.log(a)
}
semParametro()
//console.log(a) > da erro


