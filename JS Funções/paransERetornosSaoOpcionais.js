//Parâmetros e retornos são opcionais.

function area(largura, altura){
    const area = largura * altura;
    if(area>20){
        console.log(`Area acima de 20 não permitido: ${area} m^2`);
    }else{
        return area;
    }
}

console.log(area(2,2)); // passagem normal de parâmetros
console.log(area(2));// passagem de 1 parâmetro
console.log(area());//sem parâmetros.
console.log(area(2,3,4,5));// só é considerado os 2 primeiros parâmetros.
console.log(area(5,5));// caiu no if
