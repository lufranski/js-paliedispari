// Parola Palindroma

// Chiedere all'utente di inserire una parola
const userWord = prompt('Inserisci la tua parola');

console.log(userWord);

let userWordRev = palindromeWord(userWord);

// Condizione
if (userWord == userWordRev){
    
    console.log('La parola che hai inserito è palindroma');

} else {

    console.log('La parola che hai inserito non è palindroma');

}

// Capire se la parola inserita è palindroma
function palindromeWord(parolaUtente){
    
    // Applicare il metodo split alla parola inserita dall'utente
    let splitUserWord = userWord.split('');
    console.log(splitUserWord);

    // Utilizzare il metodo reverse per invertire l'array ottenuto da split
    splitUserWord = splitUserWord.reverse();
    console.log(splitUserWord);

    // Riunire le lettere tramite il metodo join
    let reverseUserWord = splitUserWord.join('');
    console.log(reverseUserWord);

    return reverseUserWord;

}
