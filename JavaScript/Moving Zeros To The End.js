/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  //filtro os elementos sem o zero
  let result = arr.filter((num) => num !== 0);
  // filtro os zeros
  let zeros = arr.filter((num) => num === 0);

  //concateno os zeros no final do array
  return result.concat(zeros);
}

let meuArray = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
console.log(moveZeros(meuArray));
