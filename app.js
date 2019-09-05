function computerPlay() {
	const OPTIONS = ['rock','paper','scissors'];
	let randomNumber = Math.floor(Math.random() * 3)
	return OPTIONS[randomNumber];
}

let computerSelection ;
let playerSelection ; 

function playRound(computerSelection,playerSelection) {
	if (playerSelection == 'rock' )  {
		if  (computerSelection == 'scissors' ) {
			return 'player';
		} else if (computerSelection == 'rock') {
			return 'draw'
		} else if (computerSelection == 'paper'){
			return 'computer';
		}
	} else if (playerSelection == 'paper') {
		if  (computerSelection == 'scissors' ) {
			return 'computer';
		} else if (computerSelection == 'paper') {
			return 'draw';
		} else if (computerSelection == 'rock'){
			return 'player';
		}
	} else if (playerSelection == 'scissors') {
		if  (computerSelection == 'scissors' ) {
			return 'draw';
		} else if (computerSelection == 'paper') {
			return 'player';
		} else if (computerSelection == 'rock'){
			return 'computer';
	}
}
}



function game() {

	let computerScore = 0;
	let userScore = 0;
	while (userScore + computerScore < 5) {
		let roundResult = playRound(computerSelection,playerSelection);
		if (roundResult == 'computer') {
			console.log(`Computer selected ${computerSelection} while player selected ${playerSelection}, Hence 
				Computer won this round`)
			computerScore++;
		} else if (roundResult == 'player') {
			userScore++;
			console.log(`Computer selected ${computerSelection} while player selected ${playerSelection}, Hence 
				Player won this round`)
		} else if (roundResult == 'draw') {
			console.log(`Computer selected ${computerSelection} while player selected ${playerSelection}, Hence 
				it is a draw`)
		}
		console.log(`Computer: ${computerScore} - User: ${userScore}`)
		if (userScore + computerScore == 5 ){
			if (userScore > computerScore ){
				console.log('User won');
			} else {
				console.log('computer won');
			}
		}
		playerSelection = prompt('what do you choose ? rock , paper or scissors ?!').toString();
		computerSelection =  computerPlay();
	}
	

}

game();