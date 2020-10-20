/*J = p. i. n

M = p + J

Sendo j= juros; P= Principal ou Capital; i= taxa; N= Período ou tempo e M= Montante.*/

const calculoJurosSimples = function (capital,taxa,tempo){
    const jurosSimples = capital * taxa * tempo 
    const montante = capital + jurosSimples
    return console.log(`O juros simples são ${jurosSimples}R$ e o montante ${montante}`)

}

//M = P . (1 + i)n
const calculoJurosComposto = function (capital, taxa, tempo){
    const montante = capital * Math.pow((1 + taxa), tempo)
    return console.log(`O montante de juros composto ${montante.toFixed(2)}`) 
}


calculoJurosSimples(1000,0.2,3)
calculoJurosComposto(1000,0.12,3)