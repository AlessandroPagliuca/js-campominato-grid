/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.



*/


/* Prendiamo il bottone del form per avere in input
per avere il livello selezionato dall'utente
*/

let btnFormlevel = document.getElementById('levelForm');
btnFormlevel.addEventListener('submit', play);

//Inizio della funzione dove verrà generata la griglia in base al liv scelto

function play(e){
    e.preventDefault();
    const c92Playground = document.getElementById('c92Playground');
    c92Playground.innerHTML = '';

    //prendiamo la scelta in input della difficoltà scelta
    let level = document.getElementById('level').value;
    console.log(level);
    let squareNumbers;


    // Inizio switch per dividere i livelli con le rispettive griglie
    switch(level){
        case 'easy':
            squareNumbers = 100;
            break;
        case 'medium':
            squareNumbers = 81;
            break;
        case 'hard':
            squareNumbers = 49;
            break;
    }
    console.log(squareNumbers);

    //Calcoliamo le row in base alla difficoltà scelta
    let squareForRow = Math.sqrt(squareNumbers);
    console.log(squareForRow);

    /* Da questo punto parte il disegno dei box che andranno
     a formare la nostra grid*/

    for(let i = 1; i <= squareNumbers; i++){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add('drawSquare');
        drawSquare.style.width = `calc(100% / ${squareForRow})`;
        drawSquare.style.height = `calc(100% / ${squareForRow})`;
        drawSquare.innerText = i;
        c92Playground.appendChild(drawSquare);
    }
}