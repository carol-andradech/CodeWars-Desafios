/*In this kata you will create a function 
that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.*/

function filter_list(meuArray) {
  // Return a new array with the strings filtered out
  let listaStrings = [];
  for (var i = 0; i < meuArray.length; i++) {
    if (typeof meuArray[i] == "number") {
      listaStrings.push(meuArray[i]);
    }
  }

  return listaStrings;
}

let meuArray = [21, 14, "a", "j", "13", 344];

console.log(filter_list(meuArray));

/*Declaramos uma função que recebe um argumento que esperamos que seja um array.
O método filter() é usado para criar uma nova matriz com todos os elementos que 
passam por um teste especificado por uma função fornecida.
A função fornecida ao método filter() é uma função anônima
 que recebe um argumento também chamado meuArray.
 Se a condição typeof meuArray == "number" for verdadeira para um elemento, 
 esse elemento será incluído na nova matriz retornada pelo método filter(). 
 Caso contrário, ele será excluído da matriz resultante.
*/

function filter_list(meuArray) {
  return meuArray.filter(function (meuArray) {
    return typeof meuArray == "number";
  });
}
