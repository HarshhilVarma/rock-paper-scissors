let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    const list=["rock","paper","scissors"];
    let temp=Math.floor(Math.random()*3);
    return list[temp];
}

function getUserChoice(){
    let userin=prompt("Please Enter your choice");
    userin=userin.toLowerCase();
    return userin;
}

function playRound(humanChoice,computerChoice){
    
    if(humanChoice=="rock"){
        if(computerChoice=='paper'){
            console.log("You lose, Paper beats rock");
            computerScore++;
        }
        else if(computerChoice=="scissors"){
            console.log("You win, rock beats scissors");
            humanScore++;
        }
    }

    if(humanChoice=="paper"){
        if(computerChoice=='rock'){
            console.log("You win, Paper beats rock");
            humanScore++;
        }
        else if(computerChoice=="scissors"){
            console.log("You lose, scissors beat paper");
            computerScore++;
        }
    }

    if(humanChoice=="scissors"){
        if(computerChoice=='paper'){
            console.log("You win, scissors beats paper");
            humanScore++;
        }
        else if(computerChoice=="rock"){
            console.log("You lose, rock beats scissors");
            computerScore++;
        }
    }

}


for(i=0;i<5;i++){
    let computerSelection=getComputerChoice();
    let userSelection=getUserChoice();
    playRound(userSelection,computerSelection);
}

if(humanScore>computerScore){
    console.log("You win");
}
else if(humanScore<computerScore){
    console.log("You lose");
}
else if(computerScore==humanScore){
    console.log("Tie")
}

