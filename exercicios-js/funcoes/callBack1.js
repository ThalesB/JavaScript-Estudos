//função Callback, chamada de volta 


const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice){
    console.log(`${indice+1}. ${nome}`)

}

fabricantes.forEach(imprimir)