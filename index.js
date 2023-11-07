const playerText=document.querySelector("#player");
const computerText=document.querySelector("#computer");
const resultText=document.querySelector("#result");
const choiceBtns=document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button=>button.addEventListener("click",()=>{
    player=button.textContent;
    computerTurn();
    playerText.textContent=`Player:${player}`;
    computerText.textContent=`Computer:${computer}`;
    resultText.textContent=checkwinner();
}));

function computerTurn(){
    const  randNum=Math.floor(Math.random()*3)+1;//math.random will produce a number between 0 and 1(only between,not 0 and 1)

    switch(randNum){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS"

    }
}

function checkwinner(){
    if(player==computer){
        return "Draw!";
    }
    else if(computer=="ROCK"){
        return (player=="PAPER") ? "You win!":"You lose!";
    }
    else if(computer=="PAPER"){
        return (player=="SCISSORS") ? "You win!":"You lose!";
    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK") ? "You win!":"You lose!";
    }
}
