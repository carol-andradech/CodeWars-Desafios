/*Escreva uma função que receba uma string de uma ou mais palavras e retorne a mesma string,
 mas com todas as palavras que têm cinco ou mais letras invertidas .
As strings fornecidas consistirão apenas de letras e espaços. 
Espaços serão incluídos apenas quando mais de uma palavra estiver presente.

Exemplos:
"Hey fellow warriors" --> "Hey wollef sroirraw"
"This is a test --> "This is a test"
"This is another test" --> "This is rehtona test" */

function inverterPalavra(frase) {
  let fraseInvertida = frase.split(" ");
  console.log("fraseInvertida:[ " + fraseInvertida + "]");
  //Eu", "estou", "só", "testando", "a", "aplicação"

  for (let i = 0; i < fraseInvertida.length; i++) {
    if (fraseInvertida[i].length >= 5) {
      fraseInvertida[i] = fraseInvertida[i].split("").reverse().join("");
      console.log("Cada palavra split e reverse: " + fraseInvertida[i]);
      //e,s,t,o,u
      //u,o,t,s,e
      //uotse
    }
  }
  console.log("Palavras invertidas: " + fraseInvertida);
  //Eu,uotse,só,odnatset,a,oãçacilpa
  frase = fraseInvertida.join(" ");
  return frase;
}

let frase = "Eu estou só testando a aplicação";

console.log(inverterPalavra(frase));
//Eu uotse só odnatset a oãçacilpa
