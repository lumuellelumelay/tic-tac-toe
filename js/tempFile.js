const choices = ['X', 'O'];
let turn = choices[0];
let gameBoard = {};

const bottomSection = document.querySelector('.bottom-section');
const board = bottomSection.querySelector('.board');

board.addEventListener('click', (e) => {
  const cell = e.target.closest('.cell');
  const cellNumber = e.target.dataset.cell;

  if (cell.textContent) {
    console.log('Cell already has content');
    return;
  }

  cell.textContent = turn;

  gameBoard[cellNumber] = turn; // {cellNumber : turn}

  if (turn === choices[0]) {
    turn = choices[1];
  } else {
    turn = choices[0];
  }

  checkWinner();
});

// function checkWinner() {
//   const winningBoard = [
//     //   Rows
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '9'],

//     //   Columns
//     ['1', '4', '7'],
//     ['2', '5', '8'],
//     ['3', '6', '9'],

//     //   Diagonals
//     ['1', '5', '9'],
//     ['3', '5', '7'],
//   ];

//   for (let condition of winningBoard) {
//     console.log(
//       gameBoard[condition[0]] &&
//         gameBoard[condition[0]] === gameBoard[condition[1]] &&
//         gameBoard[condition[0]] === gameBoard[condition[2]]
//     );
//   }
// }
