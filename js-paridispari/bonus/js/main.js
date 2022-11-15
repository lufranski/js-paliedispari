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

selectNumber.addEventListener('change', function(){
    
    userNumber = parseInt(selectNumber.value);
    
    console.log('Il numero da te scelto è: ' + userNumber);
    
    return userNumber;
    
}
);

// Il pc genera un numero random da 1 a 5

const createButton = document.getElementById('create');
const pcChoiceOutput = document.getElementById('pc-choice');
let pcNumber = pcNumberGenerator();


createButton.addEventListener('click', function(){
    
    pcChoiceOutput.innerHTML = `
    Recap: tu giocherai con ${userChoice} e ${userNumber}, mentre il Computer con ${pcNumber} 
    `;
    
}
);

console.log(pcNumber);

const winOrNot = document.getElementById('game-winner');
const winnerOutput = document.getElementById('winner-container');

let somma;
let winner = oddAndEven(somma);

console.log(winOrNot , winnerOutput);
// Condizioni

winOrNot.addEventListener('click' , function(){
    
    somma = userNumber + pcNumber;
    
    console.log('La somma dei numeri è: ' + somma);

    if (somma % 2 === 0) {
        
        // winnerOutput.innerHTML = `
            // É uscito ${winner}, hai vinto!
        // `;
        winnerOutput.innerHTML = ` 
            Hai vinto!
        `;
    
    } else {
    
        winnerOutput.innerHTML = `
            Mannaggia, hai perso!
        `;
    
    }

}
);

// Somma dei due numeri

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
