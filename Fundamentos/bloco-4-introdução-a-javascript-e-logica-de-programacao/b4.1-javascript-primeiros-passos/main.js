/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

let numero1 = 100
let numero2 = 150
let numero3 = 77

if(numero1 > numero2 && numero1 > numero3){
  console.log(`O numero ${numero1} é maior que os numeros ${numero2} e ${numero3}`)
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(`O numero ${numero2} é maior que os numeros ${numero1} e ${numero3}`)
} else {
  console.log(`O numero ${numero3} é maior que os numeros ${numero1} e ${numero2}`)
}