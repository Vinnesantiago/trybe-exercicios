let submitBtn = document.querySelector("#send");
let agreeImage = document.querySelector("#agree2");

submitBtn.addEventListener("click", function (event) {
  /* event.preventDefault(); */
  if (agreeImage.checked !== "true") {
    submitBtn.getAttribute("disabled");
    alert("Obrigatorio concordar com os termos de imagem");
  } else {
    submitBtn.classList.remove("disabled");
  }
});

agreeImage.addEventListener("click", function (e) {
  console.log(agreeImage.v);
});
