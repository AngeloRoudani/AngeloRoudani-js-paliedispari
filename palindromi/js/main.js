/* 1 chiedere all'utente di inserire una parola.
   2 rendere la parola un array.
   3 creare una funzione che:
        _ renda l'array al contario;
        _ che verifichi che l'incremento della parola sia uguale al suo decremento;
    4 stampare il risultato
*/

const userWord = prompt('inserire una parola');

let newArrayWord = userWord.split("");

console.log(newArrayWord)

//stampo risultato

const resultPalindrome = isItApalindrome(newArrayWord);
console.log(resultPalindrome);



//creo la funzione 

function isItApalindrome(wordGen) {
    let newWord = "";
    let growWord = [''];
    let downWord = [''];

    for (let i = 0; i < wordGen.lenght - 1; i++){
        
        growWord = wordGen[i].push([i]);
        
    }
    console.log(growWord)

    for (let i = wordGen.lenght - 1; i >= 0; i--) {
        
        downWord = wordGen[i].push([i]);
    }
    console.log(downWord)

    if (growWord == downWord){
        newWord = "è un palindromo";
    } else {
        newWord = "non è un palindromo";
    }
    
    return  newWord;
}