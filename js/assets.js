export class Assets {
  changeStatus() {
    const winnerBoard = document.querySelector('.winner-board');
    if (winnerBoard.dataset.status === 'true') {
      winnerBoard.dataset.status = 'false';
    } else {
      winnerBoard.dataset.status = 'true';
    }
  }

  changeSubtitle(condition, winnerPlayer) {
    const resetButton = document.querySelector('#reset-button');
    const winner = document.querySelector('#winner');

    if (condition[0].score === 3 || condition[1].score === 3) {
      resetButton.textContent = 'New Game';
      winner.textContent = winnerPlayer;
    } else {
      resetButton.textContent = 'Next Round';
      winner.textContent = winnerPlayer;
    }
  }
}
