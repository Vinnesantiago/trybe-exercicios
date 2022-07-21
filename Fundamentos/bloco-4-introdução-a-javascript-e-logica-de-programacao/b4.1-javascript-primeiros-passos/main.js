/* 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

let ladoA = 34
let ladoB = 40
let ladoC = 106

let soma = ladoA + ladoB + ladoC

if(soma == 180 && soma >0){
  console.log(true + " - A soma dos ângulos internos de qualquer triângulo é sempre igual a 180º.")
} else {
  console.log(false + " - A soma dos ângulos internos de qualquer triângulo é sempre igual a 180º.")
}
