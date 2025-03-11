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

// Cross svg
{
  /* <svg 
width="100" 
height="100" 
viewBox="0 0 100 100" 
fill="none" 
xmlns="http://www.w3.org/2000/svg"
>
<g id="frame">
  <g id="cross">
    <path 
      id="Line 5" 
      d="M32 32L44.0208 44.0208" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Line 13" 
      d="M17 17L29.0208 29.0208" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Line 10" 
      d="M56 56L68.0208 68.0208" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Line 11" 
      d="M71 71L83.0208 83.0208" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Line 3" 
      d="M32 68.0209L44.0208 56.0001" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Line 14" 
      d="M17 83.0208L29.0208 70.9999" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Line 7" 
      d="M56 44.0209L68.0208 32.0001" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Line 12" 
      d="M71 29.0209L83.0208 17.0001" 
      stroke="black" 
      stroke-width="3" 
      stroke-linecap="round"
    />
    <path 
      id="Subtract" 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M50 55C52.7614 55 55 52.7614 55 50C55 47.2386 52.7614 45 50 45C47.2386 45 45 47.2386 45 50C45 52.7614 47.2386 55 50 55ZM50 53C51.6569 53 53 51.6569 53 50C53 48.3431 51.6569 47 50 47C48.3431 47 47 48.3431 47 50C47 51.6569 48.3431 53 50 53Z" 
      fill="black"
    />
    <circle 
      id="Ellipse 18" 
      cx="50" 
      cy="50" 
      r="2" 
      fill="black"
    />
  </g>
</g>
</svg> */
}

// Cricle svg
{
  /* <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="frame">
<path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M78.1428 74.0215C83.6654 67.5576 87 59.1682 87 50C87 40.8371 83.6693 32.4521 78.1525 25.9897L80.2799 23.8623C86.3367 30.8727 90 40.0085 90 50C90 59.9968 86.3328 69.1371 80.2702 76.1489L78.1428 74.0215ZM78.234 21.6655C70.9994 14.4565 61.0201 10 50 10C40.0032 10 30.8629 13.6672 23.8511 19.7298L25.9785 21.8572C32.4424 16.3346 40.8318 13 50 13C60.1917 13 69.421 17.1207 76.1127 23.7869L78.234 21.6655ZM76.1022 76.2235C69.4114 82.8836 60.1864 87 50 87C40.8371 87 32.452 83.6692 25.9897 78.1524L23.8622 80.2798C30.8726 86.3367 40.0085 90 50 90C61.0148 90 70.9898 85.5478 78.2235 78.3449L76.1022 76.2235ZM13 50C13 60.1917 17.1207 69.4209 23.7868 76.1126L21.6655 78.2339C14.4564 70.9994 10 61.0201 10 50C10 38.9852 14.4522 29.0102 21.6551 21.7765L23.7765 23.8978C17.1164 30.5886 13 39.8136 13 50Z" fill="black"/>
</g>
</svg> */
}
