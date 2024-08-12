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

