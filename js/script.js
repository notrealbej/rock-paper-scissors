let humanScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getHumanChoice(){
    let choice = prompt("Enter 1 for Rock, 2 for Paper and 3 for Scissors");
    if(choice > 3 || choice < 1){
        alert("Enter valid number");
        return;
    }
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
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log("Final Scores- \nHuman: " + humanScore + " Computer: " + computerScore);
    if(computerScore > humanScore){
        console.log("You lose!");
    }
    else if(humanScore > computerScore){
        console.log("You win!");
    }
    else{
        console.log("Draw!");
    }
}

playGame();