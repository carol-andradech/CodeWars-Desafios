function sumTwoSmallestNumbers(numbers) {
  // Encontre o menor número
  //O operador de propagação (...) é usado
  // para passar os elementos do array como argumentos individuais para a função
  let menorNum1 = Math.min(...numbers);

  // Encontre o índice do menor número
  let indexMenorNum1 = numbers.indexOf(menorNum1);

  // Remova o primeiro menor número do array
  //O splice recebe o index por onde começa a ser removido e qual o comprimento de elementos a serem removidos
  numbers.splice(indexMenorNum1, 1);

  // Encontre o segundo menor número
  let menorNum2 = Math.min(...numbers);

  // Retorna a soma dos dois menores números
  return menorNum1 + menorNum2;
}

let numbers = [5, 10, 67, 35, 4, 2, 8];

console.log(sumTwoSmallestNumbers(numbers));
