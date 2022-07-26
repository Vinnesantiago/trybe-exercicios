
/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for. */

 function isPalindrome(string){
  // declarar a variavel stringForArray para transformar a string em um item de array
  let stringForArray = string.split("")
  // Criar a variavel para armazenar a stringforarray em reverse
  let reverseArray = stringForArray.reverse()
  let reversedArrayInString = reverseArray.join("")
  if(string === reversedArrayInString){
    return true
  } else {
    return false
  }
  
  
}
console.log(isPalindrome("radar"))




