/* Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.
 */


const nota = 76
message = ""
resultado = ""

console.log("Abaixo resultado do exercicio anterior:")


if(nota >= 80){
  message = "Parabéns, você foi aprovada(o)!"
  resultado = "aprovada"
  console.log(message)
} else if (nota >= 60){
  message = "Você esta na nossa lista de espera"
  resultado = "lista"
  console.log(message)
} else {
  message = "Você foi reprovada(o)"
  resultado = "reprovada"
  console.log(message)
}


console.log("Abaixo resultado do SWITCH:")


switch (resultado){
  case "aprovada":
    console.log(message)
    break;
  case "lista":
    console.log(message)
    break;
  case "reprovada":
    console.log(message)
    break;
  default:
    console.log("não se aplica")
}