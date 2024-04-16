/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

function rgb(r, g, b) {
  // Função auxiliar para converter um número decimal para seu equivalente hexadecimal
  function decimalToHex(decimal) {
    // Use o método toString() com base 16 para converter o número para hexadecimal
    //math.max garante que o numero nao seja negativo
    //math.min garante que o numero nao seja maior que 255
    let hex = Math.max(0, Math.min(decimal, 255)).toString(16); // Garantindo que o número esteja entre 0 e 255
    // Certifique-se de que o resultado tenha dois dígitos (por exemplo, '0A' em vez de 'A')
    // operador ternário, condição ? valor_se_verdadeiro : valor_se_falso
    return hex.length === 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
  }

  // Converte cada componente RGB em seu equivalente hexadecimal
  let hexR = decimalToHex(r);
  let hexG = decimalToHex(g);
  let hexB = decimalToHex(b);

  // Retorna a representação hexadecimal completa combinando os valores de cada componente
  return hexR + hexG + hexB;
}

console.log(rgb(148, 0, 211));
