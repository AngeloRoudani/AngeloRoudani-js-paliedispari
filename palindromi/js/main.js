/* 1 chiedere all'utente di inserire una parola.
   2 rendere la parola un array.
   3 creare una funzione che:
        _ renda l'array al contario;
        _ che verifichi che l'incremento della parola sia uguale al suo decremento;
    4 stampare il risultato
*/

const userWord = prompt('inserire una parola');

const newArrayWord = userWord.split("");

console.log(newArrayWord)

//stampo risultato

const resultPalindrome = isItApalindrome(newArrayWord);
console.log(resultPalindrome);



//creo la funzione 

function isItApalindrome(wordGen) {
    let newWord = "";
    const growWord = [];
    const downWord = [];
    console.log(wordGen);
    for (let i = 0; i < wordGen.length ; i++){
        
        let letterWord = wordGen[i];
        growWord.push(letterWord);
        
    }
    console.log(growWord);

    for (let i = wordGen.length - 1; i >= 0; i--) {
        let letterWord = wordGen[i];
        downWord.push(letterWord);
    }
    console.log(downWord);

    if (downWord == growWord) {
        newWord = "è un palindromo";
        console.log(newWord)
    } else {
        newWord = "non è un palindromo";
    }
    console.log(newWord);
    return  newWord;
}