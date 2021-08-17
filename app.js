// connecting html to js
const display = document.querySelector('.message');


let currentPlayer = "X"; // player X will start the game
let board = ["", "", "", "", "", "", "", "", ""]; // array of the board to pick the index for clicks

//display messages of who will win/tie/turn
const winMsg = () => `Player ${currentPlayer} has won!`;
const tieMsg = () => `It is a tie!`;
const whoseTurn = () => `It's ${currentPlayer}'s turn`;

display.innerHTML = whoseTurn();

const whoWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function blockClicked(blck, blckIndex) {  //showing if the block was clicked and played by the current player
    board[blckIndex] = currentPlayer;   // block index from 0 to 8
    blck.innerHTML = currentPlayer;
}





function changePlayer() {              // strictly eaqul to X 
     if(currentPlayer === "X") {       // if equal to O / else X
        currentPlayer === "O"
    } else {
        currentPlayer === "X"
    }  
    display.innerHTML = whoseTurn();
}
console.log(changePlayer)










// function equals3(a,b,c){
//   return (a==b && b==c && a != "");
// }
//     function winner(){
//     let winner = null;
// //rows
//     for(let i = 0; i < 3; i++) {
//         if(equals3(playBoard[i][0],playBoard[i][1],playBoard[i][2])) {
//            winner = playBoard[i][0];     
//         }
//     }
//     //colums
//     for(let i = 0; i < 3; i++) {
//         if(equals3(playBoard[0][i],playBoard[0][i],playBoard[0][i])) {
//            winner = playBoard[0][i];     
//         }
//     }
//     //dioganals
//         if(equals3(playBoard[0][0],playBoard[1][1],playBoard[2][2])) {
//            winner = playBoard[0][0];   //??  
//         }
        
//         if(equals3(playBoard[0][2],playBoard[1][1],playBoard[2][0])) {
//             winner = playBoard[2][0];  // ??   
//         }
//     if (winner == null) {
//         return "It is a tie";
//       } 
//       else{
//           return winner
//       } 
// }






