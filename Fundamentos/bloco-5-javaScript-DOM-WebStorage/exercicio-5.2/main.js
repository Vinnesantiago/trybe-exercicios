/* 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body; */

let body = document.querySelector("body");

function createAH1() {
  let h1 = document.createElement("h1");
  h1.innerText = "Exercicio 5.2";
  body.appendChild(h1);
}

createAH1();
