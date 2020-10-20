
//usando var em loop, percebemos que ao consultar o console fora do bloco, o valor exibido é o ultimo quando a expressão se torna falsa.

for (var i = 0; i<10 ; i++){

    console.log(i)
}

console.log('i= ', i)