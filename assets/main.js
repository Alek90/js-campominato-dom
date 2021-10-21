/*  CAMPO MINATO
    Permettere all'utente di selezionare una difficoltà tra le opzioni predefinite.
    All'avvio della partita, tramite pulsante:
        -creare una griglia da gioco contenente un numero di celle numerate relativo alla difficoltà;
        -generare random 16 numeri diversi entro il limite del numero di celle;
        -associare i numeri random generati alle rispettive celle.
    L'utente, cliccando sulle celle, le seleziona:
        -se la cella è associata a un numero random, diventa rossa -> end-game;
        -se la cella non è associata a nessun numero random, diventa azzurra e continua finchè:
            -seleziona una cella associata ad un numero random (diventa rossa -> end-game);
            -seleziona tutte le celle non associate ai numeri random -> end-game;
    Quando il gioco raggiunge l' end-game tutte le celle associate ad un numero random diventano rosse, e viene stampato il numero di selezioni compiute dall'utente;
*/

// Variabili DOM:
const startButton = document.getElementById("start");

//inizializziamo una variabile per le celle:
let cell = "";

let grid = document.getElementById("grid_container");

// Costruiamo l'evento/azione.
startButton.addEventListener("click", function(){

    
    //Inizializziamo delle variabili che ci serviranno successivamente:

    //-prendiamo il contenitore griglia:

    grid.innerHTML = "";

    //Prendiamo in considerazione le selezioni dell'utente:
    let difficultLevel = document.getElementById("choice_difficult").value;
    
    console.log(difficultLevel);

    /* Utilizziamo le condizionali per:
        -assegnare una classe che differenzi le proprietà relative della griglia;
        -assegnare un valore numerico alla selezione dell'utente;
    */
    
    let intensityLevel = "";

    if(difficultLevel == "easy"){
        intensityLevel = 100;
        grid.className = "easy_grid";
    }else if(difficultLevel =="normal"){
        intensityLevel = 81;
        grid.className = "normal_grid";
    }else if(difficultLevel =="hard"){
        intensityLevel = 49;
        grid.className = "hard_grid";
    }

    console.log(intensityLevel);


    // Tramite un ciclo costruiamo la griglia relativa alla difficoltà selezionata:

   

    const gridLevel = createGridLevel(intensityLevel);
    

    
    let loserCell = choiceLoserCell(intensityLevel);
    console.log(loserCell); 

    cell = []
    cell = document.querySelectorAll(".grid_cell")

    for (i = 0; i < cell.length; i++){

        if (loserCell.includes(i + 1)){

            console.log("on");

            cell[i].addEventListener("click", function() {
                this.className = "loser_cell";
                console.log([i]);
            })
        }else {

            console.log("off");
            cell[i].addEventListener("click", function() {
                this.className = "selected_cell";
                console.log([i]);
            })
        }
    }
    //cell = document.getElementsByClassName("grid_cell")

    /*cell.addEventListener("click", function(){
        console.log("ciao");
    })*/
    
    //console.log(gridLevel, loserCell);
    //console.log(cell)
})



function extractPositionBombs(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function choiceLoserCell (totalCell) {

    let bombs = [];

    while (bombs.length < 16) {

        let positionBombs = extractPositionBombs(1, totalCell)

        if(!bombs.includes(positionBombs)){
            bombs.push(positionBombs)
        }
    }

    return bombs
}

function createGridLevel (totalCell){

    grid.innerHTML = [];

    for(let i = 1; i <= totalCell; i++){

        //creiamo un elemento nelle celle:
        let cell = document.createElement("div")
        cell.className = "grid_cell";
        
        //numeriamo le celle:
        cell.append(i);

        //diamo corpo alla griglia (appendendo le celle nel contenitore griglia):
        grid.append(cell);
    }
    
    return grid
}

/* 
se cell[i] ==  */

/* //Creare evento alla selezione di una cella:
cell.addEventListener("click", function() {
    this.classList.add = "selected_cell";
    console.log(this);
}) */



// se clicco su una cella, inclusa in loserCell, perdo. Se clicco su una cella esclusa, vinco....devo cliccare su una cella.