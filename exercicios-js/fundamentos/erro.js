// tratamento de erro
function tratarErroLancar(e){
    throw 'mensagem'
}

function imprimirNomeGritado(obj){
    try{
  console.log(obj.name.toUpperCase()+ '!!!')
} catch(e){
    tratarErroLancar(e)
}
    finally{
      console.log("Final")
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)