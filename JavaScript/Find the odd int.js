/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
  let ocorrencias = {};
  let impar = 0;

  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    if (ocorrencias[num] === undefined) {
      ocorrencias[num] = 1;
    } else {
      ocorrencias[num]++;
    }
  }

  for (let chave in ocorrencias) {
    if (ocorrencias[chave] % 2 != 0) {
      impar = parseInt(chave);
    }
  }

  console.log(ocorrencias);
  console.log(impar);
  return impar;
}

let myArray = [0, 1, 0, 1, 0];

console.log(findOdd(myArray));

/*
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
*/

/*
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*/
