// Pari e Dispari

// L'utente sceglie pari o dispari

const userChoice = prompt('Scegli fra Pari e Dispari');

console.log('La tua scelta è: ' + userChoice);

// Poi inserisce un numero da 1 a 5

const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

console.log('Il numero da te scelto è: ' + userNumber);

// Il pc genera un numero random da 1 a 5

let pcNumber = pcNumberGenerator();

// Somma dei due numeri
let somma = userNumber + pcNumber;

console.log('Il numero del pc è: ' + pcNumber , 'La somma è uguale a: ' + somma);

// Stabilire se la somma sia pari o dispari

console.log('La somma è: ' + somma);

// Dichiarare il vincitore
let winner = oddAndEven(somma);

console.log('Il vincitore è: ' + winner);
// Condizione
if(winner == userChoice) {
    console.log(`É uscito ${winner}, hai vinto!`)
} else {
    console.log('Mannaggia, hai perso!')
}







function pcNumberGenerator(numeroPc){

    numeroPc = Math.floor(Math.random() * 5) + 1;

    return numeroPc;
}
// console.log(winner);

function oddAndEven(whoWins){

    if (whoWins % 2 == 0){
        whoWins = 'Pari';
        // console.log('Vince Pari');
    } else {
        whoWins = 'Dispari';
        // console.log('Vince Dispari');
    }

    return whoWins;
}
