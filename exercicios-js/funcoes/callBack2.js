const notas = [7.7, 6.5, 5.3, 8.9, 3.6, 7.1, 9.0]

//Sem callback

const notaBaixa1 = []
for (let i in notas){
    if(notas[i] < 7){
        notaBaixa1.push(notas[i])
    }
}

console.log(notaBaixa1)

//com callback

const notasBaixas2 = notas.filter(function(nota){
   return nota < 7
})

console.log(notasBaixas2)