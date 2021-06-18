let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const div = document.querySelector("#container");
const para = document.querySelector("p");
const you = document.querySelector("#you");
const computer = document.querySelector("#computer");

const btn1 = document.querySelector("#rock");

btn1.addEventListener("click", function(){
    playerSelection ="rock";

    playRound(playerSelection,computerSelection);
    if(playerScore == 5){
        alert("You are the winner ! Press F5 to play again.");
        return;
    }
      else if(computerScore == 5){
          alert("Computer wins ! Press F5 to play again.");
          return;
      }
   
        
})

const btn2 = document.querySelector("#paper");

btn2.addEventListener("click", function(){
    playerSelection="paper";
    playRound(playerSelection,computerSelection);
        if(playerScore == 5){
            alert("You are the winner ! Press F5 to play again.");
            return;
        }
          else if(computerScore == 5){
              alert("Computer wins ! Press F5 to play again.");
              return;
          }
})

const btn3 = document.querySelector("#scissors");

btn3.addEventListener("click", function(){
   playerSelection="scissors";
   playRound(playerSelection,computerSelection);
   if(playerScore == 5){
    alert("You are the winner ! Press F5 to play again.");
    return;
}
  else if(computerScore == 5){
      alert("Computer wins ! Press F5 to play again.");
      return;
  }
})

function computerPlay(){

    const computer = ["Rock", "Paper", "Scissors"]; 
    const play = computer[Math.floor(Math.random()*computer.length)];
   
     return play ;
   }

   function playRound(playerSelection,computerSelection) {


    playerSelection=playerSelection;
    computerSelection = computerPlay();
    
     if(playerSelection == "rock" && computerSelection == "Scissors"){
       para.textContent ="You Win ! rock beats scissors.";
        playerScore = ++playerScore;
        you.textContent ="You: " + playerScore;
        
      }
     else if(playerSelection == "rock" && computerSelection == "Paper"){
        para.textContent = "You lose ! paper beats rock.";
        computerScore = ++computerScore;
        computer.textContent = "Computer: " + computerScore;
      }
     else if(playerSelection == "rock" && computerSelection == "Rock"){
        
        para.textContent = "It's a tie!"; 
        
      }
    
    
     else if(playerSelection == "paper" && computerSelection == "Rock"){
        para.textContent = "You win ! paper beats rock.";
        playerScore = ++playerScore;
        you.textContent = "You: " + playerScore;
     }
    
     else if(playerSelection == "paper" && computerSelection == "Paper"){
        para.textContent = "It's a tie !.";
       
    }
    
     else if(playerSelection == "paper" && computerSelection == "Scissors"){
        para.textContent = "You lose ! scissors beats paper.";
        computerScore = ++computerScore;
        computer.textContent ="Computer: " + computerScore;
    }
    
    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        para.textContent = "You lose ! rock beats scissors.";
        computerScore = ++computerScore;
        computer.textContent ="Computer: " + computerScore;
    }
    
    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        para.textContent = "You win ! scissors beat paper.";
        playerScore = ++playerScore;
        you.textContent = "You: " + playerScore;
    }
    
     else if(playerSelection == "scissors" && computerSelection == "Scissors"){
        para.textContent = "It's a tie !.";
      
    } 
    
      }
    
      
     

   