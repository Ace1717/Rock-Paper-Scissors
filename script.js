
let humanScore = 0;
let computerScore = 0;

// computer options
let choices = ['rock', 'paper', 'scissors'];

 

   
    function playRound(){
      let  humanChoice = prompt('Choose rock, paper, scissors');
        
      let computerChoice = choices[Math.floor(Math.random() * 3)]

     
      if(humanChoice === computerChoice){
        console.log (`you tie: human Score is ${humanScore}
         computer score is ${computerScore}`);
       
   
    }else if (humanChoice === 'rock' && computerChoice === 'paper' ||
           humanChoice === 'scissors' && computerChoice === 'rock' ||
           humanChoice === 'paper' && computerChoice === 'scissors'){
            console.log (`you lose: human Score is ${humanScore} 
            computer score is ${computerScore}`);
          computerScore++;

     }else {
            console.log(`you win: human Score is ${humanScore} 
            computer score is ${computerScore}`); 
            humanScore++; 
        }

    }

        for(let i = 0; i < 5; i++){
           
            playRound();
        
        }if(humanScore > computerScore ){
            console.log('You win the game');
        
        }else if(humanScore < computerScore ){
                console.log('You lose the game');
        
        } else {
            console.log('you tie the game');
        }