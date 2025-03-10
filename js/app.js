import { players } from './players.js';

class game {
  constructor() {
    this.players = this.initializePlayers();
    this.winnerPatter = this.pattern();
    this.playersTurn = ['X', 'O'];
    this.currentPlayer = this.playersTurn[0];
    this.gameBoard = {};
    this.initialize();
  }

  initializePlayers() {
    // code here
  }

  initialize() {
    const bottomSection = document.querySelector('.bottom-section');
    const board = bottomSection.querySelector('.board');

    board.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      const cellNumber = e.target.dataset.cell;

      this.playerMove(cell, cellNumber);
      this.turn();
    });
  }

  playerMove(cell, cellNumber) {
    if (cell.dataset.move === 'true') {
      // TODO: return error
      return;
    } else {
      cell.dataset.move = 'true';
      this.gameBoard[cellNumber] = this.currentPlayer;
      // TODO: place player move
    }
  }

  turn() {
    if (this.currentPlayer === this.playersTurn[0]) {
      this.currentPlayer = this.playersTurn[1];
    } else {
      this.currentPlayer = this.playersTurn[0];
    }
  }

  pattern() {
    return [
      //   Rows
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],

      //   Columns
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['3', '6', '9'],

      //   Diagonals
      ['1', '5', '9'],
      ['3', '5', '7'],
    ];
  }

  // TODO: checkWinner()
}
