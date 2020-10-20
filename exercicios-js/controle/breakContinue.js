const nums = [1,2,3,4,5,6,7,8,9,10]

for(let x in nums){
  if (x == 3){
      break
  }
  console.log(`${x} = ${nums[x]}`)

}

for(let y in nums){
   if (y == 3){
       continue
   }
   console.log(`${y} = ${nums[y]}`)
}

//rótulo

externo:
      for (let a in nums){
          for(let b in nums){
              if( a==2 && b==3)break externo
            console.log(`a = ${nums[a]} b = ${nums[b]}`)
          }
          
      }