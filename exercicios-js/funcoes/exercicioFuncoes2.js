// classificação de triangulos

function classificaTriangulo(ladoA, ladoB, ladoC){
   
    if (ladoA == ladoB && ladoB == ladoC){
        return console.log("O triangulo é equilátero")
    } else if(ladoA==ladoB || ladoB == ladoC || ladoA == ladoC){
         return console.log("O triangulo é Isósceles")
    } else {
        return console.log("O triangulo é Escaleno")
    }

    
}

classificaTriangulo(2,2,2)