/* Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

Utilizando for, descubra qual o menor valor contido no array e imprima-o;


*/ let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];/*


Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0;index < numbers.length; index++){
  console.log(numbers[index])
}

Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0
for (let index = 0;index < numbers.length; index++){
  soma += numbers[index]
}
console.log("a soma é ", soma)



Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length


if ( media > 20){
  console.log('Valor maior que 20')
} else {
  console.log("Valor menor ou igual a 20")
}


🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0]
for (let index = 0;index < numbers.length; index++){
  if(numbers[index] > maior ){
    maior = numbers[index]
  }
  
}
console.log(maior)



Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


let impar = 0

for(let index = 0; index < numbers.length; index++){
  if(numbers[index] % 2 !== 0){
    impar = impar +1
  }
}
console.log(impar)

if (impar > 0){
  console.log(`Temos ${impar} numeros impares`)
} else {
  console.log("Não possuimos nenhum numero impar")
}
 

let lowerNumber = numbers[0]

for (let index = 0;index < numbers.length; index++){
  if(numbers[index] < lowerNumber){
    lowerNumber = numbers[index]
  }
}
console.log(lowerNumber)


Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

*/

let array = []

for( let index = 1; index <=25;index++){
  array.push(index)
}

/* console.log(array) */

/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

for(let index = 0; index < array.length;index++){
 console.log(array[index] / 2)
}

