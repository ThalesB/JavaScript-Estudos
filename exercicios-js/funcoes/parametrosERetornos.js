//Parâmetros e retornos são opcionais 

function area (largura, altura){
  const area = largura * altura
  if (area >= 20){
  console.log(`Valor acima do permitido ${area} m2`)
  } else {
      return console.log(area)
  }
}
area(2,3)// parametros 
area(5,5)// parametro com retorno no if
area()// sem parâmetro, not a number 


