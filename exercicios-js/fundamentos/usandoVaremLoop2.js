// incrementando array, usando um for e função anônima.

const funcs = []

for(var i = 0; i<10; i++){
funcs.push(function(){
  console.log(i)
})

}

funcs [2]()
funcs [3]()


