/* 🚀1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body; */

let body = document.querySelector("body");

function createAH1() {
  let h1 = document.createElement("h1");
  h1.innerText = "Exercicio 5.2";
  body.appendChild(h1);
}
createAH1();

/* 🚀2 Adicione a tag main com a classe main-content como filho da tag body; */

function createMain() {
  let main = document.createElement("main");
  main.className = "main-content";
  body.appendChild(main);
}
createMain();

/* 🚀3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; */
let main = document.querySelector(".main-content");

function createSectionOnMain() {
  let section = document.createElement("section");
  section.className = "center-content";
  main.appendChild(section);
}
createSectionOnMain();

/* 🚀4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; */
let section = document.querySelector(".center-content");

function createPOnSection() {
  let p = document.createElement("p");
  p.innerText = "One piece";
  section.appendChild(p);
}
createPOnSection();

/* 🚀5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */

function createSectionLeftContent() {
  let section = document.createElement("section");
  section.className = "left-content";
  main.appendChild(section);
}

createSectionLeftContent();

/* 🚀6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; */

function createSectionRightContent() {
  let section = document.createElement("section");
  section.className = "right-content";
  main.appendChild(section);
}

createSectionRightContent();

/* 🚀7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5; */
let leftContent = document.querySelector(".left-content");

function addImageAtLeftContent() {
  let img = document.createElement("img");
  img.className = "small-image";
  img.setAttribute("src", "https://picsum.photos/200");
  leftContent.appendChild(img);
}
addImageAtLeftContent();

/* 🚀8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6; */
let rightContent = document.querySelector(".right-content");

function addULList() {
  let ul = document.createElement("ul");
  rightContent.appendChild(ul);
  let array1a10 = [
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
  ];
  for (let num in array1a10) {
    let li = document.createElement("li");
    li.innerHTML = array1a10[num];
    ul.appendChild(li);
  }
}

addULList();
/* 
🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2. */

function createH3ElementAtMain() {
  let h3 = document.createElement("h3");
  main.appendChild(h3);
}

createH3ElementAtMain();
createH3ElementAtMain();
createH3ElementAtMain();

/* 
🚀1 Adicione a classe title na tag h1 criada; */
let h1Title = document.querySelector("h1");
function addClassAtH1() {
  h1Title.className = "title";
}

addClassAtH1();

/* 🚀2 Adicione a classe description nas 3 tags h3 criadas;*/

function addClassOnH3Element() {
  let h3Element = document.getElementsByTagName("h3");
  for (element in h3Element) {
    h3Element[element].className = "description";
  }
}
addClassOnH3Element();

/* 🚀3 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild(); */
