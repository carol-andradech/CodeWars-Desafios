/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  let palavras = str.trim().split(" ");

  if (palavras.length === 0) {
    return false;
  }

  let hashtag =
    "#" + palavras[0].charAt(0).toUpperCase() + palavras[0].slice(1);

  for (let i = 1; i < palavras.length; i++) {
    let palavraCapitalizada =
      palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
    hashtag += palavraCapitalizada;
  }

  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}

let frase = "Olá aqui está o meu teste";
console.log(generateHashtag(frase));
