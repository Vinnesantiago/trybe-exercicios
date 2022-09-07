//Utilizar a função Array.forEach para iterar sobre todos os elementos de um array;
//Utilizar a função Array.find para encontrar o primeiro elemento de um array que satisfaça a uma condição;
//Utilizar as funções Array.some e Array.every para testar se os elementos de um array satisfazem a uma condição;
//Utilizar a função Array.sort para ordenar arrays de acordo com algum critério.

//Para fixar Conteudo: Array.forEach
//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach((element) => {
  showEmailList(element);
});

// Para fixar Conteudo: FIND

//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
};

console.log(findDivisibleBy3And5());
;