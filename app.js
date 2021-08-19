// connecting html to js
const display = document.querySelector('.message'); //will show the message whose turn is and who will win/lose
let board = ["", "", "", "", "", "", "", "", ""]; // array of the board to pick the index for clicks

let playGame = true; // this is needed for pause if game ended //if game is still active
let currentPlayer = "X"; // player X will start the game

document.querySelectorAll('.block').forEach((block, index) => block.addEventListener('click', () => blockPlayed(block,index)));
document.querySelector('.restart').addEventListener('click', restart);

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

function blockPlayed(clickedBlock, clickedBlockIndex) {   
  if (playGame) {                                       //if the game still active, you can put "" is 
    console.log(clickedBlock, clickedBlockIndex)
  board[clickedBlockIndex] = currentPlayer;
  clickedBlock.innerHTML = currentPlayer;
  results()
  changePlayer()
  }
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  display.innerHTML = `It's ${currentPlayer}'s turn`;
}

function results() {
  let winner = false;
  for (let i = 0; i <= 7; i++) {
    const win = whoWin[i];
    let a = board[win[0]];
    let b = board[win[1]];
    let c = board[win[2]];

    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      winner = true;
      break
    }
  }

  if (winner) {
    console.log(currentPlayer)
    display.innerHTML = `Player ${currentPlayer} has won!`;
    playGame = false;
    return;
  }

  let tie = !board.includes("");
  if (tie) {
    display.innerHTML = `It is a tie!`;
    playGame = false;
    return;
  }

}



function restart() {
  playGame = true;
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  display.innerHTML = `It's ${currentPlayer}'s turn`;
  document.querySelectorAll('.block').forEach(block => block.innerHTML = "");
}




// const board = [
//   ["","",""],
//   ["","",""],
//   ["","",""]
// ]

// function equals3(a,b,c){
//   return (a==b && b==c && a != "");
// }
//     function winner(){
//     let winner = null;
// //rows
//     for(let i = 0; i < 3; i++) {
//         if(equals3(board[i][0],board[i][1],board[i][2])) {
//            winner = board[i][0];     
//         }
//     }
//     //colums
//     for(let i = 0; i < 3; i++) {
//         if(equals3(board[0][i],board[0][i],board[0][i])) {
//            winner = board[0][i];     
//         }
//     }
//     //dioganals
//         if(equals3(board[0][0],board[1][1],board[2][2])) {
//            winner = board[0][0];   //??  
//         }

//         if(equals3(board[0][2],board[1][1],board[2][0])) {
//             winner = board[2][0];  // ??   
//         }
//     if (winner == null) {
//         return "It is a tie";
//       } 
//       else{
//           return winner
//       } 
// }






