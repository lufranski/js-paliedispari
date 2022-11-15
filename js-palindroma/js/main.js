// Parola Palindroma

// Chiedere all'utente di inserire una parola
// const userWord = prompt('Inserisci la tua parola');
const wordOutput = document.getElementById('output');
const inputField = document.querySelector('input');

console.log(wordOutput , inputField);


const btn = document.querySelector('button');
console.log(btn);

// Aggiungere la funzione al click di btn
btn.addEventListener('click', function(){
    
    let userWord = inputField.value;
    
    let userWordRev = palindromeWord(userWord);
    // Condizione
    if (userWord == userWordRev){
        
        // Output positivo
        
        // console.log('La parola che hai inserito è palindroma');
        wordOutput.innerHTML = `
            La parola che hai inserito &eacute; palindroma!
        `;
    
    } else {
    
        // Output negativo
        
        // console.log('La parola che hai inserito non è palindroma');
        wordOutput.innerHTML = `
            La parola che hai inserito non &eacute; palindroma!
        `;

    }
    
}
);


// Capire se la parola inserita è palindroma
function palindromeWord(parolaUtente){
    
    // Applicare il metodo split alla parola inserita dall'utente
    let splitUserWord = parolaUtente.split('');
    console.log(splitUserWord);

    // Utilizzare il metodo reverse per invertire l'array ottenuto da split
    splitUserWord = splitUserWord.reverse();
    console.log(splitUserWord);

    // Riunire le lettere tramite il metodo join
    let reverseUserWord = splitUserWord.join('');
    console.log(reverseUserWord);

    return reverseUserWord;

}
