/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14
*/

function solution(list) {
  let result = [];
  let tempArr = [];

  for (let num of list) {
    let followingItem = list[list.indexOf(num) + 1];
    // para cada numero a função verifica se o próximo número é consetivo a ele
    if (num + 1 === followingItem) {
      tempArr.push(num, followingItem);

      // se não for sequencial
    } else {
      //se o tamanho for maior q 3 então a sequencia foi quebrada e adiciona o intervalo ao result representado
      //pelo primeiro e último tempArr
      if (tempArr.length > 3) {
        result.push(`${tempArr[0]}-${tempArr[tempArr.length - 1]}`);

        //se o tamanho for dois, adiciona os números diretamente ao result
      } else if (tempArr.length === 2) {
        result.push(...tempArr);

        // só adiciona o valor ao result
      } else {
        result.push(num);
      }
      tempArr = [];
    }
  }
  //join une os elementos de um array em uma unica string usando um separador, virgula por padrão
  return result.join();
}

let array = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
];

console.log(solution(array));

/*
function solution(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

*/
