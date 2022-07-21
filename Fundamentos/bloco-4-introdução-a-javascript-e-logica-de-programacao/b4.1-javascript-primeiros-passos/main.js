/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

let numero1 = 30
let numero2 = 55

if(numero1 > numero2){
  console.log(`O numero ${numero1} é maior que o numero ${numero2}`)
} else if (numero2 > numero1) {
  console.log(`O numero ${numero2} é maior que o numero ${numero1}`)
} else {
  console.log("Os numeros são iguais")
}