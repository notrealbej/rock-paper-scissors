let humanScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getHumanChoice(){
    let choice = prompt("Enter 1 for Rock, 2 for Paper and 3 for Scissors");
    let humanChoice = choices[parseInt(choice) - 1];
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    let winner = "Human";

    if((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")){
        winner = "Computer";
    }
    else if(humanChoice === computerChoice){
        winner = "None";
    }

    if(winner === "Human"){
        humanScore += 1;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if(winner === "Computer"){
        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
    else{
        console.log("Draw! both player and computer chose " + computerChoice);
    }
    console.log("Human Score: " + humanScore + "\nComputer Score: " + computerScore);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);