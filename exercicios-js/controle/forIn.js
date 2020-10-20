const notas = [6.7, 8.9, 7.8, 10];

for (i in notas){
    console.log(i, notas[i]);

}

const pessoa = {
    nome:'Thales',
    idade: 23,
    peso: 87
}

for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)

}