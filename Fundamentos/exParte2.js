
/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for. */

/*  function isPalindrome(string){
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
 */

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

function maxIndex(array){
  let biggerItem = 0
  for(let index =0; index < array.length;index++){
    if(array[index] > biggerItem){
      biggerItem = array[index]
    }
  }
  let indexOfBiggerItem = array.indexOf(biggerItem)
  return indexOfBiggerItem

}

console.log(maxIndex([2, 3, 6, 7, 10, 1,9,12,34,100,234,2,4,2,5,6]))