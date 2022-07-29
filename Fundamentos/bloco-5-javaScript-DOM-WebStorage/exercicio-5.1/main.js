/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie e execute uma função que mude a cor do quadrado vermelho para branco.
Crie e execute uma função que corrija o texto da tag <h1>.
Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeText() {
  let changePText = document.getElementsByTagName("p")[1];
  changePText.innerHTML =
    "Trabalhando bastante e me desenvolvendo cada vez mais";
}
changeText();

function changeBackground() {
  let elementToChange = document.getElementsByClassName("main-content")[0];
  elementToChange.style.background = "rgb(76,164,109)";
}

changeBackground();

function changeBackgroundCenter() {
  let elementToChange = document.getElementsByClassName("center-content")[0];
  elementToChange.style.background = "white";
}

changeBackgroundCenter();

function changeTitleText() {
  let h1Text = document.getElementsByClassName("title")[0];
  h1Text.innerHTML = "Exercício 5.1 - JavaScript";
}

changeTitleText();

function transformToLowerCaseP() {
  let p = document.getElementsByTagName("p");
  for (let index = 0; index < p.length; index += 1) {
    p[index].innerText = p[index].innerText.toUpperCase();
  }
}

transformToLowerCaseP();

function ShowEveryPInConsole() {
  let p = document.getElementsByTagName("p");
  for (let index = 0; index < p.length; index += 1) {
    console.log(p[index].innerText);
  }
}

ShowEveryPInConsole();
