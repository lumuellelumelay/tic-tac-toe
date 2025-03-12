import { Players } from './players.js';
import { Symbols } from './symbol.js';
import { Assets } from './assets.js';

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

  static resetScore = 0;

  constructor() {
    this.players = this.initializePlayers();
    this.initialize();

    this.playersTurn = ['X', 'O'];
    this.currentPlayer = this.playersTurn[0];

    this.gameBoard = {};
    this.assets = new Assets();
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

    return players;
  }

  initialize() {
    const bottomSection = document.querySelector('.bottom-section');
    const board = bottomSection.querySelector('.board');

    board.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      const cellNumber = e.target.dataset.cell;

      this.playerMove(cell, cellNumber);
      this.checkWinner();
    });

    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', (e) => {
      e.stopPropagation();
      if (
        this.players.getPlayers()[0].score === 3 ||
        this.players.getPlayers()[1].score === 3
      ) {
        this.resetGame();
      } else {
        this.nextRound();
      }
      this.assets.changeStatus();
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

      this.turnMove();
    }
  }

  turnMove() {
    if (this.currentPlayer === this.playersTurn[0]) {
      this.currentPlayer = this.playersTurn[1];
    } else {
      this.currentPlayer = this.playersTurn[0];
    }
  }

  getCurrentPlayer(winnerPlayer) {
    let player;
    if (winnerPlayer === 'X') {
      player = this.players.getPlayers()[0];
      player.score += 1;
      document.querySelector('#player-one-score').innerHTML = player.score;
    } else {
      player = this.players.getPlayers()[1];
      player.score += 1;
      document.querySelector('#player-two-score').innerHTML = player.score;
    }

    return player;
  }

  checkWinner() {
    for (let condition of Game.pattern) {
      if (
        this.gameBoard[condition[0]] &&
        this.gameBoard[condition[0]] === this.gameBoard[condition[1]] &&
        this.gameBoard[condition[0]] === this.gameBoard[condition[2]]
      ) {
        const winnerPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        const currentPlayer = this.getCurrentPlayer(winnerPlayer);

        this.assets.changeSubtitle(
          this.players.getPlayers(),
          currentPlayer.playerName
        );
        this.assets.changeStatus();
        return;
      }
    }
    const checkCells = Array.from(document.querySelectorAll('.cell')).every(
      (cell) => cell.dataset.move === 'true'
    );

    if (checkCells) {
      this.assets.changeSubtitle(this.players.getPlayers(), 'Draw Round');
      this.assets.changeStatus();
    }
  }

  resetBoard() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach((cell) => {
      cell.dataset.move = 'false';
      while (cell.firstChild) {
        cell.removeChild(cell.firstChild);
      }
    });
  }

  nextRound() {
    this.gameBoard = {};
    this.resetBoard();
  }

  resetGame() {
    this.gameBoard = {};
    this.players.getPlayers().forEach((player) => {
      player.score = Game.resetScore;
      document.querySelector('#player-one-score').innerHTML = player.score;
      document.querySelector('#player-two-score').innerHTML = player.score;
    });
    this.resetBoard();
    this.currentPlayer = this.playersTurn[0];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});
