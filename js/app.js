import { Players } from './players.js';
import { Symbols } from './symbol.js';

class Game {
  static pattern = [
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

  static resetBoard = {};
  static winningPlayer = null; // null in first round
  static round = 0;
  static resetScore = 0;

  constructor() {
    this.players = this.initializePlayers();
    this.initialize();

    this.playersTurn = ['X', 'O'];
    this.currentPlayer = this.playersTurn[0];

    this.gameBoard = {};
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
    console.log(this.players);
    const bottomSection = document.querySelector('.bottom-section');
    const board = bottomSection.querySelector('.board');

    board.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      const cellNumber = e.target.dataset.cell;

      this.playerMove(cell, cellNumber);
      this.checkWinner();
    });
  }

  symbolHelper() {
    let symbolChoice;
    if (this.currentPlayer === 'X') {
      symbolChoice = Symbols.createCross();
    } else {
      symbolChoice = Symbols.createCircle();
    }

    return symbolChoice;
  }

  playerMove(cell, cellNumber) {
    if (!cell) return;

    if (cell.dataset.move === 'true') {
      // TODO: return error
      // invoke animation I guess???
      console.log('Cell already has content');
      return;
    } else {
      cell.dataset.move = 'true';
      this.gameBoard[cellNumber] = this.currentPlayer;
      let symbolChoice = this.symbolHelper();
      cell.appendChild(symbolChoice);

      this.turn();
    }
  }

  turn() {
    if (this.currentPlayer === this.playersTurn[0]) {
      this.currentPlayer = this.playersTurn[1];
    } else {
      this.currentPlayer = this.playersTurn[0];
    }
  }

  // TODO: checkWinner()
  checkWinner() {
    for (let condition of Game.pattern) {
      if (
        this.gameBoard[condition[0]] &&
        this.gameBoard[condition[0]] === this.gameBoard[condition[1]] &&
        this.gameBoard[condition[0]] === this.gameBoard[condition[2]]
      ) {
        // TODO: declare winner for that round and reset game
        // TODO: Pop up winner and reset button
        const winnerPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        console.log(`The Winner is ${winnerPlayer}`);
        return;
      }
    }
  }

  // TODO: Reset() game
  resetGame() {
    // resets the game
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});
