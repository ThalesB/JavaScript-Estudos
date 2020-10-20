const usuario = {
  nome: "Thales",
  idade: 23,
  peso: 85,
  pesoDesejado: 75

}


const malhar = (idade, peso) => {
     if ( idade >= 28){
         peso = peso - 1
     } else{
         peso = peso - 2
     }
     return peso
    
}

console.log(`Olá ${usuario.nome}, bem vindo a boryTech. seu peso atual é de ${usuario.peso}, e o peso que deseja atingir
 é de ${usuario.pesoDesejado}. Será necessário repetir o treino ${RepetirMalhacao()} vezes para obter o que deseja.`)

function RepetirMalhacao () {
    
    var vezesMalhar = 0

    while(usuario.peso > usuario.pesoDesejado ){
    
    vezesMalhar++
    
    usuario.peso = malhar(usuario.idade, usuario.peso)
    
    console.log(vezesMalhar, usuario.peso)
}

return vezesMalhar

}




