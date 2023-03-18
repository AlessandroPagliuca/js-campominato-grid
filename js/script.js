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
per avere il livello selezionato dall'utente*/
let btnFormlevel = document.getElementById('levelForm');
btnFormlevel.addEventListener('submit', play);


//Variabili delle mine, n° box, n° box * row
let minePositions = [];
let squareNumbers;
let squareForRow;
let score = 1;


//Messaggio che cambia al click play
let messageScore = document.getElementById('messageScore');
messageScore.innerText = 'Benvenuto su Campo minato';

//Inizio della funzione dove verrà generata la griglia in base al liv scelto
function play(e){
    e.preventDefault();
    const c92Playground = document.getElementById('c92Playground');
    c92Playground.innerHTML = '';
    //Reset score quando clicco su play
    score = 1;
    c92Playground.classList.add('c92Border');
    messageScore.innerText = `La partita è iniziata, trova le caselle senza le bombe` ;


    //prendiamo la scelta in input della difficoltà scelta
    let level = document.getElementById('level').value;
    console.log(level);


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
    squareForRow = Math.sqrt(squareNumbers);
    console.log(squareForRow);

    cellGenerate();

    mineGenerate();
}

/* Da questo punto parte il disegno dei box che andranno
a formare la nostra grid*/
function cellGenerate(){
    for(let i = 1; i <= squareNumbers; i++){
        let drawSquare = document.createElement('div');
        drawSquare.classList.add('drawSquare');
        drawSquare.style.width = `calc(100% / ${squareForRow})`;
        drawSquare.style.height = `calc(100% / ${squareForRow})`;
        drawSquare.innerText = i;

        c92Playground.appendChild(drawSquare);
        //Aggiungiamo il bg-color con l'evento click sulla casella
        drawSquare.addEventListener('click', bgColor);
        //Aggiunto il punteggio quando andiamo a cliccare sulla casella
        drawSquare.addEventListener('click', () => {
            score++;
        });
        function bgColor(){
            drawSquare.style.backgroundColor = 'green';
            console.log(drawSquare.innerText);
            console.log(minePositions.indexOf(parseInt(drawSquare.innerText)));
            messageScore.innerText = `IL tuo score è: ${score}`;

            //verifichiamo se la casella è una bomba il bg-color è red
            if( minePositions.indexOf(parseInt(drawSquare.innerText)) != -1 ){
                drawSquare.style.backgroundColor = 'red';
                messageScore.innerText = `Hai perso` ;
            }
        }
    }

}
//Creiamo un array per tenere traccia delle posizioni delle bombe
function getRandomInt(max){
   return Math.floor((Math.random() * max) + 1);
}

//Generiamo le posizioni casuali delle bombe
function mineGenerate(){
    minePositions = [];
    while (minePositions.length < 16) {
       let randomPosition = getRandomInt(squareNumbers);

        if (!minePositions.includes(randomPosition)) {
            minePositions.push(randomPosition);
        
        }
    } 
    console.log(minePositions);
}  
