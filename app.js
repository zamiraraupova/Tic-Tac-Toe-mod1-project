// const board = document.querySelector(".play-area");
// const block = document.querySelectorAll(".block")
// const display = document.querySeliector(".status")


let playBoard = [
    ["", "", ""],   //[0][0]
    ["", "", ""],   //[1][1] 
    ["", "", ""]    //[2][2]
]


const currentPlayer = "X";
const computer = "O";

// 1 2 3
// 4 5 6 
// 7 8 9

const whoWin = [         
    [0,1,3],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]

function play(clickBlock, clickBlockIndex) {
    playBoard[clickBlockIndex] = currentPlayer;
    clickBlock.innerHTML = currentPlayer;
}

function winner() {
    let roundWon = false;
    for (let i = 0; i < 8; i++) {
        const winCond = whoWin[i];
        let a = gameState[winCond[0]];
        let b = gameState[winCond[1]];
        let c = gameState[winCond[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        display.innerHTML = winningMessage();
        gameActive = false;
        return;
    }






//     function winner(){
//     let winner = null;
// //rows
//     for(let i = 0; i < 3; i++) {
//         if(playBoard[i][0] == playBoard[i][1] == playBoard[i][2]) {
//            winner = playBoard[i][0];     
//         }
//     }
//     //colums
//     for(let i = 0; i < 3; i++) {
//         if(playBoard[0][i] == playBoard[0][i] == playBoard[0][i]) {
//            winner = playBoard[0][i];     
//         }
//     }
//     //dioganals
//         if(playBoard[0][0] == playBoard[1][1] == playBoard[2][2]) {
//            winner = playBoard[0][0];   //??  
//         }
        
//         if(playBoard[0][2] == playBoard[1][1] == playBoard[2][0]) {
//             winner = playBoard[2][0];  // ??   
//         }
//     if (winner == null) {
//         console.log("It is a tie");
//       } 
//       else{
//           console.log(winner)
//       } 
// }

// let currentPlayer;
// function play() {
//     if (random(1) < 0.5) {
//         currentPlayer = player;
//     }
//     else{
//         currentPlayer = computer
//     }
// }

// for (let i = 0; i < 3; i++){
//     if ()
// }







// // reset();

// // function reset() {
// //     document.querySelector(".endGame").style.display = "none"
// //     playBoard = Array.from(Array(9).keys());
// //     console.log(playBoard)
// // }














