/* 1 apriamo un prompt in cui inseriamo la parola "pari" oppure "dispari".
   2 apriamo un prompt in cui l'utente sceglie un numero da 1 a 5.
   3 creiamo un a funzione che generi per il computer un numero random da 1 a 5.
   4 facciamo la somma del numero dell' utente con il numero del computer.
   5 creiamo un a funzione che stabilisca se la somma sia uguale a "pari" o "dispari".
   6 stabiliamo infine chi ha vinto.
*/ 
// Scelta utente di pari o dispari
const userChoice = prompt("Scegli 'pari' o 'dispari'");

//Scelta utente di un numero 
const userNumberChoice = parseInt(prompt("scegli un numero da 1 a 5"));

console.log("Hai scelto: " + userChoice + " e il numero: " + userNumberChoice);

//Numeri random del computer
let randomNumber = 0;
let computerChoice = computerNumber(randomNumber);


console.log("il computer ha scelto: " + computerChoice);


//Somma dei numeri usciti
let sum = userNumberChoice + computerChoice;

console.log("la somma è: " + sum);

// Verifica pari o dispari

let verifyOddEven = evenOdd(sum);

console.log("la somma è: " + verifyOddEven);

//Stabiliamo il vincitore
let win = "Hai Vinto"
let lose = "Hai perso"

if (userChoice == verifyOddEven) {
    console.log(win);
} else {
    console.log(lose);
}

//Funzioni utilizzate nel programma

function computerNumber (randomOperation) {

    randomOperation = Math.floor((Math.random() * 5) +1);
    return randomOperation;

}

function evenOdd (numberOut) {
        
        if (numberOut % 2 == 0) {
            numberOut = 'pari';
        } else {
            numberOut = 'dispari'
        }
        return numberOut;

}