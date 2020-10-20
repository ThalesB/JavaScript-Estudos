const peso1 = 7.5424234;
const peso2 = Number ('7.67847467');
const nota1 = 7.434590;
const nota2 = 7.44050;
total = peso1 * nota1 + peso2 * nota2 ;
media = total / (peso1 + peso2);
console.log(media);
console.log(Number.isInteger(media)); // verifica o tipo do dado "media"
console.log(media.toFixed(2)); // estipula 2 casas decimais
console.log(media.toString(2)); // transforma numero em binário

 const area1 = Math.PI * Math.PI
console.log(area1.toFixed(2))

const nome = 'thales'
console.log(nome.charAt(3))
console.log(nome.charCodeAt(1))
console.log(nome.indexOf('e'))
console.log(nome.substring(1))
console.log(nome.substring(1,3))
console.log('meu nome'+' é '+ nome)
console.log(nome.replace(4,'3'))
console.log('Thales, Alves, Cirilo, Batista'.split(','))
