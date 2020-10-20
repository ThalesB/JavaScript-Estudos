/* baskhara x' x'' = -b +- raiz de delta/ 2*a 
delta = b ^ 2 - 4 * a * c */

const calculoBaskhara = function (a, b, c){
   let raizes = []
    let delta = (b**2) - (4*a*c)
      if (delta < 0){
          console.log("Delta é negativo")
      }
          let baskhara1 = (-b + Math.sqrt(delta)) / 2 * a
          let baskhara2 = (-b - Math.sqrt(delta)) / 2 * a
          raizes.push(baskhara1)
          raizes.push(baskhara2)
          return console.log(`O calculo das raizes usando baskhara é ${raizes[0].toFixed(2).replace(".",",")} e ${raizes[1].toFixed(2).replace(".", ",")}`)
        
     
    }

    calculoBaskhara(-2,4,5)