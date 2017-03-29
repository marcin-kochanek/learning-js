var newGameBtn = document.getElementById('js-newGameButton'),
	pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');


pickRock.addEventListener('click', function() { 
	playerPick('rock'); 
})

pickPaper.addEventListener('click', function() { 
	playerPick('paper'); 
})

pickScissors.addEventListener('click', function() { 
	playerPick('scissors'); 
})

var gameState = 'notstarted',  //started // ended
    player = {
        name: '',
        score: 0,
    },
    computer = {
        score: 0,
        name: 'computer',
    };

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Play again?';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function newGame() {
  player.name = prompt('Put your name', 'Your name');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}

newGameBtn.addEventListener('click', newGame);

function playerPick(playerPick) {
    console.log(playerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkWinner() {
    if (player.score === 10) {
        gameState = 'ended';
        widnow.alert('The winner is ' + player.name + "!");
        setGameElements();
    }

    if (computer.score === 10) {
    	gameState = 'ended';
        window.alert('The winner is ' + computer.name + "!");
        setGameElements();
    }
}

function checkRoundWinner(playerPick, computerPick) {
  	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  	var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = 'Victory!';
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = 'Victory';
        computer.score++;
    }

    setGamePoints();
    checkWinner();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}

