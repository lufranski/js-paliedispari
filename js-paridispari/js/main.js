// Pari e Dispari

// L'utente sceglie pari o dispari
const userChoice = prompt('Scegli fra Pari e Dispari');

// console.log(userChoice);
// Poi inserisce un numero da 1 a 5
const userNumber = parseInt(prompt('Ora inserisci un numero da 1 a 5'));

console.log('La tua selezione è: ' + userChoice , userNumber);

// Il pc genera un numero random da 1 a 5
let pcNumber = pcNumberGenerator();

console.log('Il numero selezionato dal pc è: ' + pcNumber);


function pcNumberGenerator(numeroPc){

    numeroPc = Math.floor(Math.random() * 5) + 1;

    return numeroPc;
}

// Somma dei due numeri
let somma = userNumber + pcNumber;

console.log('La somma dei due numeri è: ' + somma);

// Stabilire se la somma sia pari o dispari
let winner = oddAndEven();

console.log(winner);

function oddAndEven(whoWins){

    if (somma % 2 == 0){
        whoWins = 'Pari';
        console.log('Vince Pari');
    } else {
        whoWins = 'Dispari';
        console.log('Vince Dispari');
    }

    return whoWins;
}

// Dichiarare il vincitore
// Condizione
if(winner == userChoice) {
    console.log(`É uscito ${winner}, hai vinto!`)
} else {
    console.log('Mannaggia, hai perso!')
}