// connecting html to js
const display = document.querySelector('.message'); //will show the message whose turn is and who will win/lose
let board = ["", "", "", "", "", "", "", "", ""]; // //the form of empty strings in an array will allow to easily track played cells and validate the game state later on

let playGame = true; // this is needed for pause if game ended //if game is still active
let currentPlayer = "X"; // player X will start the game and to know whose turn is

const startSound = new Audio();
startSound.src = "sounds/startgame.wav"

const clickSound = new Audio("sounds/clickX.wav");
const winSound = new Audio("sounds/win.wav");
const clickSound2 = new Audio("sounds/clickO.wav")
const tieSound = new Audio("sounds/tie.wav")

//forEach - allows to grab all the blocks and be able to click on each one and it sends it to rhe blockPlayed function
document.querySelectorAll('.block').forEach((block, index) => block.addEventListener('click', () => blockPlayed(block, index)));
// restart button
document.querySelector('.restart').addEventListener('click', restart);
//winning conditions in the array of the arrays
const whoWin = [
  [0, 1, 2],        // [1 2 3]
  [3, 4, 5],        // [4 5 6] 
  [6, 7, 8],        // [7 8 9] 
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//function allows to play the blocks 
function blockPlayed(clickedBlock, clickedBlockIndex) {
  if (playGame && isValidAction(clickedBlock)) {     //if the game still active, you can put value into the block
    console.log(clickedBlock, clickedBlockIndex)
    board[clickedBlockIndex] = currentPlayer;        // checks the board and gets the index of the array
    clickedBlock.innerHTML = currentPlayer;          // shows the current player X or O
    results()                                        // actual game function
    if (playGame) {                                   // if the game is active it changes the player
      changePlayer()
    }
  }
}
const isValidAction = (block) => {
  if (block.innerText === 'X' || block.innerText === 'O') {
    return false;
  }
  return true;
};

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"; //if the current player O ... else X
  display.innerHTML = `It's ${currentPlayer}'s turn`;
  if (currentPlayer == "X") {
    clickSound.play()
  } else {
    clickSound2.play()
  }
}

// the main function. I used the tutorial (https://www.youtube.com/watch?v=B3pmT7Cpi24)
function results() {
  let winner = false;
  for (let i = 0; i <= 7; i++) {
    const win = whoWin[i];
    let a = board[win[0]];
    let b = board[win[1]];
    let c = board[win[2]];

    if (a === '' || b === '' || c === '') {    //if winning coond empty -> game is active
      continue;
    }
    if (a === b && b === c) {    //if winning coond met -> there is a winner and the game is stoped
      winner = true;
      break
    }
  }
  if (winner) {
    console.log(currentPlayer)
    winSound.play();
    display.innerHTML = `Player ${currentPlayer} has won!`;
    playGame = false;
    return;
  }
  let tie = !board.includes(""); // if there is no empty spases and it is not a win, then it is a tie
  if (tie) {
    tieSound.play();
    display.innerHTML = `It is a tie!`;
    playGame = false;
    return;
  }

}
// function to restart the game; sets up the game active, player X, and an empty board 
function restart() {
  playGame = true;
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  display.innerHTML = `It's ${currentPlayer}'s turn`;
  document.querySelectorAll('.block').forEach(block => block.innerHTML = "");
}



