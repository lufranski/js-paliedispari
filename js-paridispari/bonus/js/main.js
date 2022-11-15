// Pari e Dispari

// L'utente sceglie pari o dispari

// const userChoice = prompt('Scegli fra Pari e Dispari');

// console.log(userChoice);

const evenButton = document.getElementById('even');
const oddButton = document.getElementById('odd');
let userChoice;

console.log(evenButton);

evenButton.addEventListener('click', function(){

    userChoice = 'Pari';

    console.log('La tua scelta è: ' + userChoice);

    return userChoice;

}
);

oddButton.addEventListener('click', function(){

    userChoice = 'Dispari';

    console.log('La tua scelta è: ' + userChoice);

    return userChoice;

}
);

// Poi inserisce un numero da 1 a 5

const selectNumber = document.querySelector('select');
let userNumber;

selectNumber.addEventListener('click', function(){
    
    userNumber = parseInt(selectNumber.value);
    
    console.log('Il numero da te scelto è: ' + userNumber);
    
    return userNumber;
    
}
);

// Il pc genera un numero random da 1 a 5

const createButton = document.getElementById('create');
const pcChoiceOutput = document.getElementById('pc-choice');
let pcNumber = pcNumberGenerator();

console.log(pcNumber);

createButton.addEventListener('click', function(){
    
    pcChoiceOutput.innerHTML = `
    Recap: tu giocherai con ${userChoice} e ${userNumber}, mentre il Computer con ${pcNumber} 
    `;
    
}
);


const winOrNot = document.getElementById('game-winner');
const winnerOutput = document.getElementById('winner-container');
let somma; 
let winner = oddAndEven();

console.log(winOrNot , winnerOutput);
// Condizioni

winOrNot.addEventListener('click' , function(){
    
    somma = userNumber + pcNumber;
    
    console.log(somma);

    if (somma % 2 == 0) {
        
        winnerOutput.innerHTML = `
            É uscito ${winner}, hai vinto!
        `;
    
    } else {
    
        winnerOutput.innerHTML = `
            Mannaggia, hai perso!
        `;
    
    }

}
);

// const userNumber = parseInt(prompt('Ora inserisci un numero da 1 a 5'));

// console.log('La tua selezione è: ' + userChoice , userNumber);


// console.log('Il numero selezionato dal pc è: ' + pcNumber);



// Somma dei due numeri

// console.log('La somma dei due numeri è: ' + somma);

// Stabilire se la somma sia pari o dispari

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

// Dichiarare il vincitore
// Condizione
// if(winner == userChoice) {
//     // console.log(`É uscito ${winner}, hai vinto!`)
// } else {
//     // console.log('Mannaggia, hai perso!')
// }