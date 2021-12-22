const computerPlay = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    let computerNum = getRandomInt(3);

    switch (computerNum){
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            return 'Uh oh, something went wrong';
            break;
    }
};

const playRound = (player, computer) => {
    if (player === computer){
        return `It's a tie game!`
    } else if (player.toLowerCase() === 'rock'){
        if (computer.toLowerCase() === 'paper'){
            computerScore += 1;
            return `The computer won! Paper beats rock!`
        }
        else {
            playerScore += 1;
            return `You won! Rock beats Scissors`
        }
    } else if (player.toLowerCase() === 'paper'){
        if (computer.toLowerCase() === 'scissors'){
            computerScore += 1;
            return `The computer won! Scissors beats paper!`
        } else {
            playerScore += 1;
            return `You won! Paper beats rock!`
        }
    } else if (player.toLowerCase() === 'scissors'){
        if (computer.toLowerCase() === 'rock'){
            computerScore += 1;
            return `The computer won! Rock beats scissors!`
        } else {
            playerScore += 1;
            return `You won! Scissors beats paper!`
        }
    }
};

const game = () => {

    let playerSelection = prompt(`Enter Rock, Paper, or Scissors`)

    playRound(playerSelection, computerSelection);
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);

    while ((playerScore > 5) || (computerScore > 5)){
        let playerSelection = prompt(`Enter Rock, Paper, or Scissors`)

        playRound(playerSelection, computerSelection);
    }
}

let computerSelection = computerPlay();
let playerSelection;
let playerScore;
let computerScore;

game();