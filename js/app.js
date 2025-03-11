import { Players } from './players.js';

class Game {
  constructor() {
    this.players = this.initializePlayers();
    this.winnerPatter = this.pattern();
    this.playersTurn = ['X', 'O'];
    this.currentPlayer = this.playersTurn[0];
    this.gameBoard = {};
    this.initialize();
  }

  initializePlayers() {
    const playerOne = document.querySelector('#player-one');
    const playerTwo = document.querySelector('#player-two');
    const playerOneScore = document.querySelector('#player-one-score');
    const playerTwoScore = document.querySelector('#player-two-score');

    const players = new Players();
    players.creatingPlayers('Player 1');
    players.creatingPlayers('Player 2');

    playerOne.textContent = players.getPlayers()[0].playerName;
    playerTwo.textContent = players.getPlayers()[1].playerName;

    playerOneScore.textContent = players.getPlayers()[0].score;
    playerTwoScore.textContent = players.getPlayers()[1].score;
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
      // invoke animation I guess???
      console.log('Cell already has content');
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

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});
