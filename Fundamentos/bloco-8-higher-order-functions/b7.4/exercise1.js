// 1 - Dada uma matriz, transforme em um array.

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

//Metodo concat retorna um novo array com todos os elementos dos arrays passados como parametro

function flatten() {
  return arrays.reduce((element, current) => element.concat(current),[]);
}

console.log(flatten());

